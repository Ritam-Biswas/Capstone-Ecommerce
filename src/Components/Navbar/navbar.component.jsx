import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import './navbar.style.scss';


const Navbar = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async() => {
        await signOutUser();
        setCurrentUser(null);
    }

    return(
        <>
            <div className="navbar">
                <Link to="/" className="logo">
                    logo
                </Link>
                <div className="link-container">
                    <Link to="/shop">
                        Shop
                    </Link>
                    <Link to="/contact">
                        Contact
                    </Link>
                    {
                        currentUser ? (
                            <span onClick={signOutHandler}>Sign Out</span>
                        ) : (
                            <Link to="/sign-in">
                                Sign In
                            </Link>
                        )
                    }
                    <Link to="/cart">
                        Cart
                    </Link>
                </div>
            </div> 
            <Outlet/>
        </>
    )
}

export default Navbar;