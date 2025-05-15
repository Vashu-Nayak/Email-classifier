import React,{useState} from 'react'

const EmailDetail = () => {
    const [selectedEmail, setSelectedEmail] = useState(null);
  return (
    <div className={`w-2/3 p-6 ${selectedEmail ? "block" : "hidden"}`}>
        {selectedEmail ? (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedEmail.sender}</h2>
            <p className="text-sm text-gray-400 mb-4">
              {selectedEmail.classification}
            </p>
            <p className="whitespace-pre-wrap">{selectedEmail.details}</p>
            <button
              onClick={() => setSelectedEmail(null)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
            >
              Close
            </button>
          </div>
        ) : (
          <p className="text-gray-400">Select an email to view details.</p>
        )}
      </div>
  )
}

export default EmailDetail