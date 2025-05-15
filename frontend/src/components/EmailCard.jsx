import React from "react";
import { extractHeader, categoryColors } from "../utils/emailUtils";


const EmailCard = ({ email, onClick }) => {
  const subject = email.subject || extractHeader(email, "Subject") || "No Subject";
  const snippet = email.snippet ? email.snippet.substring(0, 100) + "..." : "No preview available.";
  // const category = isClassified && email.category ? email.category : null;
  // const categoryClassName = category ? categoryColors[category] || "" : "";
  // const labelColors = {
  //   Primary: "bg-blue-500",
  //   Promotions: "bg-green-500",
  //   Social: "bg-purple-500",
  //   Spam: "bg-red-500",
  // };

  return (
    <div
      onClick={() => onClick(email)}
      className="p-4 border border-gray-700 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
    >
      {/* Sender's Name */}
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold text-gray-100">{subject}</p>
        <span
          className={`px-2 py-1 text-xs font-bold rounded-full ${[email.label] || "bg-gray-500"}`}
          // className={`px-2 py-1 text-xs font-bold rounded-full ${labelColors[email.label] || "bg-gray-500"}`}
        >
          {email.labelIds?.[0] || "Unknown"}
        </span>

        {/* {category && (
        <div className={`ml-4 px-2 py-1 rounded-full text-xs font-semibold ${categoryClassName}`}>
          {category}
        </div>
      )} */}
      </div>

      {/* Snippet */}
      <p className="text-sm text-gray-400">{snippet}</p>
    </div>
  );
};

export default EmailCard;
