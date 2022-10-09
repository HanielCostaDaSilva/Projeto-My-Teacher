import type { NextPage } from 'next'

function Button(text:any){
  return(
    <a href='#'>{text.titulo}</a>
  )
}

const Contato: NextPage = () => {
  return (
    <>
    <div> Contato</div>
    </>
  )
}

export default Contato
