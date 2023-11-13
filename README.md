# Vite-PWA-Tutorial

> Crie PWAs com [Vite](https://vitejs.dev/): Um Guia Simples Passo a Passo

Progressive Web Apps (PWAs) são páginas que podem ser instaladas diretamente do navegador, proporcionando experiências nativas sem a complexidade de lojas de aplicativos. Este repositório visa ensinar a criação delas.

## Resultado do Guia

Ao seguir o guia fornecido neste README, você poderá transformar qualquer projeto gerado com Vite em uma PWA totalmente funcional. No repositório, há um exemplo prático usando o aplicativo padrão de contador.

-   ### Acesse e Teste

    Esta aplicação está hospedada no GitHub Pages. [Acesse Aqui.](https://github.com/IgorFerreiraMoraes/Vite-PWA-Tutorial)

-   ### Instale Localmente
    -   Clonando o Repositório
        ```bash
        git clone https://github.com/IgorFerreiraMoraes/Vite-PWA-Tutorial
        cd Vite-PWA-Tutorial
        ```
    -   Instalando Dependências
        ```bash
        npm install
        ```
    -   Visualizando o Resultado
        ```bash
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
    ```bash
    cd nome-do-projeto
    npm install
    ```

## Instalação do Plugin [VitePWA](https://vite-pwa-org.netlify.app/)

1. Instale o plugin como dependência de desenvolvimento: `npm install -D vite-plugin-pwa`
2. Se o projeto foi criado como vanilla, é necessário criar um arquivo `vite.config.js` / `vite.config.ts`, conforme a linguagem escolhida. Caso contrário, apenas acesse o arquivo existente.
3. No arquivo de configuração do Vite, é preciso o seguinte:

    ```# File: vite.config.ts
    import { defineConfig } from 'vite';
    import { VitePWA } from 'vite-plugin-pwa';

    export default defineConfig({
        plugins: [
            VitePWA({ registerType: 'autoUpdate' }),
        ],
    });
    ```

    Se algum framework estiver sendo usado, haverá um import para seu plugin correspondente, que estará na lista de plugins. Mantenha a configuração inicial e adicione o VitePWA.
