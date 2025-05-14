import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Dashboard = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("googleCredentials")) || {});
  const navigate = useNavigate()
  // const credentials = JSON.parse(localStorage.getItem("googleCredentials"));
  // setUser(credentials);

  const fetchEmailDetails = async (messageId) => {
    try {
      const res = await axios.get(
        `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.error(`Error fetching details for message ID: ${messageId}`, error);
      return null;
    }
  };

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        console.log(user.token)
        const res = await axios.get("https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=15", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const messages = res.data.messages || [];
        const detailedEmails = await Promise.all(
          messages.map(async (message) => {
            const emailDetails = await fetchEmailDetails(message.id);
            return emailDetails;
          })
        );

        setEmails(detailedEmails); // Filter out null responses
        console.log("Fetched emails:", detailedEmails);
        console.log(emails)
        
      } catch (error) {
        console.error("Error fetching emails:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, [])
  const logout = () => {
    localStorage.removeItem("geminiApiKey");
    localStorage.removeItem("googleCredentials");
    // localStorage.removeItem("emails");
    // localStorage.removeItem("user_email");
    navigate("/");
  };
  // const emails = [
  //   {
  //     sender: "Emily Davis",
  //     subject: "Hi Emily, Thanks for your order. We are pleased to inform you that your order has been shipped. You can...",
  //   },
  //   {
  //     sender: "Marketing Team",
  //     subject: "Dear valued customer, we are excited to introduce our latest product! Check it out on our website now...",
  //   },
  //   {
  //     sender: "Support Team",
  //     subject: "Hello, we have important updates regarding your account security. Please review the changes in your dashboard...",
  //   },
  // ];

  return (

    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg font-semibold">
            {user.picture ? (
              <img src={user.picture} alt="User" className="w-full h-full rounded-full" />
            ) : "DP"}
          </div>
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        </div>
        <button onClick={logout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium">Logout</button>
      </header>

      <div className="flex items-center space-x-4 justify-between m-3 p-5 w-[100%]">
        <select className="bg-gray-800 text-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="5">Show 5</option>
          <option value="10">Show 10</option>
          <option value="15">Show 15</option>
        </select>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium">Classify</button>
      </div>

      <div className="space-y-4">
        {emails.map((email, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
          >
            <p className="font-semibold text-lg">{email.sender}</p>
            <p className="text-gray-300 mt-2 text-sm">{email.subject}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard;