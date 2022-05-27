import React from "react";
import { Card } from "react-bootstrap";
import { DomainLink } from "../assets/js/Constants";

export default function Domain({domain}) {

    return(
        <Card className="card-bg text-center" onClick={() => window.open(DomainLink(domain))}>
            <h4>{domain}</h4>
        </Card>
    )
}