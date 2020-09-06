# -*- coding: utf-8 -*-
# Copyright (c) 2020, Akram Mutaher and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class BasicInformation(Document):
	pass
	
	def validate(self):
		self.set_client_name()
		self.set_caregiver_name()



	def set_client_name(self):
		self.name1 = ' '.join(filter(lambda x: x, [self.first_name, self.middle_name, self.last_name]))

	def set_caregiver_name(self):
		self.name_of_caregiver= ' '.join(filter(lambda x: x, [self.caregiver_first_name, self.caregiver_middle_name, self.caregiver_last_name]))
