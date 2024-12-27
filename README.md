\\ .env.local - PORT=3001

# tiktok-demo
\\ 1. npx create-react-app tiktok-ui

\\ 2. customize-cra: override webpack config

\\ 3. npm i ... -d 
> -d: environmental development

\\ github: babel-plugin-module-resolver
\\ 4. setting babel-plugin-module-resolver

\\ 5. create .babelrc in root directory
```jsx
"plugins": [
      ["module-resolver", {
        "alias": {
          "@": "./src"
        }
      }]
]
```
> "alias": "@ or ~" references to the folder "./src"

\\ 6. create jsonconfig.json in root directory

\\ github: customize-cra
\\ 7. custom-cra : config-overrides.js
```jsx
const { override } = require("customize-cra");
  
module.exports = override();
```
> "~": the way to link file - .babelrc and only use when you need to link from ../../ 
```jsx
import App from '../../App'
// change to
import App from '~/App'
```
\\ 8. setup and configuration of `Prettier` in root folder
> `Prettier` help reformat file code: html, css, JS, JSON become more tidy

\\ 9. create vscode/setting.json

\\ 10. configuration CSS/SASSS

