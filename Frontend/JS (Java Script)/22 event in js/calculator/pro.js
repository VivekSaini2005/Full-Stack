
const button = document.querySelector('button');
button.addEventListener(('click'),()=>{
    const n1 = document.getElementById('first');    
    const num1 = Number(n1.value);
    const n2 = document.getElementById('second');
    const num2 = Number(n2.value);

    const res = num1 + num2;
    const dis = document.getElementById('result');
    dis.innerHTML = "Result: "+res;
})