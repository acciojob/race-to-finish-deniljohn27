window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let di=document.getElementById("output");
for(let i=1;i<=5;i++){
	promises.push(new Promise((resolve)=>{setTimeout(()=>{resolve(i)},i)}))
}
let pro=Promise.any(promises);
pro.then((cont)=>{di.innerText=cont});