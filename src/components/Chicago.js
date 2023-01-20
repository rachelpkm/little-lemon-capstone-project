import imgMain from './images/MarioandAdrianA.jpg';

function Chicago() {
    return(
        <>
            <div className='flex about'>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <img src={imgMain} width="50%" alt="restaurant cheffs" />
            </div>
        </>
    )
}

export default Chicago;