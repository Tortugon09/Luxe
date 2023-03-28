import {Footerbody} from "./FooterStyle";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from "react-router-dom";

export function Footer() {
    return (
        <>
        <Footerbody>
            <div className="main">
                <Link to={"/products"}><h3>LuxeStreet</h3></Link>
                <h4>Nosotros creamos posibilidades para conectar al mundo</h4>
            </div>
            <div className="second">
                <h5>Legal</h5>
                <div className="text">
                    <h6>Terms</h6>
                    <h6>Privacy</h6>
                </div>
            </div>
            <div className="second">
                <h5>Follow</h5>
                <div className="icon">
                    <FacebookIcon></FacebookIcon>
                    <TwitterIcon></TwitterIcon>
                    <InstagramIcon></InstagramIcon>
                </div>
            </div>
        </Footerbody>

        </>
    )
}