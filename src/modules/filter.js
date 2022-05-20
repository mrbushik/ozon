import getData from './getData';
import renderGoods from './renderGoods';
import {priceFilter} from './filters';
import {hotSaleFilter} from './filters';


const price = ()=>{
const minInput = document.getElementById('min')
const maxInput = document.getElementById('max')
const checkboxInput  = document.getElementById('discount-checkbox')
const checkboxSpan = document.querySelector('.filter-check_checkmark')
let minPrice;
let maxPrice;

const render =() => {
    getData()
        .then(data => renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minPrice, maxPrice)));
}

minInput.addEventListener('input', (e) => {
     minPrice = e.target.value;
        return minPrice, render();
})

maxInput.addEventListener('input', (e) => {
    maxPrice = e.target.value;
    return maxPrice, render();        
})
checkboxInput.addEventListener('change', ()=>{
    if(checkboxInput.checked){
        checkboxSpan.classList.add('checked')

    }else{
        checkboxSpan.classList.remove('checked')
    }
     getData()
        .then(data => renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minPrice, maxPrice)));
})
}
export default price;