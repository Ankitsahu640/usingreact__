
import './App.css';
import LineCard from './component/LineCard';
import Navbar from './component/Navbar';
import OtherCard from './component/OtherCard';

function App() {
  return (
    <>
      {/* <div style={{backgroundColor:"#e0e3dc", height:"100%"}}> */}
        <Navbar title="Dashboard"/>
        <LineCard/>
        <OtherCard/>
      {/* </div> */}
    </>
  );
}

export default App;
