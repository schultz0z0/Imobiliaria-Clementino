import { Link, useLocation } from "wouter";
import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/imoveis", label: "Imóveis" },
    { path: "/servicos", label: "Serviços" },
    { path: "/sobre", label: "Sobre" },
    { path: "/blog", label: "Blog" },
    { path: "/contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1">
            <Building2 className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary font-sans">Imobiliária Clementino</span>
              <span className="text-xs text-muted-foreground">Desde 2010</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "default" : "ghost"}
                  size="sm"
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link href="/admin">
              <Button variant="outline" size="sm" data-testid="button-admin">
                Área Admin
              </Button>
            </Link>
            <Link href="/anunciar">
              <Button className="bg-accent text-accent-foreground hover:bg-accent border border-accent-border" size="sm" data-testid="button-anunciar">
                Anunciar Imóvel
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={location === item.path ? "default" : "ghost"}
                    className="w-full justify-start"
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full" data-testid="mobile-button-admin">
                    Área Admin
                  </Button>
                </Link>
                <Link href="/anunciar" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent border border-accent-border" data-testid="mobile-button-anunciar">
                    Anunciar Imóvel
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
