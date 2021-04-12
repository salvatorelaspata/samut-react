import React from 'react';
import { authMethods } from './authMethods';


interface AuthProps {
     handleSignup: () => void
}

export const firebaseAuth = React.createContext<AuthProps>({} as AuthProps)

const AuthProvider: React.FC = ({ children }) => {
     const handleSignup = () => {
          // middle man between firebase and signup 

     }
     return (
          <firebaseAuth.Provider
               value={{
                    handleSignup
               }}>
               {children}
          </firebaseAuth.Provider>
     );
};

export default AuthProvider;