import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  // const authCtx = useContext(AuthContext);
  const { isLoggedIn, onLogoutHandler } = useContext(AuthContext);
  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={onLogoutHandler} />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home/>}
      </main>
    </>
  );
}

export default App;
