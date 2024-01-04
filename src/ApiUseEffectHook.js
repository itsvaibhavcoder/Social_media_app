import React from 'react';

const baseUrl = "https://api.github.com/users/";

function API(){
    const [username, setUsername] = React.useState('itsvaibhavcoder'); // State to hold the username for fetching
    const [user, setUser] = React.useState(null); // State to hold user data from API response
    const [inputValue, setInputValue] = React.useState(''); // State to manage input field value

    const searchInput = React.useRef(); // Reference for input field

    React.useEffect(() => {
        if (username !== '') {
            getUser(username); // Fetch user data on component mount or username change
        }
    }, [username]); // useEffect dependency on the 'username' state variable

    function handleSearch() {
        setUsername(inputValue); // Set the 'username' state to the current input value
    }

    function handleClear() {
        setInputValue(''); // Clear the 'inputValue' state
        searchInput.current.value = ''; // Clear the input field value using the reference
        searchInput.current.focus();
    }

    async function getUser(route){
        try {
            const response = await fetch(`${baseUrl}${route}`); // Fetch user data from GitHub API
            const data = await response.json(); // Get JSON data from response
            setUser(data); // Set 'user' state with fetched data
        } catch (error) {
            console.error("Error fetching user data:", error); // Log error if API request fails
        }
    }

    return (
        <div>
            {/* Input field for username */}
            <input
                type="text"
                placeholder='Input username'
                onChange={event => setInputValue(event.target.value)} // Update 'inputValue' state on change
                ref={searchInput} // Reference for input field
            />
            {/* Button to trigger username search */}
            <button onClick={handleSearch}>Search</button>
            {/* Button to clear input field */}
            <button onClick={handleClear}>Clear</button>
            {/* Display user information if available */}
            {user && (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <img alt="avatar" src={user.avatar_url} style={{ height: 100 }} />
                </div>
            )}
        </div>
    )
}

export default API;
