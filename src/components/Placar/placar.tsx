import style from './Placar.module.css'

interface IScore {
  titulo: string;
  score: number;
}

export const Placar = () => {
  return (
    <div className={style.placar}>
      <Score titulo='Placar:' score={10} />
      <Score titulo='Cartas Viradas:' score={10} />
    </div>
  )
}

const Score = ({titulo, score}: IScore) => {
  return (
    <div className={style.placar}>
      <strong className={style.titulo}> {titulo} </strong>
      <span className={style.score}> {score} </span>
    </div>
  )
}
