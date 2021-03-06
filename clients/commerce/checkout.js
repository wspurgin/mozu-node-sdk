

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../client'), constants = Client.constants;

module.exports = Client.sub({
	getCheckouts: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/checkouts/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&q={q}&qLimit={qLimit}&responseFields={responseFields}'
	}),
	getAvailableActions: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}/actions'
	}),
	getAvailableShippingMethods: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}/shippingMethods'
	}),
	getCheckout: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}?responseFields={responseFields}'
	}),
	createCheckoutFromCart: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/checkouts/?cartId={cartId}&responseFields={responseFields}'
	}),
	performCheckoutAction: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}/actions?responseFields={responseFields}'
	}),
	resendCheckoutConfirmationEmail: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}/email/resend'
	}),
	setShippingMethods: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}/shippingMethods?responseFields={responseFields}'
	}),
	updateCheckout: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}?responseFields={responseFields}'
	}),
	processDigitalWallet: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}/digitalWallet/{digitalWalletType}?responseFields={responseFields}'
	}),
	changeCheckoutPriceList: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/checkouts/{checkoutId}/priceList?responseFields={responseFields}'
	})
});
