// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt

frappe.ui.form.on('Basic Information', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on("Basic Information", "date_of_birth", function(frm) {
  var dob = new Date(frm.doc.date_of_birth);
  var now = new Date();
  var age_now = now.getFullYear() - dob.getFullYear();

  cur_frm.set_value("age", age_now);
  cur_frm.refresh();
});

frappe.ui.form.on('Basic Information', {
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
        cur_frm.set_query("sub_district", function(doc, cdt, cdn) {
	    var d = locals[cdt][cdn];
    	return{
	    	filters: [
		    
		    	['Area', 'district', '=', d.district]
	    	]
            	}
        });
	
	}
})


frappe.ui.form.on('Basic Information', {
	refresh(frm) {
		// your code here
		var doc = frm.doc;
		if(!frm.doc.__islocal && frm.perm[0].write && frm.doc.docstatus==0) {
			if(frm.doc.status==="Open" && frm.doc.assign_to) {
				frm.add_custom_button(__("Assign"), function() {
					frm.set_value("status", "Assigned");
					frm.save();
				});
			} 
		}
	},
})