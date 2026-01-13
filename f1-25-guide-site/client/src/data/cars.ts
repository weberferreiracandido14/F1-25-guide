export interface CarSetup {
  id: number;
  team: string;
  strengths: string[];
  weaknesses: string[];
  setupRecommendations: {
    frontWing: string;
    rearWing: string;
    suspension: string;
    brakes: string;
    differential: string;
  };
  drivingStyle: string;
  notes: string;
}

export const carSetups: CarSetup[] = [
  {
    id: 1,
    team: 'Ferrari',
    strengths: [
      'Excelente aceleração',
      'Bom em retas',
      'Boa aderência em curvas de alta velocidade',
      'Motor potente'
    ],
    weaknesses: [
      'Degradação de pneus moderada',
      'Pode ser instável em curvas técnicas',
      'Requer setup preciso'
    ],
    setupRecommendations: {
      frontWing: 'Baixa a média (3-5) para melhor velocidade em retas',
      rearWing: 'Média a alta (5-7) para estabilidade',
      suspension: 'Média para equilíbrio entre conforto e performance',
      brakes: 'Sensibilidade alta para frenagem agressiva',
      differential: 'Fechado em aceleração, aberto em frenagem'
    },
    drivingStyle: 'Agressivo. Use a potência do motor para ultrapassagens. Freie cedo em curvas técnicas.',
    notes: 'Carro versátil que funciona bem em pistas rápidas. Requer ajustes finos para curvas técnicas.'
  },
  {
    id: 2,
    team: 'Mercedes',
    strengths: [
      'Excelente eficiência de combustível',
      'Boa em curvas técnicas',
      'Estável em todas as condições',
      'Ótimo em pistas de ritmo rápido'
    ],
    weaknesses: [
      'Pode ser lento em retas puras',
      'Requer setup específico por pista',
      'Menos potência bruta que Ferrari'
    ],
    setupRecommendations: {
      frontWing: 'Média (5-6) para equilíbrio',
      rearWing: 'Média (5-6) para estabilidade',
      suspension: 'Macia para melhor aderência',
      brakes: 'Sensibilidade média para controle',
      differential: 'Equilibrado em ambas as situações'
    },
    drivingStyle: 'Consistente. Foque em ritmo constante e eficiência. Use a estabilidade para vencer em curvas técnicas.',
    notes: 'Carro confiável que favorece consistência. Excelente para gerenciamento de corrida.'
  },
  {
    id: 3,
    team: 'Red Bull Racing',
    strengths: [
      'Excelente em curvas de alta velocidade',
      'Ótima aerodinâmica',
      'Estável em todas as condições',
      'Bom em pistas técnicas'
    ],
    weaknesses: [
      'Pode sofrer em retas longas',
      'Requer setup preciso',
      'Sensível a mudanças de setup'
    ],
    setupRecommendations: {
      frontWing: 'Alta (7-8) para melhor downforce',
      rearWing: 'Alta (7-8) para estabilidade',
      suspension: 'Firme para curvas técnicas',
      brakes: 'Sensibilidade alta para frenagem precisa',
      differential: 'Fechado para melhor tração'
    },
    drivingStyle: 'Técnico. Domine as curvas de alta velocidade. Use a aerodinâmica a seu favor.',
    notes: 'Carro versátil com excelente aerodinâmica. Favorece pilotos que dominam curvas técnicas.'
  },
  {
    id: 4,
    team: 'McLaren',
    strengths: [
      'Bom equilíbrio geral',
      'Ótimo em pistas mistas',
      'Boa aceleração',
      'Estável em condições molhadas'
    ],
    weaknesses: [
      'Não é o melhor em nenhuma área específica',
      'Pode ser lento em pistas muito rápidas',
      'Requer setup balanceado'
    ],
    setupRecommendations: {
      frontWing: 'Média (5-6) para equilíbrio',
      rearWing: 'Média (5-6) para estabilidade',
      suspension: 'Média para versatilidade',
      brakes: 'Sensibilidade média para controle',
      differential: 'Equilibrado em ambas as situações'
    },
    drivingStyle: 'Versátil. Adapte-se às condições e ajuste seu setup conforme necessário.',
    notes: 'Carro equilibrado que funciona bem em qualquer pista. Favorece pilotos adaptáveis.'
  },
  {
    id: 5,
    team: 'Aston Martin',
    strengths: [
      'Boa em pistas técnicas',
      'Excelente em curvas de média velocidade',
      'Estável em todas as condições',
      'Bom para gerenciamento de corrida'
    ],
    weaknesses: [
      'Pode ser lento em retas puras',
      'Requer setup específico',
      'Menos potência que Ferrari'
    ],
    setupRecommendations: {
      frontWing: 'Média a alta (6-7) para downforce',
      rearWing: 'Média a alta (6-7) para estabilidade',
      suspension: 'Média para equilíbrio',
      brakes: 'Sensibilidade média para controle',
      differential: 'Fechado para melhor tração'
    },
    drivingStyle: 'Consistente. Foque em ritmo constante em curvas técnicas. Use a estabilidade a seu favor.',
    notes: 'Carro confiável para pistas técnicas. Excelente para pilotos que preferem consistência.'
  },
  {
    id: 6,
    team: 'Alpine',
    strengths: [
      'Boa em curvas de média velocidade',
      'Excelente em pistas técnicas',
      'Estável em condições molhadas',
      'Bom para desenvolvimento'
    ],
    weaknesses: [
      'Pode ser lento em retas puras',
      'Menos potência que Ferrari',
      'Requer setup específico'
    ],
    setupRecommendations: {
      frontWing: 'Média (5-6) para equilíbrio',
      rearWing: 'Média (5-6) para estabilidade',
      suspension: 'Média para versatilidade',
      brakes: 'Sensibilidade média para controle',
      differential: 'Equilibrado em ambas as situações'
    },
    drivingStyle: 'Técnico. Domine as curvas técnicas e use a estabilidade em condições molhadas.',
    notes: 'Carro versátil para pistas técnicas. Favorece pilotos que dominam curvas de média velocidade.'
  },
  {
    id: 7,
    team: 'Haas',
    strengths: [
      'Boa em retas',
      'Excelente em pistas rápidas',
      'Boa aceleração',
      'Setup simples'
    ],
    weaknesses: [
      'Pode sofrer em curvas técnicas',
      'Menos downforce que concorrentes',
      'Requer pista com bom grip'
    ],
    setupRecommendations: {
      frontWing: 'Baixa (3-4) para melhor velocidade',
      rearWing: 'Baixa a média (4-5) para velocidade',
      suspension: 'Macia para conforto',
      brakes: 'Sensibilidade média para controle',
      differential: 'Aberto para melhor tração'
    },
    drivingStyle: 'Agressivo. Aproveite a velocidade em retas e use DRS para ultrapassagens.',
    notes: 'Carro rápido em retas. Funciona bem em pistas como Monza e Las Vegas.'
  },
  {
    id: 8,
    team: 'Williams',
    strengths: [
      'Boa em pistas técnicas',
      'Excelente em curvas de média velocidade',
      'Estável em todas as condições',
      'Bom para desenvolvimento'
    ],
    weaknesses: [
      'Pode ser lento em retas puras',
      'Menos potência que Ferrari',
      'Requer setup específico'
    ],
    setupRecommendations: {
      frontWing: 'Média (5-6) para equilíbrio',
      rearWing: 'Média (5-6) para estabilidade',
      suspension: 'Média para versatilidade',
      brakes: 'Sensibilidade média para controle',
      differential: 'Equilibrado em ambas as situações'
    },
    drivingStyle: 'Consistente. Foque em ritmo constante e adaptabilidade a diferentes pistas.',
    notes: 'Carro versátil para desenvolvimento. Favorece pilotos que preferem aprender e adaptar.'
  },
  {
    id: 9,
    team: 'Kick Sauber',
    strengths: [
      'Boa em pistas técnicas',
      'Excelente em curvas de média velocidade',
      'Estável em todas as condições',
      'Bom para desenvolvimento'
    ],
    weaknesses: [
      'Pode ser lento em retas puras',
      'Menos potência que Ferrari',
      'Requer setup específico'
    ],
    setupRecommendations: {
      frontWing: 'Média (5-6) para equilíbrio',
      rearWing: 'Média (5-6) para estabilidade',
      suspension: 'Média para versatilidade',
      brakes: 'Sensibilidade média para controle',
      differential: 'Equilibrado em ambas as situações'
    },
    drivingStyle: 'Consistente. Foque em ritmo constante e adaptabilidade a diferentes pistas.',
    notes: 'Carro versátil para desenvolvimento. Favorece pilotos que preferem aprender e adaptar.'
  },
  {
    id: 10,
    team: 'RB',
    strengths: [
      'Boa em retas',
      'Excelente em pistas rápidas',
      'Boa aceleração',
      'Setup simples'
    ],
    weaknesses: [
      'Pode sofrer em curvas técnicas',
      'Menos downforce que concorrentes',
      'Requer pista com bom grip'
    ],
    setupRecommendations: {
      frontWing: 'Baixa (3-4) para melhor velocidade',
      rearWing: 'Baixa a média (4-5) para velocidade',
      suspension: 'Macia para conforto',
      brakes: 'Sensibilidade média para controle',
      differential: 'Aberto para melhor tração'
    },
    drivingStyle: 'Agressivo. Aproveite a velocidade em retas e use DRS para ultrapassagens.',
    notes: 'Carro rápido em retas. Funciona bem em pistas como Monza e Las Vegas.'
  }
];
