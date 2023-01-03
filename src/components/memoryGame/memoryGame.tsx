import { CartasEmPares } from '../../contants/cards'
import { Cards } from '../Cards/cards'
import { Placar } from '../Placar/placar'
import style from './memoryGame.module.css'

export const MemoryGame = () => {
  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        
          <h1> Jogo de memória </h1>
          <Placar />
      <div className={style.cards}>
        {CartasEmPares.map((cartas) => (
          <Cards key={cartas.id} {...cartas} />
        ))}
      </div>
        </div>
      </div>
   
  )
}
