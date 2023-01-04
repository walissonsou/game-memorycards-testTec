import { paresDeCartas } from '../../cards'
import { Cards } from '../Cards/cards'
import { Placar } from '../Placar/placar'
import style from './memoryGame.module.css'

export const MemoryGame = () => {
  return (
    <div className={style.jogo}>
      <div className={style.conteudo}>        
          <h1 className={style.h1}> Jogo de memória </h1>
          <Placar />
      <div className={style.cartas}>
        {paresDeCartas.map((cartas) => (
          <Cards key={cartas.id} {...cartas} />
        ))}
      </div>
        </div>
      </div>
   
  )
}
