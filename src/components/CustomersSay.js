import danielXavier from './images/daniel-xavier.jpg';
import hannahNelson from './images/hannah-nelson.jpg';
import justinShaifer from './images/justin-shaifer.jpg';
import stefanStefancik from './images/stefan-stefancik.jpg';

function CustomersSays() {
    return(
        <>
            <div className='testimonials'>
                <h2>Testimonials</h2>
                <div className='rowTestimonials'>
                    <div className='cardTestimonials'>
                        <h4 className='test-title'>Rating</h4>
                        <img src={danielXavier} className='test-img' alt="daniel xavier"/>
                        <h4 className='test-name'>Name</h4>
                        <h5 className="test-review">Review text</h5>
                    </div>
                    <div className='cardTestimonials'>
                        <h4 className='test-title'>Rating</h4>
                        <img src={stefanStefancik} className='test-img' alt="stefan stefancik"/>
                        <h4 className='test-name'>Name</h4>
                        <h5 className="test-review">Review text</h5>
                    </div>
                    <div className='cardTestimonials'>
                        <h4 className='test-title'>Rating</h4>
                        <img src={hannahNelson} className='test-img' alt="hannah nelson"/>
                        <h4 className='test-name'>Name</h4>
                        <h5 className="test-review">Review text</h5>
                    </div>
                    <div className='cardTestimonials'>
                        <h4 className='test-title'>Rating</h4>
                        <img src={justinShaifer} className='test-img' alt="justin shaifer"/>
                        <h4 className='test-name'>Name</h4>
                        <h5 className="test-review">Review text</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomersSays;