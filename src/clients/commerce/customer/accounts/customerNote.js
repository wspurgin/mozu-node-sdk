

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../../constants');


module.exports = function(Client){
	return Client.sub({
		getAccountNote :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/notes/{noteId}?responseFields={responseFields}'
		}),
		getAccountNotes :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/notes?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
		}),
		addAccountNote :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/notes?responseFields={responseFields}'
		}),
		updateAccountNote :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/notes/{noteId}?responseFields={responseFields}'
		}),
		deleteAccountNote :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/notes/{noteId}'
		})	
	});
};
