import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/personagem.js"

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago')
const personagemJose = new Personagem('José', 3, 'Arqueiro')

const personagens = [personagemJose, personagemPedrinho]

new PersonagemView(personagens).render()

console.log(personagemJose.vida)