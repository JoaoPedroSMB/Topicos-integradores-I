function saudacao(nome){
    return "Olá," + nome +"!";
}
console.log(saudacao("Joao"));

const soma = function(a,b){
    return a + b;
}

console.log(soma(10,12));

const multi = (a,b) => a * b;
console.log(multi(10,12));


const pessoa = {
    nomeUsuario:"rafael",
    idade:1,
    usuario: "Professor",
    saudar : function(){
        return "Oi, meu nome é" +this.nomeUsuario+ "e eu sou" + this.usuario;
    }
}
console.log(pessoa);
console.log(pessoa.saudar());