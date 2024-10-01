import { Card, CardInformation, ContainerProduct, ImageCar, LinkToPath, ProductCategory } from "./style"
import Cars from "../../../assets/image_5-removebg-preview.png"
import { Button } from "../../atoms/button/Button"
import { RiMedalFill } from "react-icons/ri"

export const Category: React.FC = () => {
    return(
        <ContainerProduct id="category">
            <ProductCategory>
                <h2>Conheça nossas categorias</h2>
                <p>O maior estoque de utilitários do Brasil, aqui temos as melhores condições do mercado</p>
                <Card>
                    <CardInformation>
                        <RiMedalFill  size={150} color="#794b07"/>
                        <RiMedalFill  size={150} color="#9c9c9c" />
                        <RiMedalFill  size={150} color="#f1e325" />
                    </CardInformation>
                </Card>
            </ProductCategory>
            <LinkToPath>
                <ImageCar src={Cars} alt="imagem carros" />
                <Button 
                text='Ver estoque' 
                backgroundColor='#A60F14' 
                color='#D1D1D1' width='350px' rounded='50px' 
                border='none' height="98px" size="28px" 
                />
            </LinkToPath>
        </ContainerProduct>
    )
}