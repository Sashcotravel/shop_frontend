import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./Header";
import { Users } from './users'
import Table from "./Table";


const App = () => {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path='/' element={<Table data={Users} />} />
      </Routes>
    </div>
  );
}

export default App;
