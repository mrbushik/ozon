const getData = (str)=>{
   return fetch(
      `https://ozon-52a8d-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
   .then(response => response.json())
}
export default getData;