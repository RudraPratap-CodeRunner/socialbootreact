import "./App.css"
import Auth from "./components/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{top:'-18%', right:'0'}}></div>
      <div className="blur" style={{top:'36%', left:'-8rrem'}}></div>
   
    
      {/* Home */}
      <Home/>
      {/* <Profile/> */}
      {/* <Auth/>  */}
  </div>
  );
}

export default App;
