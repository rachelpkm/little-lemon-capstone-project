import logoFooter from './images/logo_footer.png';

function Footer() {
    return(
        <footer>
            <nav className='footer-container'>
                <img src={logoFooter} className="footer-img" alt="logo" />
                <ul className='grid-item-nav'>
                    <p>Little Lemon</p>
                    <li><a href="/">Home</a></li>
                    <li><a href='/about-us'>About</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <li><a href='/reservations'>Reservations</a></li>
                    <li><a href='/online-order'>Online Order</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
                <ul className='grid-item-contact'>
                    <p>Contact</p>
                    <address>
                        You may also want to visit us:
                        <br />
                        Little Lemon
                        <br />
                        123 S Chicago
                        <br />
                        Street Chicago, Illinois 987654
                        <br />
                        USA
                        <li><a href='mailto:littlelemon@restaurant.com'>littlelemon@restaurant.com</a></li>
                        <li><a href='tel:+1234567890'>(123) 456-7890</a></li>
                        <li><a href='mailto:littlelemon@bookings.com'>littlelemon@bookings.com</a></li>
                    </address>
                </ul>
                <ul className='grid-item-social'>
                    <p>Follow us</p>
                    <li><a href='instagram.com' target={'_blank'} rel='noreferrer'>Instagram</a></li>
                    <li><a href='twitter.com' target={'_blank'} rel='noreferrer'>Twitter</a></li>
                    <li><a href='facebook.com' target={'_blank'} rel='noreferrer'>Facebook</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;