
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";


export const AppContext = createContext();

export const Context = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [profile, setProfile] = useState(localStorage.getItem("profile") || null);

    const setNewToken = (token) => {
        setToken(token);
        localStorage.setItem("token", token);
    };

    const clearToken = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    const setNewProfile = (profile) => {
        setProfile(profile);
        localStorage.setItem("profile", JSON.stringify(profile));
    };

    const clearProfile = () => {
        setProfile(null);
        localStorage.removeItem("profile");
    };

    return (
        <AppContext.Provider value={{ token, setNewToken, clearToken, profile, setNewProfile, clearProfile }}>
            {children}
        </AppContext.Provider>
    );
}


Context.propTypes = {
    children: PropTypes.node.isRequired,
};