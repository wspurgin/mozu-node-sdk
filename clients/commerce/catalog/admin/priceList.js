

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../../client'), constants = Client.constants;

module.exports = Client.sub({
	getPriceLists: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/pricelists/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	getPriceList: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/pricelists/{priceListCode}?responseFields={responseFields}'
	}),
	addPriceList: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/pricelists/?responseFields={responseFields}'
	}),
	bulkAddPriceListEntries: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/pricelists/bulkaddentries?publishEvents={publishEvents}&invalidateCache={invalidateCache}'
	}),
	bulkDeletePriceListEntries: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/pricelists/bulkdeleteentries?publishEvents={publishEvents}&invalidateCache={invalidateCache}'
	}),
	bulkUpdatePriceListEntries: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/pricelists/bulkupdateentries?publishEvents={publishEvents}&invalidateCache={invalidateCache}'
	}),
	updatePriceList: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/catalog/admin/pricelists/{priceListCode}?responseFields={responseFields}'
	}),
	deletePriceList: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/catalog/admin/pricelists/{priceListCode}?cascadeDeleteEntries={cascadeDeleteEntries}'
	})
});
