// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt

frappe.ui.form.on('GBV Case', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('GBV Case', {
	refresh(frm) {
		// your code here
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

frappe.ui.form.on('GBV Case', {
	refresh: function(frm) {
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Assessment"), function() {
				frappe.set_route("List", "GBV Assessment", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		if(!frm.doc.__islocal && frm.doc.gbv_assessment==0) {
		    frm.add_custom_button(__("Assessment"), function () {
				frappe.model.open_mapped_doc({
					method: "case_management.case_management.doctype.gbv_case.gbv_case.make_assessment",
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
		/*if(!frm.doc.__islocal && frm.doc.action_plan==0) {
		    frm.add_custom_button(__("Action Plan"), function () {
				frappe.model.open_mapped_doc({
					method: "case_management.case_management.doctype.gbv_case.gbv_case.make_plan",
					frm: frm
				});
			},__('Create'));
			frm.page.set_inner_btn_group_as_primary(__('Create'));
		}*/


	/*if(!frm.doc.__islocal && frm.doc.plan_tracker==1) {
			frm.add_custom_button(__("followup"), function() {
				frappe.set_route("List", "Case Plan Tracker", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		if(!frm.doc.__islocal && frm.doc.plan_tracker==0) {
		    frm.add_custom_button(__("followup"), function () {
				frappe.model.open_mapped_doc({
					method: "case_management.case_management.doctype.gbv_case.gbv_case.make_tracker",
					frm: frm
				});
			},__('Create'));
			frm.page.set_inner_btn_group_as_primary(__('Create'));
		}*/
		
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Evaluation"), function() {
				frappe.set_route("List", "Evaluate Services Implementation", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		/*if(!frm.doc.__islocal && frm.doc.evaluation==0) {
		    frm.add_custom_button(__("Evaluation"), function () {
				frappe.model.open_mapped_doc({
					method: "case_management.case_management.doctype.gbv_case.gbv_case.make_evaluation",
					frm: frm
				});
			},__('Create'));
			frm.page.set_inner_btn_group_as_primary(__('Create'));
		}*/
		
			if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Closure"), function() {
				frappe.set_route("List", "GBV Closure Form", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		/*if(!frm.doc.__islocal && frm.doc.closure==0) {
		    frm.add_custom_button(__("Closure"), function () {
				frappe.model.open_mapped_doc({
					method: "case_management.case_management.doctype.gbv_case.gbv_case.make_closure",
					frm: frm
				});
			},__('Create'));
			frm.page.set_inner_btn_group_as_primary(__('Create'));
		}*/
	},

})