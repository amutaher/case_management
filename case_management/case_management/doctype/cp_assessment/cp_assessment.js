// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt

frappe.ui.form.on('CP Assessment', {
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


frappe.ui.form.on('CP Assessment', {
	refresh: function(frm) {
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Case Information"), function() {
				frappe.set_route("List", "CP Case", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Action Plan"), function() {
				frappe.set_route("List", "Case Action Plan", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Evaluation"), function() {
				frappe.set_route("List", "Evaluate Services Implementation", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Closure"), function() {
				frappe.set_route("List", "CP Closure Form", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		if(!frm.doc.__islocal && frm.doc.action_plan==0) {
		    frm.add_custom_button(__("Action Plan"), function () {
				frappe.model.open_mapped_doc({
					method: "case_management.case_management.doctype.cp_assessment.cp_assessment.make_plan",
					frm: frm
				});
			},__('Create'));
			frm.page.set_inner_btn_group_as_primary(__('Create'));
		}
		
	},

})
