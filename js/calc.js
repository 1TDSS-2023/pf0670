//Desafio 1
//Inserir o value dos botões de números e operações no visor.
//É obrigatório utilizar funções parametrizadas...
//Pode ser utilizados eventos de inline.

//Desafio 3
//Evite a inserção de mais de um operador por vez no visor.
function insereNumeroNoVisor(botao,visor) {
    
    if(botao.value === "+" || botao.value === "-" || botao.value === "*" || botao.value === "/"){

        if(visor.value[visor.value.length-1] === "+" || visor.value[visor.value.length-1] === "-" || visor.value[visor.value.length-1] === "*" || visor.value[visor.value.length-1] === "/"){
            visor.value.slice(visor.value.length-1);
        }else{
            visor.value += botao.value;
        }

    }else{
        visor.value += botao.value;
    }
}

//Desafio 2
//Utilizando a função eval(expressão)
//Crie uma nova função no formato ArrowFunction que receba um parâmetro e passe para a função eval() realizar o cálculo e devolva o resultado no visor.

const calculaResultadoOperacoes = (visor)=>{
    visor.value = eval(visor.value);
}
