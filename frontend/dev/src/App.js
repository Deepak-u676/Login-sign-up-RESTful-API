import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserReg from './components/userReg';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserReg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
