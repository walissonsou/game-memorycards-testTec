import style from './cards.module.css'

interface ICards {
  idPar: number;
  image: string;
  id: number;
}

export const Cards = ({ id, idDoPar, imagem }: any) => {
  return (
    <button className={style.carta} > 
    <div className={style.carta__conteudo} ></div>
      <div className={style.carta__frente}> </div>
      <div className={style.carta__costas}>
      <img src={imagem} alt={`Carta numero ${idDoPar}`} />
      </div>
    </button>
  )
}
