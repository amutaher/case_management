# -*- coding: utf-8 -*-
# Copyright (c) 2020, Akram Mutaher and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc

class GBVCase(Document):
	pass

@frappe.whitelist()
def make_assessment(source_name, target_doc=None):
	return get_mapped_doc("GBV Case", source_name, {
		"GBV Case": {
			"doctype": "GBV Assessment"
		}
	}, target_doc)

@frappe.whitelist()
def make_plan(source_name, target_doc=None):
	return get_mapped_doc("GBV Case", source_name, {
		"GBV Case": {
			"doctype": "Case Action Plan"
		}
	}, target_doc)


@frappe.whitelist()
def make_tracker(source_name, target_doc=None):
	return get_mapped_doc("GBV Case", source_name, {
		"GBV Case": {
			"doctype": "Case Plan Tracker"
		}
	}, target_doc)

@frappe.whitelist()
def make_evaluation(source_name, target_doc=None):
	return get_mapped_doc("GBV Case", source_name, {
		"GBV Case": {
			"doctype": "Evaluate Services Implementation"
		}
	}, target_doc)


@frappe.whitelist()
def make_closure(source_name, target_doc=None):
	return get_mapped_doc("GBV Case", source_name, {
		"GBV Case": {
			"doctype": "GBV Closure Form"
		}
	}, target_doc)


