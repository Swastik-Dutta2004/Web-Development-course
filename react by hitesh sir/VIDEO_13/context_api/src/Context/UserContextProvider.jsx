import React from "react";
import useContext from "./UserContext";
import { useState } from "react";

const UserContextPorvider = ({ children }) => {
    const [user, setuser] = useState(null)
    return (
        <useContext.Provider value={{user, setuser}}>
            {children}
        </useContext.Provider>
    )
}

export default UserContextPorvider