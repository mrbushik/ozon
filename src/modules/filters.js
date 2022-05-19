export const searchFilter = (goods, value)=>{

    return goods.filter((goodsItem)=>{
        return goodsItem.title.includes(value);
    })
}
export const categoryFilter= (goods, value) => {

    return goods.filter((goodsItem) => {
        return goodsItem.category === value;
    })
}