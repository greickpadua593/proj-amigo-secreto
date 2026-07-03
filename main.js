let amigo =document.getElementById("amigo");
let lista=document.getElementById("lista");
let amigos=[]
let botao1=document.getElementById("botao1").onclick=
() => {
    let nome= amigo.value.trim()
    if(nome==""){
    alert("insira um valor valido ")
    }else{  amigos.push(nome)
        lista.innerHTML+= `<li>${nome}</li>`
        amigo.value=""
        amigo.focus()

    }
}

document.getElementById("botao2").onclick=()=>{
let indice=Math.floor(Math.random()*amigos.length)
resultado.innerHTML=`O amigo sorteado é: ${amigos[indice]}`
    }
