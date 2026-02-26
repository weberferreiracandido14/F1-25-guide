const tracks = [
  { gp: "Austrália", circuito: "Albert Park", curvas: 14, drs: 4, freio: "T3 e T11", marcha: "3ª na T3, 2ª na T13", tipo: "technical", estilo: "Entrada progressiva e tração limpa nas saídas curtas.", telemetria: "Freio ~90% na T3 e aceleração plena após o ápice." },
  { gp: "China", circuito: "Shanghai", curvas: 16, drs: 2, freio: "T6 e T14", marcha: "3ª na T1/T2", tipo: "technical", estilo: "Saída forte da curva caracol define a reta.", telemetria: "Freio em rampa: 100%→35% para evitar bloqueio." },
  { gp: "Japão", circuito: "Suzuka", curvas: 18, drs: 1, freio: "T11 e Chicane", marcha: "4ª nos Esses", tipo: "technical", estilo: "Ritmo fluido sem correções bruscas no S1.", telemetria: "Acelerador parcial (35-55%) no setor S." },
  { gp: "Bahrein", circuito: "Sakhir", curvas: 15, drs: 3, freio: "T1, T4, T10", marcha: "2ª na T1", tipo: "high", estilo: "Tração de baixa e gestão térmica traseira.", telemetria: "Trail braking longo na T10." },
  { gp: "Arábia Saudita", circuito: "Jeddah", curvas: 27, drs: 3, freio: "T1 e T27", marcha: "5ª no miolo rápido", tipo: "street", estilo: "Comprometa pouco a entrada para ganhar confiança.", telemetria: "Lifts curtos de 10-15% em curvas cegas." },
  { gp: "Miami", circuito: "Miami Autodrome", curvas: 19, drs: 3, freio: "T11 e T17", marcha: "2ª nos hairpins", tipo: "street", estilo: "Controle wheelspin no setor lento.", telemetria: "Abertura de acelerador em dois estágios." },
  { gp: "Emilia-Romagna", circuito: "Imola", curvas: 19, drs: 1, freio: "Tamburello e Rivazza", marcha: "2ª em Rivazza", tipo: "technical", estilo: "Mudanças de direção agressivas e precisas.", telemetria: "Freio motor alto para ajudar rotação." },
  { gp: "Mônaco", circuito: "Monte Carlo", curvas: 19, drs: 1, freio: "Sainte Dévote", marcha: "1ª no Grand Hotel", tipo: "street", estilo: "Aceleração paciente para evitar erro de muro.", telemetria: "100% throttle somente com carro reto." },
  { gp: "Canadá", circuito: "Gilles Villeneuve", curvas: 14, drs: 3, freio: "Hairpin e chicane final", marcha: "2ª no hairpin", tipo: "high", estilo: "Ataque zebras sem quicar demais o carro.", telemetria: "Freio forte e solta rápida para mudança de direção." },
  { gp: "Espanha", circuito: "Barcelona", curvas: 14, drs: 2, freio: "T1 e T10", marcha: "3ª na T10", tipo: "technical", estilo: "Preserve dianteiro esquerdo no S1.", telemetria: "Progressão de throttle na curva 3." },
  { gp: "Áustria", circuito: "Red Bull Ring", curvas: 10, drs: 3, freio: "T1, T3, T4", marcha: "2ª na T3", tipo: "high", estilo: "Freada reta e tração na subida.", telemetria: "ERS total na principal e subida até T4." },
  { gp: "Grã-Bretanha", circuito: "Silverstone", curvas: 18, drs: 2, freio: "Village e Vale", marcha: "4ª em Maggots", tipo: "high", estilo: "Alta confiança em curvas rápidas.", telemetria: "Lift mínimo em Copse." },
  { gp: "Hungria", circuito: "Hungaroring", curvas: 14, drs: 1, freio: "T1 e T12", marcha: "2ª na T1", tipo: "technical", estilo: "Sequência contínua e foco em consistência.", telemetria: "Mapa de torque suave entre curvas." },
  { gp: "Bélgica", circuito: "Spa", curvas: 19, drs: 2, freio: "Les Combes", marcha: "6ª em Eau Rouge", tipo: "high", estilo: "Compromisso entre reta e estabilidade no S2.", telemetria: "Correções mínimas no Raidillon." },
  { gp: "Holanda", circuito: "Zandvoort", curvas: 14, drs: 2, freio: "T1 e T11", marcha: "3ª nas inclinadas", tipo: "technical", estilo: "Use o banking para carregar velocidade.", telemetria: "Throttle 20-30% para estabilizar traseira." },
  { gp: "Itália", circuito: "Monza", curvas: 11, drs: 2, freio: "T1 e Ascari", marcha: "2ª na T1", tipo: "high", estilo: "Baixa asa com freio preciso nas chicanes.", telemetria: "Picos máximos de freio e retomada rápida." },
  { gp: "Azerbaijão", circuito: "Baku", curvas: 20, drs: 2, freio: "T1 e T15", marcha: "2ª no castelo", tipo: "street", estilo: "Equilibre reta longa com setor travado.", telemetria: "Evite wheelspin na saída da T16." },
  { gp: "Singapura", circuito: "Marina Bay", curvas: 19, drs: 3, freio: "T7 e T14", marcha: "2ª em hairpins", tipo: "street", estilo: "Rotação mecânica e controle térmico de freio.", telemetria: "Acelerador em pulsos curtos no setor final." },
  { gp: "EUA", circuito: "COTA", curvas: 20, drs: 2, freio: "T1 e T12", marcha: "2ª na T1", tipo: "technical", estilo: "Frente responsiva para setor em S.", telemetria: "Freada em declive com pressão progressiva." },
  { gp: "México", circuito: "Hermanos Rodríguez", curvas: 17, drs: 3, freio: "T1 e Stadium", marcha: "2ª no estádio", tipo: "high", estilo: "Altitude exige foco em estabilidade.", telemetria: "Baixa asa sem sacrificar tração." },
  { gp: "Brasil", circuito: "Interlagos", curvas: 15, drs: 2, freio: "S do Senna", marcha: "2ª no Bico de Pato", tipo: "technical", estilo: "Saída da Junção é determinante.", telemetria: "ERS na subida e controle de patinação." },
  { gp: "Las Vegas", circuito: "Las Vegas Strip", curvas: 17, drs: 2, freio: "T1 e T14", marcha: "2ª no hairpin", tipo: "street", estilo: "Baixo arrasto e estabilidade de frenagem.", telemetria: "Bias ligeiramente à frente na classificação." },
  { gp: "Qatar", circuito: "Lusail", curvas: 16, drs: 1, freio: "T1 e T6", marcha: "5ª no miolo", tipo: "high", estilo: "Apoio lateral e consistência de médio.", telemetria: "Throttle quase contínuo no S2." },
  { gp: "Abu Dhabi", circuito: "Yas Marina", curvas: 16, drs: 2, freio: "T6 e T9", marcha: "2ª no hairpin", tipo: "technical", estilo: "Boa rotação no S3 e reta forte.", telemetria: "Tração limpa pós T5 e T9." }
];

const teams = [
  ["Red Bull", "Alta estabilidade e tração", "Ataque entradas rápidas e aproveite saída de baixa."],
  ["Ferrari", "Frente muito responsiva", "Controle pneus traseiros em stint longo."],
  ["Mercedes", "Equilíbrio geral", "Pilotagem suave e consistente em frenagem."],
  ["McLaren", "Muito forte em média/alta", "Explore setores rápidos e ajuste baixa."],
  ["Aston Martin", "Carro amigável em corrida", "Gestão de pneus é ponto forte."],
  ["Alpine", "Boa troca de direção", "Ajuste diferencial para evitar patinação."],
  ["Williams", "Velocidade de reta", "Defenda retas e minimize perdas no miolo."],
  ["RB", "Pacote equilibrado", "Entrada suave e aceleração progressiva."],
  ["Kick Sauber", "Sensível ao setup", "Acerto estável e menos camber agressivo."],
  ["Haas", "Bom pico de volta", "Busque estabilidade traseira para consistência."],
].map(([nome, caracteristica, dica]) => ({ nome, caracteristica, dica }));

const setupTemplates = {
  street: {
    chuva: "Asa +4, suspensão macia, freio 95%, diferencial ON 52%.",
    qually: "Freio 98%, bias 56%, pressão dianteira +0.4 psi.",
    corrida: "Diferencial OFF 45%, convergência neutra e foco em tração.",
  },
  high: {
    chuva: "Asa intermediária, altura +1, freio 95% para segurança.",
    qually: "Asa baixa, ERS agressivo e dianteira firme nas chicanes.",
    corrida: "Pneus traseiros com pressão menor para stint longo.",
  },
  technical: {
    chuva: "Bias 1 ponto para trás, barras mais suaves.",
    qually: "Ride height baixo e resposta rápida de direção.",
    corrida: "Geometria menos agressiva para preservar pneus.",
  },
};

const typeLabel = { street: "Circuito de rua", high: "Alta velocidade", technical: "Técnica/mista" };

const el = {
  tracksGrid: document.getElementById("tracks-grid"),
  teamsGrid: document.getElementById("teams-grid"),
  teamHighlight: document.getElementById("team-highlight"),
  setupGrid: document.getElementById("setup-grid"),
  setupSelect: document.getElementById("setup-track-select"),
  search: document.getElementById("track-search"),
  filter: document.getElementById("track-filter"),
  dialog: document.getElementById("track-dialog"),
  dialogBody: document.getElementById("dialog-body"),
  closeDialog: document.getElementById("close-dialog"),
};

function telemetrySvg(track, compact = true) {
  const seed = track.gp.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const points = Array.from({ length: 14 }, (_, i) => {
    const x = 18 + i * 35;
    const y = 125 - ((seed * (i + 3)) % 80) + (i % 2 ? 12 : -8);
    return `${x},${Math.max(24, Math.min(150, y))}`;
  }).join(" ");

  const title = compact ? `${track.gp} • Telemetria` : `${track.gp} • Telemetria (imagem ilustrativa)`;
  const footer = compact ? `DRS ${track.drs} • ${track.curvas} curvas` : `Frenagem: ${track.freio} • Marcha: ${track.marcha}`;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675' viewBox='0 0 1200 675'>
    <defs>
      <linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#1e3766'/><stop offset='1' stop-color='#0d1424'/></linearGradient>
      <linearGradient id='line' x1='0' y1='0' x2='1' y2='0'><stop stop-color='#5ee9c1'/><stop offset='1' stop-color='#72e1ff'/></linearGradient>
    </defs>
    <rect width='1200' height='675' fill='url(#bg)'/>
    <g opacity='.18' stroke='#9ab2de'>${Array.from({ length: 9 }, (_, i) => `<line x1='0' y1='${100 + i * 55}' x2='1200' y2='${100 + i * 55}'/>`).join("")}</g>
    <polyline fill='none' stroke='url(#line)' stroke-width='8' stroke-linecap='round' stroke-linejoin='round' points='${points}' transform='translate(120,140) scale(2.2)'/>
    <text x='70' y='78' fill='#F6FAFF' font-size='48' font-family='Inter,Arial,sans-serif' font-weight='800'>${title}</text>
    <text x='70' y='130' fill='#A9BCE1' font-size='28' font-family='Inter,Arial,sans-serif'>${track.circuito} • ${typeLabel[track.tipo]}</text>
    <text x='70' y='620' fill='#A9BCE1' font-size='25' font-family='Inter,Arial,sans-serif'>${footer}</text>
  </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderStats() {
  document.getElementById("badge-tracks").textContent = `${tracks.length} pistas mapeadas`;
  document.getElementById("badge-teams").textContent = `${teams.length} equipes analisadas`;
  document.getElementById("badge-setups").textContent = `3 cenários de setup por pista`;
}

function openTrackDialog(track) {
  el.dialogBody.innerHTML = `
    <img class='dialog-img' src='${telemetrySvg(track, false)}' alt='Telemetria de ${track.gp}' />
    <h3>${track.gp} • ${track.circuito}</h3>
    <p><strong>Tipo:</strong> ${typeLabel[track.tipo]}</p>
    <p><strong>Pontos de frenagem:</strong> ${track.freio}</p>
    <p><strong>Marcha ideal:</strong> ${track.marcha}</p>
    <p><strong>Como fazer as curvas:</strong> ${track.estilo}</p>
    <p><strong>Leitura de telemetria:</strong> ${track.telemetria}</p>
    <p><em>Fonte oficial F1: tentativa automática limitada neste ambiente; imagem de telemetria ilustrativa dinâmica.</em></p>
  `;
  el.dialog.showModal();
}

function renderTracks() {
  const term = el.search.value.trim().toLowerCase();
  const filter = el.filter.value;
  const filtered = tracks.filter((track) => {
    const textMatch = `${track.gp} ${track.circuito}`.toLowerCase().includes(term);
    const typeMatch = filter === "all" || track.tipo === filter;
    return textMatch && typeMatch;
  });

  el.tracksGrid.innerHTML = filtered.map((track) => `
    <article class='card'>
      <img class='card__img' src='${telemetrySvg(track)}' alt='Gráfico de telemetria ${track.gp}' loading='lazy' />
      <div class='card__body'>
        <h3>${track.gp}</h3>
        <p><strong>${track.circuito}</strong> • ${track.curvas} curvas</p>
        <div class='tags'>
          <span class='tag drs'>DRS: ${track.drs}</span>
          <span class='tag brake'>Frenagem: ${track.freio}</span>
          <span class='tag gear'>Marcha: ${track.marcha}</span>
        </div>
        <p>${track.estilo}</p>
        <button class='btn-link' data-track='${track.gp}'>Ver análise completa</button>
      </div>
    </article>
  `).join("") || `<article class='card'><div class='card__body'><p>Nenhuma pista encontrada com esse filtro.</p></div></article>`;

  el.tracksGrid.querySelectorAll(".btn-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      const track = tracks.find((item) => item.gp === btn.dataset.track);
      if (track) openTrackDialog(track);
    });
  });
}

function renderSetups() {
  el.setupSelect.innerHTML = tracks.map((track) => `<option value='${track.gp}'>${track.gp} (${track.circuito})</option>`).join("");

  const renderCurrent = () => {
    const selected = tracks.find((track) => track.gp === el.setupSelect.value) || tracks[0];
    const setup = setupTemplates[selected.tipo];
    el.setupGrid.innerHTML = [
      ["🌧️ Chuva", setup.chuva],
      ["⏱️ Qualifying", setup.qually],
      ["🏁 Corrida", setup.corrida],
    ].map(([title, text]) => `
      <article class='card'>
        <img class='card__img' src='${telemetrySvg(selected)}' alt='Visual de ${selected.gp}' />
        <div class='card__body'>
          <h3>${title}</h3>
          <p><strong>${selected.gp}</strong> • ${typeLabel[selected.tipo]}</p>
          <p>${text}</p>
        </div>
      </article>
    `).join("");
  };

  renderCurrent();
  el.setupSelect.addEventListener("change", renderCurrent);
}

function teamSvg(name) {
  const color = `hsl(${name.length * 28 % 360} 70% 55%)`;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675' viewBox='0 0 1200 675'>
    <rect width='1200' height='675' fill='#0f1728'/>
    <rect x='70' y='88' width='1060' height='500' rx='30' fill='${color}' opacity='.2'/>
    <path d='M220 410h260l90-95h180l95 95h160l-45 70H160z' fill='${color}'/>
    <circle cx='330' cy='500' r='56' fill='#111'/><circle cx='880' cy='500' r='56' fill='#111'/>
    <text x='80' y='160' fill='#fff' font-size='56' font-family='Inter,Arial' font-weight='800'>${name}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderTeams() {
  el.teamsGrid.innerHTML = teams.map((team) => `
    <article class='card'>
      <img class='card__img' src='${teamSvg(team.nome)}' alt='Ilustração carro ${team.nome}' loading='lazy' />
      <div class='card__body'>
        <h3>${team.nome}</h3>
        <ul><li>${team.caracteristica}</li><li>${team.dica}</li></ul>
        <button class='btn-link' data-team='${team.nome}'>Destacar dicas</button>
      </div>
    </article>
  `).join("");

  const setHighlight = (team) => {
    el.teamHighlight.innerHTML = `<h3>${team.nome}</h3><p><strong>Perfil:</strong> ${team.caracteristica}</p><p><strong>Como extrair o melhor:</strong> ${team.dica}</p>`;
  };

  setHighlight(teams[0]);
  el.teamsGrid.querySelectorAll(".btn-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      const team = teams.find((item) => item.nome === btn.dataset.team);
      if (team) setHighlight(team);
    });
  });
}

function initTabs() {
  const buttons = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      panels.forEach((panel) => {
        panel.classList.remove("active");
        panel.hidden = true;
      });
      const panel = document.getElementById(button.dataset.tab);
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      panel.hidden = false;
      panel.classList.add("active");
    });
  });
}

function initEvents() {
  el.search.addEventListener("input", renderTracks);
  el.filter.addEventListener("change", renderTracks);
  el.closeDialog.addEventListener("click", () => el.dialog.close());
}

renderStats();
renderTracks();
renderSetups();
renderTeams();
initTabs();
initEvents();
