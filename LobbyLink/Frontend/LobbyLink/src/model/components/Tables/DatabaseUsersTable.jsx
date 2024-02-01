import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "../../../css/pages/Database.css";

const DatabaseUsersTable = (params) => {
    return (
        <>
            <Container
                fluid
                className="db-table-container p-0">
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
                        <tr>
                            <th scope="row">Y1025132</th>
                            <td>CPL</td>
                            <td>Thomas</td>
                            <td>Goodman</td>
                            <td>TommyTinkersNZ</td>
                            <td>021-456-123</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </>
    );
};

export default DatabaseUsersTable;
