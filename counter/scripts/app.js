
const btnIncrease = document.getElementById('increase');
const btnDecrease = document.getElementById('decrease');
const btnReset = document.getElementById('reset');
const value = document.getElementById('counter-val');

let Value = null

btnIncrease.addEventListener('click',() =>{
    Value++
    value.textContent = Value
    chkColor(Value);
    
});

btnDecrease.addEventListener('click',() =>{
    Value--
    value.textContent = Value
    chkColor(Value);
});

btnReset.addEventListener('click',() =>{
    Value = 0
    value.textContent = Value
    chkColor(Value);
});

const chkColor = (Value) =>{
    if(Value > 0){
        value.style.color = 'green'
    }
    if(Value === 0){
        value.style.color = 'black'
    }
    if(Value < 0){
        value.style.color = 'red'
    }
}


