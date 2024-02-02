import { useNavigate } from "react-router-dom";
import RedGradientBG from "../../model/components/Background/RedGradientBG";
import "../../css/pages/Database.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import DBButton from "../../model/components/Buttons/DBButton";
import Container from "react-bootstrap/esm/Container";
import { useEffect, useState } from "react";
import GoBackButton from "../../model/components/Buttons/GoBackButton";
import { useDatabaseContext } from "../../model/context/DatabaseContext";
import axios from "axios";
// import EnhancedTable from "../../model/components/Tables/EnhancedTable";
import DBDataGrid from "../../model/components/Tables/DBDataGrid";
import SingleRowSelectionGrid from "../../model/components/Tables/DBGrid";

const DatabasePage = (props) => {
    const { currentDB, updateDB } = useDatabaseContext();
    const { docSelection, setDocSelection } = useState([]);

    const navigate = useNavigate();

    const handleGoBackClick = (e) => {
        navigate("/welcome");
    };

    const handleAddClick = (e) => {
        navigate("/welcome");
    };

    const handleRemoveClick = (e) => {
        const docData = "";
        console.log("handleRemoveClick: ", docData);
        if (docData === null) {
            alert("Please select a document to remove");
            return;
        } else {
            // setDocSelection(...docData);
        }
        console.log("docSelection:", docSelection);
        if (docSelection.length > 0) {
            docSelection.map(async (doc) => {
                await axios
                    .delete(`http://localhost:3037/api/${doc._id}`)
                    .then((response) => {
                        console.log("Document deleted successfully");
                    })
                    .catch((error) => {
                        console.error("There was an error!", error);
                    });
            });
        } else {
        }
    };

    const handleSetEmployeeClick = (e) => {
        navigate("/welcome");
    };

    const handleSetVisitorClick = (e) => {
        navigate("/welcome");
    };

    useEffect(() => {
        const fetchData = async () => {
            console.log("Start of fetch");

            await axios
                .get("http://localhost:3037/api/users")
                .then((res) => {
                    console.log("Axios .then():", res.data);
                    updateDB(res.data);
                })
                .catch((error) => {
                    console.error("Axios .error():", error);
                });
        };
        fetchData();
    }, []);

    console.log("CurrentDB:", currentDB);

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
                <Row className="db-title-row">
                    <p className="db-title text-start fs-1 fw-bold">
                        Database Management
                    </p>
                </Row>
                <Row className="db-content">
                    <Col className="col-db-controls col-3 d-flex flex-column">
                        <div>
                            <p className="text-start fs-3 fw-bold">
                                DB Controls
                            </p>
                            <p className="text-start mb-0 fs-6 ">
                                Add a new User to the DB:
                            </p>
                            <DBButton
                                id="add-user-btn"
                                className="btn-db btn-db-add-user mb-3"
                                buttonText="Add User"
                                onClick={handleAddClick}
                            />
                            <p className="text-start mb-0 fs-6 ">
                                Remove a User from the DB:
                            </p>
                            <DBButton
                                id="remove-user-btn"
                                className="btn-db btn-db-remove-user mb-3"
                                buttonText="Remove User"
                                onClick={handleRemoveClick}
                            />
                            <p className="text-start mb-0 fs-6 ">
                                Set user type to Employee:
                            </p>
                            <DBButton
                                id="set-employee-btn"
                                className="btn-db btn-db-set-employee mb-3"
                                buttonText="Set Employee"
                                onClick={handleSetEmployeeClick}
                            />
                            <p className="text-start mb-0 fs-6 ">
                                Set User type to Visitor:
                            </p>
                            <DBButton
                                id="set-visitor-btn"
                                className="btn-db btn-db-set-visitor mb-3"
                                buttonText="Set Visitor"
                                onClick={handleSetVisitorClick}
                            />
                        </div>
                    </Col>
                    <Col className="col-db-table">
                        <Container
                            fluid
                            className="db-table-container overflow-visible">
                            {currentDB ? (
                                // <EnhancedTable db={currentDB} />
                                // <DBDataGrid />
                                <SingleRowSelectionGrid />
                            ) : (
                                <p>Loading...</p>
                            )}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DatabasePage;
