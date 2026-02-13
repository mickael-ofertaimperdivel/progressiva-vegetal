import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function ProductShowcase() {
  const benefits = [
    "Liso Perfeito e Natural",
    "Fórmula Vegana Sem Formol",
    "Brilho Espelhado Instantâneo",
    "Compatível com Todas as Químicas",
    "Fácil Aplicação em Casa",
    "Durabilidade de até 3 Meses"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full filter blur-3xl transform scale-90 translate-y-4"></div>
            <img 
              src="/images/product.webp" 
              alt="Progressiva Vegetal Premium Bottle" 
              className="relative z-10 w-full max-w-[400px] mx-auto drop-shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-500"
            />
            
            {/* Floating Badge */}
            <div className="absolute top-10 right-10 z-20 bg-black text-white p-4 rounded-full shadow-xl border-2 border-[#D4AF37] w-24 h-24 flex items-center justify-center text-center leading-tight font-bold transform rotate-12">
              <span className="text-xs">RESULTADO DE SALÃO</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight font-heading">
              O Segredo do <span className="gold-gradient-text">Liso Perfeito</span> Sem Sair de Casa
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Descubra a tecnologia revolucionária da Progressiva Vegetal. Uma fórmula exclusiva que alisa, trata e devolve o brilho aos seus fios sem agredir sua saúde.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a 
                href="#order-form" 
                className="inline-block w-full sm:w-auto text-center bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg shadow-black/20"
              >
                QUERO MEU CABELO LINDO
              </a>
              <p className="text-center sm:text-left mt-3 text-sm text-gray-500">
                ⭐ Mais de 10.000 clientes satisfeitas
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
