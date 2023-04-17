import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut =() =>{
        logOut()
        .then(()=>{})
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>          
            <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">Branded Auth</a>
            <Link className='btn btn-ghost normal-case text-xl' to='/'>Home</Link>
            <Link className='btn btn-ghost normal-case text-xl' to='/register'>Register</Link>
            <Link className='btn btn-ghost normal-case text-xl' to='/login'>Login</Link>

            {
                user ? <div>
                    <span>{user.email}</span>
                    <button onClick={handleLogOut} className="btn btn-xs">Signout</button>
                </div>
                 :
                <Link to='/login'>lOGIN</Link>
            }
            </div>
        </div>
    );
};

export default Header;