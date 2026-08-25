const EmailTable = ({ emails }) => {
  return (
    <div className="bg-white shadow rounded p-4">

      <h2 className="mb-4">
        Recent Emails
      </h2>

      <table className="w-full border">

        <thead>
          <tr>
            <th>From</th>
            <th>Subject</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Summary</th>
          </tr>
        </thead>

        <tbody>

          {emails.map((email, index) => (
            <tr key={index}>
              <td>{email.from}</td>
              <td>{email.subject}</td>
              <td>{email.category}</td>
              <td>{email.priority}</td>
              <td>{email.summary}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default EmailTable;