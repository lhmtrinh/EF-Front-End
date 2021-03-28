import {useState} from 'react'

const AddTicker = ({onAdd}) => {
    const [ticker, setTicker] =useState('')

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!ticker){
            alert('Please add a ticker')
            return
        }
        onAdd({ticker})

        setTicker('')
    }
    return (
        <form className='add-form' onSubmit= {onSubmit}>
            <div className='form-control'>
                <input type='text' placeholder='Add Ticker' value={ticker} onChange={(e)=>setTicker(e.target.value)}/>
            </div>
            <input type='submit' className='btn btn-block' value='Save Ticker'/>

        </form>
    )
}

export default AddTicker
