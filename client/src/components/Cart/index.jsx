import { useDispatch, useSelector } from "react-redux";

function Cart() {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    console.log(cart);
    return (
        <div>Cart</div>
    );
};
export default Cart;