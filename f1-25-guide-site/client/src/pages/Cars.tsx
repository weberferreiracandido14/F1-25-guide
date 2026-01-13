import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, TrendingUp, TrendingDown } from "lucide-react";
import { carSetups } from "@/data/cars";

export default function Cars() {
  const [selectedCar, setSelectedCar] = useState(carSetups[0]);

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
          <h1 className="text-4xl font-roboto font-bold">Análise de Carros</h1>
          <p className="text-muted-foreground mt-2">Guia completo de setup e estratégia para cada equipe</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Car List */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
              {carSetups.map((car) => (
                <button
                  key={car.id}
                  onClick={() => setSelectedCar(car)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedCar.id === car.id
                      ? 'bg-primary/10 border-primary'
                      : 'bg-card border-border hover:border-primary/50'
                  }`}
                >
                  <div className="font-roboto font-bold">{car.team}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Car Details */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Car Header */}
              <div>
                <h2 className="text-4xl font-roboto font-bold mb-4">{selectedCar.team}</h2>
                <p className="text-lg text-muted-foreground">{selectedCar.notes}</p>
              </div>

              {/* Strengths and Weaknesses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-green-50 border-green-200">
                  <h3 className="text-lg font-roboto font-bold mb-4 flex items-center gap-2 text-green-900">
                    <TrendingUp className="w-5 h-5" />
                    Pontos Fortes
                  </h3>
                  <ul className="space-y-2">
                    {selectedCar.strengths.map((strength, idx) => (
                      <li key={idx} className="text-green-800 flex gap-2">
                        <span className="font-bold">✓</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6 bg-red-50 border-red-200">
                  <h3 className="text-lg font-roboto font-bold mb-4 flex items-center gap-2 text-red-900">
                    <TrendingDown className="w-5 h-5" />
                    Pontos Fracos
                  </h3>
                  <ul className="space-y-2">
                    {selectedCar.weaknesses.map((weakness, idx) => (
                      <li key={idx} className="text-red-800 flex gap-2">
                        <span className="font-bold">✗</span>
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Setup Recommendations */}
              <div className="card-accent p-8 rounded-lg">
                <h3 className="text-2xl font-roboto font-bold mb-6">Recomendações de Setup</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-l-primary pl-4">
                    <h4 className="font-roboto font-bold mb-2">Asa Dianteira</h4>
                    <p className="text-muted-foreground">{selectedCar.setupRecommendations.frontWing}</p>
                  </div>
                  <div className="border-l-4 border-l-primary pl-4">
                    <h4 className="font-roboto font-bold mb-2">Asa Traseira</h4>
                    <p className="text-muted-foreground">{selectedCar.setupRecommendations.rearWing}</p>
                  </div>
                  <div className="border-l-4 border-l-primary pl-4">
                    <h4 className="font-roboto font-bold mb-2">Suspensão</h4>
                    <p className="text-muted-foreground">{selectedCar.setupRecommendations.suspension}</p>
                  </div>
                  <div className="border-l-4 border-l-primary pl-4">
                    <h4 className="font-roboto font-bold mb-2">Freios</h4>
                    <p className="text-muted-foreground">{selectedCar.setupRecommendations.brakes}</p>
                  </div>
                  <div className="border-l-4 border-l-primary pl-4 md:col-span-2">
                    <h4 className="font-roboto font-bold mb-2">Diferencial</h4>
                    <p className="text-muted-foreground">{selectedCar.setupRecommendations.differential}</p>
                  </div>
                </div>
              </div>

              {/* Driving Style */}
              <div className="bg-primary/5 p-8 rounded-lg border-2 border-primary/20">
                <h3 className="text-2xl font-roboto font-bold mb-4">Estilo de Pilotagem</h3>
                <p className="text-lg leading-relaxed">{selectedCar.drivingStyle}</p>
              </div>

              {/* Tips */}
              <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-200">
                <h3 className="text-2xl font-roboto font-bold mb-4 text-yellow-900">Dica Importante</h3>
                <p className="text-lg text-yellow-800">{selectedCar.notes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
