import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magoPikonsio = new Mago('Pikonsio', 6, 'fogo', 7, 15)
const arqueiroBruxão = new Arqueiro('Bruxão', 7, 7)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiraJorge = new Guerreiro('Jorge', 8)


const personagens = [magoAntonio, magoPikonsio, arqueiroBruxão, arqueiroMagoChico, guerreiraJorge]

new PersonagemView(personagens).render()