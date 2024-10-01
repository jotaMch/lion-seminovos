import { Footer } from "../../../organisms/footer/Footer"
import { Header } from "../../../organisms/header/Header"
import { Category } from "../../../sections/category/Category"
import { Home } from "../../../sections/home/Home"
import { Services } from "../../../sections/services/Services"
import { Container, MainStyle } from "./style"


function Layout() {
    return (
        <MainStyle>
        <Container>
            <Header />
            <Home />
        </Container>
            <Services />
            <Category />
            <Footer />
        </MainStyle>
    )
}

export default Layout
