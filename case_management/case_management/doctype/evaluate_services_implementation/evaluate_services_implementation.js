// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt

frappe.ui.form.on('Evaluate Services Implementation', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('Evaluate Services Implementation', {
	refresh: function(frm) {
		if(!frm.doc.__islocal && frm.doc.from_assessment=="GBV Assessment") {
			frm.add_custom_button(__("Case Information"), function() {
				frappe.set_route("List", "GBV Case", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Assessment"), function() {
				frappe.set_route("List", "GBV Assessment", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Action Plan"), function() {
				frappe.set_route("List", "Case Action Plan", {"case_id": frm.doc.case_id,"from_assessment":frm.doc.from_assessment});
			},__('View'));
			frm.add_custom_button(__("Closure"), function() {
				frappe.set_route("List", "GBV Closure Form", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		if(!frm.doc.__islocal && frm.doc.from_assessment=="CP Assessment") {
			frm.add_custom_button(__("Case Information"), function() {
				frappe.set_route("List", "CP Case", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Assessment"), function() {
				frappe.set_route("List", "CP Assessment", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Action Plan"), function() {
				frappe.set_route("List", "Action Plan", {"case_id": frm.doc.case_id,"from_assessment":frm.doc.from_assessment});
			},__('View'));
			frm.add_custom_button(__("Closure"), function() {
				frappe.set_route("List", "CP Closure Form", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		if(!frm.doc.__islocal && frm.doc.from_assessment=="General Assessment") {
			frm.add_custom_button(__("Case Information"), function() {
				frappe.set_route("List", "General Case", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Assessment"), function() {
				frappe.set_route("List", "General Assessment", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Action Plan"), function() {
				frappe.set_route("List", "Action Plan", {"case_id": frm.doc.case_id,"from_assessment":frm.doc.from_assessment});
			},__('View'));
			frm.add_custom_button(__("Closure"), function() {
				frappe.set_route("List", "General Closure Form", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		if(!frm.doc.__islocal && frm.doc.closure==0 && frm.doc.from_assessment=="GBV Assessment") {
		    frm.add_custom_button(__("Closure"), function () {
				frappe.model.open_mapped_doc({
					method: "case_management.case_management.doctype.evaluate_services_implementation.evaluate_services_implementation.make_closure_gbv",
					frm: frm
				});
			},__('Create'));
			frm.page.set_inner_btn_group_as_primary(__('Create'));
		}
		if(!frm.doc.__islocal && frm.doc.closure==0 && frm.doc.from_assessment=="CP Assessment") {
		    frm.add_custom_button(__("Closure"), function () {
				frappe.model.open_mapped_doc({
					method: "case_management.case_management.doctype.evaluate_services_implementation.evaluate_services_implementation.make_closure_cp",
					frm: frm
				});
			},__('Create'));
			frm.page.set_inner_btn_group_as_primary(__('Create'));
		}
		if(!frm.doc.__islocal && frm.doc.closure==0 && frm.doc.from_assessment=="General Assessment") {
		    frm.add_custom_button(__("Closure"), function () {
				frappe.model.open_mapped_doc({
					method: "case_management.case_management.doctype.evaluate_services_implementation.evaluate_services_implementation.make_closure_gen",
					frm: frm
				});
			},__('Create'));
			frm.page.set_inner_btn_group_as_primary(__('Create'));
		}
	},

})

frappe.ui.form.on('Evaluate Services Implementation', {
	refresh(frm) {
		// your code here
	cur_frm.set_query("action_plan", function(doc, cdt, cdn) {
	    var d = locals[cdt][cdn];
    	return{
	    	filters: [
		    
		    	["Case Action Plan", 'case_id', '=', d.case_id]
	    	]
            	}
        });
	}
});

