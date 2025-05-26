import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import Layout from "./component/Layout/Layout.jsx";
import Home from "./component/Home/Home.jsx"
import About from "./component/About/About.jsx";
import Main from "./component/Main/Main.jsx";
import Login from "./component/login/Login.jsx";
import Signup from "./component/login/Signup.jsx";
import LoginLayout from "./component/Layout/LoginLayout.jsx";
import NotFound from "./component/NotFounf/NotFound.jsx";
import Contact from "./component/contact/Contact.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Routes within the Layout */}
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} /> 
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
      </Route>

      {/* Standalone route for /short */}
      <Route path="/short" element={<Main />} />

      <Route path="/auth" element={<LoginLayout />} >
        <Route path="login" element={<Login/>} /> 
        <Route path="sign-up" element={<Signup/>} />
      </Route>

      <Route path="*" element={<NotFound/>} />
      

    </>
  )
);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
