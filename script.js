
let lista_prodotti = [
    {id:1, nome: "Spaghetti gr.500", prezzo: 0.85},
    {id:2, nome: "Passata pomodoro gr.700", prezzo: 1.55},
    {id:3, nome: "Marmellata arancia", prezzo: 1.20},
    {id:4, nome: "Macinata gr.350", prezzo: 3.20},
]



function stampa(){
        let arrey_collone=[ document.createElement('th'), document.createElement('th')];
        let tab=document.getElementById('tabela');
        let tr = document.createElement('tr');
        tr.setAttribute('id', 0);
        arrey_collone[0].innerHTML= "Nome";           
        arrey_collone[1].innerHTML= "Prezzo $ ";
        tr.appendChild(arrey_collone[0]);
        tr.appendChild(arrey_collone[1]);  
        tab.appendChild(tr);

        for(let index = 0; index < lista_prodotti.length; index++) {
            
            let arrey_collone=[document.createElement('td'), document.createElement('td')]
            let tr = document.createElement('tr');

            tr.setAttribute('id', lista_prodotti[index].id)  
            arrey_collone[0].innerHTML= lista_prodotti[index].nome                
            arrey_collone[1].innerHTML= lista_prodotti[index].prezzo+ " $ "
            
            tr.appendChild(arrey_collone[0])  
            tr.appendChild(arrey_collone[1])  
            tab.appendChild(tr)
        }
        document.getElementById("myBtn").disabled= true;
    }
   
    
function nascondi(tab){
   location.reload();
}





