// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt

frappe.ui.form.on('Case Action Plan', {
	// refresh: function(frm) {

	// }
});

/*frappe.ui.form.on('Case Action Plan', {
	refresh(frm) {
		// your code here
		if (frm.doc.docstatus == 0) {
			if ((frm.doc.referred_services || []).length) {
				frm.page.set_primary_action(__('Create Plan Track'), () => {
					frm.save().then(()=>{
						frm.refresh();
						frm.events.refresh(frm);
					});
				});
			}
		}
	},

})*/
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

frappe.ui.form.on('Case Action Plan', {
	refresh(frm) {
		if(!frm.doc.__islocal && frm.doc.docstatus==0) {
             frm.add_custom_button(__('Creat Tracker Log'), function() { frm.trigger("creat_tracker_log") },
			    "fa fa-file-text");
           
		}
	},
	creat_tracker_log: function (frm) {
	    if (frm.is_dirty()) {
            frappe.show_alert('Please save form before Creat Tracker Log')
        }
        else {
		return frappe.call({
			doc: frm.doc,
			method: 'create_logs',
			callback: function(r) {
			    frm.refresh();
			}
		})
        }
	}
  });


frappe.ui.form.on('Case Action Plan', {
	refresh: function(frm) {
		if(!frm.doc.__islocal && frm.doc.from_assessment=="GBV Assessment") {
			frm.add_custom_button(__("Case Information"), function() {
				frappe.set_route("List", "GBV Case", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Assessment"), function() {
				frappe.set_route("List", "GBV Assessment", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Evaluation"), function() {
				frappe.set_route("List", "Evaluate Services Implementation", {"case_id": frm.doc.case_id});
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
			frm.add_custom_button(__("Evaluation"), function() {
				frappe.set_route("List", "Evaluate Services Implementation", {"case_id": frm.doc.case_id});
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
			frm.add_custom_button(__("Evaluation"), function() {
				frappe.set_route("List", "Evaluate Services Implementation", {"case_id": frm.doc.case_id});
			},__('View'));
			frm.add_custom_button(__("Closure"), function() {
				frappe.set_route("List", "General Closure Form", {"case_id": frm.doc.case_id});
			},__('View'));
		}
		if(!frm.doc.__islocal && frm.doc.evaluation==0) {
		    frm.add_custom_button(__("Evaluation"), function () {
				frappe.model.open_mapped_doc({
					method: "case_management.case_management.doctype.case_action_plan.case_action_plan.make_evaluation",
					frm: frm
				});
			},__('Create'));
			frm.page.set_inner_btn_group_as_primary(__('Create'));
		}
	},

})

frappe.ui.form.on('Case Action Plan', {
	refresh(frm) {
		// your code here
	cur_frm.set_query("assessment", function(doc, cdt, cdn) {
	    var d = locals[cdt][cdn];
    	return{
	    	filters: [
		    
		    	[d.from_assessment, 'case_id', '=', d.case_id]
	    	]
            	}
        });
	}
});

