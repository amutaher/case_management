// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt

frappe.ui.form.on('Case Plan Tracker', {
	// refresh: function(frm) {

	// }
});



frappe.ui.form.on('Case Plan Tracker', {
	
		// your code here
	validate: function(frm) {
        frm.trigger("calculate_final")
    },
    progress: function(frm) {
        frm.trigger("calculate_final")
    },
    calculate_final: function(frm) {
        if (frm.doc.progress > 0.0 && frm.doc.progress < 100){
            frm.set_value('status', "In Progress");
        }
        else if (frm.doc.progress >= 100){
            frm.set_value('status', "Completed");
        }
    },
	
})