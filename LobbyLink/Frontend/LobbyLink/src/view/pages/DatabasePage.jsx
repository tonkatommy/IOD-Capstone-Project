import RedGradientBG from "../../model/components/Background/RedGradientBG";
import DatabaseUsersTable from "../../model/components/Tables/DatabaseUsersTable";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const DatabasePage = (props) => {
    return (
        <>
            <RedGradientBG />
            <Row>
                <Col>
                    <DatabaseUsersTable />
                </Col>
            </Row>
        </>
    );
};

export default DatabasePage;
