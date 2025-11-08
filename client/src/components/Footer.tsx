import { Link } from "wouter";
import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold text-lg text-primary">Imobiliária Clementino</h3>
                <p className="text-xs text-muted-foreground">Desde 2010</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Especialistas em compra, venda, administração, legalização e avaliação de imóveis há mais de 15 anos.
            </p>
            <div className="flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-facebook">
                <Facebook className="h-5 w-5 text-muted-foreground" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-instagram">
                <Instagram className="h-5 w-5 text-muted-foreground" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/imoveis" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-imoveis">Imóveis</Link></li>
              <li><Link href="/servicos" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-servicos">Serviços</Link></li>
              <li><Link href="/sobre" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-sobre">Sobre Nós</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-blog">Blog</Link></li>
              <li><Link href="/contato" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-contato">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Compra e Venda</li>
              <li className="text-muted-foreground">Administração</li>
              <li className="text-muted-foreground">Legalização</li>
              <li className="text-muted-foreground">Avaliação</li>
              <li className="text-muted-foreground">Consultoria</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  (11) 3456-7890<br />
                  (11) 98765-4321
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">contato@clementino.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Av. Paulista, 1000<br />
                  São Paulo - SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Imobiliária Clementino. Todos os direitos reservados.</p>
          <p className="mt-2">CRECI: 12345-J</p>
        </div>
      </div>
    </footer>
  );
}
