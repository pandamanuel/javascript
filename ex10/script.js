 var nun= document.getElementById('nun');
    var lista=document.getElementById('lista')
    var res=document.getElementById('res')
    var valores=[]
function isnumero(n){
    if (Number(n)>=1 && Number(n)<=100) {
      return true   
    } else {
      return false  
    }

}
function inlist(n,l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
      return false  
    }

}



function Adicionar(){
   
    if (isnumero(nun.value)&& !inlist(nun.value,valores)) {
        valores.push(Number(nun.value))
        var item=document.createElement('option')
        item.text=`valor ${nun.value} adicionado`
       lista.appendChild(item)
       res.innerHTML=''
    } else {
      window.alert('Valor inválido ou já esta na lista')  
    }
    nun.value=''
    nun.focus()

}
function finalizar(){
    if (valores.length==0) {
        window.alert('Adicione o vaçor antes de finalizar')
    } else {
        var tot=valores.length
       res.innerHTML=''
       var maior=valores[0]
       var menor=valores[0]
       var soma=0
       var media=0
       for (const pos in valores) {
        soma+=valores[pos]
        if (valores[pos]>maior) {
            maior=valores[pos]
            
        }if(valores[pos]<menor){
            menor=valores[pos]

        }
       }
       media=soma/tot
       res.innerHTML+= `<p>Ao todo temos ${tot} números cadastrados</p>` 
        res.innerHTML+= `<p>O maior valor informado foi ${maior}</p> ` 
        res.innerHTML+= `<p>O menor valor informado foi ${menor}</p> `
        res.innerHTML+= `<p>Somando todos os valores temos ${soma}</p> `
        res.innerHTML+= `<p>A media dos valores é ${media}</p> `

    }
}