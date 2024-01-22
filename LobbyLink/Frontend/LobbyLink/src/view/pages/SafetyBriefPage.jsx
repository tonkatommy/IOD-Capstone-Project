import Container from "react-bootstrap/esm/Container";
import { Document, Page } from "react-pdf";
import React from "react";
import "../../css/SafetyBrief.css";

const SafetyBriefPage = (params) => {
    return (
        <Container
            fluid
            className="safetyBriefPage-container">
            <Container
                fluid
                className="safetyBriefPage-inner-container">
                Safety Brief Content
                <Document file="../../assets/Health & Safety Brief.pdf">
                    <Page />
                </Document>
            </Container>
        </Container>
    );
};

export default SafetyBriefPage;
