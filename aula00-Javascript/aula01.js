class Animal{
    constructor(nome,tipo){
        this.nome = nome;
        this.tipo= tipo;
    }

    exibirInformacoes(){
        return `este é um ${this.tipo}`;
    }

}
const cachorro = new Animal ("auguso","cachorro");

console.log(cachorro.exibirInformacoes());