
let tmp = "";

//ARROW FUNCTION
const mudaCor = ()=>{
    
    let r = Math.round(Math.random() *255);
    let g = Math.round(Math.random() *255);
    let b = Math.round(Math.random() *255);

    const elCabecalho = document.querySelector(".cabecalho");

    elCabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

    tmp = setTimeout(mudaCor, 1000);
}

// mudaCor();


function mudaBanner() {
    
    const img1 = document.querySelector(".banner-1 img");
    const img2 = document.querySelector(".banner-2 img");
    
    const img1_temp = img1.src;
    const img2_temp = img2.src;

    img1.src = img2_temp;
    img2.src = img1_temp;

    setTimeout( mudaBanner, 1000);
}

mudaBanner();

function luz() {
    
    const imgLampada = document.querySelector(".conteudo img");
    const botaLigaDesliga = document.querySelector("#meu-botao");

    if(imgLampada.alt == "Lampada desligada"){
        imgLampada.alt = "Lampada ligada";
        imgLampada.src = "./img/pic_bulbon.gif";
        botaLigaDesliga.textContent = "DESLIGAR";
    }else{
        imgLampada.alt = "Lampada desligada";
        imgLampada.src = "./img/pic_bulboff.gif";
        botaLigaDesliga.textContent = "LIGAR";
    }

}
              
