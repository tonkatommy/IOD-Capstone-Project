const DBUserRow = (props) => {
    // console.log("DB User Row");
    // console.log("DBUserRow:", props.data);
    return (
        <tr key={props.data._id}>
            <th scope="row">{props.data._id}</th>
            <td>{props.data.title}</td>
            <td>{props.data.firstName}</td>
            <td>{props.data.lastName}</td>
            <td>{props.data.origin}</td>
            <td>{props.data.contact}</td>
        </tr>
    );
};

export default DBUserRow;
