import React from 'react'
import { BsBasket } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectCartItemsLength } from '../cart/cartSlice'

const renderNavBasedOnUrl = (location : string, amountOfItems: number) => {
    switch (location) {
        case "/cart":
            return <>
                <Link to={'/cart'}>
                    <div>
                        <BsBasket />
                    </div>
                </Link>
                <Link to={'/cart'}>Basket</Link>

                <h1> My Cart </h1>

                <Link to={'/'}>X</Link>
            </>
    
        default:
            return <>
                <Link to={'/cart'}>Cart {amountOfItems}</Link>
                <Link to={'/'}>Products </Link>
            </>
    }
}

const Header = () => {

    const amountOfItems = useAppSelector(selectCartItemsLength)

    const location = useLocation();

    return (
        <div>
            { renderNavBasedOnUrl(location.pathname, amountOfItems) }
        </div>
    )
}

export default Header