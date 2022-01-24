import React from 'react';

import { PaystackButton } from 'react-paystack';

const PaystackCheckoutButton = ({ amount }) => {
	// convert the amount from dollars and store it to amount
	amount = amount * 512 * 100;
	const publicKey = 'pk_test_609b5f30bdf74450961b0df0dc0d60d5d4661b65';

	const onSuccess = (successThing) => {
		console.log('Success message:', successThing)
		alert('Payment Successful')
	}

	const onClose = () => {
		alert('Thank you for using that button');
	}
	
	const componentProps = {
		amount,
		publicKey,
		email: "randomemail@gmail.com",
		text: "Pay in ₦",
		onSuccess,
		onClose
	}

	return (
		<PaystackButton {...componentProps}	/>
	)
}

export default PaystackCheckoutButton;