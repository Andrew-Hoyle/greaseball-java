// Export and set lower case props to the Props from above

import { Button, Link } from "@material-ui/core";

// setting props as a child of the Home 
export const Home = ( props: Props ) => {
    // New classes variable using useStyles hook
        const classes = useStyles();
    return (
        // Set class with styling related to root
        <div className={classes.root}>

            {/* NavBar Here */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo}` }>
                        <a href="#" className={ `${classes.logo_a}${classes.logo_navigation}` }>Greaseballs</a>
                    </h1>
                    <ul className={ `${classes.navigation}${classes.logo_navigation}` } />
                        <li> 
                            <Link to="/" className={classes.nav_a}>Home</Link>
                        </li>
                        <li> 
                            <Link to="/dashboard" className={classes.nav_a}>Dashboard</Link>
                        </li>
                        <li> 
                            <Link to="/signin" className={classes.nav_a}>Sign In</Link>
                        </li>
                </div>
            </nav>
            {/* End Navbar */}

            {/* Main Home Array Here */}
            <main className={classes.main}>
                <div className={classes.main_text}>
                    {/* Access props object we created */}
                    <h1> { props.title } </h1>
                    <p>Check out The Cars</p>
                    <Button color='primary' variant='contained'>Click Here</Button>
                </div>

            </main>

            Hello World!
        </div>
    )
}