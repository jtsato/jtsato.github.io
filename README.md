# Apresentações

Coleção de apresentações HTML independentes, sem Reveal.js e sem etapa de build.

Sirva a pasta com qualquer servidor estático e abra [index.html](index.html). Não abra os HTML diretamente pelo sistema de arquivos (`file://`): os players do YouTube exigem uma origem HTTP para receber o cabeçalho `Referer`.

Por exemplo, com Python instalado:

```powershell
python -m http.server 8080
```

Depois, acesse `http://localhost:8080/`. Em GitHub Pages, os vídeos também recebem a origem corretamente.

Cada apresentação é uma página única composta por elementos `<section class="slide">`.

As versões curta e completa de Clean Architecture estão disponíveis, respectivamente, em `clean-architecture.html` e `clean-architecture-full.html`.

## Navegação

- Próximo: seta para a direita/baixo, Espaço, Page Down ou botão `›`.
- Anterior: seta para a esquerda/cima, Page Up ou botão `‹`.
- Primeiro/último slide: Home/End.
- Em dispositivos touch: deslize para a esquerda ou direita.
- O endereço `#/N` abre diretamente o slide N.

O motor comum fica em `assets/slides.css` e `assets/slides.js`. Ele fornece transições, barra de progresso, controles, navegação por teclado/touch, deep links e fragmentos (`class="fragment"`).

## Recursos pendentes

`bizhack_weme.html` preserva os caminhos para cinco imagens que ainda não estão em `images/`: `mapeamento_oficina.png`, `modelo_negocios.png`, `home.png`, `details.png` e `hp-impressora.png`. Adicione-as nessa pasta para que esses slides sejam exibidos integralmente.
