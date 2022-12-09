import './App.css';
import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import {Login} from "./Login";
import {Registration} from "./Registration";
import {Header} from "./Header";
import {useDispatch} from "react-redux";
import {fetchAuthMe} from "./API/auth";
import {useEffect} from "react";


const App = () => {

    // const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     dispatch(fetchAuthMe())
    // }, []);

  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        {/*<Route path='/posts/:id' element={<FullPost/>} />*/}
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
