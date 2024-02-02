const LoadingRow = (props) => {
    console.log("Loading Row Component Called:");
    // console.log("DBUserRow:", props.data);
    return (
        <tr key="loading-row">
            <th scope="row">Loading..</th>
            <td>Loading..</td>
            <td>Loading..</td>
            <td>Loading..</td>
            <td>Loading..</td>
            <td>Loading..</td>
        </tr>
    );
};

export default LoadingRow;
