// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt

frappe.ui.form.on('GBV Case', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('GBV Case', {
	refresh(frm) {
	cur_frm.set_query("governorate", function(doc, cdt, cdn) {
	    var d = locals[cdt][cdn];
    	return{
	    	filters: [
		    
		    	['Governorate', 'country', '=', d.country]
	    	]
            	}
        });
        cur_frm.set_query("district", function(doc, cdt, cdn) {
	    var d = locals[cdt][cdn];
    	return{
	    	filters: [
		    
		    	['District', 'governorate', '=', d.governorate]
	    	]
            	}
        });
        cur_frm.set_query("area", function(doc, cdt, cdn) {
	    var d = locals[cdt][cdn];
    	return{
	    	filters: [
		    
		    	['Area', 'district', '=', d.district]
	    	]
            	}
        });
	
	}
})
