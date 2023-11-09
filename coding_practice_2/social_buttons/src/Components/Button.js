import './Button.css'
function Button(props){
    return(
        <div className='btn-section'>
            <button  className='btn btn1'>Like</button>
            <button className='btn btn2'>Comment</button>
            <button className='btn btn3'>Share</button>
        </div>
    )
}

export default Button