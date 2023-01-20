import logoFooter from './images/logo_footer.png';

function Footer() {
    return(
        <footer>
            <nav>
                <img src={logoFooter} width="100rem" alt="logo" />
                <ul>
                    <p>Little Lemon</p>
                    <li><a href="/">Home</a></li>
                    <li><a href='/about-us'>About</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <li><a href='/reservations'>Reservations</a></li>
                    <li><a href='/online-order'>Online Order</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
                <ul>
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
                <ul>
                    <p>Follow us</p>
                    <li><a href='instagram.com'>Instagram</a></li>
                    <li><a href='twitter.com'>Twitter</a></li>
                    <li><a href='facebook.com'>Facebook</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;