import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import ServiceDetailSection from "@/components/ServiceDetailSection";
import StatsSection from "@/components/StatsSection";
import ServiceModal from "@/components/ServiceModal";
import { ShoppingCart, Building2, FileCheck, TrendingUp, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

import saleImage from "@assets/generated_images/Real_estate_sale_transaction_1e768b98.png";
import managementImage from "@assets/generated_images/Property_management_building_exterior_d9a1d36f.png";
import legalizationImage from "@assets/generated_images/Property_legalization_legal_documents_1d2c0daa.png";
import appraisalImage from "@assets/generated_images/Property_appraisal_evaluation_scene_d93f85ef.png";
import consultingImage from "@assets/generated_images/Investment_consultation_meeting_scene_199544ca.png";
import securityImage from "@assets/generated_images/Real_estate_security_guarantee_c7398452.png";

const services = [
  {
    icon: ShoppingCart,
    title: "Compra e Venda",
    description: "Transformamos o processo de compra e venda em uma experiência tranquila e segura. Nossa equipe especializada cuida de cada detalhe, desde a avaliação inicial até a assinatura do contrato, garantindo que você tome as melhores decisões com total confiança.",
    details: [
      "Avaliação precisa de mercado com análise comparativa detalhada",
      "Captação e qualificação rigorosa de leads qualificados",
      "Visitas guiadas profissionais com apresentação premium",
      "Negociação estratégica para maximizar seu resultado",
      "Acompanhamento jurídico completo em todas as etapas",
      "Suporte dedicado até o pós-venda e além",
    ],
    imageSrc: saleImage,
  },
  {
    icon: Building2,
    title: "Administração de Imóveis",
    description: "Gerencie seu patrimônio com tranquilidade total. Nossa administração profissional cuida de cada aspecto da gestão do seu imóvel, permitindo que você aproveite os benefícios sem as preocupações do dia a dia.",
    details: [
      "Gestão completa de contratos e renovações automáticas",
      "Sistema eficiente de cobrança de aluguéis e taxas",
      "Manutenção preventiva e corretiva com equipe própria",
      "Vistoria técnica regular e documentada",
      "Relatórios mensais detalhados com transparência total",
      "Atendimento a inquilinos 24/7 via múltiplos canais",
    ],
    imageSrc: managementImage,
  },
  {
    icon: FileCheck,
    title: "Legalização",
    description: "Regularize seu imóvel com a expertise de quem entende profundamente a legislação imobiliária. Resolvemos questões documentais complexas com agilidade e segurança jurídica garantida.",
    details: [
      "Análise minuciosa de toda documentação existente",
      "Regularização de escrituras e certidões pendentes",
      "Obtenção de certidões e registros necessários",
      "Processos de usucapião e inventários especializados",
      "Desmembramento e unificação de terrenos",
      "Acompanhamento completo em cartórios e órgãos públicos",
    ],
    imageSrc: legalizationImage,
  },
  {
    icon: TrendingUp,
    title: "Avaliação Imobiliária",
    description: "Conheça o valor real do seu patrimônio com laudos técnicos elaborados por profissionais certificados. Nossa avaliação utiliza metodologia de mercado reconhecida e aprovada por instituições financeiras.",
    details: [
      "Inspeção técnica completa e presencial",
      "Análise comparativa de mercado atualizada",
      "Laudo fotográfico detalhado e profissional",
      "Relatório técnico oficial com validade jurídica",
      "Avaliação aceita para financiamento bancário",
      "Consultoria de valorização e melhorias sugeridas",
    ],
    imageSrc: appraisalImage,
  },
  {
    icon: Users,
    title: "Consultoria Imobiliária",
    description: "Maximize o retorno dos seus investimentos com estratégias personalizadas. Nossa consultoria especializada oferece insights valiosos baseados em análise de dados e experiência de mercado.",
    details: [
      "Análise de viabilidade técnica e financeira de projetos",
      "Planejamento estratégico de investimentos imobiliários",
      "Estudo aprofundado de rentabilidade e ROI",
      "Identificação de oportunidades exclusivas de mercado",
      "Gestão profissional de portfólio imobiliário",
      "Estratégias comprovadas de valorização patrimonial",
    ],
    imageSrc: consultingImage,
  },
  {
    icon: Shield,
    title: "Garantia e Segurança",
    description: "Proteja seu investimento com nossos serviços de segurança e garantia. Oferecemos soluções completas que eliminam riscos e proporcionam total tranquilidade em todas as suas transações imobiliárias.",
    details: [
      "Verificação rigorosa de toda documentação",
      "Análise de crédito completa e detalhada",
      "Seguro fiança e caução com as melhores condições",
      "Garantia total contra inadimplência",
      "Assessoria jurídica preventiva especializada",
      "Proteção avançada contra fraudes e golpes",
    ],
    imageSrc: securityImage,
  },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ServiceHeroSection />

        <StatsSection />

        {services.map((service, index) => (
          <ServiceDetailSection
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            details={service.details}
            imageSrc={service.imageSrc}
            reverse={index % 2 === 1}
            onOpenModal={() => handleOpenModal(service.title)}
          />
        ))}

        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Transformar Seus Objetivos em Realidade?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossa expertise pode
              fazer a diferença no seu sucesso imobiliário
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold group"
                asChild
              >
                <Link href="/contato">
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold"
                asChild
              >
                <Link href="/imoveis">Ver Imóveis Disponíveis</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ServiceModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceName={selectedService}
      />
    </div>
  );
}
