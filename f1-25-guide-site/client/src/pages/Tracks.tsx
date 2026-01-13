import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ChevronLeft, MapPin, Zap, AlertCircle } from "lucide-react";
import { tracks } from "@/data/tracks";

export default function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'hard':
        return 'bg-primary';
      default:
        return 'bg-gray-500';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'Fácil';
      case 'medium':
        return 'Médio';
      case 'hard':
        return 'Difícil';
      default:
        return difficulty;
    }
  };

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
          <h1 className="text-4xl font-roboto font-bold">Calendário F1 2025</h1>
          <p className="text-muted-foreground mt-2">Análise detalhada de todas as 24 pistas do calendário</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Track List */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrack(track)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedTrack.id === track.id
                      ? 'bg-primary/10 border-primary'
                      : 'bg-card border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-roboto font-bold">{track.id}. {track.name}</div>
                      <div className="text-sm text-muted-foreground">{track.country}</div>
                    </div>
                    <Badge className={`${getDifficultyColor(track.difficulty)} text-white`}>
                      {getDifficultyLabel(track.difficulty)}
                    </Badge>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Track Details */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Track Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-roboto font-bold">{selectedTrack.name}</h2>
                  <Badge className={`${getDifficultyColor(selectedTrack.difficulty)} text-white text-lg px-4 py-2`}>
                    {getDifficultyLabel(selectedTrack.difficulty)}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedTrack.location}, {selectedTrack.country}</span>
                </div>
              </div>

              {/* Track Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">Comprimento</div>
                  <div className="font-roboto font-bold text-lg">{selectedTrack.length}</div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">Recorde da Volta</div>
                  <div className="font-roboto font-bold text-lg">{selectedTrack.lapRecord}</div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">Zonas DRS</div>
                  <div className="font-roboto font-bold text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    {selectedTrack.drsZones}
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">Dificuldade</div>
                  <div className="font-roboto font-bold text-lg">{getDifficultyLabel(selectedTrack.difficulty)}</div>
                </Card>
              </div>

              {/* Characteristics */}
              <div>
                <h3 className="text-xl font-roboto font-bold mb-4">Características da Pista</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTrack.characteristics.map((char, idx) => (
                    <Badge key={idx} variant="secondary">
                      {char}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Driving Tips */}
              <div className="card-accent p-6 rounded-lg">
                <h3 className="text-xl font-roboto font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Dicas de Pilotagem
                </h3>
                <ul className="space-y-3">
                  {selectedTrack.drivingTips.map((tip, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Setup Tips */}
              <div className="card-accent p-6 rounded-lg">
                <h3 className="text-xl font-roboto font-bold mb-4">Recomendações de Setup</h3>
                <div className="space-y-3">
                  {selectedTrack.setupTips.map((tip, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weather Factors */}
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="text-xl font-roboto font-bold mb-4 text-yellow-900">Fatores Climáticos</h3>
                <ul className="space-y-2">
                  {selectedTrack.weatherFactors.map((factor, idx) => (
                    <li key={idx} className="text-yellow-800 flex gap-2">
                      <span>⚠</span>
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
