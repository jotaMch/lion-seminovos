import { AboutComponent, AboutInformation, Items, ItemsContainer, ItemsList } from "./style"
import { TbPigMoney } from "react-icons/tb"
import { FaMoneyBillTrendUp, FaUmbrellaBeach } from "react-icons/fa6"
import { BiBarChart } from "react-icons/bi"

export const Services: React.FC = (  ) => {

    return(
        <AboutComponent id="services">
            <ItemsContainer>
                <ItemsList>
                    <Items>
                        <FaUmbrellaBeach size={50} color="#A60F14" />
                        <p>Trabalhe de onde quiser</p>
                    </Items>
                    <Items>
                        <FaMoneyBillTrendUp size={50} color="#A60F14" />
                        <p>Lucro alto nas vendas</p>
                    </Items>
                    <Items>
                        <TbPigMoney size={50} color="#A60F14" />
                        <p>Ganhe uma renda extra</p>
                    </Items>
                    <Items>
                        <BiBarChart size={50} color="#A60F14" />
                        <p>Diversas estratégias de vendas</p>
                    </Items>
                </ItemsList>
            </ItemsContainer>
            <AboutInformation>
                <p>
                Nossa companhia possui todo suporte necessário para 
                alcançar o sucesso nas vendas, contamos com uma equipe 
                totalmente especializada em vendas que 
                acompanhará cada etapa para a realização da sua venda.
                </p>
                <p>Oportunidade única para quem deseja realmente mudar de vida.</p>
            </AboutInformation>
        </AboutComponent>
    )
}