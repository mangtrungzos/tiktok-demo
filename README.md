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

> UI header
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
3. Install @tippyjs/react
- used to create popper | popper: Cách xây dựng cửa sổ bật lên tự động
*Key word: tippy react props*

- object-fit: cover | Giúp ảnh giữ đúng tỉ lệ và tràn hình tròn

> UI header - 2
- Build button
- Phân tích thiết kế: Điểm chung của những button là gì | Có thể gom chung vào 1 comp | Có thể tái sử dụng không?
```jsx
const cx = classNames.bind(styles);

const classes = cx('wrapper, {
   primary
});
```
- CSS properties: currentColor | Nó sẽ ăn theo màu của thuộc tính css phía trên nó
- user-select: none; | remove select word

> UI header - 3
\\ When logined in
- Menu 1 level - Menu 2 level

\\ When not logined in 

- Link local we use `to`
- JSON.stringify(): convert object to string

\\ Hierachy mindset
- use Array: - hover vào nó sẽ render ra 1 list mảng đầu tiên
             - Menu 1 level - cả menu là phần tử đầu tiên của một mảng 
             - Click on English thì sẽ render 1 menu khác | Cả menu list này (level 2) sẽ push vào mảng làm phần tử thứ 2 của mảng 
             - Tại thời điểm hiện tại lúc nào cũng sẽ render phần tử cuối cùng của mảng
             - Khi back chỉ cần xóa remove phần tử cuối cùng của mảng

- Menu level 2: set name: children
- array.length - 1: slice(0, arr.length - 1) - Cắt từ phần tử số 0 đến phần tử gần cuối cùng
> Chỉ số kết thúc (không bao gồm phần tử ở vị trí này, tức là phần tử cuối cùng)

> UI header - 4
\\ onHide (tippy)
\\ tooltip (tippy) : Khi hover vào thì nó sẽ hiện một cái message liên quan tới cái icon đó

> 31:05