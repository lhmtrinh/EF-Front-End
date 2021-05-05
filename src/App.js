import AddTicker from './components/AddTicker';
import {useState} from 'react';
import Data from './components/Data';
import Button from './components/Button';
import AddPeriod from './components/AddPeriod';
import Period from './components/Period';

function App() {
  const [tickers, setTickers] = useState([])
  const [showEF, setShowEF] = useState(false)
  const [period, setPeriod] = useState({from:null, to:null})
  const [showPeriod, setShowPeriod] = useState(false)

  const deleteTicker = (id) =>{
    setTickers(tickers.filter((ticker)=> ticker.id !== id))
  }
  const addTicker = (ticker) =>{
    const id = Math.floor(Math.random()*10000)+1;
    const newTicker = {id,... ticker};
    setTickers([...tickers, newTicker]);
  }
  const calculateEF = ()=>{
    if (tickers.length <2) {
      alert("Insert two or more tickers to continue");
      return
    } 
    if (!period.from||!period.to ){
      alert("Insert period to continue!")
      return
    }
    setShowEF(true)
  }
  const savePeriod= (fromYear, toYear) =>{
    setPeriod({from:fromYear, to:toYear})
    setShowPeriod(true)
  } 
  const editPeriod = () =>{
    setShowPeriod(false)
  }

  
  return (
    <div className="container">
      <h1>Efficient Frontier</h1>
      {
        showEF?
          <Data tickers={tickers} period={period} />
        :
          <>
            <AddTicker tickers={tickers} onAdd={addTicker} onDelete={deleteTicker}/>
            <h2 className="mt color-1">Period:</h2>
            {showPeriod?<Period period={period} onEdit={editPeriod}></Period>:<AddPeriod onSave={savePeriod}/>}
            <div className="mt"><Button text='Calculate now!' color="#009879" onClick={calculateEF}></Button></div>
          </>
      }
      
      
    </div>
  );
}

export default App;
