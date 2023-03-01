import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => async (dispatch) => {
    const fetchData = async () => {
        const response = await fetch('https://react-9e83e-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
        if (!response.ok) {
            throw Error('Fetch cart data failed!');
        }

        const data = await response.json();
        return data;
    }
    try {
        const cartData = await fetchData();

        dispatch(cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity,
        }))
    } catch (error) {
        dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Fetching data failed!'
        }))
    }
};

export const sendCartData = (cart) => async (dispatch) => {
    dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending ...',
        message: 'Sending ... cart data'
    }))

    await fetch('https://react-9e83e-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Cart data is sent!'
    }))
};