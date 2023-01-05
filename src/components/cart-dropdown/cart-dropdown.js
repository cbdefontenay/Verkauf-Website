import React from 'react';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import '../cart-dropdown/cart-dropdown.scss';


const CartDropdown = () => (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {[].map(item => <CartItem cartItem={item} />)}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
  
  export default CartDropdown;