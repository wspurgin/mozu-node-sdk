

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
		getValidationResults :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/orders/{orderId}/validationresults'
		}),
		addValidationResult :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/orders/{orderId}/validationresults?responseFields={responseFields}'
		})	
	});
};
