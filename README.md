# webpack-demo


# Para este projeto iremos utilizar o webpack 4


Instalar dependencias de desenvolvimento e o servidor
    `npm i --save-dev webpack@">=4.0.0 <5.0.0" webpack-cli webpack-dev-server`
    

Plugin que irá compilar os html na pasta /dist
    `npm i --save-dev html-webpack-plugin`

Para limpar a pasta /dist
    `npm i --save-dev clean-webpack-plugin`


Instalar o Babel par js mais moderno
    `npm i --save-dev @babel/core @babel/preset-env babel-loader`


Para os arquivos de estilo:
    `npm i --save-dev sass-loader node-sass css-loader mini-css-extract-plugin`

    sass-loader:    biblioteca para Webpack que compila arquivos Sass/SCSS para CSS;
    node-sass:      permite que você compile arquivos .scss em .css de forma nativa e rápida.
    css-loader:     interpreta os arquivos CSS e trata questões como, @import e url().
    mini-css-extract-plugin: extrai os códigos CSS em arquivos separados.


Para carregamento de arquivos:
    `npm i --save-dev file-loader`


Script para desenvolvimento:
    `"serve": "NODE_ENV=development webpack serve -d --hot --config webpack.config.js --watch --mode development"`

NODE_ENV=development: constante de ambiente do Node.js configurada para desenvolvimento.
webpack-dev-server biblioteca que executa o servidor local;
-d: modo de debug;
--hot para hot-reloading, o qual salva o estado da aplicação enquanto lhe permite realizar alterações;
--config webpack.config.js: diz qual arquivo será usado como configuração. Pode ser omitido
--watch: para observar mudanças na aplicação;
--mode development: Aqui finalmente especificamos que o Webpack rode em modo de desenvolvimento;


O mini-css-extract-plugin é apenas para produção, como alternativa iremos utilizar:
    npm i --save-dev style-loader


Scripts de produção:
    "build:test": "NODE_ENV=test webpack --mode none",
    
    "build:production": "NODE_ENV=production webpack --mode production",
    - Aqui utilizaremos um biblioteca para minificação dos estilos:
        npm i --save-dev optimize-css-assets-webpack-plugin
