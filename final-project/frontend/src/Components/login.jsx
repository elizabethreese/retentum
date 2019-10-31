import React from 'react';
import { NavLink, Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';

class Login extends React.Component { 
      
    
    render() {
        
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;

        return (
                <div className="Logins">
                    {
                        user
                            ? <p>Hello, {user.displayName}</p>
                            : <p>Please sign in to view your prospects.</p>
                    }
                    {
                        user
                            ? <button className = "logins"  onClick={signOut}>Sign out</button>
                            : <button className = "logins" onClick={signInWithGoogle}>Sign-In</button>
                    }
   </div>
   )
    }
};

export default Login;
