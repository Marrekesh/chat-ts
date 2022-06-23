import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Loader from "../components/loader/Loader";



const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
	  onAuthStateChanged(auth, (user) => {
		setUser(user);
		setLoading(false);
	  });
	}, []);

	if (loading) {
		return <Loader/>
	}

	return (
	  <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export const AuthContext = createContext(AuthProvider);

export default AuthProvider;