import Form from "react-bootstrap/Form";

const Table = () => {
  return (
    <section className="table">
      <div className="table__header">
        <Form.Group>
          <Form.Control type="text" placeholder="Search..." />
        </Form.Group>
      </div>
      <div className="table__body">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Medium</th>
              <th>Mood</th>
              <th>Recommended by</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>template</td>
              <td>template</td>
              <td>template</td>
              <td>template</td>
              <td>
                <strong>template</strong>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>template</td>
              <td>template</td>
              <td>template</td>
              <td>template</td>
              <td>
                <strong>template</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
