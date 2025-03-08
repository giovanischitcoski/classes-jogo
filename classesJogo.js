class Heroi {
    constructor(nome, classe, ataque) {
        this.nome = nome;
        this.classe = classe;
        this.ataque = ataque;
    }

    atacar() {
        console.log(`O ${this.nome}, da classe ${this.classe}, atacou ${this.ataque}.`);
    }
}

// Solicita o nome e a classe do usuário
let nomeUsuario = prompt("Insira seu nome: ");
let classeEscolhida = prompt("Escolha sua classe: guerreiro, mago, monge, ninja").toLowerCase();

// Mapeia as classes para seus respectivos ataques
const ataques = {
    guerreiro: "com uma espada",
    mago: "com magia",
    monge: "com artes marciais",
    ninja: "com uma shuriken"
};

// Verifica se a classe escolhida é válida e cria um personagem
if (ataques[classeEscolhida]) {
    let heroiUsuario = new Heroi(nomeUsuario, classeEscolhida, ataques[classeEscolhida]);
    heroiUsuario.atacar();
} else {
    console.log("Classe inválida! Escolha entre: guerreiro, mago, monge ou ninja.");
}