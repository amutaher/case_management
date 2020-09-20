// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt

frappe.ui.form.on('GBV Assessment', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('GBV Assessment', {
	refresh: function(frm) {
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Case Information"), function() {
				frappe.set_route("List", "GBV Case", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Action Plan"), function() {
				frappe.set_route("List", "Case Action Plan", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Evaluation"), function() {
				frappe.set_route("List", "Evaluate Services Implementation", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Closure"), function() {
				frappe.set_route("List", "GBV Closure Form", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		if(!frm.doc.__islocal && frm.doc.action_plan==0) {
		    frm.add_custom_button(__("Action Plan"), function () {
				frappe.model.open_mapped_doc({
					method: "case_management.case_management.doctype.gbv_assessment.gbv_assessment.make_plan",
					frm: frm
				});
			},__('Create'));
			frm.page.set_inner_btn_group_as_primary(__('Create'));
		}
		
	},

})