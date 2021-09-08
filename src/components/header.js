import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({ login, logout }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: 'gold'}}>
            <div>
                <Link style={{marginRight: '20px'}} to='/'>Link to Home page</Link>
                <Link style={{marginRight: '20px'}} to='/protected'>Link to Protected page</Link>
                <Link to='/unprotected'>Link to Unprotected page</Link>
            </div>
            <div>
                <button style={{marginRight: '20px'}} onClick={login}>Login</button>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

export default Header;
