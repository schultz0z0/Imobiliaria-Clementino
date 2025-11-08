import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import officeImage from "@assets/generated_images/Office_team_environment_df9f6cfa.png";
import businessImage from "@assets/generated_images/Business_partnership_image_5c67f0cc.png";
import kitchenImage from "@assets/generated_images/Modern_kitchen_interior_69822e48.png";
import bedroomImage from "@assets/generated_images/Bedroom_interior_0e0d42e2.png";
import livingRoom from "@assets/generated_images/Living_room_interior_41e74a18.png";

//todo: remove mock functionality
const categories = [
  "Todos",
  "Dicas de Investimento",
  "Financiamento",
  "Decoração",
  "Mercado Imobiliário",
  "Legislação",
];

const mockPosts = [
  {
    id: "1",
    image: officeImage,
    title: "Como Avaliar o Valor Real de um Imóvel em 2024",
    excerpt: "Descubra os principais fatores que influenciam o preço de imóveis no mercado atual e como fazer uma avaliação precisa antes de comprar ou vender.",
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
  {
    id: "4",
    image: bedroomImage,
    title: "Documentação Necessária para Comprar um Imóvel",
    excerpt: "Checklist completo de todos os documentos essenciais para uma compra segura e sem surpresas.",
    category: "Legislação",
    author: "Ana Oliveira",
    date: "08 Jan 2024",
    readTime: "7 min",
  },
  {
    id: "5",
    image: livingRoom,
    title: "Mercado Imobiliário: Perspectivas para 2024",
    excerpt: "Análise detalhada das tendências, oportunidades e desafios do setor imobiliário brasileiro neste ano.",
    category: "Mercado Imobiliário",
    author: "Carlos Mendes",
    date: "05 Jan 2024",
    readTime: "10 min",
  },
  {
    id: "6",
    image: officeImage,
    title: "Como Investir em Imóveis para Aluguel",
    excerpt: "Estratégias comprovadas para escolher o imóvel certo e garantir rentabilidade no mercado de locação.",
    category: "Dicas de Investimento",
    author: "João Silva",
    date: "03 Jan 2024",
    readTime: "6 min",
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  //todo: remove mock functionality - replace with real filtering
  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Imobiliário</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Dicas, novidades e insights do mercado imobiliário
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 bg-white/95 text-foreground"
                  data-testid="input-search-blog"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover-elevate px-4 py-2"
                onClick={() => setSelectedCategory(category)}
                data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-muted-foreground">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>

              <div className="flex justify-center">
                <Button variant="outline" data-testid="button-load-more">
                  Carregar Mais Artigos
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Nenhum artigo encontrado</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Todos");
                }}
                data-testid="button-clear-search"
              >
                Limpar Busca
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
