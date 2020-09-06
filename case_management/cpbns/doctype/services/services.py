# -*- coding: utf-8 -*-
# Copyright (c) 2020, Akram Mutaher and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.model.document import Document

class Services(Document):
	pass

@frappe.whitelist()
def get_approvers(doctype, txt, searchfield, start, page_len, filters):


	approvers = []
	department_details = {}
	department_list = []
	
	employee_department = filters.get("service")
	if employee_department:
		department_list = frappe.db.sql("""select name from `tabService`""")

	department_details = frappe.db.sql("""select name from `tabService Provider`""")
	

	if filters.get("doctype") == "Case Action Plan":
		parentfield = "services"
		field_name = "Services"
	
	if department_list:
		for d in department_list:
			approvers += frappe.db.sql("""select services.parent from
				`tabServices` services, `tabService Provider` approver where
				services.service = %s
				and services.parentfield = %s
				and services.parent=approver.name""",(employee_department, parentfield), as_list=True)

	if len(approvers) == 0:
		approvers = department_details
	return set(tuple(approver) for approver in approvers)