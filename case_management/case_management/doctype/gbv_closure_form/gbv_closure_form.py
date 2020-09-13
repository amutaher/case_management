# -*- coding: utf-8 -*-
# Copyright (c) 2020, Akram Mutaher and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class GBVClosureForm(Document):
	pass

	def after_insert(self):

		frappe.db.sql("UPDATE `tabGBV Case` set closure=1 where case_id=%s", (self.case_id))

	def on_trash(self):
		frappe.db.sql("UPDATE `tabGBV Case` set closure=0 where case_id=%s", (self.case_id))