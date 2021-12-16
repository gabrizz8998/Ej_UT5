
let parrafos=document.getElementsByTagName('ul');
let texto=document.getElementById('texto')
function guardar(){
    let radio=document.querySelector('input[name="tipo"]:checked');
    for(let i=0; i<parrafos.length; i++){
        if(parrafos[i].innerHTML.includes(radio.value)){
            
            let text = document.createTextNode(texto.value+".");
            let parrafo= document.createElement("li");  
            parrafo.setAttribute('id','np');                                  
            parrafos[i].appendChild(text); 
            parrafo.appendChild(text)
            parrafos[i].appendChild(parrafo);      

            //Ordenar alfabericamente 
            
            Array.from(parrafos[i].getElementsByTagName("li"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => parrafos[i].appendChild(li));
        }
    }
}


// texto=document.createTextNode(bb.getAttribute('value'));
// parrafo= document.createElement("P");
// parrafo.setAttribute('id','np');
// parrafo.appendChild(texto);
// caja.appendChild(parrafo)

