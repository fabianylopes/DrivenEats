let cont = 0;

let dish = '';
let drink = '';
let dessert = '';

let dishPrice;
let drinkPrice;
let dessertPrice;

let totalPrice;

function choosePlate(option, name, price){
    const border = document.querySelector('.dish.selected');
    
    if(border !== null){
        border.classList.remove('selected'); 
    }else{
        cont++;
    }
    
    option.classList.add('selected');   
    
    dish = name;
    dishPrice = price;
    
    checkOrder();
}

function chooseDrink(option, name, price){
    const border = document.querySelector('.drink.selected');
    
    if(border !== null){
        border.classList.toggle('selected');
    }else{
        cont++;
    }

    option.classList.add('selected');

    drink = name;
    drinkPrice = price;

    checkOrder();
}

function chooseDessert(option, name, price){
    const border = document.querySelector('.dessert.selected');
    
    if(border !== null){
        border.classList.toggle('selected');
    }else{
        cont++;
    }

    option.classList.add('selected');
    
    dessert = name;
    dessertPrice = price;

    checkOrder();
}

let orderButton = document.querySelector('.buttonn');
orderButton.disabled = true;

function checkOrder(){
    if(cont === 3){
        const text = document.querySelector('.footer-text');
        text.innerHTML = 'Fechar pedido';
        
        const botao = document.querySelector('.buttonn');
        botao.classList.add('footer-button')
        orderButton.disabled = false;
    }
}

function cancelOrder(){
    const alert = document.querySelector('.modal');
    alert.classList.add('hide');
}

function confirmOrder(){
    const alert = document.querySelector('.modal');
    alert.classList.remove('hide');

    totalPrice = dishPrice + drinkPrice + dessertPrice;

    document.querySelector('.text-confirm.plate').innerHTML = dish;
    document.querySelector('.text-confirm.platePrice').innerHTML = dishPrice.toFixed(2).replace('.',',');

    document.querySelector('.text-confirm.beverage').innerHTML = drink;
    document.querySelector('.text-confirm.beveragePrice').innerHTML = drinkPrice.toFixed(2).replace('.',',');

    document.querySelector('.text-confirm.sweet').innerHTML = dessert;
    document.querySelector('.text-confirm.sweetPrice').innerHTML = dessertPrice.toFixed(2).replace('.',',');
    
    document.querySelector('.text-confirm.price').innerHTML = totalPrice.toFixed(2).replace('.',',');
}

function sendOrder(){
    const nome = prompt('Informe o seu nome: ');
    const endereco = prompt('Informe o seu endereço: ');

    const message = encodeURIComponent(`Olá, gostaria de fazer o pedido: \n- Prato: ${dish} \n- Bebida: ${drink} \n- Sobremesa: ${dessert} \nTotal: R$ ${totalPrice.toFixed(2)} \n\nNome: ${nome} \nEndereço: ${endereco}`);
    
    window.open("https://wa.me/+558499999999?text=" + message);
}
