import { useNavigate } from "react-router-dom";
import { HeaderContainer, Pages } from "./styles";

export function Header(){
    const navigate = useNavigate()
    
    return (
    <HeaderContainer>
        <div className="logo" onClick={() => navigate('/')}>Ânima</div>
        <Pages>
            <span className="page" onClick={() => navigate('/orders')}>Pedidos</span>
            <span className="page" onClick={() => navigate('/update')}>Atualizar</span>
        </Pages>
    </HeaderContainer>
    )
}