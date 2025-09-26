const btn = document.querySelector('#calculatebtn');
const numa = document.getElementById('number1');
const numb = document.getElementById('number2');
 const operation = document.getElementById('operation')

btn.addEventListener('click',()=>{
    const num1 = parseInt(numa.value)
    const num2 = parseInt(numb.value)
    if(!isNaN(num1) && !isNaN(num2)){
        const operationval = operation.value;
        let result;
        switch(operationval){
            case 'add':
                result = num1 + num2;
                break;
            case'subtract':
                result = num1-num2;
                break;
            case'multiply':
                result = num1*num2;
                break;
            case'divide':
                result = num1/num2;
                break;
        }
        output.innerText = `Result : ${result}`
        console.log('good');
    }else{
        console.log('Both inputs need to be numeric!')
    }
})


console.log(btn)