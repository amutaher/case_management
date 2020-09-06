// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt

frappe.ui.form.on('Case Action Plan', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('Case Action Plan', {
	refresh(frm) {
		// your code here
		if (frm.doc.docstatus == 0) {
			if ((frm.doc.referred_services || []).length) {
				frm.page.clear_primary_action();
				frm.page.set_primary_action(__('Create Plan Track'), () => {
					frm.save('Submit').then(()=>{
						frm.page.clear_primary_action();
						frm.refresh();
						frm.events.refresh(frm);
					});
				});
			}
		}
	},

})
frappe.ui.form.on('Case Action Plan', {
	refresh(frm) {
		// your code here
	},
	setup: function(frm, cdt, cdn) {
		cur_frm.set_query("who", "referred_services", function(doc, cdt, cdn) {
		    var d = locals[cdt][cdn];
			return {
				query: "case_management.cpbns.doctype.services.services.get_approvers",
				filters: {
					service: d.service,
					doctype: frm.doc.doctype
				}
			};
		});

		
	},
})
