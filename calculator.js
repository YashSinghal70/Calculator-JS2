let First = document.querySelector("#first");
let Second = document.querySelector("#second");
let Result = document.querySelector("#para");
let Operators = document.querySelector("#operator")


function cal() {
    let num1 = parseFloat(First.value);
    let num2 = parseFloat(Second.value);
    let res = Result.value;
    let operator = Operators.value;
    //     if(num1=="" || num2=="" )
    //       {
    //   alert("Please enter the number");
    //       }
    switch (operator) {
        case '+':
            //result store in res
            res = num1 + num2; 
            //And the result show through Result.innerHTML
            Result.innerHTML= res;
            break;

        case '-':
            res = num1 - num2;
            Result.innerHTML=res;
            break;

        case '*':
            res = num1 * num2;
            Result.innerHTML=res;
            break;

        case '/':
            if (num2 === 0) {
                res = "Can't Divide By Zero";
            }
            else {
                res = num1 / num2;
            }
            Result.innerHTML=res;
            break;

        default:
            res = "Invalid Input";

    }


}