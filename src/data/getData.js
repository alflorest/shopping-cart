
export const getData =async()=>{
    const resp = await fetch(`https://fakestoreapi.com/products`);
    
    const data = await resp.json(); 

    const products= data.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        image: product.image
    }));
    return products;    
}           