import products from '../assets/products.json'
export function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
    
}

