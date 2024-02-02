import { useNavigate } from "react-router-dom";
import RedGradientBG from "../../model/components/Background/RedGradientBG";
import DatabaseUsersTable from "../../model/components/Tables/DatabaseUsersTable";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import DBButton from "../../model/components/Buttons/DBButton";
import Container from "react-bootstrap/esm/Container";
import { useEffect } from "react";
import GoBackButton from "../../model/components/Buttons/GoBackButton";
import { useDatabaseContext } from "../../model/context/DatabaseContext";
import axios from "axios";

const DatabasePage = (props) => {
    const { currentDB, updateDB } = useDatabaseContext();

    const navigate = useNavigate();

    const handleGoBackClick = (e) => {
        navigate("/welcome");
    };

    useEffect(() => {
        const fetchData = async () => {
            console.log("Start of fetch");

            await axios
                .get("http://localhost:3037/api/users")
                .then((res) => {
                    console.log(res.data);
                    updateDB(res.data);
                    console.log("Getting Data:", currentDB);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        fetchData();
    }, []);

    return (
        <>
            <RedGradientBG />
            <Container
                fluid
                className="db-container p-5">
                <GoBackButton
                    className="btn-db-goback"
                    onClick={handleGoBackClick}
                />
                <Row className="">
                    <p className="db-title text-start fs-1 fw-bold">
                        Database Management
                    </p>
                </Row>
                <Row className="">
                    <Col className="col-db-controls col-3 d-flex flex-column">
                        <div className="sticky-top">
                            <p className="text-start fs-3 fw-bold">
                                DB Controls
                            </p>
                            <p className="text-start mb-0 fs-6 ">
                                Add a new User to the DB:
                            </p>
                            <DBButton
                                className="btn-db btn-db-add-user mb-3"
                                buttonText="Add User"
                            />
                            <p className="text-start mb-0 fs-6 ">
                                Remove a User from the DB:
                            </p>
                            <DBButton
                                className="btn-db btn-db-remove-user mb-3"
                                buttonText="Remove User"
                            />
                            <p className="text-start mb-0 fs-6 ">
                                Set user type to Employee:
                            </p>
                            <DBButton
                                className="btn-db btn-db-set-employee mb-3"
                                buttonText="Set Employee"
                            />
                            <p className="text-start mb-0 fs-6 ">
                                Set User type to Visitor:
                            </p>
                            <DBButton
                                className="btn-db btn-db-set-visitor mb-3"
                                buttonText="Set Visitor"
                            />
                        </div>
                    </Col>
                    <Col className="col-db-table">
                        <DatabaseUsersTable db={currentDB} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DatabasePage;
