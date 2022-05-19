import getData from './getData';
import renderGoods from './renderGoods';
import {categoryFilter} from './filters'

const catalog = ()=>{
const btnCatalog = document.querySelector('.catalog-button > button');
const catalogModal = document.querySelector('.catalog')
const catalogListItems = document.querySelector('.catalog-list')

let isOpen = false;

btnCatalog.addEventListener('click', ()=>{
    isOpen = !isOpen;
    if(isOpen){
catalogModal.style.display = 'block';
    }else{
catalogModal.style.display = '';
    }
})
catalogListItems.addEventListener('click', (e)=>{
    if(e.target.classList.contains('catalog-list')){
        return;
    }
    let text = e.target.textContent;
     getData()
         .then(data => renderGoods(categoryFilter(data, text)));
})
}
export default catalog;