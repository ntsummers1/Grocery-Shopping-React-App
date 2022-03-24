import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectCartItemsLength } from '../cart/cartSlice'

const Header = () => {

    const amountOfItems = useAppSelector(selectCartItemsLength)

    return (
        <div>
            <Link to={'/cart'}>Cart {amountOfItems}</Link>
            <Link to={'/'}>Products </Link>
        </div>
    )
}

export default Header