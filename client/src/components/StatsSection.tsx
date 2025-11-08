import { Building2, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "2.500+",
    label: "Imóveis Vendidos",
  },
  {
    icon: Users,
    value: "15.000+",
    label: "Clientes Satisfeitos",
  },
  {
    icon: Award,
    value: "15 Anos",
    label: "de Experiência",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Taxa de Sucesso",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white/10 mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
