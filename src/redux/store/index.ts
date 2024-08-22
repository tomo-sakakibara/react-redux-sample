// Storeを作成するもの
import { legacy_createStore as createStore } from 'redux'
// 定義したReducer
import { reducers } from '../reducers'

// 引数には Reducer と、Redux DevTools を利用可能にするためのものを渡します。
export const store = createStore(
    reducers,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);