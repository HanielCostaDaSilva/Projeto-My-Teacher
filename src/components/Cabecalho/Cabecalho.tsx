import styled from "@emotion/styled/types/base"
import { CabecalhoContainer, Logo } from "./Cabecalho.style"

const Cabecalho= ()=> {
    return (<CabecalhoContainer> 
        <div>
            <Logo src='imgs/myteacher.png'/>
            <p> Destruindo sonhos e construíndo caráter.</p>
        </div>
        </CabecalhoContainer>)
}

export default Cabecalho