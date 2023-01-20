import Chicago from "./Chicago";
import CustomersSays from "./CustomersSay";
import Specials from "./Specials";

function Homepage() {
    return(
        <>
            <Specials />
            <CustomersSays />
            <Chicago />
        </>
    )
}

export default Homepage;