import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from "./Login";
import {Registration} from "./Registration";
import {Header} from "./Header";
import { Users } from './users'
import Table from "./Table";


const App = () => {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path='/' element={<Table data={Users} />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
