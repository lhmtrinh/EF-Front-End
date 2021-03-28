import {FaTimes} from 'react-icons/fa'

const Ticker = ({ ticker, onDelete, }) => {
    return (
        <div className='ticker'>
            <h3>{ticker.ticker} 
                <FaTimes 
                    onClick={()=>onDelete(ticker.id)}
                />
            </h3>
        </div>
    )
}

export default Ticker
