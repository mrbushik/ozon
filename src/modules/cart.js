import renderCart from "./renderCart";
import postData from "./postData";
const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');
    const goodsWraper = document.querySelector('.goods')
   const cartTotal = document.querySelector('.cart-total > span');
   const cartWraper = document.querySelector('.cart-wrapper');
   const cartSendBtn = cartModal.querySelector('.cart-confirm');
   
   const openCart = () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) :
            [];
        
        cartModal.style.display = 'flex';

        renderCart(cart)
        cartTotal.textContent = cart.reduce((sum, item)=>{
return sum + item.price;
        }, 0);
    }
    
    const closeCart = () => cartModal.style.display = "none";

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
    
    goodsWraper.addEventListener('click', (e)=>{
        if(e.target.classList.contains('btn-primary')){
    const card = e.target.closest('.card')
    const key = card.dataset.key;
    const goods = JSON.parse(localStorage.getItem('goods'));
    const cart = localStorage.getItem('cart')?
     JSON.parse(localStorage.getItem('cart')) : []

    const  goodItem = goods.find(item => item.id === +key);
    cart.push(goodItem);

    localStorage.setItem('cart', JSON.stringify(cart));
        }
    });

    cartWraper.addEventListener('click', (e)=>{
        if(e.target.classList.contains('btn-primary')){
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
    const card = e.target.closest('.card')
    const key = card.dataset.key;
    const index = cart.findIndex(item => item.id === +key);
    
    cart.splice(index, 1);
    
    localStorage.setItem('cart', JSON.stringify(cart));

    renderCart(cart);

       cartTotal.textContent = cart.reduce((sum, item) => {
           return sum + item.price;
       }, 0);
        }
    });

    cartSendBtn.addEventListener('click', ()=>{
     const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : [];
        postData(cart).then(()=>{
            localStorage.removeItem('cart')
            renderCart([]);
        });
         cartTotal.textContent = 0;
    })
};
export default cart;