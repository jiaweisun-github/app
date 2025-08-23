import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/jakarta', 
                { name, address }, 
                { headers: { 'Content-Type': 'application/json' } }
);
            setResponse(res.data);
        } catch (error) {
            setResponse('Error: ' + error.message);
        }
    };

    return (
        <div>
            <h1>Submit User Infooooo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Address: </label>
                    <input
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send to /jakarta</button>
            </form>
            <p>Response: {response}</p>
        </div>
    );
};

export default App;