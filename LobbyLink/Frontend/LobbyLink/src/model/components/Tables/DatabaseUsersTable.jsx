import Container from "react-bootstrap/esm/Container";
import "../../../css/pages/Database.css";
import DBUserRow from "../../components/Tables/DBUserRow";

const DatabaseUsersTable = (props) => {
    // const addUserRows = () => {
    //     if (props.db) {
    //         console.log("DBTABLE:", props.db.data);
    //         props.db.data.map((user) => {
    //             return <DBUserRow data={user} />;
    //         });
    //     } else {
    //         console.log("DBTABLE-Else:");
    //         return (
    //             <tr>
    //                 <th scope="row">Loading..</th>
    //                 <td>Loading..</td>
    //                 <td>Loading..</td>
    //                 <td>Loading..</td>
    //                 <td>Loading..</td>
    //                 <td>Loading..</td>
    //             </tr>
    //         );
    //     }
    // };

    return (
        <>
            <Container
                fluid
                className="db-table-container rounded-3 p-0">
                <table className="table rounded-3 overflow-hidden">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">ID #</th>
                            <th scope="col">Title</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Origin</th>
                            <th scope="col">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.db.data.map((user) => {
                            return <DBUserRow data={user} />;
                        })}
                    </tbody>
                </table>
            </Container>
        </>
    );
};

export default DatabaseUsersTable;
