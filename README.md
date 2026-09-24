# Painel de Algoritmos — Atividade 2 (ADS / Unifor)

Aplicação web front-end para executar os algoritmos da Atividade 1: **número primo, somatório, Fibonacci, MDC, quicksort e contagem em intervalo**.

## Como rodar

Não precisa de servidor nem de instalação.

1. Abra a pasta `algoritmos-ads-unifor` no VS Code (`File → Open Folder...`).
2. Abra `index.html` e clique em "Go Live" (extensão Live Server) ou simplesmente dê duplo clique no arquivo para abrir direto no navegador.
3. Escolha um algoritmo no menu à esquerda.
4. Preencha os campos e clique em **Executar**.
5. Clique em "Ver código-fonte" para mostrar a função JavaScript correspondente — útil na hora de depurar no vídeo da etapa 1.

## Estrutura

```
algoritmos-ads-unifor/
├── index.html   ← estrutura da página
├── style.css    ← estilos visuais
├── script.js    ← implementação dos 6 algoritmos + lógica da interface
└── README.md
```

Para depurar no VS Code (etapa 1), abra `script.js` — é onde ficam as funções `isPrimo`, `somatorio`, `fibonacci`, `mdc`, `quicksort` e `contarIntervalo`.

## Publicando no GitHub (etapa 3 da atividade)

Passo a passo pelo terminal, dentro da pasta `algoritmos-app`:

```bash
git init
git add .
git commit -m "Atividade 2: app web para os algoritmos + link do vídeo"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/algoritmos-ads-unifor.git
git push -u origin main
```

Substitua `SEU-USUARIO` e o nome do repositório pelos seus. Se preferir, crie o repositório primeiro em github.com (botão "New repository") e depois rode os comandos acima.

### Publicar a versão online (opcional, mas recomendado)
No repositório no GitHub: **Settings → Pages → Branch: main → pasta "/ (root)" → Save**.
Em alguns minutos o app fica acessível em `https://SEU-USUARIO.github.io/algoritmos-ads-unifor/`.

## Sobre a etapa 1 (vídeo de debug)

O vídeo é gravado por você no VS Code (obrigatório aparecer na câmera, sem avatar), mostrando, num dos códigos-fonte da Atividade 1:
- execução passo a passo (F10 / "Step Over");
- "Step Into" (F11) numa função sem breakpoint;
- alteração de variáveis pelo "Debug Console" durante a pausa;
- criação de um breakpoint condicional (clique direito na margem esquerda da linha → "Add Conditional Breakpoint").

Depois de gravar (ex.: com a extensão Vidyard), adicione o link do vídeo neste README antes do `git push`, por exemplo:

```
## Vídeo de debug
https://share.vidyard.com/watch/SEU-LINK
```
