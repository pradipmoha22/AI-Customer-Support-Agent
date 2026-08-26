import { useState } from "react";

const EmailTable = ({ emails }) => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <div className="bg-white shadow rounded p-4">

      <h2 className="mb-4">
        Recent Emails
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border">

          <thead>
            <tr>
              <th className="border p-2">From</th>
              <th className="border p-2">Subject</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Priority</th>
              <th className="border p-2">Summary</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>

            {emails.map((email) => (
              <tr key={email.id}>

                <td className="border p-2">
                  {email.from}
                </td>

                <td className="border p-2">
                  {email.subject}
                </td>

                <td className="border p-2">
                  {email.category}
                </td>

                <td className="border p-2">
                  {email.priority}
                </td>

                <td className="border p-2">
                  {email.summary}
                </td>

                <td className="border p-2 text-center">

                  <button
                    onClick={() => setSelectedEmail(email)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    View
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>


      {/* Email Details Modal */}

      {selectedEmail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">

          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">

            {/* Header */}

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-xl font-bold">
                Email Details
              </h2>

              <button
                onClick={() => setSelectedEmail(null)}
                className="text-gray-600 text-xl hover:text-black"
              >
                ✕
              </button>

            </div>


            {/* Email Information */}

            <div className="space-y-4">

              <div>
                <strong>From:</strong>
                <p className="mt-1">
                  {selectedEmail.from}
                </p>
              </div>

              <div>
                <strong>Subject:</strong>
                <p className="mt-1">
                  {selectedEmail.subject}
                </p>
              </div>

              <div>
                <strong>Category:</strong>
                <p className="mt-1">
                  {selectedEmail.category}
                </p>
              </div>

              <div>
                <strong>Priority:</strong>
                <p className="mt-1">
                  {selectedEmail.priority}
                </p>
              </div>

              <div>
                <strong>Summary:</strong>
                <p className="mt-1">
                  {selectedEmail.summary}
                </p>
              </div>


              {/* Full Email Body */}

              <div>
                <strong>Email Body:</strong>

                <div className="mt-2 p-4 bg-gray-50 border rounded whitespace-pre-wrap">
                  {selectedEmail.email_body || "Email body not available."}
                </div>

              </div>

            </div>


            {/* Close Button */}

            <div className="mt-6 text-right">

              <button
                onClick={() => setSelectedEmail(null)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default EmailTable;