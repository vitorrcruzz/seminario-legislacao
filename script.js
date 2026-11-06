'use strict';
// Conteúdo das fases derivado da síntese do Capítulo 11 produzida pela turma.
// Cada pergunta traz uma explicação didática e indica o tópico do trabalho.
const stages = [
    {
        icon: '🎨', label: 'ARTE & CULTURA', title: 'Um jogo pode ser arte?',
        scenario: 'Uma desenvolvedora afirma: “Um game é só código. Não pode ser considerado manifestação cultural.”',
        question: 'O que você responde?',
        options: ['Não, games são sempre apenas programas.', 'Sim, pois jogos podem reunir narrativa, música, imagens e expressão artística.', 'Apenas jogos de tabuleiro são considerados cultura.'],
        correct: 1,
        explain: 'Os jogos eletrônicos são obras multimídia. Além do software, podem expressar ideias e integrar a produção cultural. O capítulo explica por que não se reduzem a um mero passatempo.',
        source: 'Síntese do Capítulo 11 · itens 1, 3 e 4 · pp. 2–4.',
    },
    {
        icon: '🗣️', label: 'LIBERDADE', title: 'Quem decide o que pode aparecer?',
        scenario: 'Um jogo apresenta cenas violentas. Um comentarista quer proibir a obra apenas por esse motivo.',
        question: 'Qual princípio o capítulo pede para considerar?',
        options: ['A liberdade artística e de expressão, que não desaparece automaticamente por causa do tema.', 'Qualquer jogo violento deve ser proibido sem análise.', 'Jogos não possuem proteção de liberdade de expressão.'],
        correct: 0,
        explain: 'O capítulo relaciona os games à liberdade artística, protegida no Brasil pelo art. 5º, IX, da Constituição. Eventuais restrições dependem de justificativa jurídica e não decorrem automaticamente da presença de violência.',
        source: 'Síntese do Capítulo 11 · item 2 · pp. 2–3.',
    },
    {
        icon: '🧩', label: 'NATUREZA JURÍDICA', title: 'O game é feito de quê?',
        scenario: 'Seu estúdio reuniu código, personagens, trilha sonora, cenários e uma loja dentro do jogo.',
        question: 'Como o Direito pode olhar para esse produto?',
        options: ['Como software, e nada mais importa.', 'Apenas como um produto físico.', 'Como uma obra complexa, com componentes protegidos por regras diferentes.'],
        correct: 2,
        explain: 'O capítulo chama atenção para a natureza multifacetada dos jogos: programação, obras audiovisuais, personagens, músicas, direitos autorais e relações de consumo podem coexistir no mesmo game.',
        source: 'Síntese do Capítulo 11 · item 4 e 4.2 · pp. 3–5.',
    },
    {
        icon: '⚖️', label: 'MARCO LEGAL', title: 'Qual lei criou o Marco Legal?',
        scenario: 'O estúdio quer entender a lei brasileira voltada à indústria de jogos eletrônicos, seu desenvolvimento e sua atividade econômica.',
        question: 'Qual lei deve pesquisar?',
        options: ['Lei nº 8.078/1990, exclusivamente.', 'Lei nº 14.852/2024.', 'Lei nº 9.609/1998, exclusivamente.'],
        correct: 1,
        explain: 'A Lei nº 14.852, de 3 de maio de 2024, criou o Marco Legal para a Indústria de Jogos Eletrônicos. Ela estabelece diretrizes para o setor e medidas de estímulo ao desenvolvimento da indústria, respeitando a legislação aplicável.',
        source: 'Síntese do Capítulo 11 · itens 6 e 7 · pp. 5–6; Lei nº 14.852/2024.',
    },
    {
        icon: '🛡️', label: 'CRIANÇAS & ADOLESCENTES', title: 'Quem protege o jogador mais jovem?',
        scenario: 'Um jogo online é muito utilizado por crianças. A equipe pensa em lançar sem recursos de segurança ou acompanhamento dos responsáveis.',
        question: 'Qual decisão é a mais adequada?',
        options: ['Deixar o ambiente sem qualquer proteção, porque é entretenimento.', 'Eliminar todos os jogos voltados para crianças.', 'Prever recursos de segurança, privacidade e participação dos responsáveis.'],
        correct: 2,
        explain: 'O capítulo destaca proteção de crianças e adolescentes, privacidade, prevenção de situações abusivas e mecanismos que considerem a atuação de responsáveis. A ideia é promover o uso mais seguro, não proibir genericamente o acesso.',
        source: 'Síntese do Capítulo 11 · item 8 · p. 6.',
    },
    {
        icon: '🪙', label: 'MICROTRANSAÇÕES', title: 'Comprar moedas no jogo?',
        scenario: 'Uma criança encontra um item virtual pago e tenta comprar sem entender o valor em dinheiro real.',
        question: 'Como o estúdio deve agir?',
        options: ['Usar informações claras e mecanismos adequados de controle e proteção.', 'Esconder o valor real para facilitar compras.', 'Permitir qualquer cobrança sem mecanismos de proteção.'],
        correct: 0,
        explain: 'Compras dentro dos jogos e modelos pay-to-win envolvem transparência e proteção do consumidor. O capítulo aborda cuidados especiais com microtransações realizadas por crianças e adolescentes.',
        source: 'Síntese do Capítulo 11 · item 9 · p. 7.',
    },
    {
        icon: '🔐', label: 'PRIVACIDADE & DADOS', title: 'E os dados dos jogadores?',
        scenario: 'O jogo registra e-mail, hábitos de uso e histórico de compras dos usuários.',
        question: 'Qual atitude respeita melhor os direitos dos jogadores?',
        options: ['Compartilhar os dados livremente porque foram coletados em um jogo.', 'Tratar dados com finalidade legítima, transparência e proteção, observando a LGPD.', 'Ignorar privacidade, já que games são apenas entretenimento.'],
        correct: 1,
        explain: 'Jogos conectados coletam e utilizam dados pessoais. O capítulo relaciona esse tratamento à LGPD e aos deveres de cuidado das plataformas, especialmente quando há crianças e adolescentes.',
        source: 'Síntese do Capítulo 11 · item 10 · p. 7; LGPD, Lei nº 13.709/2018.',
    },
    {
        icon: '🏅', label: 'DIREITOS DE IMAGEM', title: 'Posso copiar um atleta?',
        scenario: 'O estúdio quer colocar em um jogo esportivo o rosto e o nome de um atleta real, sem autorização.',
        question: 'Qual é o caminho mais seguro?',
        options: ['Usar a imagem sem verificar direitos, porque a pessoa é famosa.', 'Copiar uma foto de uma rede social, pois é pública.', 'Verificar e obter as autorizações e licenças necessárias para o uso da imagem.'],
        correct: 2,
        explain: 'O capítulo ressalta a proteção da propriedade intelectual e da imagem. A presença pública de fotos e nomes não significa autorização automática para exploração comercial em um jogo.',
        source: 'Síntese do Capítulo 11 · item 11 · p. 8.',
    }
];

const $ = id => document.getElementById(id);
let index = 0, points = 0, answered = false, wrongStages = [];
const intro = $('intro'), game = $('game'), end = $('end');

function show(which) { [intro, game, end].forEach(el => el.classList.add('hide')); which.classList.remove('hide'); which.classList.remove('view'); void which.offsetWidth; which.classList.add('view'); window.scrollTo({ top: 0, behavior: 'instant' }); }
function reset() { index = 0; points = 0; answered = false; wrongStages = []; renderStage(); show(game); }
function renderStage() {
    answered = false; const s = stages[index];
    $('phaseNumber').textContent = `FASE ${String(index + 1).padStart(2, '0')} / 08`;
    $('score').textContent = String(points).padStart(3, '0');
    $('sceneIcon').textContent = s.icon; $('sceneLabel').textContent = s.label;
    $('sectionName').textContent = s.label;
    $('phaseTitle').textContent = s.title;
    $('scenario').textContent = s.scenario;
    $('question').textContent = s.question;
    $('feedback').classList.add('hide'); $('feedback').classList.remove('wrong');
    const choices = $('choices'); choices.replaceChildren();
    s.options.forEach((label, i) => {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'choice'; b.dataset.index = i;
        const n = document.createElement('span'); n.className = 'num'; n.textContent = String(i + 1).padStart(2, '0'); n.setAttribute('aria-hidden', 'true');
        const t = document.createElement('span'); t.textContent = label;
        b.append(n, t); b.addEventListener('click', () => choose(i)); choices.appendChild(b);
    });
    $('progressFill').style.width = `${(index / 8) * 100}%`;
    $('progressBar').setAttribute('aria-valuenow', String(index));
    const dots = $('dotsProgress'); dots.replaceChildren();
    stages.forEach((_, i) => { let e = document.createElement('div'); e.className = 'step-dot' + (i < index ? ' done' : i === index ? ' current' : ''); dots.appendChild(e); });
    $('nextBtn').textContent = index === 7 ? 'VER RESULTADO →' : 'PRÓXIMA FASE →';
    const first = choices.querySelector('button'); if (first) first.focus({ preventScroll: true });
}
function choose(value) {
    if (answered) return; answered = true;
    const s = stages[index], correct = value === s.correct;
    if (correct) { points += 100; } else { wrongStages.push(s.label); }
    $('score').textContent = String(points).padStart(3, '0');
    const choices = Array.from($('choices').children);
    choices.forEach((b, i) => { b.disabled = true; b.classList.add(i === s.correct ? 'correct' : i === value ? 'wrong' : 'faded'); });
    $('feedbackHead').textContent = correct ? '✓ Excelente decisão! +100 pontos' : '↻ Boa tentativa! Veja a explicação:';
    $('feedbackHead').className = 'feedback-head ' + (correct ? 'good' : 'bad');
    $('feedbackExplanation').textContent = s.explain;
    $('feedbackSource').textContent = s.source;
    $('feedback').classList.toggle('wrong', !correct);
    $('feedback').classList.remove('hide');
    $('nextBtn').focus({ preventScroll: true });
}
function next() { if (!answered) return; if (index < stages.length - 1) { index++; renderStage(); } else { finish(); } }
function finish() {
    $('finalScore').textContent = String(points).padStart(3, '0');
    $('resultTitle').textContent = points === 800 ? 'Perfeito, guardião dos games!' : 'Missão concluída!';
    $('resultSummary').textContent = wrongStages.length ? `Você acertou ${points / 100} de 8 decisões. Vale revisar: ${wrongStages.join(' · ')}. O importante é compreender os direitos que aparecem em cada situação.` : 'Você acertou as 8 decisões! Agora sabe explicar como a legislação, a cultura e a proteção de usuários se encontram nos jogos eletrônicos.';
    $('progressFill').style.width = '100%'; show(end);
}
$('startBtn').addEventListener('click', reset);
$('nextBtn').addEventListener('click', next);
$('retryBtn').addEventListener('click', reset);
$('restartInline').addEventListener('click', () => show(intro));
$('printBtn').addEventListener('click', () => window.print());
$('howBtn').addEventListener('click', () => { const d = $('helpDialog'); if (typeof d.showModal === 'function') d.showModal(); else alert('Leia cada situação, escolha uma das três alternativas e confira a explicação. São oito fases ao todo.'); });
document.addEventListener('keydown', event => {
    if (game.classList.contains('hide') || !['1', '2', '3', 'Enter'].includes(event.key) || event.altKey || event.ctrlKey || event.metaKey || event.repeat) return;
    if (event.key === 'Enter' && answered) { event.preventDefault(); next(); return; }
    if (!answered && ['1', '2', '3'].includes(event.key)) { event.preventDefault(); choose(Number(event.key) - 1); }
});