export interface TrackData {
  id: number;
  name: string;
  country: string;
  location: string;
  length: string;
  lapRecord: string;
  drsZones: number;
  difficulty: 'easy' | 'medium' | 'hard';
  characteristics: string[];
  drivingTips: string[];
  setupTips: string[];
  weatherFactors: string[];
}

export const tracks: TrackData[] = [
  {
    id: 1,
    name: 'Australian Grand Prix',
    country: 'Austrália',
    location: 'Melbourne',
    length: '5.303 km',
    lapRecord: '1:17.657',
    drsZones: 2,
    difficulty: 'easy',
    characteristics: ['Pista rápida', 'Boa aderência', 'Pouca degradação'],
    drivingTips: [
      'Mantenha velocidade nas curvas de alta velocidade',
      'Use DRS agressivamente nas retas',
      'Freie cedo na Curva 1 para ganhar posição'
    ],
    setupTips: [
      'Asa dianteira baixa (3-4)',
      'Suspensão macia para melhor aderência',
      'Diferencial aberto em aceleração'
    ],
    weatherFactors: ['Calor intenso', 'Pista pode ficar escorregadia no início']
  },
  {
    id: 2,
    name: 'Chinese Grand Prix',
    country: 'China',
    location: 'Xangai',
    length: '5.451 km',
    lapRecord: '1:31.097',
    drsZones: 2,
    difficulty: 'medium',
    characteristics: ['Pista técnica', 'Muitas curvas de média velocidade', 'Degradação moderada'],
    drivingTips: [
      'Foco em consistência nas curvas técnicas',
      'Cuidado com aquaplanagem em chuva',
      'Freie tarde para manter velocidade'
    ],
    setupTips: [
      'Asa dianteira média (5-6)',
      'Suspensão média para equilíbrio',
      'Travão com sensibilidade média'
    ],
    weatherFactors: ['Possível chuva', 'Umidade alta']
  },
  {
    id: 3,
    name: 'Japanese Grand Prix',
    country: 'Japão',
    location: 'Suzuka',
    length: '5.807 km',
    lapRecord: '1:27.064',
    drsZones: 2,
    difficulty: 'hard',
    characteristics: ['Pista rápida', 'Curvas de alta velocidade', 'Pouca margem de erro'],
    drivingTips: [
      'Mantenha velocidade máxima na chicane 130R',
      'Freie agressivamente na Spoon Curve',
      'Cuidado com o aquaplanagem na Curva 1'
    ],
    setupTips: [
      'Asa dianteira alta (7-8)',
      'Suspensão firme para estabilidade',
      'Travão com sensibilidade alta'
    ],
    weatherFactors: ['Chuva frequente', 'Pista escorregadia']
  },
  {
    id: 4,
    name: 'Bahrain Grand Prix',
    country: 'Bahrein',
    location: 'Sakhir',
    length: '5.412 km',
    lapRecord: '1:31.447',
    drsZones: 3,
    difficulty: 'easy',
    characteristics: ['Pista rápida', 'Boa aderência', 'Muitos DRS zones'],
    drivingTips: [
      'Aproveite os 3 DRS zones para ultrapassagens',
      'Mantenha velocidade nas curvas rápidas',
      'Cuidado com o pó na saída da pista'
    ],
    setupTips: [
      'Asa dianteira baixa (3-4)',
      'Suspensão macia para conforto',
      'Diferencial aberto'
    ],
    weatherFactors: ['Calor extremo', 'Pista muito suja']
  },
  {
    id: 5,
    name: 'Saudi Arabian Grand Prix',
    country: 'Arábia Saudita',
    location: 'Jeddah',
    length: '6.174 km',
    lapRecord: '1:27.103',
    drsZones: 3,
    difficulty: 'hard',
    characteristics: ['Pista muito rápida', 'Muitas retas', 'Pouca aderência'],
    drivingTips: [
      'Cuidado com o pó na pista',
      'Freie muito tarde nas curvas técnicas',
      'Use DRS agressivamente'
    ],
    setupTips: [
      'Asa dianteira baixa (2-3)',
      'Suspensão macia para absorver impactos',
      'Travão com sensibilidade média'
    ],
    weatherFactors: ['Pó na pista', 'Calor intenso']
  },
  {
    id: 6,
    name: 'Miami Grand Prix',
    country: 'Estados Unidos',
    location: 'Miami',
    length: '5.410 km',
    lapRecord: '1:29.708',
    drsZones: 2,
    difficulty: 'medium',
    characteristics: ['Pista urbana', 'Muros próximos', 'Degradação alta'],
    drivingTips: [
      'Cuidado com os muros',
      'Freie cedo para evitar aquaplanagem',
      'Mantenha consistência'
    ],
    setupTips: [
      'Asa dianteira média (5-6)',
      'Suspensão firme para curvas técnicas',
      'Travão com sensibilidade alta'
    ],
    weatherFactors: ['Possível chuva', 'Umidade alta']
  },
  {
    id: 7,
    name: 'Emilia Romagna Grand Prix',
    country: 'Itália',
    location: 'Imola',
    length: '4.909 km',
    lapRecord: '1:15.446',
    drsZones: 2,
    difficulty: 'medium',
    characteristics: ['Pista técnica', 'Muitas curvas de média velocidade', 'Histórica'],
    drivingTips: [
      'Foco em consistência',
      'Freie agressivamente na Rivazza',
      'Cuidado com o Tamburello'
    ],
    setupTips: [
      'Asa dianteira média (5-6)',
      'Suspensão média para equilíbrio',
      'Diferencial fechado'
    ],
    weatherFactors: ['Chuva frequente', 'Pista escorregadia']
  },
  {
    id: 8,
    name: 'Monaco Grand Prix',
    country: 'Mônaco',
    location: 'Monte Carlo',
    length: '3.337 km',
    lapRecord: '1:12.909',
    drsZones: 1,
    difficulty: 'hard',
    characteristics: ['Pista urbana', 'Muros muito próximos', 'Sem margem de erro'],
    drivingTips: [
      'Cuidado extremo com os muros',
      'Freie muito tarde',
      'Uma volta perfeita é essencial'
    ],
    setupTips: [
      'Asa dianteira alta (7-8)',
      'Suspensão firme para curvas técnicas',
      'Travão com sensibilidade máxima'
    ],
    weatherFactors: ['Pista suja', 'Chuva pode ser desafiadora']
  },
  {
    id: 9,
    name: 'Spanish Grand Prix',
    country: 'Espanha',
    location: 'Barcelona',
    length: '4.657 km',
    lapRecord: '1:18.149',
    drsZones: 2,
    difficulty: 'medium',
    characteristics: ['Pista técnica', 'Boa para testes', 'Degradação moderada'],
    drivingTips: [
      'Foco em consistência',
      'Mantenha velocidade nas curvas rápidas',
      'Cuidado com a Curva 3'
    ],
    setupTips: [
      'Asa dianteira média (5-6)',
      'Suspensão média para equilíbrio',
      'Travão com sensibilidade média'
    ],
    weatherFactors: ['Calor moderado', 'Pista pode ficar escorregadia']
  },
  {
    id: 10,
    name: 'Canadian Grand Prix',
    country: 'Canadá',
    location: 'Montreal',
    length: '4.361 km',
    lapRecord: '1:12.622',
    drsZones: 2,
    difficulty: 'medium',
    characteristics: ['Pista rápida', 'Muros próximos', 'Chuva frequente'],
    drivingTips: [
      'Cuidado com os muros',
      'Freie agressivamente',
      'Cuidado com aquaplanagem em chuva'
    ],
    setupTips: [
      'Asa dianteira média (5-6)',
      'Suspensão firme para curvas técnicas',
      'Travão com sensibilidade alta'
    ],
    weatherFactors: ['Chuva frequente', 'Pista escorregadia']
  },
  {
    id: 11,
    name: 'Austrian Grand Prix',
    country: 'Áustria',
    location: 'Spielberg',
    length: '4.318 km',
    lapRecord: '1:05.619',
    drsZones: 3,
    difficulty: 'easy',
    characteristics: ['Pista rápida', 'Muitos DRS zones', 'Boa aderência'],
    drivingTips: [
      'Aproveite os 3 DRS zones',
      'Mantenha velocidade nas curvas rápidas',
      'Cuidado com o pó na saída da pista'
    ],
    setupTips: [
      'Asa dianteira baixa (3-4)',
      'Suspensão macia para conforto',
      'Diferencial aberto'
    ],
    weatherFactors: ['Calor moderado', 'Chuva ocasional']
  },
  {
    id: 12,
    name: 'British Grand Prix',
    country: 'Reino Unido',
    location: 'Silverstone',
    length: '5.891 km',
    lapRecord: '1:27.097',
    drsZones: 2,
    difficulty: 'easy',
    characteristics: ['Pista rápida', 'Curvas de alta velocidade', 'Boa aderência'],
    drivingTips: [
      'Mantenha velocidade em Copse e Maggots',
      'Freie cedo em Stowe',
      'Cuidado com aquaplanagem em chuva'
    ],
    setupTips: [
      'Asa dianteira baixa (3-4)',
      'Suspensão macia para conforto',
      'Diferencial aberto'
    ],
    weatherFactors: ['Chuva frequente', 'Pista pode ficar escorregadia']
  },
  {
    id: 13,
    name: 'Belgian Grand Prix',
    country: 'Bélgica',
    location: 'Spa',
    length: '7.004 km',
    lapRecord: '1:46.286',
    drsZones: 3,
    difficulty: 'easy',
    characteristics: ['Pista rápida', 'Muitos DRS zones', 'Chuva frequente'],
    drivingTips: [
      'Aproveite os 3 DRS zones',
      'Mantenha velocidade em Eau Rouge',
      'Cuidado com aquaplanagem em chuva'
    ],
    setupTips: [
      'Asa dianteira baixa (2-3)',
      'Suspensão macia para absorver impactos',
      'Diferencial aberto'
    ],
    weatherFactors: ['Chuva muito frequente', 'Pista escorregadia']
  },
  {
    id: 14,
    name: 'Hungarian Grand Prix',
    country: 'Hungria',
    location: 'Hungaroring',
    length: '4.381 km',
    lapRecord: '1:16.627',
    drsZones: 1,
    difficulty: 'medium',
    characteristics: ['Pista técnica', 'Muitas curvas', 'Degradação alta'],
    drivingTips: [
      'Foco em consistência',
      'Freie agressivamente',
      'Cuidado com a degradação de pneus'
    ],
    setupTips: [
      'Asa dianteira alta (7-8)',
      'Suspensão firme para curvas técnicas',
      'Travão com sensibilidade alta'
    ],
    weatherFactors: ['Calor intenso', 'Pista suja']
  },
  {
    id: 15,
    name: 'Dutch Grand Prix',
    country: 'Holanda',
    location: 'Zandvoort',
    length: '4.259 km',
    lapRecord: '1:11.097',
    drsZones: 2,
    difficulty: 'medium',
    characteristics: ['Pista rápida', 'Muros próximos', 'Curvas inclinadas'],
    drivingTips: [
      'Cuidado com os muros nas curvas inclinadas',
      'Freie agressivamente',
      'Mantenha velocidade nas curvas rápidas'
    ],
    setupTips: [
      'Asa dianteira média (5-6)',
      'Suspensão firme para curvas técnicas',
      'Travão com sensibilidade alta'
    ],
    weatherFactors: ['Vento forte', 'Chuva ocasional']
  },
  {
    id: 16,
    name: 'Italian Grand Prix',
    country: 'Itália',
    location: 'Monza',
    length: '5.793 km',
    lapRecord: '1:21.046',
    drsZones: 3,
    difficulty: 'easy',
    characteristics: ['Pista muito rápida', 'Muitos DRS zones', 'Pouca aderência'],
    drivingTips: [
      'Aproveite os 3 DRS zones',
      'Mantenha velocidade máxima',
      'Freie muito tarde'
    ],
    setupTips: [
      'Asa dianteira baixa (1-2)',
      'Suspensão macia para absorver impactos',
      'Diferencial aberto'
    ],
    weatherFactors: ['Calor moderado', 'Pista suja']
  },
  {
    id: 17,
    name: 'Azerbaijan Grand Prix',
    country: 'Azerbaijão',
    location: 'Baku',
    length: '6.003 km',
    lapRecord: '1:43.009',
    drsZones: 3,
    difficulty: 'hard',
    characteristics: ['Pista urbana rápida', 'Muros próximos', 'Muitos DRS zones'],
    drivingTips: [
      'Cuidado com os muros',
      'Freie muito tarde',
      'Aproveite os 3 DRS zones'
    ],
    setupTips: [
      'Asa dianteira baixa (3-4)',
      'Suspensão firme para curvas técnicas',
      'Travão com sensibilidade alta'
    ],
    weatherFactors: ['Calor intenso', 'Pista suja']
  },
  {
    id: 18,
    name: 'Singapore Grand Prix',
    country: 'Singapura',
    location: 'Marina Bay',
    length: '5.065 km',
    lapRecord: '1:41.905',
    drsZones: 2,
    difficulty: 'hard',
    characteristics: ['Pista urbana noturna', 'Muros muito próximos', 'Sem margem de erro'],
    drivingTips: [
      'Cuidado extremo com os muros',
      'Freie muito tarde',
      'Consistência é essencial'
    ],
    setupTips: [
      'Asa dianteira alta (7-8)',
      'Suspensão firme para curvas técnicas',
      'Travão com sensibilidade máxima'
    ],
    weatherFactors: ['Umidade alta', 'Possível chuva']
  },
  {
    id: 19,
    name: 'United States Grand Prix',
    country: 'Estados Unidos',
    location: 'Austin',
    length: '5.513 km',
    lapRecord: '1:36.169',
    drsZones: 2,
    difficulty: 'medium',
    characteristics: ['Pista técnica', 'Muitas curvas', 'Degradação moderada'],
    drivingTips: [
      'Foco em consistência',
      'Freie agressivamente na Curva 1',
      'Cuidado com a degradação de pneus'
    ],
    setupTips: [
      'Asa dianteira média (5-6)',
      'Suspensão média para equilíbrio',
      'Travão com sensibilidade média'
    ],
    weatherFactors: ['Calor moderado', 'Possível chuva']
  },
  {
    id: 20,
    name: 'Mexico City Grand Prix',
    country: 'México',
    location: 'Cidade do México',
    length: '4.304 km',
    lapRecord: '1:17.774',
    drsZones: 2,
    difficulty: 'easy',
    characteristics: ['Pista rápida', 'Altitude elevada', 'Pouca aderência'],
    drivingTips: [
      'Cuidado com a falta de aderência',
      'Mantenha velocidade nas curvas rápidas',
      'Freie agressivamente'
    ],
    setupTips: [
      'Asa dianteira baixa (3-4)',
      'Suspensão macia para conforto',
      'Diferencial aberto'
    ],
    weatherFactors: ['Altitude elevada', 'Pista suja']
  },
  {
    id: 21,
    name: 'Brazilian Grand Prix',
    country: 'Brasil',
    location: 'São Paulo',
    length: '4.309 km',
    lapRecord: '1:17.052',
    drsZones: 2,
    difficulty: 'medium',
    characteristics: ['Pista rápida', 'Chuva frequente', 'Muros próximos'],
    drivingTips: [
      'Cuidado com os muros',
      'Cuidado com aquaplanagem em chuva',
      'Freie agressivamente'
    ],
    setupTips: [
      'Asa dianteira média (5-6)',
      'Suspensão firme para curvas técnicas',
      'Travão com sensibilidade alta'
    ],
    weatherFactors: ['Chuva muito frequente', 'Pista escorregadia']
  },
  {
    id: 22,
    name: 'Las Vegas Grand Prix',
    country: 'Estados Unidos',
    location: 'Las Vegas',
    length: '6.120 km',
    lapRecord: '1:34.567',
    drsZones: 3,
    difficulty: 'easy',
    characteristics: ['Pista urbana rápida', 'Muitos DRS zones', 'Boa aderência'],
    drivingTips: [
      'Aproveite os 3 DRS zones',
      'Mantenha velocidade máxima',
      'Cuidado com os muros'
    ],
    setupTips: [
      'Asa dianteira baixa (2-3)',
      'Suspensão macia para absorver impactos',
      'Diferencial aberto'
    ],
    weatherFactors: ['Noturno', 'Calor moderado']
  },
  {
    id: 23,
    name: 'Qatar Grand Prix',
    country: 'Qatar',
    location: 'Lusail',
    length: '5.419 km',
    lapRecord: '1:23.196',
    drsZones: 2,
    difficulty: 'easy',
    characteristics: ['Pista rápida', 'Boa aderência', 'Pouca degradação'],
    drivingTips: [
      'Mantenha velocidade nas curvas rápidas',
      'Freie cedo para ganhar posição',
      'Aproveite os DRS zones'
    ],
    setupTips: [
      'Asa dianteira baixa (3-4)',
      'Suspensão macia para conforto',
      'Diferencial aberto'
    ],
    weatherFactors: ['Calor intenso', 'Pista suja']
  },
  {
    id: 24,
    name: 'Abu Dhabi Grand Prix',
    country: 'Emirados Árabes',
    location: 'Yas Island',
    length: '5.281 km',
    lapRecord: '1:26.103',
    drsZones: 3,
    difficulty: 'easy',
    characteristics: ['Pista rápida', 'Muitos DRS zones', 'Boa aderência'],
    drivingTips: [
      'Aproveite os 3 DRS zones',
      'Mantenha velocidade nas curvas rápidas',
      'Freie cedo para ganhar posição'
    ],
    setupTips: [
      'Asa dianteira baixa (3-4)',
      'Suspensão macia para conforto',
      'Diferencial aberto'
    ],
    weatherFactors: ['Calor extremo', 'Pista suja']
  }
];
