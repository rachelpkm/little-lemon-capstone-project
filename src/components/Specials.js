import greekSalad from './images/greekSalad.jpg';
import bruchetta from './images/bruchetta.png';
import lemonDessert from './images/lemonDessert.jpg';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: "black",
}

function Specials() {
    return(
        <>
            <div className='specials'>
                <div className='specials-top'>
                    <h2>This week's specials!</h2>
                    <button>
                        <Link to="/online-order" style={linkStyle}>Online Menu</Link>
                    </button>
                </div>
                <div className='specials-cards'>
                    <div className='specials-card'>
                        <img src={greekSalad} alt="greek salad" />
                        <div className='specials-description'>
                            <p className='dish-name'>Greek salad</p>
                            <p className='dish-price'>$12.99</p>
                            <p className='dish-description'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                            <br />
                            <p className='dish-order'>Order a delivery</p>
                        </div>
                    </div>
                    <div className='specials-card'>
                        <img src={bruchetta} alt="bruchetta" />
                        <div className='specials-description'>
                            <p className='dish-name'>Bruchetta</p>
                            <p className='dish-price'>$5.99</p>
                            <p className='dish-description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <br/>
                            <p className='dish-order'>Order a delivery</p>
                        </div>
                    </div>
                    <div className='specials-card'>
                        <img src={lemonDessert} alt="lemon dessert" />
                        <div className='specials-description'>
                            <p className='dish-name'>Lemon dessert</p>
                            <p className='dish-price'>$5.00</p>
                            <p className='dish-description'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <br/>
                            <p className='dish-order'>Order a delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Specials;