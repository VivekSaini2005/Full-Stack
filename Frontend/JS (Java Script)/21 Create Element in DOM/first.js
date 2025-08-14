// create an element li in the html code using js
// const el = document.createElement('li');
// el.innerHTML = "TS";

// const par = document.getElementById("root");
// par.appendChild(el);

// // function to Created an element to append child.
// function attach(content){
//     const element = document.createElement('li');
//     element.innerHTML = content;

//     const element2 = document.createElement('li');

//     const parent = document.getElementById("root");
//     parent.appendChild(element);
// };

// attach("TS");
// attach("React");
// attach("Node");


// // .append() multiple element ko daal skte hai.
// function attach(content){
//     const element = document.createElement('li');
//     element.innerHTML = content;

//     const element2 = document.createElement('li');
//     element2.innerHTML = content+"V2.0";

//     const parent = document.getElementById("root");
//     parent.appendChild(element);
//     parent.append(element,element2); 
// };

// attach("TS");
// attach("React");
// attach("Node");


// *****************TextNode*******************
// // TextNode: jo without tag likhe jate hai. (.createTextNode)

// const element = document.createTextNode("Hello Coder Army");

// const parent = document.getElementById("root");
// parent.append(element);


// *****************Attribute Node*******************
// (.createAttribute(id/class))
// const element = document.createAttribute("id");
// element.value = "first";


// access to first list
// const curr_list = document.querySelector('li'); // phale li ka access lega.
// curr_list.setAttributeNode(element);


// access to second list

// const parent = document.getElementById("root"); // parent as list node.
// parent.children[1].setAttributeNode(element);



// access attribute of a element

// const element  = document.getElementById("root");
// console.log(element.getAttribute("id")); root
// console.log(element.getAttribute("class")); mohan
// console.log(element.getAttribute("style")); null// inspect karo id - root, class - mohan , style - null.
// element.setAttribute("custom", "20"); //custom attribute name, 20 is attribute.
// element.setAttribute("class", "Roahn"); //update class.
// element.removeAttribute("custom"); //custom attribute deleted.




// ***********Add nodes to the DOM************


// const parent = document.getElementById("root"); // parent access


// data create.
// const element = document.createElement('li');
// element.innerHTML = "TS";


// parent.prepend(element);  //TS front mei aayga
// parent.append(element);   //TS last mei aayga

// const child2 = parent.children[1];
// parent.insertBefore(element,child2); //element ko child2 se phale insert karao.

// parent.replaceChild(element,child2); // child ko repace kr dega, (new,old) element ko child2 se replace kr do.



// const parent = document.getElementById("root");
// parent.innerHTML += "<li>TS</li>"; // TS last mei jake attach ho jayga.


// <ul> se phale div tag attach krna 
// const element = document.createElement("div");
// element.innerHTML = "Hello Coder Army";

// parent.insertAdjacentElement("beforebegin", element); //<ul> se phale aayga
// parent.insertAdjacentElement("afterend", element); // <ul> k baad aayga



// Delete node or element

const element = document.querySelector('li');
element.remove(); //phali wali li remove ho jaygi kyuki querySelector se ek hi li(first wala) access hota hai.







