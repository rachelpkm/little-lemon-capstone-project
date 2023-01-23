import imgHeader from './images/restaurantfood.jpg';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: "black",
}

function CallToAction() {
    return(
        <>
            <div className='hero'>
                <h1 className='title'>Little Lemon</h1>
                <h2 className='subtitle'>Chicago</h2>
                <p className='description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className='button'>
                    <Link to="/reservations" style={linkStyle}>Reserve a Table</Link>
                </button>
                <img src={imgHeader} className="img-header" alt="Restaurant food"/>
            </div>
        </>
    )
}

export default CallToAction;