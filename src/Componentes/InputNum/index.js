import './InputNum.css'

const InputNum = (props) => {
    return(
        <div className='input'>
            <spam>{props.label}</spam>
            <input placeholder='00.0'></input>
        </div>
    )
}

export default InputNum