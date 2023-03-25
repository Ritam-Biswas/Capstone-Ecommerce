import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/user.context";
import { CartContext } from "../../Contexts/cart.context";
import { signOutUser } from "../../utils/firebase.utils";
import { NavigationBar, NavContainer, Logo, LinkContainer } from './navbar.style';
import CartIcon from "../Cart-icon/cartIcon.component";
import CartDropdown from "../Cart-dropdown/cartDropdown.component";


const Navbar = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return(
        <>
            <NavigationBar>
                <NavContainer>
                    <Logo to='/'>
                        logo
                    </Logo>
                    <LinkContainer>
                        <Link to="/contact">
                            Contact
                        </Link>
                        {
                            currentUser ? (
                                <span onClick={signOutUser}>Sign Out</span>
                            ) : (
                                <Link to="/sign-in">
                                    Sign In
                                </Link>
                            )
                        }
                        <Link to="/shop">
                            Shop
                        </Link>
                        <CartIcon/>
                    </LinkContainer>
                </NavContainer>
                { isCartOpen && <CartDropdown/>}
            </NavigationBar> 
            <Outlet/>
        </>
    )
}

export default Navbar;