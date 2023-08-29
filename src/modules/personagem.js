export class Personagem {
    nome
    vida = 100
    mana = 100
    level
    tipo
    descricao = 'sckmbvçlsdfmgvkçdsfkm'

    constructor(nome, level, tipo){
        this.nome = nome
        this.level = level
        this.tipo = tipo
    }

    obterInsignia(){
        if(this.level >= 5){
            return `Implacável ${this.tipo}`
        }
        return `${this.tipo} iniciante`
    }
}

export class Mago {
    elementoMagico
    levelMagico
    inteligencia

    constructor(elementoMagico, levelMagico, inteligencia){
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }
}