import { ShieldCheck, Truck, ThumbsUp, Lock } from "lucide-react";
import { motion } from "framer-motion";

export function TrustBadge() {
  const items = [
    { icon: Truck, text: "Entrega em Todo Brasil" },
    { icon: ShieldCheck, text: "Pagamento na Entrega" },
    { icon: Lock, text: "Compra 100% Segura" },
    { icon: ThumbsUp, text: "Satisfação Garantida" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-yellow-500/10 bg-yellow-50/30">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex flex-col items-center text-center gap-2"
        >
          <div className="p-3 rounded-full bg-white shadow-md border border-yellow-100">
            <item.icon className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <span className="text-sm font-semibold text-gray-700 max-w-[140px]">
            {item.text}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
