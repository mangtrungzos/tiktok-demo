# Prolbem: Sending continuous requests to server
- `How to avoid error sending continuous request to server: when the user stops typing, the search will be performed`.
> debounce: Khi gặp một chuỗi tình thế xảy ra liên tục, thì ta chỉ muốn thực hiện một hành động cuối cùng khi ngững lại.
> Tạo ra một custom hook
```jsx
// General format
// delay: 500-800
import { useState, useEffect } from 'react';

function UseDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

export default UseDebounce;

// Create a valuable with UseDebounce(value, delay)

// Use in place of useEffect()

// How to works:
/**
 * I:
 * 1. Lần đầu tiên comp chạy thì debounced giá trị là chuỗi rỗng (searchValue được set là '')
 * 2. searchValue truyền vào searchValue của debounced
 * 3. (useDebounce.js) value nhận chuổi rỗng -> debounceValue ('')
 * 4. Cuối hàm return debounceValue ('')
 * 
 * 5. Khi debounced là chuỗi rỗng đưa vào deps của useEffect()
 * 6. Lọt vào if -> return -> không xuống fetch APi
 * 
 * II:
 * 1. type 'hoaa'
 * 2. searchValue of debounced recieved value(hoaa)
 * 3. UseDebounce(value, delay) -> value = hoaa
 * 4. Nhưng init state chỉ lấy lần đầu tiên
 * 5. value lọt deps của useEffect() (./useDebounce.js) -> deps 
 * 6. Lọt vào setTimeout, 500ms sau mới chạy nên nó sẽ return về debounceValue
 * => Lần 2 vẫn '', Nếu sau 500ms không làm gì thì debounceValue mới trở thành 'hoaa'
 * 
 * III: Khi ngững gõ
 * 1. Lọt vào value of deps, sau 500ms debounceValue = 'hoaa'
 * 2. state change -> re-render -> return debounceValue
*/
```

# Axios Library
- optimize call API structure