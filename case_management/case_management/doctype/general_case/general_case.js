// Copyright (c) 2020, Akram Mutaher and contributors
// For license information, please see license.txt

frappe.ui.form.on('General Case', {
	// refresh: function(frm) {

	// }
});
frappe.ui.form.on('General Case', {
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

frappe.ui.form.on('General Case', {
	
		// your code here
	validate: function(frm) {
        frm.trigger("calculate_final")
    },
    women_numbers: function(frm) {
        frm.trigger("calculate_final")
    },
    men_numbers: function(frm) {
        frm.trigger("calculate_final")
    },
    boys_numbers: function(frm) {
        frm.trigger("calculate_final")
    },
    girls_numbers: function(frm) {
        frm.trigger("calculate_final")
    },
    
    calculate_final: function(frm) {
        if (frm.doc.women_numbers || frm.doc.men_numbers || frm.doc.boys_numbers || frm.doc.girls_numbers){
            var final = frm.doc.women_numbers + frm.doc.men_numbers + frm.doc.boys_numbers + frm.doc.girls_numbers;
            frm.set_value('total_members', final);
            
        }
    },
	
})