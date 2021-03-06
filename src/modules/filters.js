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
    return goods.filter((goodsItem) => {

        return goodsItem.price > minPrice && goodsItem.price < maxPrice;
    })
}
export const hotSaleFilter = (goods, value) => {

    return goods.filter((goodsItem) => {
if(value){
    return goodsItem.sale === true;
}else{
   return goodsItem;
}
    })
}