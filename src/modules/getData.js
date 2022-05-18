const getData = ()=>{
   return fetch('https://ozon-52a8d-default-rtdb.firebaseio.com/goods.json')
   .then(response => response.json())
}
export default getData;