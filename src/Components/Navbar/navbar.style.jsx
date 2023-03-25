import styled from "styled-components";
import { Link } from 'react-router-dom';


export const NavigationBar = styled.div`
    margin: 3% 3%;
`

export const NavContainer = styled.div`
    display: flex;
`

export const Logo = styled(Link)`
    flex-basis: 100%;
`

export const LinkContainer = styled.div`
    flex-basis: 50%;
    display: flex;
    justify-content: space-between;
`

