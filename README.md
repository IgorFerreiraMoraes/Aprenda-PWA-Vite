# Vite-PWA-Tutorial
> Crie PWA com [Vite](https://vitejs.dev/): Um Guia Simples Passo a Passo.

Progressive Web Apps (PWAs) são páginas que podem ser instaladas diretamente do navegador, proporcionando experiências nativas sem a complexidade de lojas de aplicativos. Este repositório visa ensinar a criação delas.

## Resultado do Guia
Ao seguir o guia fornecido neste README, você poderá transformar qualquer projeto gerado com Vite em uma PWA totalmente funcional. No repositório há um exemplo prático usando o aplicativo padrão de contador.

* ### Acesse e Teste
    Esta aplicação está hospedada no GitHub Pages. [Acesse Aqui.](https://github.com/IgorFerreiraMoraes/Vite-PWA-Tutorial)

* ### Instale Localmente
    * Clonando o Repositório
        ```
        git clone https://github.com/IgorFerreiraMoraes/Vite-PWA-Tutorial
        cd Vite-PWA-Tutorial
        ```
    * Instalando Dependências
        ```
        npm install
        ```
    * Visualizando o Resultado
        ```
        npm run build
        npm run preview
        ```
        O Service Worker (SW) é criado ao construir a aplicação, por isso **não funciona** apenas com `npm run dev`.

## Criação do Projeto com Vite
1. Para começar, rode o seguinte comando: `npm create vite@latest`.
2. Depois, siga as instruções para: 
    * Dar um nome ao projeto
    * Escolher um framework/biblioteca entre Vanilla, Vue, React, Svelte e outros
    * Escolher entre JavaScript e TypeScript
3. Instale as dependências
    ```
    cd nome-do-projeto
    npm install
    ```
