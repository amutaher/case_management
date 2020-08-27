from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Cases"),
			"items": [
				{
					"type": "doctype",
					"name": "Case",
				},			]
		},
		{
			"label": _("GBV"),
			"items": [
				{
					"type": "doctype",
					"name": "GBV Case",
				},
				{
					"type": "doctype",
					"name": "GBV Case Assessment",
				},
			]
		},
		{
			"label": _("CP"),
			"items": [
				{
					"type": "doctype",
					"name": "CP Case",
				},
				{
					"type": "doctype",
					"name": "CP Case Assessment",
				},
			]
		},
		{
			"label": _("General"),
			"items": [
				{
					"type": "doctype",
					"name": "General Case",
				},
				{
					"type": "doctype",
					"name": "General Case Assessment",
				},
			]
		},

		{
			"label": _("Implementation"),
			"items": [
				{
					"type": "doctype",
					"name": "Case Action Plan",
				},
				{
					"type": "doctype",
					"name": "Case Plan Tracker",
				},
				{
					"type": "doctype",
					"name": "Evaluate Services Implementation",
				},
				{
					"type": "doctype",
					"name": "Case Closure",
				},

			]
		},
		{
			"label": _("Services Forms"),
			"items": [
				{
					"type": "doctype",
					"name": "Cash Assessment",
				},
				{
					"type": "doctype",
					"name": "Livelihood Assessment",
				},
			]
		},

	]
