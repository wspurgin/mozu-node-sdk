

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../constants');


module.exports = function(Client){
	return Client.sub({
		getWishlistItem :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/wishlists/{wishlistId}/items/{wishlistItemId}?responseFields={responseFields}'
		}),
		getWishlistItems :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/wishlists/{wishlistId}/items?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
		}),
		getWishlistItemsByWishlistName :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/wishlists/customers/{customerAccountId}/{wishlistName}/items?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
		}),
		addItemToWishlist :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/wishlists/{wishlistId}/items?responseFields={responseFields}'
		}),
		updateWishlistItemQuantity :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/wishlists/{wishlistId}/items/{wishlistItemId}/{quantity}?responseFields={responseFields}'
		}),
		updateWishlistItem :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/wishlists/{wishlistId}/items/{wishlistItemId}?responseFields={responseFields}'
		}),
		removeAllWishlistItems :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/wishlists/{wishlistId}/items'
		}),
		deleteWishlistItem :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/wishlists/{wishlistId}/items/{wishlistItemId}'
		})	
	});
};
