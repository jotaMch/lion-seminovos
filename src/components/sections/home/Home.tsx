import { Arrow, ContainerHome, ImageInformation, InitialInformation, TextInformation } from "./style"
import gpsImage from "../../../assets/gps.png"
import { Button } from "../../atoms/button/Button"
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
    return(
        <ContainerHome id="home"> 
            <InitialInformation>
                <TextInformation>
                    <h1>Fature com a melhor concessionária do Brasil</h1>
                    <p>
                        Com anos de experiência no mercado, nosso compromisso é proporcionar uma 
                        experiência de compra diferenciada, com veículos de qualidade e atendimento 
                        de excelência. Com uma equipe altamente qualificada e pronta para atender 
                        suas necessidades, garantimos que você fará o melhor negócio.
                    </p>
                    <Link to="/stores" >
                        <Button text='Ver lojas' backgroundColor='#F0BE0C' color='#2A2A2A' width='250px' rounded='50px' border='none' height="80px" size="24px" />
                    </Link>
                </TextInformation>
                <ImageInformation src={gpsImage} alt="imagem mobile" />
                <Arrow>
                    <RiArrowDownDoubleLine size={40} color="#F0BE0C" />
                </Arrow>
            </InitialInformation>
        </ContainerHome>
    )
}