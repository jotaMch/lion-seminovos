import { ContainerHeader, HeaderComponent, StyledSearch } from "./style"
import logo from "../../../assets/logo.png"
import { Nav } from "./nav/Nav"
import { Input } from "../../atoms/input/Input"
import { Button } from "../../atoms/button/Button"
import { CiSearch } from "react-icons/ci"
import { Link } from "react-router-dom"

interface BgHeaderComponentProps {
    booleanNav?: boolean,
    onSearch?: any
}

export const Header: React.FC<BgHeaderComponentProps> = ( props ) => {


    return(
        <HeaderComponent>
            <ContainerHeader>
                <img src={logo} alt="logo lions" />
                {props.booleanNav && 
                <div className="flex">
                    <Link to="/" >
                        <Button 
                        backgroundColor="#F0BE0C"
                        color="#2A2A2A"
                        width="100px"
                        height="40px"
                        rounded="12px"
                        border="none"
                        text="Voltar"
                        size="18px"
                        />
                    </Link>
                    <StyledSearch>
                        <Input 
                        width="260px"
                        height="40px"
                        border="none"
                        radius="12px 0 0 12px"
                        onSearch={props.onSearch}
                        type="text" 
                        place="Pesquise a loja"
                        />
                        <Button 
                        backgroundColor="#2A2A2A"
                        color="#D1D1D1"
                        width="40px"
                        height="40px"
                        rounded="0 12px 12px 0"
                        border="none"
                        text={<CiSearch color="#D1D1D1" size={30}/>}
                        />
                    </StyledSearch>
                </div>
                }
                {!props.booleanNav && <Nav home='Casa' services='Serviços' category='Categorias'  />}
            </ContainerHeader>
        </HeaderComponent>
    )
}