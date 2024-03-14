import "./App.css";
import {

  Route,
  Routes,
  
} from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import LoginForm from "./auth/form/LoginForm";
import Home from "./root/pages/Home";
import RootLayout from "./root/RootLayout";
import NotFound from "./component/NotFound";
function App() {
  return (
    <main className="  vh-100  ">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index  element={<LoginForm/>}/>
        </Route>
        <Route element={<RootLayout />}>
          <Route path={"/home"}  element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
  );
}

export default App;
