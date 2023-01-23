import imgMain from './images/MarioandAdrianA.jpg';
import imgCookers from './images/MarioandAdrianb.jpg';

function Chicago() {
    return(
        <>
            <div className='chicago'>
                <div className='chicago-column'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className='chicago-img'>
                    <img src={imgCookers} className="img2" alt="restaurant cheffs" />
                    <img src={imgMain} className="img1" alt="restaurant cheffs" />
                </div>
            </div>
        </>
    )
}

export default Chicago;