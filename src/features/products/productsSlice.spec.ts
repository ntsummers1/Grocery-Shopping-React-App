import productReducer, { IProductsState } from "./productsSlice"

describe('Products Reducer', () => { 

  const initialState: IProductsState = {
    status: 'idle',
    products: [],
    filteredProducts: []
  }

  it('should handle initial state', () => {
    expect(productReducer(undefined, {type: undefined})).toEqual(initialState)
  })

  
})