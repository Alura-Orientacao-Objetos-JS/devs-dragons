import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"

const magoAntonio = new Mago('Antônio', 4, 'Raios', 4, 3)
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10)
const arqueiroMurilo = new Arqueiro('Murilo', 7, 3)
const arqueiraMagaMarina = new ArqueiroMago('Marina', 7, 10, 'Fogo', 4, 8)

const personagens = [magaJulia, magoAntonio, arqueiroMurilo, arqueiraMagaMarina]

new PersonagemView(personagens).render()