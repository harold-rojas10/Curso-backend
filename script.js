document.getElementById("dom").textContent = "Hola te cambien el texto que estaba en parrafo dom"
//quita y remplaza por dentro
document.getElementById("dom-element").innerHTML = `<p class="nuevoElemento">Hola te cambie el texto pero ademas soy un nuevo elemento</p>`
document.getElementById("dom-element").innerHTML = `<p class="nuevoElemento2">Hola te cambie el texto pero ademas soy un nuevo elemento</p>`
document.getElementById("dom-element").innerHTML = `<p class="nuevoElemento3">Hola te cambie el texto pero ademas soy un nuevo elemento</p>`
// remplazar totalmente
document.getElementById("dom-element").outerHTML = `
<div>
<p class="nuevoElemento4">Hola te cambie el texto pero ademas soy un nuevo elemento</p>
<p class="nuevoElemento5">Hola te cambie el texto pero ademas soy un nuevo elemento</p>
<h2>hola</h2>
</div>`

document.querySelectorAll("a").forEach((elemento)=>{console.log(elemento)})