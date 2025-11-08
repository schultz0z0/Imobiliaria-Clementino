import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import officeImage from "@assets/generated_images/Office_team_environment_df9f6cfa.png";
import businessImage from "@assets/generated_images/Business_partnership_image_5c67f0cc.png";
import kitchenImage from "@assets/generated_images/Modern_kitchen_interior_69822e48.png";

//todo: remove mock functionality
const mockArticle = {
  id: "1",
  image: officeImage,
  title: "Como Avaliar o Valor Real de um Imóvel em 2024",
  category: "Dicas de Investimento",
  author: "João Silva",
  authorRole: "Especialista em Avaliação Imobiliária",
  date: "15 Jan 2024",
  readTime: "5 min",
  content: `
    <p>Avaliar corretamente o valor de um imóvel é fundamental tanto para quem está comprando quanto para quem está vendendo. No mercado imobiliário de 2024, diversos fatores influenciam o preço final de uma propriedade.</p>
    
    <h2>Localização é Tudo</h2>
    <p>O primeiro e mais importante fator na avaliação de um imóvel continua sendo a localização. Propriedades em bairros valorizados, próximas a comércio, transporte público e boas escolas naturalmente têm valores mais altos.</p>
    
    <h2>Fatores Estruturais</h2>
    <p>Além da localização, aspectos como:</p>
    <ul>
      <li>Idade do imóvel e estado de conservação</li>
      <li>Metragem total e distribuição dos espaços</li>
      <li>Número de quartos e banheiros</li>
      <li>Vagas de garagem</li>
      <li>Acabamentos e materiais utilizados</li>
    </ul>
    
    <h2>Análise Comparativa de Mercado</h2>
    <p>Uma das metodologias mais confiáveis é a análise comparativa de mercado (CMA). Este método compara o imóvel em questão com propriedades similares que foram vendidas recentemente na mesma região.</p>
    
    <p>Profissionais experientes consideram pelo menos 3 a 5 imóveis comparáveis, ajustando os preços baseados em diferenças específicas como área, acabamento e condições gerais.</p>
    
    <h2>Tendências do Mercado</h2>
    <p>É essencial estar atento às tendências econômicas e do mercado imobiliário. Taxas de juros, inflação, oferta e demanda regional são fatores que podem influenciar significativamente os valores.</p>
    
    <h2>Documentação e Regularização</h2>
    <p>Imóveis com toda documentação em ordem e devidamente regularizados tendem a ter valores mais altos, pois oferecem maior segurança jurídica aos compradores.</p>
    
    <h2>Assessoria Profissional</h2>
    <p>Contar com a avaliação de um corretor ou avaliador profissional é fundamental. Estes especialistas têm acesso a bancos de dados atualizados e conhecimento profundo do mercado local.</p>
    
    <p>Na Imobiliária Clementino, oferecemos serviços completos de avaliação imobiliária com laudos técnicos e análise detalhada de mercado. Entre em contato conosco para uma avaliação precisa e profissional do seu imóvel.</p>
  `,
};

const relatedPosts = [
  {
    id: "2",
    image: businessImage,
    title: "Financiamento Imobiliário: Guia Completo 2024",
    excerpt: "Tudo o que você precisa saber sobre financiamento imobiliário.",
    category: "Financiamento",
    author: "Maria Santos",
    date: "12 Jan 2024",
    readTime: "8 min",
  },
  {
    id: "3",
    image: kitchenImage,
    title: "Tendências de Decoração para Imóveis Modernos",
    excerpt: "Design de interiores que valorizam seu imóvel.",
    category: "Decoração",
    author: "Pedro Costa",
    date: "10 Jan 2024",
    readTime: "6 min",
  },
];

export default function BlogArticle() {
  const [, params] = useRoute("/blog/:id");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Button variant="ghost" className="mb-4" data-testid="button-back-to-blog" asChild>
                  <Link href="/blog">
                    ← Voltar ao Blog
                  </Link>
                </Button>
                
                <Badge className="mb-4 bg-accent text-accent-foreground border-accent-border" data-testid="badge-category">
                  {mockArticle.category}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{mockArticle.title}</h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <div>
                      <div className="font-medium text-foreground">{mockArticle.author}</div>
                      <div className="text-xs">{mockArticle.authorRole}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{mockArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{mockArticle.readTime} de leitura</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-8">
                  <span className="text-sm text-muted-foreground">Compartilhar:</span>
                  <Button variant="outline" size="icon" data-testid="button-share-facebook">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" data-testid="button-share-twitter">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" data-testid="button-share-linkedin">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" data-testid="button-share-link">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative aspect-[21/9] mb-12 rounded-lg overflow-hidden">
                <img 
                  src={mockArticle.image} 
                  alt={mockArticle.title}
                  className="w-full h-full object-cover"
                  data-testid="img-article-hero"
                />
              </div>

              <div 
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: mockArticle.content }}
                data-testid="article-content"
              />

              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold mb-6">Artigos Relacionados</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((post) => (
                    <BlogCard key={post.id} {...post} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
