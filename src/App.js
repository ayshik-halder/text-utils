import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  return (
    <>

      {/* <Navbar/>
      <Navbar title="TextUtils" aboutText="About it"/> */}
      <Navbar title="TextUtils" />

      <div className="container">
        <TextBox heading="Enter the text to analyse below:" />
      </div>
    </>
  );
}

export default App;
