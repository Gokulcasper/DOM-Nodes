// console.log(document.documentElement.lang);
// console.dir(document.documentElement.lang);

// // Find Node:
// console.log(document.body.constructor.name);

console.log(document.body instanceof HTMLBodyElement); //5
console.log(document.body instanceof HTMLElement); //4
console.log(document.body instanceof Element); //3
console.log(document.body instanceof Node); //2
console.log(document.body instanceof EventTarget); //1

// console.log(document.body.nodeName); //BODY
// console.log(document.body.nodeType); // body -> is Elements So 1
// console.log(document.body.children[0].nodeType); // div -> is Element So 1
// console.log(document.body.children[0].ATTRIBUTE_NODE); // id -> is attribute So 2
