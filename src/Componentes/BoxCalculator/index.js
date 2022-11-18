import InputNum from '../InputNum'
import './BoxCalculator.css'

const BoxCalculator = (props) => {
    return(
        <div className='box'>
            <form>
                <InputNum label='Weight' />
                <InputNum label='Height' />
            </form>
        </div>
    )
}

export default BoxCalculator