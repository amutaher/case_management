from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Protection Monitoring"),
			"items": [
				{
					"type": "doctype",
					"name": "Focus Group Discussion",
				},
				{
					"type": "doctype",
					"name": "Key Information Interview",
				},
				{
					"type": "doctype",
					"name": "Direct Observation",
				},
				{
					"type": "doctype",
					"name": "Household Assessment",
				},

			]
		},
		{
			"label": _("Mapping Services"),
			"items": [
				{
					"type": "doctype",
					"name": "Service",
				},
				{
					"type": "doctype",
					"name": "Service Provider",
				},
			]
		},
		{
			"label": _("Referrals"),
			"items": [
				{
					"type": "doctype",
					"name": "Referral",
				},

			]
		},
		{
			"label": _("Location"),
			"items": [
				{
					"type": "doctype",
					"name": "Governorate",
				},
				{
					"type": "doctype",
					"name": "District",
				},
				{
					"type": "doctype",
					"name": "Area",
				},
			]
		}
	]
