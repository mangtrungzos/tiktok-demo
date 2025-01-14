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
- Điều kiện để hiện nút clear khi có searchValue (!!searchValue)
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

> UI header - 7
\\ Change font family
\\ Change header icons
\\ Create component image

- icons use svg tag to make it easier when changing icons color (`fill="..."`)

```jsx
   <Image
      className={cx('user-avatar')} 
      src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5b0d5f71405f0d8e4d545cba13c6dff7.jpeg?lk3s=a5d48078&nonce=57800&refresh_token=f28f792b896ae3ec1dc1c05420419fe5&x-expires=1736132400&x-signature=NIhVC1EMXvMFq%2B%2Bpchv1RSG0mOk%3D&shp=a5d48078&shcp=81f88b70" 
      alt='Chau Ngan'                                
   />
``` 

> Truyền như này nếu bị lỗi contains của tippy thì ta sẽ sử dụng `forwardRef` - index.js/Images

- use fallback for images in situation error image: Nếu đường dẫn hình ảnh không tồn tại hoặc bị lỗi, bạn có thể sử dụng một hình ảnh thay thế mặc định


\\ 15. Build logic header 
> Logic header #1
# Analysis

> Search field:
1. Don't have to focus when F5 website
2. Type in the field, show button `x` and when clicking it will delete word in the field

> two-way binding:
- for close and loading in the search field

- set a variable boolean to represent status whether it is focused the input or not, blur 
- onClickOutside: xử lí khi blur ra ngoài thì mục tìm kiếm sẽ bị ẩn đi /index.js/Search
- onFocus(): show the search results

\\ 16. Build Logic header
> Knowledge need to be have:
1. Promise
2. Fetch API
3. RESTful API
4. JSON

- fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${searchValue}&type=less`).
=> Sẽ sinh ra lỗi `length` nếu searchValue được truyền vào là một chuỗi rỗng.
=> Có thể check lỗi ở tab network của website(payload).

- Sử dụng `trim()` để loại bỏ khoảng trống lúc typing.
- Tránh vi phạm mã hóa kí tự trên url ta sử dụng `encodeURIComponent()` - `always have this`: khi nhập dữ liệu có kí tự đặc biệt thì sẽ không sinh ra lỗi.

# Prolbem: Sending continuous requests to server
- `How to avoid error sending continuous request to server: when the user stops typing, the search will be performed`.
> debounce: Khi gặp một chuỗi tình thế xảy ra liên tục, thì ta chỉ muốn thực hiện một hành động cuối cùng khi ngững lại.

\\ 17. Axios Library
- Thư viện gọi API (Tối ưu việc gọi API)
- Ngoài ra còn: super agent

- 2 ways call API: XMLHttpRequest / Fetch

- use XMLHttpRequest

- With file handle API we'll create /api-service folder

\\ 18. Fix and finish header
- Link logo về trang chủ -> OK
- Sửa phông chữ trong ô tìm kiếm -> OK
- Không cho nhập kí tự đầu tiên là space trong ô tìm kiếm -> OK
- Bỏ qua hành vi focus vào ô tìm kiếm khi nhấn submit -> OK
- Không ẩn menu khi click vào avatar -> OK
- Xử lý thanh cuộn trong menu đa cấp, khi có nhiều content
- Thêm style overlay cho thanh cuộn body
- Sửa title trang và update favicon
- Fix warning thư viện Tippy

- `overlay`: Thuộc tính css dành cho scroll bar, phủ lên body

- `fix tippy warning`: appendTo={() => document.body} - Set in the tag parent where it contains tippy or we can cover with <div>

\\ 19. Refactor and optimize code
- apiService -> services
- src/components/Layout -> src/Layout
- routes config
- create file env: .env.local (for local), .env.development(for developer in team), environment production (.env.production)

\\ 20. PropTypes : validate props
- propTypes for <AccountItem>
- propTypes for <Button> isRequired
- instanceOf(...): là một thực thể được tạo ra bởi một constructor | Dùng để check props có phải instanceOf của constructor.
- instanceOf trong OOP: là một đối tượng được tạo ra bởi một class.
```jsx
const a = [1, 2];
console.log(a instanceOf(array));
```

\\ 21. propTypes
- case (Nhận một children duy nhất): Có comp luôn chỉ muốn nhận một children duy nhất, không nhận 2 children
      ```jsx
         function Global({children}) {
            return React.Children.only(children);
         }
      ```

\\ 22. optimize Header
- Chỉ có một state thì không cần thiết dùng useCallback() cho sử lý hàm
- Trừ khi có nhiều state trở lên, hoặc khi có một state bị set lại mà không có nhiều thành phần UI dùng state đó trong cùng comp
- comp `Search` có thể sử dụng useMemo() để tránh mỗi lần bị re-render lại khi searchResult thay đổi

- Search close bị che khi text dài 
-  bug là khi dùng primary cùng to= hay href= thì nó ăn cái color = text color trong Global Style
- Review lại các components