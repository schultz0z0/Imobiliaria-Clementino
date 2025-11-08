import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import officeImage from "@assets/generated_images/Office_team_environment_df9f6cfa.png";
import businessImage from "@assets/generated_images/Business_partnership_image_5c67f0cc.png";
import kitchenImage from "@assets/generated_images/Modern_kitchen_interior_69822e48.png";

//todo: remove mock functionality
const blogPosts = [
  {
    id: "1",
    image: officeImage,
    title: "Como Avaliar o Valor Real de um Imóvel em 2024",
    excerpt: "Descubra os principais fatores que influenciam o preço de imóveis no mercado atual e como fazer uma avaliação precisa.",
    category: "Dicas de Investimento",
    author: "João Silva",
    date: "15 Jan 2024",
    readTime: "5 min",
  },
  {
    id: "2",
    image: businessImage,
    title: "Financiamento Imobiliário: Guia Completo 2024",
    excerpt: "Tudo o que você precisa saber sobre financiamento imobiliário, taxas, documentação e aprovação de crédito.",
    category: "Financiamento",
    author: "Maria Santos",
    date: "12 Jan 2024",
    readTime: "8 min",
  },
  {
    id: "3",
    image: kitchenImage,
    title: "Tendências de Decoração para Imóveis Modernos",
    excerpt: "Conheça as principais tendências de design de interiores que valorizam seu imóvel e atraem compradores.",
    category: "Decoração",
    author: "Pedro Costa",
    date: "10 Jan 2024",
    readTime: "6 min",
  },
];

export default function LatestBlogPosts() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Últimas do Blog</h2>
            <p className="text-muted-foreground">Dicas e novidades do mercado imobiliário</p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="hidden md:flex" data-testid="button-view-blog">
              Ver Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog">
            <Button variant="outline" data-testid="button-view-blog-mobile">
              Ver Todos os Artigos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
