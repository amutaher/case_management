# -*- coding: utf-8 -*-
# Copyright (c) 2020, Akram Mutaher and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc
from frappe.utils import cstr

class GBVAssessment(Document):
	pass

	def after_insert(self):

		frappe.db.sql("UPDATE `tabGBV Case` set gbv_assessment=1 where case_id=%s", (self.case_id))

	def on_trash(self):
		frappe.db.sql("UPDATE `tabGBV Case` set gbv_assessment=0 where case_id=%s", (self.case_id))





@frappe.whitelist()
def make_plan(source_name, target_doc=None):
	target_doc = get_mapped_doc("GBV Assessment", source_name, {
		"GBV Assessment": {
			"doctype": "Case Action Plan",
			"field_map": {
				"name": "assessment",
			}

		}
	}, target_doc)
	target_doc.from_assessment = "GBV Assessment"
	return target_doc

