import Header from'./components/Header';
import AddTicker from './components/AddTicker';
import {useState} from 'react';
import Tickers from './components/Tickers';
import Data from './components/Data';
import Button from './components/Button';

function App() {
  const [tickers, setTickers] = useState([])
  const [showEF, setShowEF] = useState(false)
  const [numberOfPortfolios, setNumberOfPortfolios] = useState(5)

  const deleteTicker = (id) =>{
    setTickers(tickers.filter((ticker)=> ticker.id !== id))
  }
  const addTicker = (ticker) =>{
    const id = Math.floor(Math.random()*10000)+1;
    const newTicker = {id,... ticker};
    setTickers([...tickers, newTicker]);
  }
  const calculateEF = ()=>{
    setShowEF(true)
  }
  return (
    <div className="container">
      <h1>Efficient Frontier</h1>
      {
        showEF?
          <Data tickers ={tickers}/>
        :
          <>
            <Header />
            <AddTicker onAdd={addTicker}/>
            {tickers.length>0? <Tickers tickers={tickers} onDelete={deleteTicker}/>: 'Please Add Ticker to the Efficient Frontier'}
            <Button className='btn btn-block' text='Calculate now!'  onClick={calculateEF}></Button>
          </>
      }
      
      
    </div>
  );
}

export default App;
