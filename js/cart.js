function start() {
    var numberCart = parseInt(localStorage.getItem('numberofbooks'))
    var sub = '<span id="quantity">'+(numberCart+1)+'</span> <img class="cart" src="../images/shopping-cart.png" alt="Carrinho de Compras">'
    var nextText = document.getElementById('shopping_cart')
    nextText.innerHTML = sub

    var teste = localStorage.getItem('listofbooks')
    
    var v1 = document.getElementById('book1')
    var v2 = document.getElementById('book2')
    var v3 = document.getElementById('book3')
    var v4 = document.getElementById('book4')
    var v5 = document.getElementById('book5')
    var v6 = document.getElementById('book6')

    var vv1 = '<img src="../images/book1.png" alt="book1" id="book1"><p>Título: XXX</p><p>Autor: YYY</p><p>Quantidade: <span id="book1Quantity">'+(teste[0])+'</span></p>'
    var vv2 = '<img src="../images/book2.png" alt="book2" id="book2"><p>Título: XXX</p><p>Autor: YYY</p><p>Quantidade: <span id="book2Quantity">'+(teste[1])+'</span></p>'
    var vv3 = '<img src="../images/book3.png" alt="book3" id="book3"><p>Título: XXX</p><p>Autor: YYY</p><p>Quantidade: <span id="book3Quantity">'+(teste[2])+'</span></p>'
    var vv4 = '<img src="../images/book4.png" alt="book4" id="book4"><p>Título: XXX</p><p>Autor: YYY</p><p>Quantidade: <span id="book4Quantity">'+(teste[3])+'</span></p>'
    var vv5 = '<img src="../images/book5.png" alt="book5" id="book5"><p>Título: XXX</p><p>Autor: YYY</p><p>Quantidade: <span id="book5Quantity">'+(teste[4])+'</span></p>'
    var vv6 = '<img src="../images/book6.png" alt="book6" id="book6"><p>Título: XXX</p><p>Autor: YYY</p><p>Quantidade: <span id="book6Quantity">'+(teste[5])+'</span></p>'

    v1.innerHTML = vv1
    v2.innerHTML = vv2
    v3.innerHTML = vv3
    v4.innerHTML = vv4
    v5.innerHTML = vv5
    v6.innerHTML = vv6

    console.log(teste)
}

start()