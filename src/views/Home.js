import React from "react";
import {Row, Container, Col} from 'react-bootstrap';
import Domain from "../Components/Domain";
import { Domains } from "../assets/js/Domains";
import logo from '../assets/img/ANS-Full-Logo.png';

export default function Home(props) {

    return(
        <Container className="container-class text-light text-left">
            <h2 className="heading">algo.website</h2>
            <hr />
            <p>The shortlink for your .algo names.</p>
            <Row>
                <h4 className="heading">What is algo.website?</h4>
                <p className="description">
                    We secured this domain to help you share what you want to the world. This was our first shot, let us know what you think.
                </p>
                <p>
                    algo.website is a service that showcases the public ANS profile and NFT collection of any .algo name on a simple, secure, and easily shareable URL. Just add .website to the end of any .algo name in any browser and visit the URL.
                </p>
                <h4 className="heading">How do I use algo.website?</h4>
                <p className="description">Every .algo name has been granted automatic access to the algo.website feature. Simply add “.website” to the end of any .algo name in any web browser and the ANS profile will display.</p>
                <p>For example: the ANS profile for ans.algo is accessible in any browser at ans.algo.website.</p>
                <p>The profile content is automatically generated from publicly available information is ultimately controlled by the relevant ANS user.</p>
                <h4 className="heading">Explore</h4>
                <Row>
                    
                    {Domains.map(domain => 
                    <Col key={domain} xs="6" md="4" lg="3">
                        <Domain domain={domain} />  
                    </Col>  
                    )}
                    
                </Row>
                <h4 className="heading description">Who runs algo.website?</h4>
                <p className="description">
                    algo.website was created for the ANS community by the <a href="https://algonameservice.com/team" target="_blank" rel="noreferrer">ANS Team.</a> The 
                    project is open for contribution or feedback on GitHub. Send us a message <a href="https://twitter.com/algonameservice" target="_blank" rel="noreferrer">@algonameservice</a>  on Twitter!
                </p>
                <h4 className="heading">How do I update my algo.website profile?</h4>
                <p className="description">
                    You can setup/update information, such as your content, addresses, and text records on <a href="https://algonameservice.com" target="_blank" rel="noreferrer">ANS Website</a>.
                </p>

                <h4 className="heading">What is the source of the Asset Portfolio</h4>
                <p>For each .algo name, the asset portfolio is displayed directly through iframes from <a href="https://asastats.com" target="_blank" rel="noreferrer">ASA Stats</a>.</p>

                <h4 className="heading">Feedback</h4>
                <p>We would like to hear your feedback on algo.website. We have published algo.website on GitHub and invite you to open issues or submit pull requests. You can also email us at <a href="mailto:contact@algonameservice.com">contact@algonameservice.com</a></p>
                <hr />
                <div className="text-center">
                    <img src={logo} style={{width:'20%'}} alt="Algorand Name Service" />
                </div>
                <hr />
            </Row>
        </Container>
    )
}