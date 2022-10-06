import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
{/*import TextForm from './components/TextForm';*/}
function App() {
return (
    <>
 <Navbar title="Textutils" aboutText="About TextUtils"/>
 <div className="container my-3">
 {/*<TextForm heading="Enter the Text To Analyze Below"/>*/}
 <About/>
 </div>
</>
  );
  
}

export default App;
