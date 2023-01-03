import style from './cards.module.css'

interface ICards {
  idPar: number;
  image: string;
}

export const Cards = ({idPar, image}: any) => {
  return (
    <div className="carta__conteudo">
      <div className="carta__frente"></div>
      <div className={style.carta__costas}>
        <img src={image} alt={`Carta numero ${idPar}`} />
      </div>
    </div>
  )
}
