import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronRight, Zap, Trophy, Gauge } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-banner.jpg')",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container py-32 flex flex-col justify-center items-start">
          <div className="max-w-2xl">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary rounded-lg">
              <span className="text-primary font-bold text-sm">GUIA COMPLETO</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-4 leading-tight">
              Domine o F1 25
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Guia profissional com dicas de pilotagem, análise de todas as 24 pistas do calendário e estratégias de setup para evoluir no jogo.
            </p>
            <div className="flex gap-4">
              <Link href="/tracks">
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                  Explorar Pistas <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/driving-tips">
                <Button variant="outline" className="gap-2">
                  Dicas de Pilotagem <Zap className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-16 border-t border-b border-border">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24</div>
            <p className="text-muted-foreground">Pistas Analisadas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10</div>
            <p className="text-muted-foreground">Equipes Detalhadas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Dicas de Pilotagem</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">Calendário 2025</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            O que você vai aprender
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="card-accent p-8 hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dicas de Pilotagem</h3>
              <p className="text-muted-foreground mb-4">
                Técnicas avançadas de trail braking, gerenciamento de pneus, uso de DRS e ERS para melhorar seu tempo de volta.
              </p>
              <Link href="/driving-tips" className="text-primary font-medium text-sm hover:underline">
                Explorar →
              </Link>
            </Card>

            {/* Feature 2 */}
            <Card className="card-accent p-8 hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Análise de Pistas</h3>
              <p className="text-muted-foreground mb-4">
                Informações detalhadas sobre cada uma das 24 pistas do calendário, características, dicas específicas e setup recomendado.
              </p>
              <Link href="/tracks" className="text-primary font-medium text-sm hover:underline">
                Explorar →
              </Link>
            </Card>

            {/* Feature 3 */}
            <Card className="card-accent p-8 hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Setup de Carros</h3>
              <p className="text-muted-foreground mb-4">
                Guia completo de setup para cada equipe, recomendações de asa, suspensão, freios e estratégias de pilotagem.
              </p>
              <Link href="/cars" className="text-primary font-medium text-sm hover:underline">
                Explorar →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 border-t border-border py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para melhorar seu desempenho?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comece com as dicas de pilotagem e depois explore as análises detalhadas de cada pista para dominar o F1 25.
          </p>
          <Link href="/driving-tips">
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2 text-lg px-8 py-6">
              Começar Agora <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
