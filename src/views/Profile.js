import React from "react";
import {Image, Row, Col, Container} from 'react-bootstrap';
import placeholder from '../assets/img/UserPlaceholder.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCircleNotch, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter, faYoutube, faReddit, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { SocialsRegex } from "../assets/js/SocialsRegex";
import ProfileLink from "../Components/ProfileLink";

const ICONS = {
    'discord': faDiscord,
    'github': faGithub,
    'telegram': faTelegram,
    'youtube': faYoutube,
    'twitter': faTwitter,
    'reddit': faReddit
}

const IPFS_LINK = 'https://ipfs.infura.io/ipfs'

export default function Profile({domain ,info}) {

    const [socials, setSocials] = React.useState([]);
    const [avatar, setAvatar] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const [found, setFound] = React.useState(false);
    //const [collectionClass, setCollectionClass] = React.useState('heading');
    //const [portfolioClass, setPortfolioClass] = React.useState('heading');
    //const [currentComponent, setCurrentComponent] = React.useState('portfolio');

    React.useEffect(() => {
        if(info.found) {
            setSocials(info.socials);
            const avatar = info.metadata.filter(data => data.key === 'avatar');
            if(avatar.length > 0) {
                setAvatar(`${IPFS_LINK}/${avatar[0].value}`);
            }
            setFound(true);
        } 
        if(Object.keys(info).length > 0) {
            setLoading(false);
        }
    }, [info])

    const clickLink = (social, value) => {
        switch(social) {
            case 'twitter':
                SocialsRegex.TwitterValidation(value);
                break;
            
            case 'telegram':
                SocialsRegex.TelegramValidation(value);
                break;
            
            case 'discord':
                SocialsRegex.DiscordValidation(value);
                break;
            
            case 'reddit':
                SocialsRegex.RedditValidation(value);
                break;

            default:
                return;
        }
    }

    /*
    const updateComponent = (component) => {
        if(component === 'COLLECTION') {
            setCollectionClass('heading');
            setPortfolioClass('text-grey');
            setCurrentComponent('collection');
            return;
        }
        if(component === 'PORTFOLIO') {
            setCollectionClass('text-grey');
            setPortfolioClass('heading');
            setCurrentComponent('portfolio');
            return;
        }
    }
    */

    return(
        <Container>
            <div className="banner">
                <Image src={avatar ? avatar : placeholder} roundedCircle style={{width:110, marginTop:100, backgroundColor:'black'}} />
            </div>
            
            <h5 style={{marginTop:70}} className="heading">{domain+'.algo'}</h5>
            
            <hr />
            {found ? 
            <div>
                <Row className="text-left section">
                    <Col xs={12}>
                        <h3 className="text-grey text-center">PROFILE</h3> <br />
                        <ProfileLink>
                            <FontAwesomeIcon icon={faLink} className="link-icon" />
                            <a className="profile-link" href={`https://${domain}.algo.website`}>https://{domain+'.algo.website'}</a>
                        </ProfileLink>
                        
                        {socials && socials.map(social => 
                            <ProfileLink key={social.key}>
                                <FontAwesomeIcon icon={ICONS[social.key]} className="link-icon" />
                                <p className="profile-link" onClick={() => clickLink(social.key, social.value)}>{social.value}</p>
                            </ProfileLink>
                        )}
                    
                    </Col>
                </Row>
                <hr />
                <Row className="text-left section">
                    <Col xs={12} style={{minHeight:'100vh'}}>
                        
                        <h3 
                            //onClick={() => updateComponent('PORTFOLIO')}
                            className={`heading pointer`}
                            style={{display:'inline', marginLeft:'2%'}}>ASSET PORTFOLIO</h3> <br />
                        
                        <iframe 
                            style={{width:'100%', height:'90vh', marginTop:'2%'}} 
                            title="ANS IFrames" 
                            src={`https://asastats.com/${domain}.algo/ans`}></iframe>
                        
                    </Col>
                </Row>
            </div> : <></> }
            
            {loading ? 
            <div>
                <FontAwesomeIcon size="4x" className="fa-spin heading" icon={faCircleNotch} />
                <p className="text-light">Loading domain information....</p>
            </div> : <></> }

            {!loading && !found ? 
            <div>
                <FontAwesomeIcon size="4x" className="heading" icon={faTriangleExclamation} />
                <p className="text-light">Domain not registered yet. Click <a href="https://algonameservice.com/#/register" rel="noreferrer" target="_blank">here</a> to register this domain</p>
            </div> : <></> }
            
        </Container>
    )
}