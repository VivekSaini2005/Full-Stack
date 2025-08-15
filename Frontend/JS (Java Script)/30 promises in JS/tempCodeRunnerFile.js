const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello Coder Army");     
    },2000)
})
// p.then((response)=>console.log(response));     //Hello Coder Army

async function greet() {
    const data1 = await p;
    console.log(data1);

    const data2 = await p;
    console.log(data2);
}

greet();
// Output: // dono "hello coder army" sath mei print honge kyuki data resolve ho chuka hai isliye ek sath print hoga.
// Hello Coder Army
// Hello Coder Army

async function meet(){
    return "Hello World";
} // async function hamesa promise hi return karega. agr kuch return nhi karoge tooh undefine return kr dega.