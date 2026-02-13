import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertOrderSchema, type InsertOrder } from "@shared/schema";
import { useCreateOrder } from "@/hooks/use-orders";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Truck, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

export function OrderForm() {
  const { toast } = useToast();
  const mutation = useCreateOrder();
  const [successOpen, setSuccessOpen] = useState(false);

  return (
    <section id="order-form" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-yellow-500/10">
          <div className="bg-black p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 gold-gradient-bg opacity-10"></div>
            <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-2 font-heading">
              Escolha Sua Oferta
            </h2>
            <p className="relative z-10 text-[#D4AF37] font-semibold text-lg flex items-center justify-center gap-2 uppercase tracking-wide">
              👉 Pagamento na Entrega
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div
                className="relative p-8 rounded-2xl border-2 border-[#D4AF37] bg-yellow-50 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">1 unidade</span>
                  <span className="text-sm text-green-600 font-bold uppercase tracking-tighter">Oferta promocional especial! Aproveite agora!</span>
                </div>
                <div className="flex flex-col items-center md:items-end">
                  <span className="text-sm text-gray-400 line-through">de R$ 169,99</span>
                  <span className="text-3xl font-black text-[#D4AF37] font-heading">
                    por R$ 149,99
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="https://entrega.logzz.com.br/pay/mem0gg6x4/progcreme150" 
                className="w-full h-16 gold-gradient-bg hover:opacity-90 text-black shadow-lg shadow-yellow-500/30 transition-all transform active:scale-95 flex items-center justify-center rounded-md overflow-hidden"
              >
                <div className="flex items-center gap-2">
                  <Truck className="w-6 h-6 shrink-0" />
                  <span className="text-base font-bold uppercase tracking-wide truncate">AGENDAR PEDIDO (PAGAR NA ENTREGA)</span>
                </div>
              </a>
              
              <div className="mt-8 space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    O cliente só paga quando receber o produto
                  </div>
                  <div className="hidden sm:block text-gray-300">|</div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-green-600" />
                    Sem pagamento antecipado
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600 text-sm font-medium">
                   <Truck className="w-4 h-4 text-[#D4AF37]" />
                   Entrega para todo o Brasil
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-center">Pedido Confirmado!</DialogTitle>
            <DialogDescription className="text-center pt-2">
              Recebemos seu pedido com sucesso. Em breve nossa equipe entrará em contato pelo WhatsApp para confirmar o envio.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 bg-gray-50 rounded-lg mt-4 text-sm text-gray-600">
             Lembre-se: Você só pagará quando receber o produto em mãos.
          </div>
          <DialogFooter className="sm:justify-center">
            <Button 
              type="button" 
              className="w-full sm:w-auto"
              onClick={() => setSuccessOpen(false)}
            >
              Entendido
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
