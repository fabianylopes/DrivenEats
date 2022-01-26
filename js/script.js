let cont = 0;

let dish = '';
let drink = '';
let dessert = '';

let dishPrice;
let drinkPrice;
let dessertPrice;


function choosePlate(option, name, price){
    const border = document.querySelector('.dish.selected');
    
    if(border !== null){
        border.classList.toggle('selected');
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

let orderButton = document.querySelector('button');
orderButton.disabled = true;

function checkOrder(){

    if(cont === 3){
        const text = document.querySelector('.footer-text');
        text.innerHTML = 'Fechar pedido';
        
        const button = document.querySelector('button');
        button.classList.add('button')
        orderButton.disabled = false;
    }
   
}

function sendOrder(){
    totalPrice = dishPrice + drinkPrice + dessertPrice;

    let message = `
    Olá, gostaria de fazer o pedido:
    - Prato: ${dish}
    - Bebida: ${drink}
    - Sobremesa: ${dessert}
    Total: R$ ${totalPrice.toFixed(2)}
    `
    
    window.open("https://wa.me/+558499999999?text=" + message);
}


