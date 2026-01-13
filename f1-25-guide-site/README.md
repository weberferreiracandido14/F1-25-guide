# F1 25 Master Guide

Um site interativo e profissional dedicado ao jogo **Formula 1 25** da EA Sports, com informações detalhadas para ajudar jogadores a evoluir.

## Características

### 🏁 Análise de Pistas (24 Circuitos)
Informações completas sobre todas as pistas do calendário F1 2025:
- Características específicas de cada pista
- Dicas de pilotagem customizadas
- Recomendações de setup (asa, suspensão, freios, diferencial)
- Fatores climáticos e desafios únicos
- Comprimento da pista, recorde de volta e zonas DRS

### 🚗 Dicas de Pilotagem
Técnicas avançadas para melhorar seu desempenho:
- **Trail Braking**: Técnica de frenagem avançada para curvas técnicas
- **Gerenciamento de Pneus**: Manter temperatura e degradação ideais
- **DRS e ERS**: Uso estratégico de sistemas de potência
- **Pilotagem em Chuva**: Técnicas especiais para condições molhadas
- **Racecraft**: Ultrapassagens limpas e defesa eficiente
- Filtros por categoria e dificuldade

### 🏎️ Análise de Carros
Guia completo para cada uma das 10 equipes:
- Pontos fortes e fracos de cada carro
- Recomendações de setup específicas
- Estilo de pilotagem recomendado
- Notas sobre performance em diferentes pistas

## Design

O site utiliza um design **corporativo futurista** com:
- **Paleta de cores**: Vermelho Ferrari (#DC0000), Ouro (#FFD700) e Cinza neutro
- **Tipografia**: Roboto para títulos, Inter para corpo
- **Layout**: Assimétrico com cards interativos
- **Responsividade**: Totalmente otimizado para mobile, tablet e desktop

## Estrutura do Projeto

```
client/
├── public/
│   └── images/          # Imagens do jogo (hero, pistas, carros)
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── data/           # Dados estruturados (pistas, dicas, carros)
│   ├── pages/          # Páginas principais
│   ├── App.tsx         # Roteamento
│   └── index.css       # Design system global
```

## Páginas Principais

- **Home** (`/`): Página inicial com visão geral do site
- **Pistas** (`/tracks`): Análise detalhada de todas as 24 pistas
- **Dicas de Pilotagem** (`/driving-tips`): Técnicas com filtros por categoria
- **Carros** (`/cars`): Guia de setup para cada equipe

## Tecnologias

- **React 19**: Framework UI
- **Tailwind CSS 4**: Styling
- **shadcn/ui**: Componentes UI
- **Wouter**: Roteamento cliente
- **Lucide React**: Ícones

## Como Usar

1. Navegue pela página inicial para entender o conteúdo disponível
2. Explore as **Pistas** para aprender sobre cada circuito
3. Consulte as **Dicas de Pilotagem** para técnicas específicas
4. Analise os **Carros** para otimizar seu setup

## Dados Inclusos

- **24 Pistas**: Todas do calendário F1 2025
- **50+ Dicas**: Técnicas de pilotagem categorizadas
- **10 Equipes**: Ferrari, Mercedes, Red Bull, McLaren, Aston Martin, Alpine, Haas, Williams, Kick Sauber, RB
- **Imagens**: 5 imagens de alta qualidade do jogo

## Responsividade

O site é totalmente responsivo:
- **Mobile**: Layout single-column otimizado
- **Tablet**: Grid 2-3 colunas
- **Desktop**: Layout completo com sidebar

## Otimizações

- Imagens otimizadas para web
- CSS minificado via Tailwind
- Componentes lazy-loaded
- Navegação rápida com Wouter
- Design system consistente

## Próximos Passos

Você pode:
1. Adicionar mais dicas de pilotagem
2. Incluir vídeos tutoriais
3. Criar seção de comunidade
4. Adicionar calculadora de setup
5. Implementar dark mode

## Licença

Guia não oficial para o jogo F1 25 da EA Sports. Desenvolvido para fins educacionais.

---

**F1 25 Master Guide** - Domine o F1 25 com conhecimento profissional
