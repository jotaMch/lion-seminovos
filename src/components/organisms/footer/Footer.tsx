import { SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl"
import { BorderDiv, ContainerFooter, FooterComponent, Social, SocialList } from "./style"
import { TiSocialFacebook } from "react-icons/ti";
import logo from "../../../assets/logo.png"


export const Footer: React.FC = ( ) => {
    return (
        <FooterComponent>
            <ContainerFooter>
                <Social>
                    <h2>Redes sociais</h2>
                    <SocialList>
                        <a href="https://www.instagram.com/lionsseminovos/" target="_blank" rel="noopener noreferrer">
                            <li><SlSocialInstagram size={36} color="#D1D1D1" /></li>
                        </a>
                        <a href="https://www.linkedin.com/company/lions-seminovos/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                            <li><SlSocialLinkedin size={36} color="#D1D1D1" /></li>
                        </a>
                        <a href="https://www.facebook.com/lionsseminovos" target="_blank" rel="noopener noreferrer">
                            <li><TiSocialFacebook size={36} color="#D1D1D1" /></li>
                        </a>
                        <a href="https://www.youtube.com/channel/UC9G0xW9cJo16TutQlalzStw" target="_blank" rel="noopener noreferrer">
                            <li><SlSocialYoutube size={36} color="#D1D1D1" /></li>
                        </a>
                    </SocialList>
                    <BorderDiv />
                    <img src={logo} alt="logo" />
                </Social>
            </ContainerFooter>
        </FooterComponent>
    );
    
}