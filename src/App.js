//import './App.css';
import Header from './components/header.jsx'

function App() {
  const test=null;
  const maintenace = "We're sorry for the inconvenience. Our website is currently undergoing maintenance. Please check back later."
  return (
    <div className="App container">
      <header className="App-header">
       
       <h1 style={{marginTop:"150px",textAlign:"center"}}> {maintenace}</h1>
{     //  <Header></Header>
}       
      </header>
    </div>
  );
}

export default App;