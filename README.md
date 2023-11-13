# Vite-PWA-Tutorial

> Crie PWAs com [Vite](https://vitejs.dev/): Um Guia Simples Passo a Passo

Progressive Web Apps (PWAs) são páginas que podem ser instaladas diretamente do navegador, proporcionando experiências nativas sem a complexidade de lojas de aplicativos. Este repositório visa ensinar a criação delas.

## Resultado do Guia

Ao seguir o guia fornecido neste README, você poderá transformar qualquer projeto gerado com Vite em uma PWA totalmente funcional. No repositório, há um exemplo prático usando o aplicativo padrão de contador.

-   ### Acesse e Teste

    Esta aplicação está hospedada no GitHub Pages. [Acesse Aqui.](https://github.com/IgorFerreiraMoraes/Vite-PWA-Tutorial)

-   ### Instale Localmente
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

1. Para começar, rode o seguinte comando: `npm create vite@latest`.
2. Depois, siga as instruções para:
    - Dar um nome ao projeto
    - Escolher um framework/biblioteca entre Vanilla, Vue, React, Svelte e outros
    - Escolher entre JavaScript e TypeScript
3. Instale as dependências
    ```
    cd nome-do-projeto
    npm install
    ```

## Instalação do Plugin [VitePWA](https://vite-pwa-org.netlify.app/)

1. Instale o plugin como dependência de desenvolvimento: `npm install -D vite-plugin-pwa`
2. Se o projeto foi criado como vanilla, é necessário criar um arquivo `vite.config.js` / `vite.config.ts`, conforme a linguagem escolhida, na pasta raíz. Caso contrário, apenas acesse o arquivo existente.
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

    Se algum framework estiver sendo usado, haverá um import para seu plugin correspondente, que estará na lista de plugins. Mantenha a configuração inicial e adicione o VitePWA.

## Adição de Requisitos Mínimos Para PWA

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

    O VitePWA gera o arquivo automaticamente no processo de `build`. Inclua os novos parâmetros em `vite.config.ts`:

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
    	,
    }),
    ```

-   ### Ícones e Imagens
    Uma aplicação PWA pode estar em diversos ambientes diferentes: Android, iOS, diferentes navegadores. Cada um desses tem tamanhos recomendados distintos para ícones e muitas vezes redimensionar as imagens não é o melhor caminho. Caso queira, existem [geradores de assets](https://vite-pwa-org.netlify.app/assets-generator/) para PWAs que criam ícones nos tamanhos certos.
