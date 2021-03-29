import {useState} from 'react'
import Tickers from './Tickers'
const AddTicker = ({tickers, onAdd, onDelete}) => {
    const [ticker, setTicker] =useState('')

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!ticker){
            alert('Please insert a name of the ticker')
            return
        }
        onAdd({ticker})

        setTicker('')
    }
    return (
        <>
            <h2 className="mt color-1">Tickers:</h2>
            <form className='add-form' onSubmit= {onSubmit}>
                <div className='form-control'>
                    <input type='text' placeholder='Add Ticker' value={ticker} onChange={(e)=>setTicker(e.target.value)}/>
                </div>
                <Tickers tickers={tickers} onDelete={onDelete}/>
                {/* {tickers.length<2&& <p>Insert 2 or more tickers to compute the Efficient Frontier</p>} */}
                <input type='submit' className='btn btn-block' value='Save Ticker'/>

            </form>
        </>
    )
}

export default AddTicker
