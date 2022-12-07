import React, {Context, FC, PropsWithChildren} from 'react';

export const AuthContext: Context<any> = React.createContext(null)
const AuthProvider : FC<PropsWithChildren> = ({children}) => {

  const [user, setUser] = React.useState(null)

  const signin = (newUser:any, cb:any) => {
    setUser(newUser)
    cb()
  }
  const signout = (cb:any) => {
    setUser(null)
    cb()
  }
  const value = {user, signin, signout}
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;