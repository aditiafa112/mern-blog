import React from 'react'
import { LogoWeb, ICGithub, ICDribble, ICInstagram, ICTelegram, ICFacebook, ICTwitter } from '../../../assets';
import './footer.scss';

const Icon = ({img}) => {
    return (
        <div className='icon-wrapper'>
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )   
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoWeb} alt="Aditia Falacha Arvin" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICGithub} />
                    <Icon img={ICDribble} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICFacebook} />
                    <Icon img={ICTwitter} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
