import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, LucideIcon } from "lucide-react";

interface ServiceDetailSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  imageSrc: string;
  reverse?: boolean;
  onOpenModal: () => void;
}

export default function ServiceDetailSection({
  icon: Icon,
  title,
  description,
  details,
  imageSrc,
  reverse = false,
  onOpenModal,
}: ServiceDetailSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
            setScrollY(scrollProgress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: reverse ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={reverse ? "md:order-2" : ""}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-4">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3 mb-8">
              {details.map((detail, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground">{detail}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                onClick={onOpenModal}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold group shadow-sm border-0"
                data-testid={`service-button-${title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                Contratar Serviço
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`relative ${reverse ? "md:order-1" : ""}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="aspect-video bg-cover bg-center transition-transform duration-300"
                style={{
                  backgroundImage: `url(${imageSrc})`,
                  transform: `translateY(${scrollY * 20}px)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
