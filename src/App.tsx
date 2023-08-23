import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";
import Navbar from "./components/Navbar";
interface Data {
  name: string;
  phone: string;
  email: string;
}
function App() {
  const navigate = useNavigate();
  const [data, setData] = useState<Data>({
    name: "",
    phone: "",
    email: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
    if (localStorage.getItem("data")) {
      setIsLoggedIn(true);
    }
    console.log("Accesing local storage: ", localStorage.getItem("data"));
  }, [isLoggedIn, navigate]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              setData={setData}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              loading={loading}
              setLoading={setLoading}
            />
          }
        ></Route>
        <Route
          path="/data"
          element={
            isLoggedIn ? (
              <Data loading={loading} setLoading={setLoading} />
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
