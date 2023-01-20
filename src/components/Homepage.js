import Chicago from "./Chicago";
import CustomersSays from "./CustomersSay";
import Specials from "./Specials";
import CallToAction from "./CallToAction";

function Homepage() {
    return(
        <>
            <CallToAction />
            <Specials />
            <CustomersSays />
            <Chicago />
        </>
    )
}

export default Homepage;