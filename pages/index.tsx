import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import Lista from '../src/components/Lista/Lista'

const Home: NextPage = () => {
  const professores: Professor[]=[
  {
    id:1,
    name: 'Haniel Costa da Silva',
    descricao: 'Faço de tudo um pouco!',
    value_class: 10,

    photo: 'https://github.com/HanielCostaDaSilva.png',
  },
  {
    id:2,
    name: 'HaDes',
    descricao: 'Especialista em fotografia e artes plásticas.',
    value_class: 200,
    photo: 'https://github.com/HaDes.png',
  },
  {
    id:3,
    name: 'Caio Bernadelli',
    descricao: 'Um Derradeiro Galã. Dou aulas de atuação e Física astrônomica.',
    value_class: 300,
    
    photo: 'https://github.com/CaioBernardelli.png',
  },
  {
    id:4,
    name: 'Elton Fonseca',
    descricao: 'Especialista em Web Design, sou Full-Stack formado.',
    value_class: 400,
    
    photo: 'https://github.com/elton-fonseca.png',
  }
]

  return (
    <Box sx={{backgroundColor: "secondary.main"}}>
      <Lista professores={professores}></Lista>
    </Box>
    
  )
}

export default Home
