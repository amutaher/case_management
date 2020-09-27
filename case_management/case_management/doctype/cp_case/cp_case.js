// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt

frappe.ui.form.on('CP Case', {
	refresh(frm) {
	cur_frm.set_query("case_id", function(doc, cdt, cdn) {
	    var d = locals[cdt][cdn];
    	return{
	    	filters: [
		    
		    	['Basic Information', 'assign_to', '=', d.owner]
	    	]
            	}
        });
	}
});

frappe.ui.form.on('CP Case', {
	refresh: function(frm) {
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Assessment"), function() {
				frappe.set_route("List", "CP Assessment", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		if(!frm.doc.__islocal && frm.doc.cp_assessment==0) {
		    frm.add_custom_button(__("Assessment"), function () {
				frappe.model.open_mapped_doc({
					method: "case_management.case_management.doctype.cp_case.cp_case.make_assessment",
					frm: frm
				});
			},__('Create'));
			frm.page.set_inner_btn_group_as_primary(__('Create'));
		}
		
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Action Plan"), function() {
				frappe.set_route("List", "Case Action Plan", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Evaluation"), function() {
				frappe.set_route("List", "Evaluate Services Implementation", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Closure"), function() {
				frappe.set_route("List", "CP Closure Form", {"case_id": frm.doc.case_id});
			},__('View'));
		}
	},

})