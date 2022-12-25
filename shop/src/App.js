import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./Header";
import { Users } from './users'
import Table from "./Table";
import Home from "./Home";
import Senks from "./Senks";


const App = () => {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path='/table' element={<Table data={Users} />} />
        <Route path='/' element={<Home data={Users} />} />
        <Route path='/senks' element={<Senks data={Users} />} />
      </Routes>
    </div>
  );
}

export default App;
