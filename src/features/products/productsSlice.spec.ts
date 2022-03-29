import IProduct from "./product/productInterface"
import productReducer, { fetchProducts, filterProducts, IProductsState } from "./productsSlice"

describe('Products Reducer', () => {

  const productOne: IProduct = {
    id: 0,
    name: "Generic Concrete Chicken",
    price: 173.0,
    category: ['Meat'],
    img: "img1.jpg",
    instock: true
  }

  const productTwo: IProduct = {
    id: 1,
    name: "Fantastic Plastic Chair",
    price: 320.0,
    category: ['Furniture'],
    img: "../assets/imgs/1.jpeg",
    instock: true
  }

  const initialState: IProductsState = {
    status: 'idle',
    products: [],
    filteredProducts: []
  }

  const fetchedProductsState: IProductsState = {
    status: 'idle',
    products: [productOne, productTwo],
    filteredProducts: [productOne, productTwo]
  }
  
  it('should handle initial state', () => {
    expect(productReducer(undefined, {type: undefined})).toEqual(initialState)
  })

  it('should handle fetchProducts pending status', () => {
    const state = productReducer(initialState, { type: fetchProducts.pending.type})
    expect(state).toEqual({...initialState, status: 'loading'})
  })

  it('should handle fetchProducts fulfilled status', () => {
    const state = productReducer(initialState, { type: fetchProducts.fulfilled.type, payload: [productOne]})
    expect(state).toEqual({...initialState, products: [productOne], filteredProducts: [productOne]})
  })

  it('should handle fetchProducts error status', () => {
    const state = productReducer(initialState, {type: fetchProducts.rejected.type, payload: { error: 'Some Error'}})
    expect(state).toEqual({...initialState, status: 'error'})
  })

  it('should handle default filter', () => {
    const state = productReducer(fetchedProductsState, filterProducts({instock: false, name: ''}))
    expect(state).toEqual({...fetchedProductsState, filteredProducts: [productOne, productTwo]})
  })

  it('should handle filtering by inStock', () => {
    const state = productReducer(fetchedProductsState, filterProducts({instock: true, name: ''}))
    expect(state).toEqual({...fetchedProductsState, filteredProducts: [productOne]})
  })

  it('should handle filtering by name', () => {
    const state = productReducer(fetchedProductsState, filterProducts({instock: false, name: 'Fab'}))
    expect(state).toEqual({...fetchedProductsState, filteredProducts: [productTwo]})
  })
})