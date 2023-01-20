import greekSalad from './images/greekSalad.jpg';
import bruchetta from './images/bruchetta.png';
import lemonDessert from './images/lemonDessert.jpg';

function Specials() {
    return(
        <>
            <div className='specials'>
                <div className='flex'>
                    <h2>This week's specials!</h2>
                    <button>Online Menu</button>
                </div>
                <div className='flex'>
                    <div>
                        <img src={greekSalad} width="200rem" alt="greek salad" />
                        <p>Greek salad</p>
                        <p>$12.99</p>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    </div>
                    <div>
                        <img src={bruchetta} width="200rem" alt="bruchetta" />
                        <p>Bruchetta</p>
                        <p>$5.99</p>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    </div>
                    <div>
                        <img src={lemonDessert} width="200rem" alt="lemon dessert" />
                        <p>Lemon dessert</p>
                        <p>$5.00</p>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Specials;