# -*- coding: utf-8 -*-
# Copyright (c) 2020, Akram Mutaher and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class GeneralClosureForm(Document):
	pass

	def on_submit(self):
		frappe.db.sql("UPDATE `tabEvaluate Services Implementation` set docstatus=1 where case_id=%s", (self.case_id))
		frappe.db.sql("UPDATE `tabCase Plan Tracker` set docstatus=1 where case_id=%s", (self.case_id))
		frappe.db.sql("UPDATE `tabCase Action Plan` set docstatus=1 where case_id=%s", (self.case_id))
		frappe.db.sql("UPDATE `tabGeneral Assessment` set docstatus=1 where case_id=%s", (self.case_id))
		frappe.db.sql("UPDATE `tabGeneral Case` set docstatus=1 where case_id=%s", (self.case_id))
		frappe.db.sql("UPDATE `tabBasic Information` set docstatus=1 where name=%s", (self.case_id))
