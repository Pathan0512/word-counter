import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import About from './componenets/About';

function App() {
  return (
    <>
<Navbar title="Bajaj Finserv" link="Link"/>
<div className="container my-3">
<TextForm heading="Enter the text to Analyze"/>
{/* <About/> */}
</div>
</>
  );
}

export default App;
