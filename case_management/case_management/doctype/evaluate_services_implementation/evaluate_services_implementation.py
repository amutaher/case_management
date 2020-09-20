# -*- coding: utf-8 -*-
# Copyright (c) 2020, Akram Mutaher and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc

class EvaluateServicesImplementation(Document):
	pass

	def after_insert(self):

		frappe.db.sql("UPDATE `tabCase Action Plan` set evaluation=1 where case_id=%s and from_assessment=%s", (self.case_id,self.from_assessment))

	def on_trash(self):
		frappe.db.sql("UPDATE `tabCase Action Plan` set evaluation=0 where case_id=%s and from_assessment=%s", (self.case_id,self.from_assessment))


@frappe.whitelist()
def make_closure_gbv(source_name, target_doc=None):
	return get_mapped_doc("Evaluate Services Implementation", source_name, {
		"Evaluate Services Implementation": {
			"doctype": "GBV Closure Form"
		}
	}, target_doc)

@frappe.whitelist()
def make_closure_cp(source_name, target_doc=None):
	return get_mapped_doc("Evaluate Services Implementation", source_name, {
		"Evaluate Services Implementation": {
			"doctype": "CP Closure Form"
		}
	}, target_doc)

@frappe.whitelist()
def make_closure_gen(source_name, target_doc=None):
	return get_mapped_doc("Evaluate Services Implementation", source_name, {
		"Evaluate Services Implementation": {
			"doctype": "General Closure Form"
		}
	}, target_doc)



