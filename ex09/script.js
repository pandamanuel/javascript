function Gerar(){
    var nun=document.getElementById('nun')
    var sel=document.getElementById('sel')
    
    if (nun.value.length==0) {
        window.alert('Digite um número')
       
    }else{
       var n=Number(nun.value) 
        sel.innerHTML=''
       for( var c=1; c<=12; c++){
       
        var item=document.createElement('option')
        item.text=`${n} x ${c} = ${n*c}`
        item.value=`sel${c}`
        sel.appendChild(item)
       } 
    }
}