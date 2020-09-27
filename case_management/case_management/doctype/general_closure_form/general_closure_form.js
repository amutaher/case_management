// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt


frappe.ui.form.on('General Closure Form',  'before_submit',  function(frm) {
    if (frm.doc.supervisor != (frappe.session.user)) {
        msgprint('You are not permitted to close this case');
        validated = false;
    } 
});


frappe.ui.form.on('General Closure Form', {
	refresh: function(frm) {
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Case Information"), function() {
				frappe.set_route("List", "General Case", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Assessment"), function() {
				frappe.set_route("List", "General Assessment", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Action Plan"), function() {
				frappe.set_route("List", "Case Action Plan", {"case_id": frm.doc.case_id,"from_assessment":'General Assessment'});
			},__('View'));
			frm.add_custom_button(__("Evaluation"), function() {
				frappe.set_route("List", "Evaluate Services Implementation", {"case_id": frm.doc.case_id});
			},__('View'));
		}
	},

})