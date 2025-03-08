# Jogo de Heróis em JavaScript

Este é um pequeno jogo em JavaScript onde o usuário pode escolher um nome e uma classe de herói, que realizará um ataque correspondente à sua classe.

## 📌 Funcionalidades
- O usuário insere um nome.
- O usuário escolhe uma classe entre: **Guerreiro, Mago, Monge ou Ninja**.
- O jogo exibe uma mensagem com o ataque correspondente à classe escolhida.
- Caso a classe digitada seja inválida, uma mensagem de erro é exibida.

## 🛠 Tecnologias Utilizadas
- **JavaScript**

## 🚀 Como Executar
1. Copie o código para um arquivo `.html` ou `.js`.
2. Execute em um navegador ou ambiente Node.js.

## 💡 Exemplo de Saída
```
Insira seu nome: João
Escolha sua classe: guerreiro
O João, da classe guerreiro, atacou com uma espada.
```

## 📜 Código-Fonte
```javascript
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

let nomeUsuario = prompt("Insira seu nome: ");
let classeEscolhida = prompt("Escolha sua classe: guerreiro, mago, monge, ninja").toLowerCase();

const ataques = {
    guerreiro: "com uma espada",
    mago: "com magia",
    monge: "com artes marciais",
    ninja: "com uma shuriken"
};

if (ataques[classeEscolhida]) {
    let heroiUsuario = new Heroi(nomeUsuario, classeEscolhida, ataques[classeEscolhida]);
    heroiUsuario.atacar();
} else {
    console.log("Classe inválida! Escolha entre: guerreiro, mago, monge ou ninja.");
}
```