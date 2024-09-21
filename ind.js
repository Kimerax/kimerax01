class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function criarFuncionario() {
    try {
        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value);
        const cargo = document.getElementById("cargo").value;
        const departamento = document.getElementById("departamento").value;
        const linguagem = document.getElementById("linguagem").value;

        if (!nome || isNaN(idade) || !cargo) {
            throw new Error("Preencha todos os campos corretamente.");
        }

        let funcionario;

        if (cargo === "Gerente") {
            if (!departamento) throw new Error("Preencha o campo de departamento.");
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo === "Desenvolvedor") {
            if (!linguagem) throw new Error("Preencha o campo de linguagem.");
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        } else {
            throw new Error("Cargo inválido.");
        }

        // Exibindo as informações na página
        document.getElementById("resultado").innerHTML = `
            ${funcionario.seApresentar()}<br>
            ${funcionario.trabalhar()}<br>
            ${cargo === "Gerente" ? funcionario.gerenciar() : funcionario.programar()}
        `;

    } catch (erro) {
        exibirErro(erro.message);
    }
}

function exibirErro(mensagem) {
    document.getElementById("erro").innerHTML = mensagem;
}
