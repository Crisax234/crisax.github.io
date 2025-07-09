import { createContext, useState, useEffect, useMemo } from "react";
import Cookies from "js-cookie";
import useLocalStorage from '../hooks/useLocalStorage';

export const cookieAuth = createContext();

const CookieAuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);
    const [currentUser1, storeUser, clearStoredUser] = useLocalStorage('user');
    const handleUserLogin = (data) => {
        const session = Cookies.get("koa.sess");
        console.log(session);
        if (session && data) {
            setCurrentUser(true);
            const user = { user: data['user'], type: data['type'] };
            storeUser(user);
        }
        
    };

    const handleUserLogout = () => {
        clearStoredUser();
        setCurrentUser(false);
        Cookies.remove("koa.sess");
        Cookies.remove("koa.sess.sig");
    };

    useEffect(() => {
        handleUserLogin(null)}, [currentUser, handleUserLogin, handleUserLogout],
    );

    const userStatus = useMemo(
        () => ({ currentUser, handleUserLogin, handleUserLogout }),
        [currentUser, handleUserLogin, handleUserLogout],
    );

    return (
        <cookieAuth.Provider value={userStatus}>
            {children}
        </cookieAuth.Provider>
    );
};
  
export default CookieAuthProvider;