import './App.css';
import Home from './components/Home';
import TabsComp from "./Pages";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import SinglePage from './components/SinglePage';
import Checkout from './components/Checkout';
import { useState } from 'react';
import SearchDetails from './components/SearchDetails';
import SearchPageFooter from './components/SearchPageFooter';
import Home1 from "./Home1"
import Signin from "./Signin";
import { LoginForm } from "./Home1";
import AppBar from '@mui/material/AppBar';
import Button from "@mui/material/Button/Button";
import { Toolbar } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './redux/State';


export function logout() {
  localStorage.removeItem("token")
  localStorage.removeItem("roleId")

  window.location.href = "/";
}

function ProdectedRoute({ children }) {
  const isAuth = localStorage.getItem("token");
  // console.log(isAuth)
  return isAuth ? children : <Navigate replace to={"/"} />
}
//checkAuth is normal fuction not a component
 export function checkAuth(data) {
  if (data.status === 401) {
    console.log("Unauthorized")
    throw Error("Unauthorized")
  }
  else {
    return data.json();
  }
}

function App() {
  const [open, setOpen] = useState(false);
  const roleId = localStorage.getItem('roleId');
  const navigate = useNavigate();

  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Button color="inherit" sx={{ '&:hover': { color: 'orange' } }} onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit"  sx={{ '&:hover': { color: 'Pink' } }} onClick={() => navigate("/Amazing")}>AirBnb</Button>
          {roleId == 0 ? <Button color="inherit" onClick={() => navigate("/Amazing")}>Amazing</Button> : null}
          {roleId ? (
            <Button color="inherit" sx={{ '&:hover': { color: 'red' } }} style={{ marginLeft: "auto" }} onClick={() => logout()}>LOGOUT</Button>
          ) : (
            <Button style={{ marginLeft: "auto" }} color="inherit" onClick={() => navigate("/login")}>LOGIN</Button>
          )}
        </Toolbar>
      </AppBar>

      <main>
    <ChakraProvider> 
       
      
      <Provider store={store}>
          <Routes>
            <Route path='/' element={<Home1 />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/signin' element={<Signin />} />
            {/* <Route  path='/Amazing' element={ <ProdectedRoute><Home /> </ProdectedRoute> }></Route> */}
            {/* <Route  path='/TabsComp' element={<TabsComp/>} ></Route> */}
            <Route path="/" exact element={ <ProdectedRoute><>  <Home toggle={open} setToggle={setOpen} /> <TabsComp toggle={open} setToggle={setOpen} />  <SearchPageFooter /> </> </ProdectedRoute>} />
            <Route path="/Amazing" exact element={<ProdectedRoute><>  <Home toggle={open} setToggle={setOpen} /> <TabsComp toggle={open} setToggle={setOpen} /> <SearchPageFooter /> </> </ProdectedRoute> } />
            <Route path="/:id" element={<ProdectedRoute>  <>  <Home /> <SinglePage /> </> </ProdectedRoute> } />
            <Route path="/checkout/:id/:days" exact element={<ProdectedRoute>  <> <Home />  <Checkout /> </> </ProdectedRoute> } />
            <Route path="/location/:loc" exact element={ <ProdectedRoute> <>  <Home /> <SearchDetails /> </> </ProdectedRoute> } />
          </Routes>
          </Provider>
          </ChakraProvider>
      </main>
    </div>
  );
}

export default App;








