const DBUserRow = (props) => {
    console.log("DB User Row");
    console.log("DBUserRow:", props ? props.data : "props undefined");
    // console.log(props.data._id);
    // console.log(props.data.title);
    // console.log(props.data.firstName);
    // console.log(props.data.lastName);
    // console.log(props.data.origin);
    // console.log(props.data.contact);

    return (
        <tr key={props.id}>
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
