function CallToAction() {
    return(
        <>
             <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>
                    <Link to="/booking">Reserve a Table</Link>
                </button>
            <div>
                <img src={imgHeader} width="200px" alt="Restaurant food"/>
            </div>
        </>
    )
}

export default CallToAction;