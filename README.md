# Aprenda PWA com Vite

> Crie PWAs com [Vite](https://vitejs.dev/): Um Guia Simples Passo a Passo para Iniciantes

-   [Introdução](#introdução)
    -   [Resultado do Guia](#resultado-do-guia)
-   [Acesse e Teste](acesse-e-teste)
-   [Instale Localmente](#instale-localmente)
-   [Criação do Projeto com Vite](#criação-do-projeto-com-vite)
-   [Instalação do Plugin VitePWA](#instalação-do-plugin-vitepwa)
-   [Adição de Requisitos Mínimos Para PWA](#adição-de-requisitos-mínimos-para-pwa)
    -   [Entry Point](#entry-point)
    -   [Manifesto](#manifesto)
    -   [Ícones e Imagens](#ícones-e-imagens)
-   [Deploy da Sua PWA](#deploy-da-sua-pwa)

## Introdução

Progressive Web Apps (PWAs) são páginas que podem ser instaladas diretamente do navegador, proporcionando experiências nativas sem a complexidade de lojas de aplicativos. Este repositório visa ensinar a criação delas.

-   ### Resultado do Guia

    Ao seguir o guia fornecido neste README, você poderá transformar qualquer projeto gerado com Vite em uma PWA totalmente funcional. No repositório, há um exemplo prático usando o aplicativo padrão de contador.

## Acesse e Teste

Esta aplicação está hospedada no GitHub Pages. [Acesse Aqui](https://github.com/IgorFerreiraMoraes/Vite-PWA-Tutorial).

É possível abrir no navegador, instalar no seu computador ou celular, realizar o teste do Lighthouse e ver que está tudo de acordo e pronto para ser uma PWA.

## Instale Localmente

-   Clonando o Repositório

```
git clone https://github.com/IgorFerreiraMoraes/Vite-PWA-Tutorial
cd Vite-PWA-Tutorial
```

-   Instalando Dependências

```
npm install
```

-   Visualizando o Resultado

```
npm run build
npm run preview
```

O Service Worker (SW) é criado ao construir a aplicação, por isso **não funciona** apenas com `npm run dev`.

## Criação do Projeto com Vite

1. Para começar, execute o comando:
    ```
    npm create vite@latest
    ```
    Ele inicia um novo projeto Vite na versão mais recente.
2. Em seguida, siga as instruções para:
    - Dar um nome ao projeto
    - Definir um framework/biblioteca entre Vanilla, Vue, React, Svelte e outros
    - Escolher entre JavaScript e TypeScript
3. Instale as dependências
    ```
    cd nome-do-projeto
    npm install
    ```

## Instalação do Plugin [VitePWA](https://vite-pwa-org.netlify.app/)

> Este plugin gera o Web Manifest, que define como a aplicação aparece nos dispositivos, e o Service Worker, que permite tarefas em segundo plano.

1. Instale o plugin como dependência de desenvolvimento:
    ```
    npm install -D vite-plugin-pwa
    ```
2. Se o projeto foi gerado como vanilla, é necessário criar um arquivo `vite.config.js` / `vite.config.ts`, conforme a linguagem escolhida, na pasta raíz. Caso contrário, apenas acesse o arquivo existente.
3. No arquivo de configuração do Vite, é preciso o seguinte:

    ```
    import { defineConfig } from 'vite';
    import { VitePWA } from 'vite-plugin-pwa';

    export default defineConfig({
        plugins: [
            VitePWA({ registerType: 'autoUpdate' }),
        ],
    });
    ```

    Se algum framework estiver sendo usado, haverá um import do seu plugin correspondente, que estará na lista de plugins. Mantenha a configuração inicial e adicione o VitePWA.

## Adição de Requisitos Mínimos Para PWA

Sem esses ítens essenciais, os navegadores não reconhecerão a aplicação como PWA e não será possível instalá-la. Também preciso frizar que existem outras características que podem ser adicionadas a uma aplicação / página. Para saber mais, [entre aqui](https://developer.mozilla.org/en-US/docs/Web/Manifest).

-   ### Entry Point

    A seção `<head>` do arquivo `index.html` **deve** conter os seguintes elementos:

    -   Título
    -   Descrição
    -   Viewport
    -   Favicon
    -   Ícone para Apple Touch 180x180 (Pode ser o próprio favicon)
    -   Cor Tema

    Por exemplo, um modelo de como ficaria o `<head>`:

    ```
    <head>
        <meta charset="UTF-8" />

        <title>Título da Aplicação</title>

        <meta name="description"
        content="Descrição da aplicação" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/svg+xml" href="/vite.svg" />

        <link rel="apple-touch-icon" href="/vite.svg" sizes="180x180" />

        <meta name="theme-color" content="#ffffff" />
    </head>
    ```

-   ### Manifesto

    O manifesto é um arquivo JSON que fornece as informações que o navegor precisa para instalar uma PWA. São elas:

    -   Nome
    -   Nome Curto
    -   Descrição
    -   Cor Tema (a mesma usada em `index.html`)
    -   Ícone com pelo menos 512x512px

    O VitePWA gera o arquivo automaticamente no processo de `build`. Para isso, inclua os novos parâmetros em `vite.config.ts`:

    ```
    VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['vite.svg'], // ícones e imagens
    	manifest: {
    		name: 'Nome da Aplicação',
    		short_name: 'Aplicação',
    		description:
    		    'Descrição da aplicação',
    		theme_color: '#ffffff',
    		icons: [
    		    {
    			    src: '/vite.svg',
    			    sizes: 'any', // estou usando svg, então serve para qualquer tamanho
    			    type: 'image/svg+xml',
    			    purpose: 'any maskable',
    		    },
    		],
        },
    }),
    ```

-   ### Ícones e Imagens
    Uma aplicação PWA pode estar em diversos ambientes diferentes: Android, iOS, diferentes navegadores. Cada um desses tem tamanhos recomendados distintos para ícones e muitas vezes redimensionar as imagens não é o melhor caminho. Caso queira, existem [geradores de assets](https://vite-pwa-org.netlify.app/assets-generator/) para PWAs que criam ícones nos tamanhos certos.

## Deploy da Sua PWA

Com isso, sua _configuração mínima_ está pronta! Para testar, faça o seguinte:

```
npm run build
npm run preview
```

Ao abrir o `localhost`, você pode verificar que há um novo símbolo na barra, ele serve para instalar a aplicação.

Plataformas como Vercel e Netlify fazem o processo de build por conta própria. Já com o GitHub Pages, é necessário criar um novo branch com o diretório dist e defini-lo como origem nas configurações ou usar GitHub actions.
