import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { drivingTips } from "@/data/driving-tips";

export default function DrivingTips() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const categories = [
    { id: 'braking', label: 'Frenagem', icon: '🛑' },
    { id: 'cornering', label: 'Curvas', icon: '🔄' },
    { id: 'acceleration', label: 'Aceleração', icon: '⚡' },
    { id: 'drs', label: 'DRS', icon: '🚀' },
    { id: 'ers', label: 'ERS', icon: '🔋' },
    { id: 'tires', label: 'Pneus', icon: '🛞' },
    { id: 'weather', label: 'Clima', icon: '🌧️' }
  ];

  const difficulties = [
    { id: 'easy', label: 'Fácil', color: 'bg-green-500' },
    { id: 'medium', label: 'Médio', color: 'bg-yellow-500' },
    { id: 'hard', label: 'Difícil', color: 'bg-primary' }
  ];

  const filteredTips = drivingTips.filter(tip => {
    if (selectedCategory && tip.category !== selectedCategory) return false;
    if (selectedDifficulty && tip.difficulty !== selectedDifficulty) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-16 z-40">
        <div className="container py-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4">
              <ChevronLeft className="w-4 h-4" /> Voltar
            </Button>
          </Link>
          <h1 className="text-4xl font-roboto font-bold">Dicas de Pilotagem</h1>
          <p className="text-muted-foreground mt-2">Técnicas e estratégias para melhorar seu desempenho no F1 25</p>
        </div>
      </div>

      <div className="container py-12">
        {/* Filters */}
        <div className="mb-12">
          <h3 className="text-lg font-roboto font-bold mb-4">Filtrar por Categoria</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="gap-2"
            >
              Todas
            </Button>
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                className="gap-2"
              >
                <span>{cat.icon}</span>
                {cat.label}
              </Button>
            ))}
          </div>

          <h3 className="text-lg font-roboto font-bold mb-4">Filtrar por Dificuldade</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedDifficulty === null ? "default" : "outline"}
              onClick={() => setSelectedDifficulty(null)}
            >
              Todas
            </Button>
            {difficulties.map(diff => (
              <Button
                key={diff.id}
                variant={selectedDifficulty === diff.id ? "default" : "outline"}
                onClick={() => setSelectedDifficulty(diff.id)}
              >
                <span className={`w-3 h-3 rounded-full ${diff.color} mr-2`}></span>
                {diff.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTips.map(tip => (
            <Card key={tip.id} className="card-accent p-6 hover-lift">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-roboto font-bold flex-1">{tip.title}</h3>
                <Badge className={`${difficulties.find(d => d.id === tip.difficulty)?.color} text-white`}>
                  {difficulties.find(d => d.id === tip.difficulty)?.label}
                </Badge>
              </div>
              
              <p className="text-muted-foreground mb-4">{tip.description}</p>
              
              <div className="mb-4">
                <h4 className="font-roboto font-bold text-sm mb-2">Dicas Detalhadas:</h4>
                <ul className="space-y-2">
                  {tip.detailedTips.slice(0, 3).map((detailTip, idx) => (
                    <li key={idx} className="text-sm flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{detailTip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-sm font-roboto font-bold text-primary mb-1">Impacto:</p>
                <p className="text-sm">{tip.impact}</p>
              </div>
            </Card>
          ))}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Nenhuma dica encontrada com esses filtros.</p>
          </div>
        )}
      </div>
    </div>
  );
}
