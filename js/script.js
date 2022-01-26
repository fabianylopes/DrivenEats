
function choosePlate(plate){
    const border = document.querySelector('.plates.selected');
    
    if(border !== null){
        border.classList.toggle('selected');
    }
    plate.classList.add('selected');
    
}

function chooseDrink(drink){
    const border = document.querySelector('.drinks.selected');
    
    if(border !== null){
        border.classList.toggle('selected');
    }
    drink.classList.add('selected');
}

function chooseDessert(dessert){
    const border = document.querySelector('.desserts.selected');
    
    if(border !== null){
        border.classList.toggle('selected');
    }
    dessert.classList.add('selected');
}


function fecharPedido(){
   
    const text = document.querySelector('.footer-text');
    text.innerHTML = 'Fechar pedido';
}



