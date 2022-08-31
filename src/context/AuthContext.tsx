import { ReactNode, useEffect } from "react";
import { createContext, useState } from "react";
import { AuthContextI, UserI } from "../interface/auth";
import { auth } from "../lib/firebase";

export const AuthContext = createContext({} as AuthContextI);

interface AuthContextProviderI {
  children: ReactNode;
}




export const AuthContextProvider = ({ children }: AuthContextProviderI) => {
  const [user, setUser] = useState<UserI|any>();
    const [loading, setLoading] = useState<boolean>(true)


    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setUser(user)
        setLoading(false)
      })
  
      return unsubscribe
    }, [])


  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
