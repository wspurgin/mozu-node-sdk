

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
		getPackageLabel :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/returns/{returnId}/packages/{packageId}/label'
		}),
		getPackage :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/returns/{returnId}/packages/{packageId}?responseFields={responseFields}'
		}),
		createPackage :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/returns/{returnId}/packages?responseFields={responseFields}'
		}),
		updatePackage :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/returns/{returnId}/packages/{packageId}?responseFields={responseFields}'
		}),
		deletePackage :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/returns/{returnId}/packages/{packageId}'
		})	
	});
};
