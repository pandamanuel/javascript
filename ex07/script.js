function verificar() {
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById('n')
    var res=document.getElementById('res')
    if (fano.value.length==0 || Number(fano.value)>ano) {
        window.alert("Verifica os dados e tenta novamente")
        
    }else{
       var r=document.getElementsByName('r')
       var idade= ano-Number(fano.value)
      var genero=""
      var img=document.createElement('img')
      img.setAttribute('id','foto')
      if (r[0].checked) {
        genero="Homem"
        if (idade <15) {
    img.setAttribute('src','pandapq.jpeg')        
        }else if (idade>=15 ){
img.setAttribute('src','marcospg.jpeg')
        }
      } else if(r[1].checked){
        genero="Mulher"
        if (idade <15) {
  img.setAttribute('src','falonia.jpeg')          
        }else if (idade>=15 ){
img.setAttribute('src','maepg.jpeg')
        }
        else if(idade>60){
            img.setAttribute('src','avopg.jpeg')
        }
      }
      res.style.textAlign='center'
      res.innerHTML=`${genero} ${idade}`
      res.appendChild(img)
    }
}