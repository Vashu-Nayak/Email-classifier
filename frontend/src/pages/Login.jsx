import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [apiKey, setApiKey] = useState('');

    const handleApiKeyChange = (e) => {
        setApiKey(e.target.value);
    };

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`,
                    },
                });
                const { email, name, picture } = res.data;
                const credentials = {
                    name: name,
                    email: email,
                    picture: picture,
                    token: tokenResponse.access_token,
                }
                localStorage.setItem("googleCredentials", JSON.stringify(credentials));
                localStorage.setItem("geminiApiKey", apiKey);

                const res1 = await axios.get("https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=15", {
                    headers: {
                        Authorization: `Bearer ${credentials.token}`,
                    },
                });


                const messages = res1.messages || [];

                const emailPromises = messages.map((msg) =>
                    fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}`, {
                        headers: {
                            Authorization: `Bearer ${credentials.token}`,
                        },
                    }).then((res) => res.json())
                );

                const fullEmails = await Promise.all(emailPromises);
                console.log(fullEmails)
                localStorage.setItem("emails", JSON.stringify(fullEmails));

                navigate("/dashboard");

            }
            catch (error) {
                console.error("Error during Google login:", error);
                alert("Google Sign-In Failed. Please try again.");
            }
        },
        onFailure: (error) => {
            console.error("Google Sign-In failed:", error);
            alert("Google Sign-In Failed. Please try again.");
        },
    })


    return (
        <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
            <div className="p-8 rounded-2xl shadow-2xl bg-gradient-to-r from-blue-800 to-purple-900 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
                <div className="mb-6">
                    <label htmlFor="apiKey" className="block text-lg font-medium mb-2">
                        Gemini API Key
                    </label>
                    <input
                        type="text"
                        id="apiKey"
                        value={apiKey}
                        onChange={handleApiKeyChange}
                        placeholder="Enter your OpenAI API Key"
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="text-center">

                    <button
                        onClick={() => login()}
                        className="w-full py-2 mt-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 text-white rounded-lg"
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login