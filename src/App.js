import { Routes, Route, Navigate } from "react-router-dom";

// import { useSelector } from "react-redux";
import { Fragment } from "react";
import './App.css'
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Trainers from "./components/pages/Trainers";
import Blog from "./components/pages/Blog";
import BasicForm from "./components/Forms/BasicForm";
import Footer from "./components/pages/Footer";
import Auth from "./components/pages/Auth";
import Password from "./components/pages/Password";
import ForgotPassword from "./components/pages/forgotPassword";
import { useContext } from "react";
import AuthContext from "./components/Stored/auth-context";
function App() {
  const authCtx = useContext(AuthContext);
  
  return (
    <Fragment>
      <Layout>
        

        {!authCtx.isLoggedIn && <Auth />}

        <Routes>
          {/* <Route path="/auth" element={!authCtx.isLoggedIn &&<Auth />} /> */}
          <Route path="/password" element={<Password />} />
          <Route path="/fpassword" element={<ForgotPassword />} />
          <Route path="/" element={authCtx.isLoggedIn && <Home />} exact />

          <Route path="/about" element={authCtx.isLoggedIn && <About />} />
          <Route path="/trainee" element={authCtx.isLoggedIn && <Trainers />} />
          <Route path="/blog" element={authCtx.isLoggedIn && <Blog />} />
          <Route
            path="/basicform"
            element={authCtx.isLoggedIn && <BasicForm />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </Layout>
    </Fragment>
  );
}

export default App;
