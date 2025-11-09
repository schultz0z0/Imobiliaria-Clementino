import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, TrendingUp, Users, Building2 } from "lucide-react";

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}

function StatItem({ icon: Icon, value, label, suffix = "", delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const labelSlug = label.toLowerCase().replace(/\s+/g, '-');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
      data-testid={`stat-${labelSlug}`}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
        <Icon className="h-8 w-8 text-accent" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid={`stat-value-${labelSlug}`}>
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground font-medium" data-testid={`stat-label-${labelSlug}`}>
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Números Que Falam Por Si
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa trajetória é marcada pela confiança e satisfação de milhares de clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem
            icon={Building2}
            value={1500}
            label="Imóveis Negociados"
            suffix="+"
            delay={0}
          />
          <StatItem
            icon={Users}
            value={3200}
            label="Clientes Satisfeitos"
            suffix="+"
            delay={0.1}
          />
          <StatItem
            icon={Award}
            value={98}
            label="Taxa de Satisfação"
            suffix="%"
            delay={0.2}
          />
          <StatItem
            icon={TrendingUp}
            value={15}
            label="Anos de Mercado"
            suffix="+"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
