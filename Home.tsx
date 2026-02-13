import { motion } from "framer-motion";
import { TrustBadge } from "@/components/TrustBadge";
import { ProductShowcase } from "@/components/ProductShowcase";
import { OrderForm } from "@/components/OrderForm";
import { ArrowDown, Star, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-[#D4AF37] selection:text-white">
      
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold font-heading">
            Progressiva<span className="text-[#D4AF37]">Vegetal</span>
          </div>
          <a 
            href="#order-form" 
            className="hidden md:block bg-black text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors"
          >
            PEDIR AGORA
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black text-white">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620331317312-74b88bf40907?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold mb-4 font-heading leading-tight text-red-600 uppercase tracking-tighter">
              PAGAMENTO NA <br/>
              ENTREGA
            </h1>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-heading gold-gradient-text uppercase">
              Progressiva Vegetal
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Sem riscos. Sem cartão de crédito. Você pede agora e só paga quando o produto chegar na sua casa.
            </p>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://entrega.logzz.com.br/pay/mem0gg6x4/progcreme150"
                className="inline-flex flex-col items-center justify-center bg-[#D4AF37] text-black w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all active:scale-95"
              >
                <span>COMPRAR AGORA – PAGAR NA ENTREGA</span>
                <span className="text-xs opacity-80 font-normal mt-1 uppercase">Pagar só na entrega</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-[#D4AF37]">
          <ArrowDown className="w-8 h-8" />
        </div>
      </header>

      {/* Trust Badges */}
      <TrustBadge />

      {/* Product Section */}
      <ProductShowcase />

      {/* Client Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 font-heading">
            O que nossas <span className="text-[#D4AF37]">clientes dizem</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col"
            >
              <img src="/images/before-after-1.jpg" alt="Depoimento 1" className="w-full aspect-square object-cover" />
              <div className="p-6 bg-gray-50 flex-1">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />)}
                </div>
                <p className="text-gray-700 italic font-medium">"Resultado incrível, cabelo 100% liso e saudável."</p>
                <p className="mt-2 text-sm text-gray-500 font-bold">— Mariana S.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col"
            >
              <img src="/images/before-after-2.jpg" alt="Depoimento 2" className="w-full aspect-square object-cover" />
              <div className="p-6 bg-gray-50 flex-1">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />)}
                </div>
                <p className="text-gray-700 italic font-medium">"Nunca tive um resultado tão perfeito. Brilho maravilhoso!"</p>
                <p className="mt-2 text-sm text-gray-500 font-bold">— Beatriz L.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col"
            >
              <img src="/images/before-after-3.jpg" alt="Depoimento 3" className="w-full aspect-square object-cover" />
              <div className="p-6 bg-gray-50 flex-1">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />)}
                </div>
                <p className="text-gray-700 italic font-medium">"Praticidade total. Fiz em casa e ficou igual ao salão!"</p>
                <p className="mt-2 text-sm text-gray-500 font-bold">— Juliana M.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section: Pagamento na Entrega */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <Lock className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Sua Segurança é Nossa Prioridade</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">1</span>
                Sem Pagamento Online
              </h3>
              <p className="text-gray-600">Você NÃO paga nada agora. Não pedimos dados de cartão de crédito no site. Sua compra é 100% sem riscos.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
                Pague ao Receber
              </h3>
              <p className="text-gray-600">O pagamento é feito EXCLUSIVAMENTE no momento da entrega. O entregador leva o produto e você paga para ele.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">3</span>
                Entrega em Todo o Brasil
              </h3>
              <p className="text-gray-600">Enviamos para todas as regiões do país com segurança e rapidez. Você acompanha todo o processo.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">4</span>
                Tranquilidade Total
              </h3>
              <p className="text-gray-600">Sinta-se totalmente segura comprando com quem confia no próprio produto. Só pague quando estiver com ele em mãos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Mid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-12 font-heading">
            Por que milhares de mulheres <br/>escolhem a <span className="text-[#D4AF37]">Progressiva Vegetal?</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-[#D4AF37] transform hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                {/* Salon hair result image */}
                <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop" alt="Cabelo liso" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold mb-3">Liso Natural</h4>
              <p className="text-gray-600">Esqueça aquele aspecto de cabelo esticado artificial. Tenha balanço e naturalidade.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-[#D4AF37] transform hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                {/* Healthy hair texture image */}
                <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&auto=format&fit=crop" alt="Brilho intenso" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold mb-3">Sem Danos</h4>
              <p className="text-gray-600">Nossa fórmula vegetal nutre enquanto alisa, diferente das progressivas com formol.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-[#D4AF37] transform hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                {/* Happy woman image */}
                <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&auto=format&fit=crop" alt="Mulher feliz" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold mb-3">Economia Real</h4>
              <p className="text-gray-600">Faça em casa com resultado de salão e economize centenas de reais todos os meses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <OrderForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          
          {/* Lower Content: Modo de Uso */}
          <div className="mb-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-10 font-heading gold-gradient-text uppercase tracking-widest">
              Passo a Passo Para o Liso Perfeito
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-2 rounded-2xl shadow-2xl border border-white/10 group cursor-zoom-in overflow-hidden">
                <motion.img 
                  src="/images/modo-de-usar.jpg" 
                  alt="Modo de Uso" 
                  className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-150"
                  style={{ transformOrigin: "center" }}
                  whileTap={{ scale: 2 }}
                />
              </div>
              <div className="flex flex-col justify-center text-left space-y-6 p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold shrink-0">1</div>
                  <p className="text-gray-300">Aplicação fácil e prática direto no conforto da sua casa.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold shrink-0">2</div>
                  <p className="text-gray-300">Fórmula 100% vegetal sem formol, garantindo saúde aos fios.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold shrink-0">3</div>
                  <p className="text-gray-300">Resultado profissional com brilho intenso e balanço natural.</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-500 text-xs flex items-center justify-center gap-2">
               <span className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
               Passe o mouse ou toque na imagem para ver as instruções detalhadas
            </p>
          </div>

          <div className="text-2xl font-bold font-heading mb-6">
            Progressiva<span className="text-[#D4AF37]">Vegetal</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            A revolução do alisamento natural. Entregamos beleza e autoestima para mulheres de todo o Brasil.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400 uppercase tracking-tighter font-bold">
            <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</span>
            <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
            <span className="hover:text-white cursor-pointer transition-colors">Contato</span>
          </div>
          <p className="text-gray-600 text-xs font-medium">
            © 2026 Progressiva Vegetal. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
