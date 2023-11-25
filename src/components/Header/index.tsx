import styled from "@emotion/styled/types/base"
import { HeaderContainer, Logo } from "./Header.style"

const Header= ()=> {
    return (
    <HeaderContainer> 
        <div>
            <Logo src='imgs/myteacher.png'/>
            <p> Destruindo sonhos e construíndo caráter.</p>
        </div>
        </HeaderContainer>
        )
}

export default Header