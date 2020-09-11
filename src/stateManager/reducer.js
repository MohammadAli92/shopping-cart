import { ACTION, ACTIONS } from './actionCreator';

export const INIT_STATE = {
    products: null,
    cart: [],
    selectedProductId: null,
    loading: true
}

export function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case ACTIONS.GET_INIT_DATA:
           const newData =  action.payload.map(item =>{
               console.log(item.fields.image.fields.file.url)
                return{
                    id: item.sys.id,
                    title: item.fields.title,
                    price: item.fields.price,
                    imageUrl: item.fields.image.fields.file.url
                }
            })
            return {
                ...state,
                products: newData,
                loading: false
            }
        default:
            return state
    }
}