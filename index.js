class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'algum tipo de ataque aleatório 😒';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new Heroi('Julio', 32, 'guerreiro');
heroi1.atacar(); 

let heroi2 = new Heroi('Maria', 21, 'mago');
heroi2.atacar(); 

let heroi3 = new Heroi('Maiane', 20, 'ninja');
heroi3.atacar(); 

let heroi4 = new Heroi('Roberta', 18, 'monge');
heroi4.atacar(); 

let heroi5 = new Heroi('Marcos', 17, 'guerreiro');
heroi5.atacar(); 
