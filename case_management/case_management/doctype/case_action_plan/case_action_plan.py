# -*- coding: utf-8 -*-
# Copyright (c) 2020, Akram Mutaher and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class CaseActionPlan(Document):
	pass

	def after_insert(self):

		frappe.db.sql("UPDATE `tabGBV Case` set action_plan=1 where case_id=%s", (self.case_id))

	def on_trash(self):
		frappe.db.sql("UPDATE `tabGBV Case` set action_plan=0 where case_id=%s", (self.case_id))




	def on_submit(self):
		self.create_logs()

	def create_logs(self):
		self.check_permission('write')
		args = frappe._dict({
			"plan_id": self.name,
			"case_id": self.case_id,
		})
		if self.referred_services:
			for m in self.get("referred_services"):
				create_log(m.service, m.who, m.when, args, publish_progress=True)

		self.reload()

def create_log(referred_service, service_provider, planned_date, args, publish_progress=True):
	if frappe.db.sql("""select count(name) from `tabCase Plan Tracker` where docstatus < 2  
	and referred_service = %s and service_provider = %s and planned_date = %s""", (referred_service,service_provider,planned_date))[0][0]==0:		
		log_args = frappe._dict({
			"doctype": "Case Plan Tracker",
			"plan_id": args.plan_id,
			"case_id": args.case_id,
			"referred_service": referred_service,
			"service_provider": service_provider,
			"planned_date": planned_date,
		})
		il = frappe.get_doc(log_args)
		il.insert()