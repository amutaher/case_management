# -*- coding: utf-8 -*-
# Copyright (c) 2020, Akram Mutaher and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc
from frappe.utils import cstr


class GeneralAssessment(Document):
	pass

	def after_insert(self):
		frappe.db.sql("UPDATE `tabGeneral Case` set general_assessment=1 where case_id=%s", (self.case_id))

	def on_trash(self):
		frappe.db.sql("UPDATE `tabGeneral Case` set general_assessment=0 where case_id=%s", (self.case_id))



@frappe.whitelist()
def make_plan(source_name, target_doc=None):
	target_doc = get_mapped_doc("General Assessment", source_name, {
		"General Assessment": {
			"doctype": "Case Action Plan",
			"field_map": {
				"name": "assessment",
			}

		}
	}, target_doc)
	target_doc.from_assessment = "General Assessment"
	return target_doc

