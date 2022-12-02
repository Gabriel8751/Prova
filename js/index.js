let idbooks = [0, 0, 0, 0, 0, 0]

function addNumberTopCart(nome){
    var number = parseInt(document.getElementById('quantity').textContent)
    var sub = '<span id="quantity">'+(number+1)+'</span> <img class="cart" src="images/shopping-cart.png" alt="Carrinho de Compras">'
    var nextText = document.getElementById('shopping_cart')
    localStorage.setItem('numberofbooks', number)
    nextText.innerHTML = sub

    if(nome === '1') {
        idbooks[0] += 1
    }else if(nome === '2') {
        idbooks[1] += 1
    }
    else if(nome === '3') {
        idbooks[2] += 1
    }
    else if(nome === '4') {
        idbooks[3] += 1
    }
    else if(nome === '5') {
        idbooks[4] += 1
    }
    else if(nome === '6') {
        idbooks[5] += 1
    }

    localStorage.setItem('listofbooks', idbooks)
}

