import Table from "react-bootstrap/Table";

const CurrentVisitorsTable = (params) => {
    return (
        <>
            <h1>Current Vivistors Table</h1>
            <Table
                striped
                bordered
                hover>
                <thead>
                    <tr>
                        <th>ID#</th>
                        <th>Name</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Contact No.</th>
                        <th>Time In</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Y1025132</td>
                        <td>CPL, Tommy Goodman</td>
                        <td>Home</td>
                        <td>Electrical Systems</td>
                        <td>021123456</td>
                        <td>12:06 Sun 28/1/2024</td>
                    </tr>
                    <tr>
                        <td>X1023423</td>
                        <td>SGT, Jimmy Calray</td>
                        <td>Rocket Labs</td>
                        <td>E3/Capabilities Bay</td>
                        <td>027456852</td>
                        <td>13:10 Sun 28/1/2024</td>
                    </tr>
                    <tr>
                        <td>Q1057384</td>
                        <td>Mrs, Emmy Newton</td>
                        <td>ANZ</td>
                        <td>AVSQN HQ</td>
                        <td>021555444</td>
                        <td>14:27 Sun 28/1/2024</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default CurrentVisitorsTable;

//  "SRVC NO", "RANK", "FIRST NAME", "LAST NAME", "WORK PLACE", "CONTACT NO", "TIME IN")
