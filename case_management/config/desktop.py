# coding=utf-8

from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		# Modules
		{
			"module_name": "Case Management",
			"color": "grey",
			"icon": "octicon octicon-organization",
			"type": "module",
			"label": _("Case Management")
		},
		{
			"module_name": "CPBNs",
			"color": "grey",
			"icon": "octicon octicon-broadcast",
			"type": "module",
			"label": _("CPBNs")
		},

	]
