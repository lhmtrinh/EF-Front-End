import {useState} from 'react'

const AddPeriod = ({onSave}) => {
    const [from, setFrom] =useState('')
    const [to, setTo] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!from){
            alert('Please insert the starting year!')
            return
        }
        if(!to){
            alert('Please insert the ending year!')
            return
        }
        if(to <= from){
            alert('The starting must be different and smaller than the ending year!')
            return
        }
        onSave(from, to)

        setFrom('')
        setTo('')
    }
    return (
        <>
            <form className='add-form' onSubmit= {onSubmit}>
                <div className='form-control'>
                    <label>From:</label>
                    <input type='text' placeholder='For example: 2018' value={from} onChange={(e)=>setFrom(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>To:</label>
                    <input type='text' placeholder='For example: 2020' value={to} onChange={(e)=>setTo(e.target.value)}/>
                </div>
                <input type='submit' className='btn btn-block' value='Save Period'/>
            </form>
        </>
    )
}

export default AddPeriod