import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { generateText } from '../API/ollama';

const Home = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [sending, setSending] = useState(false);

    const handleSendMessage = async () => {
        setSending(true);
        setMessages([...messages, { text: inputMessage, role: "user" }]);
        if (inputMessage.trim() !== '') {
            const msg = await generateText(inputMessage);      
            setMessages(prevMessages => [
                ...prevMessages,
                { text: msg, role: "system" }
              ]); 
            setInputMessage('');
            setSending(false);
        }
    };

    return(
    <div className="flex h-screen">
        <div className="w-1/4 bg-gray-200 p-4">
            <h1 className="text-xl font-semibold">Menu</h1>
            <ul className="mt-4">
                <li>
                    <NavLink 
                        exact to="/"   
                        className={({ isActive, isPending }) =>
                            isActive ? "bg-blue-200 block py-2 px-4 rounded" : "block py-2 px-4 rounded"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        exact to="/motherbase"   
                        className={({ isActive, isPending }) =>
                            isActive ? "bg-blue-200 block py-2 px-4 rounded" : "block py-2 px-4 rounded"
                        }
                    >
                        Motherbase
                    </NavLink>
                </li>
            </ul>
        </div>

        <div className="w-3/4 bg-gray-100 p-4">
            <div className="flex justify-between mb-4">
            <h1 className="text-xl font-semibold">Chat</h1>
            </div>

            <div className="border border-gray-300 h-4/5 rounded-lg p-4 overflow-y-auto">
            {messages.map((message, index) => (
                <div key={index} className="mb-2">
                    {
                        message.role === "user"?
                            <div className="bg-blue-500 text-white rounded-lg p-2 break-words">
                                {message.text}
                            </div>
                        :
                            <div className="bg-slate-600 text-white rounded-lg p-2 max-w-xs break-words">
                                {message.text}
                            </div>
                    }
                
                </div>
            ))}
            </div>

            <div className="mt-4 flex">
            <input
                type="text"
                className="flex-1 border border-gray-300 rounded-l-md p-2 focus:outline-none"
                placeholder="Saisir une description..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
                onClick={handleSendMessage}
                disabled={sending}
            >
                {sending ? 'Sending...' : 'Send'}
            </button>
            </div>
        </div>        
    </div>
    );
}

export default Home

