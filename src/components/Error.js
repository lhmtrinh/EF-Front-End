const Error = ({error}) => {
    return (
        <div>
            <h4 className="color-warning">Error with code:</h4>
            <p>{error.response.status}</p>
            <h4 className="color-warning">Details</h4>
            <p>{error.response.data.error}</p>
            <p>{error.response.data.message}</p>
            
        </div>
    )
}

export default Error
