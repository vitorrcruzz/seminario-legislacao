# GAME LEGAL — Missão Marco Legal dos Games

Jogo educativo baseado no Capítulo 11 de **Manual de Direito Digital** e na síntese produzida em aula. Projeto do seminário de Vitor Cruz e Vinicio Dominato.

## Estrutura

```text
seminario/
├── index.html   # Estrutura das telas
├── style.css    # Aparência e responsividade
└── script.js    # Perguntas, pontuação e lógica
```

São 8 fases, com três alternativas cada, explicações sobre o assunto e pontuação até 800 pontos. Sem dependências externas.

## Como executar

Mantenha os três arquivos juntos na pasta `seminario` e abra `index.html` no navegador. Funciona localmente, mesmo sem internet.

## Como publicar no GitHub Pages

1. Crie um repositório público no GitHub.
2. Envie a pasta `seminario` com os três arquivos.
3. Em **Settings → Pages**, selecione **Deploy from a branch**, branch `main`, pasta `/(root)`.
4. Quando a publicação estiver ativa, acesse `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/seminario/`.

Se o repositório inteiro se chamar `seminario` e você quiser que o jogo abra diretamente na página inicial, coloque os três arquivos na **raiz do repositório**, em vez de uma subpasta. Nesse caso, o endereço será `https://SEU-USUARIO.github.io/seminario/`.

**Importante:** `index.html` usa caminhos relativos para `style.css` e `script.js`; não mova um deles isoladamente.

## Créditos e fontes

Síntese do Capítulo 11 sobre Jogos Eletrônicos e a Lei nº 14.852/2024, de autoria de Mathews Mizael, Vinicio Dominato e Vitor Cruz, a partir de MAGRO, Américo Ribeiro; ANDRADE, Landolfo. *Manual de Direito Digital*. 5. ed. São Paulo: JusPODIVM, 2025.

- [Lei nº 14.852/2024 — Senado Federal](https://legis.senado.leg.br/norma/38444921/publicacao/38448346)
- [LGPD — Câmara dos Deputados](https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html)

Finalidade didática; não constitui aconselhamento jurídico.
