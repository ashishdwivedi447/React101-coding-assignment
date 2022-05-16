import logo from './logo.svg';
import './App.css';

function App() {
  const op={ostitle:"Mobile operating system",
  osname:["Android","Blackberry","iphone","windows Phone"],

  manutitle:"Mobile Manufactureres",
  brandname:["Samsung","HTC","Micromax","Apple"]
      

}
  
  return (
    <div className="App">
      <h3>{op.ostitle}</h3>
     <ul>
     {op.osname.map((e)=>(
        <li>{e}</li>
        ))}
     </ul>
     <h3>{op.manutitle}</h3>
    <ul>
    {op.brandname.map((e)=>(
       <li className={`${e==="Samsung" || e==="HTC" ? "square" : e==="Apple" ? "circle" :"disc"}`}>{e}</li>
       ))}
    </ul>
    </div>
  );
}

export default App;
