import './App.css';
import Home from './component/Home';
import Infopage from './component/Infopage';
import  Error  from "./component/Error";
import "./component/Style.css";
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        {/* <BrowserRouter> */}
        {/* to make code clean we import BrowserRouter inside index.js file and then wrap app.js around Browserrouter   */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='movie/:id' element = {<Infopage/>} />
            <Route path='*' element={<Error />} />

          </Routes>
        {/* </BrowserRouter> */}
        
      </>
    </div>
  );
}

export default App;
