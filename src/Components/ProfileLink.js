import React from "react";
import {Row, Col} from 'react-bootstrap';

export default function ProfileLink({children}) {

    return(
        <Row className="gap-top">
            <Col sm={{offset:2, span:10}} md={{offset:2, span:9}} xl={{offset:4, span: 7}}>
                <Row>
                    <Col xs={{span:11, offset:1}} md={{offset: 2, span: 10}} lg={{offset:3, span:9}} xl={{span:11, offset:1}}>
                        {children}
                    </Col>
                </Row>
                
            </Col>
            
        </Row>
    )
}
