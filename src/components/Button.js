import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <div>
            <button onClick={onClick} style={{backgroundColor: color}} 
            className='btn btn-block'>{text}</button>   
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
