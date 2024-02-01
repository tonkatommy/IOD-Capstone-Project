import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "../../../css/pages/Database.css";

const DatabaseUsersTable = (props) => {
    return (
        <>
            <Container
                fluid
                className="db-table-container rounded-3 p-0">
                <table className="table rounded-3 overflow-hidden">
                    <thead>
                        <tr>
                            <th scope="col">ID #</th>
                            <th scope="col">Title</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Origin</th>
                            <th scope="col">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.db ? (
                            <tr>
                                <th scope="row">Y1025132</th>
                                <td>CPL</td>
                                <td>Thomas</td>
                                <td>Goodman</td>
                                <td>TommyTinkersNZ</td>
                                <td>021-456-123</td>
                            </tr>
                        ) : (
                            <tr>
                                <th scope="row">Loading..</th>
                                <td>Loading..</td>
                                <td>Loading..</td>
                                <td>Loading..</td>
                                <td>Loading..</td>
                                <td>Loading..</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Container>
        </>
    );
};

export default DatabaseUsersTable;
