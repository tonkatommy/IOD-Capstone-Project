import Container from "react-bootstrap/esm/Container";
import "../../../css/pages/Database.css";
import DBUserRow from "../../components/Tables/DBUserRow";
import LoadingRow from "../../components/Tables/LoadingRow";

const DatabaseUsersTable = (props) => {
    console.log("UserTableComponent:", props ? props.db : "props undefined");

    // const dataRows = () => {
    //     if (props) {
    //         props.db.map((user) => {
    //             <DBUserRow data={user} />;
    //         });
    //     } else {
    //         <LoadingRow />;
    //     }
    // };
    let $table = $("#db-table");

    $(function mounted() {
        console.log("bootstrapTable: ", props.db);
        let data = props.db;
        $table.bootstrapTable({ data: props.db });
    });
    return (
        <Container
            fluid
            className="db-table-container rounded-3 p-0">
            <>
                <table
                    id="db-table"
                    className="table"
                    data-toggle="db-table"
                    data-multiple-select-row="true"
                    data-click-to-select="true"
                    data-side-pagination="server"
                    data-pagination="true"
                    data-search="true"
                    data-show-columns="true"
                    data-show-refresh="true">
                    <thead>
                        <tr className="table-primary">
                            <th
                                data-field="state"
                                data-checkbox="true"></th>
                            <th
                                data-field="_id"
                                data-sortable="true">
                                ID#
                            </th>
                            <th
                                data-field="title"
                                data-sortable="true">
                                Title
                            </th>
                            <th
                                data-field="firstName"
                                data-sortable="true">
                                First Name
                            </th>
                            <th
                                data-field="lastName"
                                data-sortable="true">
                                Last Name
                            </th>
                            <th
                                data-field="origin"
                                data-sortable="true">
                                Origin
                            </th>
                            <th
                                data-field="contact"
                                data-sortable="true">
                                Contact
                            </th>
                        </tr>
                    </thead>
                </table>
            </>
        </Container>

        // <Container
        //     fluid
        //     className="db-table-container rounded-3 p-0">
        //     <table
        //         id="table"
        //         data-toggle="table"
        //         data-click-to-select="true"
        //         data-show-pagination-switch="true"
        //         className="table table-hover rounded-3 overflow-hidden">
        //         <thead id="table-head">
        //             <tr
        //                 key={"header-row"}
        //                 className="table-primary">
        //                 <th
        //                     data-field="id"
        //                     data-sortable="true">
        //                     ID #
        //                 </th>
        //                 <th
        //                     data-field="title"
        //                     data-sortable="true">
        //                     Title
        //                 </th>
        //                 <th
        //                     data-field="first-name"
        //                     data-sortable="true">
        //                     First Name
        //                 </th>
        //                 <th
        //                     data-field="last-name"
        //                     data-sortable="true">
        //                     Last Name
        //                 </th>
        //                 <th
        //                     data-field="origin"
        //                     data-sortable="true">
        //                     Origin
        //                 </th>
        //                 <th
        //                     data-field="contact"
        //                     data-sortable="true">
        //                     Contact
        //                 </th>
        //             </tr>
        //         </thead>
        //         <tbody id="table-body">
        //             {props ? (
        //                 props.db.map((user, index) => (
        //                     <DBUserRow
        //                         key={index}
        //                         data={user}
        //                     />
        //                 ))
        //             ) : (
        //                 <></>
        //             )}
        //             {/* {dataRows()} */}
        //             {/* {props ? props.db.map((user) => <DBUserRow data={user} />) : <LoadingRow />} */}
        //             {/* {props ? props.db.map((user) => <DBUserRow data={user} />) : <LoadingRow />} */}
        //             {/* {props ? props.db.map((user) => <DBUserRow data={user} />) : <LoadingRow />} */}
        //             {/* {props ? props.db.map((user) => <DBUserRow data={user} />) : <LoadingRow />} */}
        //             {/* {props ? props.db.map((user) => <DBUserRow data={user} />) : <LoadingRow />} */}
        //             {/* {props ? props.db.map((user) => <DBUserRow data={user} />) : <LoadingRow />} */}
        //         </tbody>
        //     </table>
        // </Container>
    );
};

export default DatabaseUsersTable;
