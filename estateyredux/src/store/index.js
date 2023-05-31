import { createStore, combineReducers } from 'redux'
import CategoryReducers from './reducers/category.reducers'
import ProductsReducers from './reducers/products.reducers'

const RootReducers = combineReducers ({
    categories: CategoryReducers,
    products: ProductsReducers
});

export default createStore(RootReducers)