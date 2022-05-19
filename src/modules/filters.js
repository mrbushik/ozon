export const searchFilter = (goods, value)=>{

    return goods.filter((goodsItem)=>{
        return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    })
}
export const categoryFilter= (goods, value) => {

    return goods.filter((goodsItem) => {
        return goodsItem.category === value;
    })
}
export const priceFilter = (goods, minPrice = 0, maxPrice = 1000000) => {
console.log(minPrice);
console.log(maxPrice);
    return goods.filter((goodsItem) => {
        // return false;

        return goodsItem.price > minPrice
         && goodsItem.price < maxPrice;
    })
}