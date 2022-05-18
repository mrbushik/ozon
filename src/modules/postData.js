const postData = () => {   
    return fetch(' http://localhost:3000/goods', {
            method: 'POST',
            body: JSON.stringify({
                		title: "Ведьмак 3",
                		price: 3000,
                		sale: true,
                		img: "https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg",
                		hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg",
                		category: "Игровая приставка"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
}
export default postData;