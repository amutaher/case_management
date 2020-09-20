// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt

frappe.ui.form.on('General Closure Form', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('General Closure Form',  'before_submit',  function(frm) {
    if (frm.doc.supervisor != (frappe.session.user)) {
        msgprint('You are not permitted to close this case');
        validated = false;
    } 
});