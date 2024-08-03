const numberBtns = document.querySelectorAll('.numberBtn');
const signsBtn = document.querySelectorAll('.signsBtn');
const calcExpression = document.getElementById('expression');
const calcTotal= document.getElementById('total');

let operator = '';
let expression = [];
let outPut = '';

//react when a button is clicked
for(var i=0; i<numberBtns.length; i++){
    numberBtns[i].addEventListener('click', function(){
        outPut = '';
        //formating that expression
        expression.push(this.innerText);
        for(var e=0; e<expression.length; e++){
            outPut = outPut + expression[e];
        }
        //display the expression on the screen
        calcExpression.value = outPut;
        //i display total only when the was an operator/math symbol
        if(operator.length>0){
            calcTotal.value = calculate(outPut);
        }  
    });
}

//click operation
for(var i=0; i<signsBtn.length; i++){
    signsBtn[i].addEventListener('click', function(){
        operator = this.innerText;
    });
}
//calculate
function calculate(exp){
    return math.evaluate(exp);
}

//delete an item;
function deleteLast(){
    let outPut = '';
    expression.pop();
    for(var e=0; e<expression.length; e++){
        outPut = outPut + expression[e];
    }
    //console.log(math.evaluate(outPut));
    if(outPut.length<1){
        operator = '';
    }
    calcExpression.value = outPut;
    calcTotal.value = calculate(outPut);
}


//that is how i have create this calculator from scratch using javascript html and css.
