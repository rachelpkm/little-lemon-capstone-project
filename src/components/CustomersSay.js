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
                    <h4>Rating</h4>
                    <img src={danielXavier} width="100rem" alt="daniel xavier"/>
                    <h4>Name</h4>
                    <h5>Review text</h5>
                </div>
                <div className='cardTestimonials'>
                    <h4>Rating</h4>
                    <img src={stefanStefancik} width="100rem" alt="stefan stefancik"/>
                    <h4>Name</h4>
                    <h5>Review text</h5>
                </div>
                <div className='cardTestimonials'>
                    <h4>Rating</h4>
                    <img src={hannahNelson} width="100rem" alt="hannah nelson"/>
                    <h4>Name</h4>
                    <h5>Review text</h5>
                </div>
                <div className='cardTestimonials'>
                    <h4>Rating</h4>
                    <img src={justinShaifer} width="100rem" alt="justin shaifer"/>
                    <h4>Name</h4>
                    <h5>Review text</h5>
                </div>
                </div>
            </div>
        </>
    )
}

export default CustomersSays;