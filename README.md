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
```jsx
/**
 * 1. Create GlobalStyles component
 * 2. Install SASS libary: `npm i -D sass` - Use only in production environment 
 * 3. Reset CSS : npm install --save normalize.css
 * 5. Default CSS: font-family, font-size, line-height
*/
@import 'normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

:root {
    --primary: #fe2c55;
}

html {
    font-size: 62.5%;
}

body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
}
```

\\ 12. configuration Router/Layout
```jsx
/**
 * 1. Phân tích tổng quan Layout
 * 2. Cài đặt react-router-dom: npm i react-router-dom
 * 3. Đưa cấu hình routes ra ngoài
 * 4. Xây dựng cơ chế tải layout
*/
```
1. Overview of layout analysis
- 4 Layout

3. VD muốn thêm một trang /pages/profile
- Thêm một file trang profile
- Nạp profile vào trong /routes

4. cơ chế tải layout
- default layout: header, sidebar, content (create Default Layout)
  - <Header /> -> div: <Sidebar /> -> div: <Content />
  - layout: null - default not have layout
  - Fragment: Chỉ là thẻ để chứa, chứ không sinh ra thẻ thật ở trong DOM
  - children: content truyền từ ngoài vào


\\ 13. Build Layout
- Header module sass - Component/header
- install classnames

1. Create header in component (this file will be reused)
   Create header module scss
2. Create sidebar 
   Create sidebar module scss
3. Content : flex: 1 - Chiếm khoảng trống còn lại trong vùng flex css

\\ 14. Build UI

1. Get icon tiktok and create file assets/images/logo.svg 
   - assests là một folder chứa những file tĩnh
2. Install Font deps
   - Push it into the package.json
```jsx
"@fortawesome/fontawesome-svg-core": "^1.3.0",
"@fortawesome/free-brands-svg-icons": "^6.0.0",
"@fortawesome/free-regular-svg-icons": "^6.0.0",
"@fortawesome/free-solid-svg-icons": "^6.0.0",
"@fortawesome/react-fontawesome": "^0.1.17",
```