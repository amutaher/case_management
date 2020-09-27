# -*- coding: utf-8 -*-
# Copyright (c) 2020, Akram Mutaher and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc

class CPCase(Document):
	pass

@frappe.whitelist()
def make_assessment(source_name, target_doc=None):
	return get_mapped_doc("CP Case", source_name, {
		"CP Case": {
			"doctype": "CP Assessment"
		}
	}, target_doc)
