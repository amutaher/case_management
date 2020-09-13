# -*- coding: utf-8 -*-
# Copyright (c) 2020, Akram Mutaher and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class CasePlanTracker(Document):
	pass

	def validate(self):
		self.update_status()


	def after_insert(self):

		frappe.db.sql("UPDATE `tabGBV Case` set plan_tracker=1 where case_id=%s", (self.case_id))
		self.link_plan_reference()

	def on_trash(self):
		frappe.db.sql("UPDATE `tabGBV Case` set plan_tracker=0 where case_id=%s", (self.case_id))



	def link_plan_reference(self):
		service = frappe.get_doc("Case Action Plan", self.plan_id)
		for s in service.get("referred_services"):
			if s.service == self.referred_service and s.who == self.service_provider:
				s.db_set("tracker", self.name)


	def update_status(self):
		service = frappe.get_doc("Case Action Plan", self.plan_id)
		for s in service.get("referred_services"):
			if s.service == self.referred_service and s.who == self.service_provider:
				s.db_set("status", self.status)

