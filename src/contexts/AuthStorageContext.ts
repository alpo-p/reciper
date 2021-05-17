import React from "react";
import AuthStorage from "../utils/authStorage";

const AuthStorageContext = React.createContext<AuthStorage | null>(null) as React.Context<AuthStorage>;
export default AuthStorageContext;