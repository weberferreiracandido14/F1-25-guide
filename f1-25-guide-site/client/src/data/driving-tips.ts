export interface DrivingTip {
  id: number;
  title: string;
  category: 'braking' | 'cornering' | 'acceleration' | 'drs' | 'ers' | 'tires' | 'weather';
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  detailedTips: string[];
  impact: string;
}

export const drivingTips: DrivingTip[] = [
  {
    id: 1,
    title: 'Trail Braking Essencial',
    category: 'braking',
    difficulty: 'hard',
    description: 'Técnica avançada de freio que permite manter velocidade enquanto freia, melhorando a entrada em curvas técnicas.',
    detailedTips: [
      'Comece a frear antes do ponto ideal de frenagem',
      'Reduza gradualmente a pressão do freio enquanto vira',
      'Mantenha o carro estável durante toda a manobra',
      'Pratique em curvas técnicas como Eau Rouge em Spa',
      'Use o trail braking para ganhar até 0.5s por volta'
    ],
    impact: 'Melhora significativa em curvas técnicas e ganho de tempo em qualificação'
  },
  {
    id: 2,
    title: 'Dominar o DRS',
    category: 'drs',
    difficulty: 'easy',
    description: 'Sistema de Redução de Arrasto que aumenta a velocidade em retas. Essencial para ultrapassagens e defesa.',
    detailedTips: [
      'Ative o DRS apenas quando estiver a menos de 1 segundo do carro à frente',
      'Use DRS em retas longas para máxima efetividade',
      'Cuidado ao usar DRS em curvas - pode desestabilizar o carro',
      'Planeje suas ultrapassagens usando os DRS zones',
      'Em defesa, use o DRS para manter a posição'
    ],
    impact: 'Ganho de 15-20 km/h em retas, facilitando ultrapassagens'
  },
  {
    id: 3,
    title: 'Gerenciamento de Pneus',
    category: 'tires',
    difficulty: 'medium',
    description: 'Manter os pneus na temperatura ideal e gerenciar a degradação é crucial para consistência em corrida.',
    detailedTips: [
      'Aqueça os pneus gradualmente nos primeiros giros',
      'Mantenha pneus entre 80-95°C para performance ótima',
      'Evite aquaplanagem em pista molhada',
      'Monitore a degradação e planeje pit stops',
      'Pneus macios degradam mais rápido mas têm melhor grip'
    ],
    impact: 'Melhor consistência e estratégia de pit stops mais eficiente'
  },
  {
    id: 4,
    title: 'Uso Estratégico de ERS',
    category: 'ers',
    difficulty: 'medium',
    description: 'Sistema de Recuperação de Energia que fornece boost de potência. Gerenciar quando usar é fundamental.',
    detailedTips: [
      'Acumule ERS em retas e seções de baixa velocidade',
      'Use ERS em aceleração para sair de curvas mais rápido',
      'Economize ERS para ultrapassagens e defesa',
      'Monitore o nível de bateria durante a corrida',
      'Use o modo Overtake apenas quando necessário'
    ],
    impact: 'Ganho de 30-50 km/h em aceleração, essencial para ultrapassagens'
  },
  {
    id: 5,
    title: 'Frenagem Agressiva',
    category: 'braking',
    difficulty: 'easy',
    description: 'Técnica de freio que maximiza a desaceleração sem bloquear as rodas.',
    detailedTips: [
      'Freie ao máximo sem bloquear as rodas',
      'Use o ABS para ajudar na frenagem em condições difíceis',
      'Freie em linha reta antes de virar',
      'Libere o freio gradualmente ao entrar na curva',
      'Pratique o ponto de frenagem para cada curva'
    ],
    impact: 'Reduz distância de frenagem e permite entrar em curvas mais rápido'
  },
  {
    id: 6,
    title: 'Racecraft - Ultrapassagem Limpa',
    category: 'acceleration',
    difficulty: 'hard',
    description: 'Arte de ultrapassar outros carros de forma segura e eficiente sem perder tempo.',
    detailedTips: [
      'Aproxime-se do carro à frente para ativar o DRS',
      'Escolha a melhor linha para a ultrapassagem',
      'Deixe espaço suficiente para evitar colisões',
      'Use o slipstream para ganhar velocidade',
      'Planeje a ultrapassagem com várias voltas de antecedência'
    ],
    impact: 'Ganho de posições em corrida e melhor resultado final'
  },
  {
    id: 7,
    title: 'Pilotagem em Chuva',
    category: 'weather',
    difficulty: 'hard',
    description: 'Técnicas especiais para pilotar com segurança e velocidade em condições molhadas.',
    detailedTips: [
      'Reduza a velocidade em curvas técnicas',
      'Cuidado com aquaplanagem em poças de água',
      'Use pneus intermediários ou chuva conforme necessário',
      'Freie mais cedo e com menos agressividade',
      'Mantenha distância maior do carro à frente'
    ],
    impact: 'Evita acidentes e mantém competitividade em condições molhadas'
  },
  {
    id: 8,
    title: 'Aceleração Otimizada',
    category: 'acceleration',
    difficulty: 'medium',
    description: 'Técnica de saída de curva que maximiza a aceleração sem perder grip.',
    detailedTips: [
      'Mantenha o carro em linha reta ao acelerar',
      'Aumente o acelerador gradualmente para evitar spin',
      'Use a largura da pista para melhor linha de saída',
      'Coordene com o ERS para máxima potência',
      'Pratique a saída de cada curva individualmente'
    ],
    impact: 'Ganho de velocidade em saída de curvas, melhora geral de tempo'
  },
  {
    id: 9,
    title: 'Gestão de Combustível',
    category: 'braking',
    difficulty: 'medium',
    description: 'Estratégia de consumo de combustível para evitar paradas extras ou falta de combustível.',
    detailedTips: [
      'Monitore o consumo durante a corrida',
      'Reduza a velocidade se necessário para economizar',
      'Planeje pit stops considerando o combustível',
      'Evite acelerações desnecessárias',
      'Calcule a quantidade de combustível necessária'
    ],
    impact: 'Evita penalidades e garante conclusão da corrida'
  },
  {
    id: 10,
    title: 'Posicionamento em Curvas',
    category: 'cornering',
    difficulty: 'medium',
    description: 'Escolher a melhor linha através de uma curva para maximizar velocidade.',
    detailedTips: [
      'Entrada externa, ápice interno, saída externa',
      'Mantenha a velocidade máxima possível na curva',
      'Ajuste a linha conforme o pneu e setup',
      'Pratique cada curva individualmente',
      'Use referências visuais para o ápice'
    ],
    impact: 'Melhora geral de tempo e consistência'
  }
];
