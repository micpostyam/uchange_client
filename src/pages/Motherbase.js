import React from 'react';
import { NavLink } from 'react-router-dom';

const Motherbase = () => {
    const data = [
        { entreprise: "Entreprise 1", description: "Description 1", reponse: "Réponse 1" },
        { entreprise: "Entreprise 2", description: "Description 2", reponse: "Réponse 2" },
        { entreprise: "Entreprise 3", description: "Description 3", reponse: "Réponse 3" },
        { entreprise: "Entreprise 4", description: "Description 4", reponse: "Réponse 4" },
        { entreprise: "Entreprise 5", description: "Description 5", reponse: "Réponse 5" }
    ];

    return (
        <div className="flex h-screen">
            <div className="w-1/6 bg-gray-200 p-4">
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

            <div className="w-5/6 bg-gray-100 p-4">
                {/* Title and Start Button */}
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Welcome to Motherbase</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Start</button>
                </div>

                {/* Table */}
                <div className="overflow-auto h-5/6">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Entreprises</th>
                            <th className="border border-gray-300 px-4 py-2">Descriptions</th>
                            <th className="border border-gray-300 px-4 py-2">Réponses</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">{item.entreprise}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.reponse}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Motherbase;
