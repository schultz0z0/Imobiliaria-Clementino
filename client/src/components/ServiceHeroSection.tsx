import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/Premium_real_estate_office_hero_e4061649.png";

export default function ServiceHeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/75" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Soluções Completas para Seu{" "}
            <span className="text-accent">Sucesso Imobiliário</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl opacity-95 mb-8 leading-relaxed"
          >
            Mais de 15 anos de experiência transformando sonhos em realidade.
            Da compra à venda, da administração à legalização - estamos ao seu
            lado em cada etapa da jornada imobiliária.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3" data-testid="hero-stat-imoveis">
              <div className="text-3xl font-bold text-accent" data-testid="hero-stat-value-imoveis">1500+</div>
              <div className="text-sm opacity-90">Imóveis Negociados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3" data-testid="hero-stat-satisfacao">
              <div className="text-3xl font-bold text-accent" data-testid="hero-stat-value-satisfacao">98%</div>
              <div className="text-sm opacity-90">Satisfação</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3" data-testid="hero-stat-experiencia">
              <div className="text-3xl font-bold text-accent" data-testid="hero-stat-value-experiencia">15+</div>
              <div className="text-sm opacity-90">Anos de Experiência</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
