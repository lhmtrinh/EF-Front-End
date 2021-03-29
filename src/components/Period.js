import React from 'react'
import Button from './Button'

const Period = ({period, onEdit}) => {

    return (
        <div>
            From {period.from} To {period.to}
            <Button text="Edit period" className="mb" onClick={onEdit}/>            
        </div>
    )
}

export default Period
