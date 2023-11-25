import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista'
import PROFESSORES from '../src/model/PROFESSORES'

const Home: NextPage = () => {
  const professores:Professor[]= PROFESSORES;

  return (
    <Box sx={{backgroundColor: "secondary.main"}}>
      <Lista professores={professores}></Lista>
    </Box>
    
  )
}

export default Home
