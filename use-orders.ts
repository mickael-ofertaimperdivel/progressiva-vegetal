import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertOrder } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateOrder() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertOrder) => {
      const res = await fetch(api.orders.create.path, {
        method: api.orders.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Erro ao processar pedido");
      }

      return api.orders.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      // We don't really have a list to invalidate for a public landing page, 
      // but standard practice is included.
    },
    onError: (error: Error) => {
      toast({
        title: "Erro no pedido",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
