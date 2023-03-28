import {Menu} from "../Header/Menu.jsx";
import TenisShopBody from "../Body/TenisShop/TenisShopBody.jsx";
import {Footer} from "../Footer/Footer.jsx";
import TShirtShopBody from "../Body/T-Shirts/T-ShirtShopBody";

export function TShirtsShop() {
    return (
        <>
            <Menu back={"#0E222B"}></Menu>
            <TShirtShopBody></TShirtShopBody>
            <Footer></Footer>
        </>
    )
}