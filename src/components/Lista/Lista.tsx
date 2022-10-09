import { Button } from "@mui/material"
import { Professor } from "../../@types/professor"
import {ListaStyle, ItemLista, Photo, Informacoes, Value, Name, Description, ListaVazia} from "./Lista.style"

interface ListaProps {
    professores: Professor[],
}

const Lista= (props:ListaProps)=>{
        return ( 
            <div>
                {props.professores.length > 0 ? (
                    <ListaStyle>
                    {props.professores.map((professor)=> (
                        <ItemLista key={professor.id}>
                        <Photo src={professor.photo}>
                        </Photo>
                        <Informacoes>
                            <Name>
                                {professor.name}
                            </Name>
                            <Value>
                                {professor.value_class.toLocaleString('pt-BR',{ minimumFractionDigits:2, style: 'currency', currency:'BRL'})}  por aula
                            </Value>
                            <Description>
                                {professor.descricao}
                            </Description>
                        </Informacoes>
                        <Button sx={{width: '80%'}}> 
                            Conversar com {professor.name}
                        </Button>
                    </ItemLista> 
        
                    ) 
                    )
                    }
                
            </ListaStyle>

                ): (
                    <ListaVazia>Conteúdo Não encontrado</ListaVazia>
                )
            }
            </div>
        )
}
export default Lista