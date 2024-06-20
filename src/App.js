
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
    <>
      <Navbar title ="TextUtils"/>
      <div className="container">
        <TextForms heading="Enter the text to analyzie"/>
        {/* <About/> */}
        </div>
    </>
  );
}

export default App; 