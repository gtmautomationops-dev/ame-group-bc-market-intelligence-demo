window.AME_DEMO_DATA = {
    "datasetName": "AME BC Market Intelligence — Live Data",
    "generatedOn": "2026-04-11",
    "runLog": {
        "mode": "Live data pipeline",
        "latestRun": {
            "runId": "20260411-211543",
            "generatedAt": "2026-04-11T21:15:43.147384",
            "label": "Apr 11, 2026 9:15 PM",
            "status": "Completed",
            "runner": "generate_data_js.py",
            "mode": "Live data — MERX + BC Municipalities",
            "datasetDate": "2026-04-11",
            "verifiedDate": "2026-04-11",
            "signalsLoaded": 229,
            "priorityLeads": 3,
            "earlySignals": 29,
            "meetingLinked": 0,
            "outputsRefreshed": [
                {
                    "label": "Dashboard bundle",
                    "path": "ame-proof-app-data.js"
                }
            ],
            "detail": "Live run: 229 signals collected from MERX and BC municipal sources. 3 priority leads found."
        },
        "history": [
            {
                "runId": "20260411-211543",
                "generatedAt": "2026-04-11T21:15:43.147384",
                "label": "Apr 11, 2026 9:15 PM",
                "status": "Completed",
                "runner": "generate_data_js.py",
                "mode": "Live data — MERX + BC Municipalities",
                "datasetDate": "2026-04-11",
                "verifiedDate": "2026-04-11",
                "signalsLoaded": 229,
                "priorityLeads": 3,
                "earlySignals": 29,
                "meetingLinked": 0,
                "outputsRefreshed": [
                    {
                        "label": "Dashboard bundle",
                        "path": "ame-proof-app-data.js"
                    }
                ],
                "detail": "Live run: 229 signals collected from MERX and BC municipal sources. 3 priority leads found."
            }
        ]
    },
    "truthModel": {
        "approach": "Automated scraping of public procurement and municipal sources",
        "lastVerified": "2026-04-11"
    },
    "clientContext": {
        "name": "AME Group",
        "description": "Mechanical and electrical engineering consultants, BC and Alberta",
        "serviceLines": [
            "Mechanical Design",
            "Fire Suppression Design",
            "Energy + Sustainability",
            "Commissioning"
        ]
    },
    "watchProfile": {
        "keywords": [
            "pool",
            "aquatic centre",
            "aquatic",
            "hvac",
            "mechanical",
            "boiler",
            "chiller",
            "recreation complex",
            "community centre",
            "commissioning",
            "fire suppression",
            "construction"
        ]
    },
    "briefing": {
        "headline": "3 priority leads and 17 watch signals identified from 229 BC sources checked on April 11, 2026.",
        "summary": "Automated scan of MERX and 26 BC municipalities. Signals scored by keyword relevance, project stage, and AME service line fit.",
        "totals": {
            "signalsLoaded": 229,
            "priorityLeads": 3,
            "watchlist": 17,
            "earlySignals": 29,
            "meetingLinked": 0
        },
        "priorityLeads": [
            {
                "id": "live-001",
                "entity": "Comox Valley Regional District",
                "location": "British Columbia, CAN",
                "title": "ITT - CVAC Pool Heating Electrification & AHU Replacement",
                "score": 100,
                "priorityKey": "priority",
                "priorityLabel": "Priority Lead",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Swimming pool",
                "serviceLines": [
                    "Mechanical Design",
                    "Energy + Sustainability",
                    "Commissioning"
                ],
                "action": "Map likely packages, local partners, and probable follow-on scopes",
                "whyItMatters": "Active procurement — entry point available now. Relevant service lines: Mechanical Design, Energy + Sustainability, Commissioning.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443955833800?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/04/06",
                "office": "Nanaimo Satellite Office"
            },
            {
                "id": "live-002",
                "entity": "Corporation of Delta",
                "location": "British Columbia, CAN",
                "title": "Acrylic Wall Coatings C-042 for Winskill Aquatic Centre Renewal",
                "score": 86,
                "priorityKey": "priority",
                "priorityLabel": "Priority Lead",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Aquatic centre",
                "serviceLines": [
                    "Mechanical Design",
                    "Fire Suppression Design",
                    "Energy + Sustainability",
                    "Commissioning"
                ],
                "action": "Map likely packages, local partners, and probable follow-on scopes",
                "whyItMatters": "Active procurement — entry point available now. Relevant service lines: Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443947654736?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/03/31",
                "office": "Vancouver Office"
            },
            {
                "id": "live-003",
                "entity": "City of Nanaimo",
                "location": "British Columbia, CAN",
                "title": "4198 Nanaimo Aquatic Centre Water Feature Project",
                "score": 84,
                "priorityKey": "priority",
                "priorityLabel": "Priority Lead",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Aquatic centre",
                "serviceLines": [
                    "Mechanical Design",
                    "Fire Suppression Design",
                    "Energy + Sustainability",
                    "Commissioning"
                ],
                "action": "Map likely packages, local partners, and probable follow-on scopes",
                "whyItMatters": "Active procurement — entry point available now. Relevant service lines: Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443945921254?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/03/30",
                "office": "Nanaimo Satellite Office"
            }
        ],
        "watchlist": [
            {
                "id": "live-004",
                "entity": "Fraser Valley Regional District",
                "location": "British Columbia, CAN",
                "title": "Dan Sharrers Aquatic Centre Sand Filter Replacement",
                "score": 78,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Aquatic centre",
                "serviceLines": [
                    "Mechanical Design",
                    "Fire Suppression Design",
                    "Energy + Sustainability",
                    "Commissioning"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning scopes.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443956149428?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/04/06",
                "office": "Vancouver Office"
            },
            {
                "id": "live-005",
                "entity": "District Of Kitimat",
                "location": "British Columbia, CAN",
                "title": "RFQ 2026-09 Sam Lindsay Aquatic Centre Boiler Replacement",
                "score": 74,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Aquatic centre",
                "serviceLines": [
                    "Mechanical Design",
                    "Fire Suppression Design",
                    "Energy + Sustainability",
                    "Commissioning"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning scopes.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443949426693?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/04/01",
                "office": "Vancouver Office"
            },
            {
                "id": "live-006",
                "entity": "Northern Health Authority",
                "location": "British Columbia, CAN",
                "title": "FRASER LAKE - Chiller Replacement RFP",
                "score": 66,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "HVAC systems",
                "serviceLines": [
                    "Mechanical Design"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design scopes.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443940685006?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/03/26",
                "office": "Vancouver Office"
            },
            {
                "id": "live-007",
                "entity": "BC Ferry Services Inc",
                "location": "British Columbia, CAN",
                "title": "RFP 19-2026 - 92409 Phase 3 of the Lands End Cafe Building Renewal at Swartz Bay Terminal",
                "score": 64,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Municipal facility",
                "serviceLines": [
                    "Mechanical Design"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design scopes.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443928950666?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/03/18",
                "office": "Vancouver Office"
            },
            {
                "id": "live-008",
                "entity": "City of Chilliwack",
                "location": "Chilliwack, BC",
                "title": "Aquatic Centres",
                "score": 63,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "planning",
                "stageLabel": "Planning",
                "assetType": "Aquatic centre",
                "serviceLines": [
                    "Mechanical Design",
                    "Fire Suppression Design",
                    "Energy + Sustainability",
                    "Commissioning"
                ],
                "action": "Monitor for procurement milestone announcements",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning scopes.",
                "sourceUrl": "https://www.chilliwack.com/main/page.cfm?id=2242",
                "sourceName": "City of Chilliwack",
                "effectiveDate": "2026-04-11",
                "office": "Vancouver Office"
            },
            {
                "id": "live-009",
                "entity": "City of Chilliwack",
                "location": "Chilliwack, BC",
                "title": "Chilliwack Curling and Community Centre",
                "score": 63,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "planning",
                "stageLabel": "Planning",
                "assetType": "Community centre",
                "serviceLines": [
                    "Fire Suppression Design",
                    "Commissioning"
                ],
                "action": "Monitor for procurement milestone announcements",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Fire Suppression Design, Commissioning scopes.",
                "sourceUrl": "https://www.chilliwack.com/main/page.cfm?id=2823",
                "sourceName": "City of Chilliwack",
                "effectiveDate": "2026-04-11",
                "office": "Vancouver Office"
            },
            {
                "id": "live-010",
                "entity": "City of Chilliwack",
                "location": "Chilliwack, BC",
                "title": "Building Permit",
                "score": 63,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "planning",
                "stageLabel": "Planning",
                "assetType": "Municipal facility",
                "serviceLines": [
                    "Mechanical Design"
                ],
                "action": "Monitor for procurement milestone announcements",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design scopes.",
                "sourceUrl": "https://www.chilliwack.com/main/page.cfm?id=3309/page.cfm?id=1675      ",
                "sourceName": "City of Chilliwack",
                "effectiveDate": "2026-04-11",
                "office": "Vancouver Office"
            },
            {
                "id": "live-011",
                "entity": "City of Penticton",
                "location": "British Columbia, CAN",
                "title": "2026-RFP-04 Aeration System Upgrade – Engineering Services",
                "score": 62,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Municipal facility",
                "serviceLines": [
                    "Energy + Sustainability"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Energy + Sustainability scopes.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443950125825?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/04/02",
                "office": "Kelowna Satellite Office"
            },
            {
                "id": "live-012",
                "entity": "School District 61 Greater Victoria",
                "location": "British Columbia, CAN",
                "title": "Tender No. 26-005 James Bay Boiler Plant Upgrade",
                "score": 60,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Mechanical systems",
                "serviceLines": [
                    "Mechanical Design"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design scopes.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443959707402?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/04/08",
                "office": "Victoria Office"
            },
            {
                "id": "live-013",
                "entity": "Comox Valley Regional District",
                "location": "British Columbia, CAN",
                "title": "RFP - CVAC Acoustic Panels",
                "score": 60,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Aquatic centre",
                "serviceLines": [
                    "Mechanical Design",
                    "Fire Suppression Design",
                    "Energy + Sustainability",
                    "Commissioning"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning scopes.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443950125808?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/04/02",
                "office": "Nanaimo Satellite Office"
            },
            {
                "id": "live-014",
                "entity": "Defence Construction Canada - Pacific Region",
                "location": "British Columbia, CAN",
                "title": "Mechanical Construction Source List for Quick Response Tenders (QRT)",
                "score": 57,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Municipal facility",
                "serviceLines": [
                    "Mechanical Design",
                    "Commissioning"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Commissioning scopes.",
                "sourceUrl": "https://www.merx.com/dcc/solicitations/open-bids/Mechanical-Construction-Source-List-for-Quick-Response-Tenders-QRT/0000308389?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2025/11/26",
                "office": "Vancouver Office"
            },
            {
                "id": "live-015",
                "entity": "City of Penticton",
                "location": "British Columbia, CAN",
                "title": "2026-RFP-11 Mechanical Consultant & Contractor: IPD for Firehall",
                "score": 56,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Municipal facility",
                "serviceLines": [
                    "Mechanical Design"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design scopes.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443956037911?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/04/06",
                "office": "Kelowna Satellite Office"
            },
            {
                "id": "live-016",
                "entity": "Fraser Health Authority",
                "location": "British Columbia, CAN",
                "title": "2026 Open & Ongoing RFPQ",
                "score": 56,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Municipal facility",
                "serviceLines": [
                    "Commissioning"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Commissioning scopes.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443846879064?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/01/27",
                "office": "Vancouver Office"
            },
            {
                "id": "live-017",
                "entity": "City of Penticton",
                "location": "British Columbia, CAN",
                "title": "2026-RFP-13 Construction of Upgrades - AWWTP",
                "score": 55,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Municipal facility",
                "serviceLines": [
                    "Mechanical Design",
                    "Commissioning"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Commissioning scopes.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443945700788?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/03/30",
                "office": "Kelowna Satellite Office"
            },
            {
                "id": "live-018",
                "entity": "City of Abbotsford",
                "location": "Abbotsford, BC",
                "title": "Aquatic Services and Facilities Strategy",
                "score": 51,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "planning",
                "stageLabel": "Planning",
                "assetType": "Municipal facility",
                "serviceLines": [
                    "Mechanical Design",
                    "Fire Suppression Design",
                    "Energy + Sustainability",
                    "Commissioning"
                ],
                "action": "Monitor for procurement milestone announcements",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning scopes.",
                "sourceUrl": "https://www.abbotsford.ca/city-hall/projects-go/aquatic-services-and-facilities-strategy",
                "sourceName": "City of Abbotsford",
                "effectiveDate": "2026-04-11",
                "office": "Vancouver Office"
            },
            {
                "id": "live-019",
                "entity": "BGIS - PWGSC RP1",
                "location": "Vancouver, Coast & Mountains, BC, CAN",
                "title": "Penthouse Mechanical Room Painting and Repair - Construction Services",
                "score": 50,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Municipal facility",
                "serviceLines": [
                    "Mechanical Design",
                    "Commissioning"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Commissioning scopes.",
                "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443895388862?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2026/02/25",
                "office": "Vancouver Office"
            },
            {
                "id": "live-020",
                "entity": "Defence Construction Canada - Pacific Region",
                "location": "British Columbia, CAN",
                "title": "Mechanical Contractor Services QRT Source List for Interior, BC",
                "score": 50,
                "priorityKey": "watch",
                "priorityLabel": "Watch",
                "stage": "procurement",
                "stageLabel": "Procurement",
                "assetType": "Municipal facility",
                "serviceLines": [
                    "Mechanical Design"
                ],
                "action": "Track council or owner procurement milestones and identify consultant entry points",
                "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design scopes.",
                "sourceUrl": "https://www.merx.com/dcc/solicitations/open-bids/Mechanical-Contractor-Services-QRT-Source-List-for-Interior-BC/0000298682?origin=0",
                "sourceName": "MERX",
                "effectiveDate": "2025/07/21",
                "office": "Vancouver Office"
            }
        ]
    },
    "processedRecords": [
        {
            "id": "live-001",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Comox Valley Regional District",
            "location": "British Columbia, CAN",
            "title": "ITT - CVAC Pool Heating Electrification & AHU Replacement",
            "summary": "CVRD-26-002 - ITT - CVAC Pool Heating Electrification & AHU Replacement This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview A tender is being sought for a pool heating electrification and air handling unit replacemen",
            "effectiveDate": "2026/04/06",
            "publishedAt": "2026/04/06",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443955833800?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "CVRD-26-002 - ITT - CVAC Pool Heating Electrification & AHU Replacement This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview A tender is being sought for a pool heating electrification and air handling unit replacemen",
            "assetType": "Swimming pool",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Position AME early with Comox Valley Regional District through mechanical design expertise and relevant aquatic/civic track record.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 100,
            "priorityKey": "priority",
            "priorityLabel": "Priority Lead",
            "classification": "Aquatic procurement lead",
            "action": "Map likely packages, local partners, and probable follow-on scopes",
            "whyItMatters": "Active procurement — entry point available now. Relevant service lines: Mechanical Design, Energy + Sustainability, Commissioning.",
            "keywordHits": [
                "aquatic centre",
                "hydronic",
                "boiler",
                "pool",
                "pump",
                "ahu"
            ],
            "evidence": [
                "Keyword signals present: aquatic centre, hydronic, boiler.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "aquatic centre",
                "hydronic",
                "boiler",
                "pool",
                "procurement"
            ]
        },
        {
            "id": "live-002",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Corporation of Delta",
            "location": "British Columbia, CAN",
            "title": "Acrylic Wall Coatings C-042 for Winskill Aquatic Centre Renewal",
            "summary": "26-104 Delta - Acrylic Wall Coatings C-042 for Winskill Aquatic Centre Renewal This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Trade contract tender requested for acrylic wall coatings installation at the Winskil",
            "effectiveDate": "2026/03/31",
            "publishedAt": "2026/03/31",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443947654736?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "26-104 Delta - Acrylic Wall Coatings C-042 for Winskill Aquatic Centre Renewal This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Trade contract tender requested for acrylic wall coatings installation at the Winskil",
            "assetType": "Aquatic centre",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Fire Suppression Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Position AME early with Corporation of Delta through mechanical design expertise and relevant aquatic/civic track record.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 86,
            "priorityKey": "priority",
            "priorityLabel": "Priority Lead",
            "classification": "Aquatic procurement lead",
            "action": "Map likely packages, local partners, and probable follow-on scopes",
            "whyItMatters": "Active procurement — entry point available now. Relevant service lines: Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning.",
            "keywordHits": [
                "aquatic centre",
                "construction",
                "pool"
            ],
            "evidence": [
                "Keyword signals present: aquatic centre, construction, pool.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "aquatic centre",
                "construction",
                "pool",
                "procurement"
            ]
        },
        {
            "id": "live-003",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "City of Nanaimo",
            "location": "British Columbia, CAN",
            "title": "4198 Nanaimo Aquatic Centre Water Feature Project",
            "summary": "4198 - 4198 Nanaimo Aquatic Centre Water Feature Project This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Request for Proposals seeking qualified Contractors to provide construction services for a new water featur",
            "effectiveDate": "2026/03/30",
            "publishedAt": "2026/03/30",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443945921254?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "4198 - 4198 Nanaimo Aquatic Centre Water Feature Project This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Request for Proposals seeking qualified Contractors to provide construction services for a new water featur",
            "assetType": "Aquatic centre",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Fire Suppression Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Position AME early with City of Nanaimo through mechanical design expertise and relevant aquatic/civic track record.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 84,
            "priorityKey": "priority",
            "priorityLabel": "Priority Lead",
            "classification": "Aquatic procurement lead",
            "action": "Map likely packages, local partners, and probable follow-on scopes",
            "whyItMatters": "Active procurement — entry point available now. Relevant service lines: Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning.",
            "keywordHits": [
                "aquatic centre",
                "commissioning",
                "construction",
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: aquatic centre, commissioning, construction.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "aquatic centre",
                "commissioning",
                "construction",
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-004",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Fraser Valley Regional District",
            "location": "British Columbia, CAN",
            "title": "Dan Sharrers Aquatic Centre Sand Filter Replacement",
            "summary": "RFP-26007 - Dan Sharrers Aquatic Centre Sand Filter Replacement This solicitation is OPEN Select a tab Notice Categories Documents (1) Notice Categories Documents 1 Print Share Mail Email Facebook LinkedIn Twitter AI Overview Seeking proposals for the replacement of sand filters at an aquatic centre",
            "effectiveDate": "2026/04/06",
            "publishedAt": "2026/04/06",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443956149428?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "RFP-26007 - Dan Sharrers Aquatic Centre Sand Filter Replacement This solicitation is OPEN Select a tab Notice Categories Documents (1) Notice Categories Documents 1 Print Share Mail Email Facebook LinkedIn Twitter AI Overview Seeking proposals for the replacement of sand filters at an aquatic centre",
            "assetType": "Aquatic centre",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Fire Suppression Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at Fraser Valley Regional District.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 78,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Aquatic procurement lead",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning scopes.",
            "keywordHits": [
                "aquatic centre",
                "pool",
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: aquatic centre, pool, rfp.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "aquatic centre",
                "pool",
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-005",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "District Of Kitimat",
            "location": "British Columbia, CAN",
            "title": "RFQ 2026-09 Sam Lindsay Aquatic Centre Boiler Replacement",
            "summary": "227352 - RFQ 2026-09 Sam Lindsay Aquatic Centre Boiler Replacement This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Seeking quotations for the provision of new replacement condensing boilers at the Sam Lindsay Aqu",
            "effectiveDate": "2026/04/01",
            "publishedAt": "2026/04/01",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443949426693?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "227352 - RFQ 2026-09 Sam Lindsay Aquatic Centre Boiler Replacement This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Seeking quotations for the provision of new replacement condensing boilers at the Sam Lindsay Aqu",
            "assetType": "Aquatic centre",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Fire Suppression Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at District Of Kitimat.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 74,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Aquatic procurement lead",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning scopes.",
            "keywordHits": [
                "aquatic centre",
                "boiler",
                "rfq"
            ],
            "evidence": [
                "Keyword signals present: aquatic centre, boiler, rfq.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "aquatic centre",
                "boiler",
                "rfq",
                "procurement"
            ]
        },
        {
            "id": "live-006",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Northern Health Authority",
            "location": "British Columbia, CAN",
            "title": "FRASER LAKE - Chiller Replacement RFP",
            "summary": "N662740002 - FRASER LAKE - Chiller Replacement RFP This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Seeking professional services for the replacement of an end-of-life chiller system with a new high-efficiency uni",
            "effectiveDate": "2026/03/26",
            "publishedAt": "2026/03/26",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443940685006?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "N662740002 - FRASER LAKE - Chiller Replacement RFP This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Seeking professional services for the replacement of an end-of-life chiller system with a new high-efficiency uni",
            "assetType": "HVAC systems",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at Northern Health Authority.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 66,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Municipal capital signal",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design scopes.",
            "keywordHits": [
                "construction",
                "chiller",
                "energy",
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: construction, chiller, energy.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "construction",
                "chiller",
                "energy",
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-007",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "BC Ferry Services Inc",
            "location": "British Columbia, CAN",
            "title": "RFP 19-2026 - 92409 Phase 3 of the Lands End Cafe Building Renewal at Swartz Bay Terminal",
            "summary": "19-2026 - RFP 19-2026 - 92409 Phase 3 of the Lands End Cafe Building Renewal at Swartz Bay Terminal This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview A Request for Proposal seeks a contractor to undertake renewal o",
            "effectiveDate": "2026/03/18",
            "publishedAt": "2026/03/18",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443928950666?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "19-2026 - RFP 19-2026 - 92409 Phase 3 of the Lands End Cafe Building Renewal at Swartz Bay Terminal This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview A Request for Proposal seeks a contractor to undertake renewal o",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at BC Ferry Services Inc.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 64,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Mechanical systems lead",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design scopes.",
            "keywordHits": [
                "construction",
                "mechanical",
                "duct",
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: construction, mechanical, duct.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "construction",
                "mechanical",
                "duct",
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-008",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of Chilliwack",
            "location": "Chilliwack, BC",
            "title": "Aquatic Centres",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "planning",
            "stageLabel": "Planning",
            "sourceUrl": "https://www.chilliwack.com/main/page.cfm?id=2242",
            "sourceName": "City of Chilliwack",
            "sourceExcerpt": "Aquatic Centres - City of Chilliwack Discover Chilliwack Airport Community Profile Economic Development Events Local Services Other Governments Cultus Lake Park Board Federal First Nations Provincial Regional District School Board Recreation Tourism Chilliwack Transportation Weather Current Weather ",
            "assetType": "Aquatic centre",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Fire Suppression Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at City of Chilliwack.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 63,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Aquatic capital signal",
            "action": "Monitor for procurement milestone announcements",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning scopes.",
            "keywordHits": [
                "community centre",
                "aquatic centre"
            ],
            "evidence": [
                "Keyword signals present: community centre, aquatic centre.",
                "Project stage identified as planning from source text.",
                "Source is a public record from City of Chilliwack."
            ],
            "tags": [
                "community centre",
                "aquatic centre",
                "planning"
            ]
        },
        {
            "id": "live-009",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of Chilliwack",
            "location": "Chilliwack, BC",
            "title": "Chilliwack Curling and Community Centre",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "planning",
            "stageLabel": "Planning",
            "sourceUrl": "https://www.chilliwack.com/main/page.cfm?id=2823",
            "sourceName": "City of Chilliwack",
            "sourceExcerpt": "Chilliwack Curling and Community Centre   - City of Chilliwack Discover Chilliwack Airport Community Profile Economic Development Events Local Services Other Governments Cultus Lake Park Board Federal First Nations Provincial Regional District School Board Recreation Tourism Chilliwack Transportatio",
            "assetType": "Community centre",
            "estimatedScope": "",
            "ameServiceLines": [
                "Fire Suppression Design",
                "Commissioning"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for fire suppression design scope at City of Chilliwack.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 63,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Aquatic capital signal",
            "action": "Monitor for procurement milestone announcements",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Fire Suppression Design, Commissioning scopes.",
            "keywordHits": [
                "community centre",
                "aquatic centre"
            ],
            "evidence": [
                "Keyword signals present: community centre, aquatic centre.",
                "Project stage identified as planning from source text.",
                "Source is a public record from City of Chilliwack."
            ],
            "tags": [
                "community centre",
                "aquatic centre",
                "planning"
            ]
        },
        {
            "id": "live-010",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of Chilliwack",
            "location": "Chilliwack, BC",
            "title": "Building Permit",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "planning",
            "stageLabel": "Planning",
            "sourceUrl": "https://www.chilliwack.com/main/page.cfm?id=3309/page.cfm?id=1675      ",
            "sourceName": "City of Chilliwack",
            "sourceExcerpt": "City of Chilliwack Discover Chilliwack Airport Community Profile Economic Development Events Local Services Other Governments Cultus Lake Park Board Federal First Nations Provincial Regional District School Board Recreation Tourism Chilliwack Transportation Weather Current Weather Forecast Other Wea",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at City of Chilliwack.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 63,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Aquatic capital signal",
            "action": "Monitor for procurement milestone announcements",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design scopes.",
            "keywordHits": [
                "community centre",
                "aquatic centre"
            ],
            "evidence": [
                "Keyword signals present: community centre, aquatic centre.",
                "Project stage identified as planning from source text.",
                "Source is a public record from City of Chilliwack."
            ],
            "tags": [
                "community centre",
                "aquatic centre",
                "planning"
            ]
        },
        {
            "id": "live-011",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "City of Penticton",
            "location": "British Columbia, CAN",
            "title": "2026-RFP-04 Aeration System Upgrade – Engineering Services",
            "summary": "227339 - 2026-RFP-04 Aeration System Upgrade – Engineering Services This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Engineering services are sought for upgrading aeration equipment at an Advanced Wastewater Treat",
            "effectiveDate": "2026/04/02",
            "publishedAt": "2026/04/02",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443950125825?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "227339 - 2026-RFP-04 Aeration System Upgrade – Engineering Services This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Engineering services are sought for upgrading aeration equipment at an Advanced Wastewater Treat",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Energy + Sustainability"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for energy + sustainability scope at City of Penticton.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 62,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Municipal capital signal",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Energy + Sustainability scopes.",
            "keywordHits": [
                "commissioning",
                "construction",
                "energy",
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: commissioning, construction, energy.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "commissioning",
                "construction",
                "energy",
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-012",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "School District 61 Greater Victoria",
            "location": "British Columbia, CAN",
            "title": "Tender No. 26-005 James Bay Boiler Plant Upgrade",
            "summary": "227560 - Tender No. 26-005 James Bay Boiler Plant Upgrade This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Proposals are invited for the installation of three IBC 399 MBH condensing boilers and associated equipmen",
            "effectiveDate": "2026/04/08",
            "publishedAt": "2026/04/08",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443959707402?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "227560 - Tender No. 26-005 James Bay Boiler Plant Upgrade This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Proposals are invited for the installation of three IBC 399 MBH condensing boilers and associated equipmen",
            "assetType": "Mechanical systems",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at School District 61 Greater Victoria.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 60,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Mechanical systems lead",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design scopes.",
            "keywordHits": [
                "hydronic",
                "boiler",
                "pump",
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: hydronic, boiler, pump.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "hydronic",
                "boiler",
                "pump",
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-013",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Comox Valley Regional District",
            "location": "British Columbia, CAN",
            "title": "RFP - CVAC Acoustic Panels",
            "summary": "CVRD-26-004 - RFP - CVAC Acoustic Panels This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Seeking qualified firms to design, supply and install acoustic panel systems and measures to improve the acoustic environme",
            "effectiveDate": "2026/04/02",
            "publishedAt": "2026/04/02",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443950125808?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "CVRD-26-004 - RFP - CVAC Acoustic Panels This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Seeking qualified firms to design, supply and install acoustic panel systems and measures to improve the acoustic environme",
            "assetType": "Aquatic centre",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Fire Suppression Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at Comox Valley Regional District.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 60,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Aquatic procurement lead",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning scopes.",
            "keywordHits": [
                "aquatic centre",
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: aquatic centre, rfp.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "aquatic centre",
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-014",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Defence Construction Canada - Pacific Region",
            "location": "British Columbia, CAN",
            "title": "Mechanical Construction Source List for Quick Response Tenders (QRT)",
            "summary": "CX24SL03_CN83345 - Mechanical Construction Source List for Quick Response Tenders (QRT) CX24SL03_CN83345 - Mechanical Construction Source List for Quick Response Tenders (QRT) Time Left to Bid Select a tab Notice Categories Documents (10) Plan Holders List (33) Notice Categories Documents 10 Plan Ho",
            "effectiveDate": "2025/11/26",
            "publishedAt": "2025/11/26",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/dcc/solicitations/open-bids/Mechanical-Construction-Source-List-for-Quick-Response-Tenders-QRT/0000308389?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "CX24SL03_CN83345 - Mechanical Construction Source List for Quick Response Tenders (QRT) CX24SL03_CN83345 - Mechanical Construction Source List for Quick Response Tenders (QRT) Time Left to Bid Select a tab Notice Categories Documents (10) Plan Holders List (33) Notice Categories Documents 10 Plan Ho",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Commissioning"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at Defence Construction Canada - Pacific Region.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 57,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Mechanical systems lead",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Commissioning scopes.",
            "keywordHits": [
                "construction",
                "mechanical",
                "plumbing"
            ],
            "evidence": [
                "Keyword signals present: construction, mechanical, plumbing.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "construction",
                "mechanical",
                "plumbing",
                "procurement"
            ]
        },
        {
            "id": "live-015",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "City of Penticton",
            "location": "British Columbia, CAN",
            "title": "2026-RFP-11 Mechanical Consultant & Contractor: IPD for Firehall",
            "summary": "227451 - 2026-RFP-11 Mechanical Consultant & Contractor: IPD for Firehall This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Seeking joint proposals from a Mechanical Consultant and Mechanical Contractor to support ",
            "effectiveDate": "2026/04/06",
            "publishedAt": "2026/04/06",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443956037911?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "227451 - 2026-RFP-11 Mechanical Consultant & Contractor: IPD for Firehall This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Seeking joint proposals from a Mechanical Consultant and Mechanical Contractor to support ",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at City of Penticton.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 56,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Mechanical systems lead",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design scopes.",
            "keywordHits": [
                "construction",
                "mechanical",
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: construction, mechanical, rfp.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "construction",
                "mechanical",
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-016",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Fraser Health Authority",
            "location": "British Columbia, CAN",
            "title": "2026 Open & Ongoing RFPQ",
            "summary": "224196 - 2026 Open & Ongoing RFPQ This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Facilities Management Procurement is seeking pre-qualification for multiple service categories including architectural services, e",
            "effectiveDate": "2026/01/27",
            "publishedAt": "2026/01/27",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443846879064?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "224196 - 2026 Open & Ongoing RFPQ This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Facilities Management Procurement is seeking pre-qualification for multiple service categories including architectural services, e",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Commissioning"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for commissioning scope at Fraser Health Authority.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 56,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Mechanical systems lead",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Commissioning scopes.",
            "keywordHits": [
                "construction",
                "mechanical",
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: construction, mechanical, rfp.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "construction",
                "mechanical",
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-017",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "City of Penticton",
            "location": "British Columbia, CAN",
            "title": "2026-RFP-13 Construction of Upgrades - AWWTP",
            "summary": "227238 - 2026-RFP-13 Construction of Upgrades - AWWTP This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Request for Proposals for construction of upgrades at the Advanced Waste Water Treatment Plant, including conc",
            "effectiveDate": "2026/03/30",
            "publishedAt": "2026/03/30",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443945700788?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "227238 - 2026-RFP-13 Construction of Upgrades - AWWTP This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Request for Proposals for construction of upgrades at the Advanced Waste Water Treatment Plant, including conc",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Commissioning"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at City of Penticton.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 55,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Municipal capital signal",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Commissioning scopes.",
            "keywordHits": [
                "infrastructure",
                "construction",
                "pump",
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: infrastructure, construction, pump.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "infrastructure",
                "construction",
                "pump",
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-018",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Project page",
            "entity": "City of Abbotsford",
            "location": "Abbotsford, BC",
            "title": "Aquatic Services and Facilities Strategy",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "planning",
            "stageLabel": "Planning",
            "sourceUrl": "https://www.abbotsford.ca/city-hall/projects-go/aquatic-services-and-facilities-strategy",
            "sourceName": "City of Abbotsford",
            "sourceExcerpt": "Aquatic Services and Facilities Strategy | City of Abbotsford Skip to main content Timeline Stage 1 - Background Research and Key Findings Spring/Summer 2023 Stage 2 - Exploring Options Fall 2024 Stage 3 - Draft Strategy Winter 2025/2026 Stage 4 - Final Strategy Summer/Fall 2026 Related Contact Geof",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Fire Suppression Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at City of Abbotsford.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 51,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Aquatic capital signal",
            "action": "Monitor for procurement milestone announcements",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Fire Suppression Design, Energy + Sustainability, Commissioning scopes.",
            "keywordHits": [
                "infrastructure",
                "aquatic",
                "duct"
            ],
            "evidence": [
                "Keyword signals present: infrastructure, aquatic, duct.",
                "Project stage identified as planning from source text.",
                "Source is a public record from City of Abbotsford."
            ],
            "tags": [
                "infrastructure",
                "aquatic",
                "duct",
                "planning"
            ]
        },
        {
            "id": "live-019",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "BGIS - PWGSC RP1",
            "location": "Vancouver, Coast & Mountains, BC, CAN",
            "title": "Penthouse Mechanical Room Painting and Repair - Construction Services",
            "summary": "GOC986698 - CT - Penthouse Mechanical Room Painting and Repair - Construction Services GOC986698 - CT - Penthouse Mechanical Room Painting and Repair - Construction Services Time Left to Bid Select a tab Notice Categories Documents (15) Notice Categories Documents 15 Print Share Mail Email Facebook ",
            "effectiveDate": "2026/02/25",
            "publishedAt": "2026/02/25",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443895388862?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "GOC986698 - CT - Penthouse Mechanical Room Painting and Repair - Construction Services GOC986698 - CT - Penthouse Mechanical Room Painting and Repair - Construction Services Time Left to Bid Select a tab Notice Categories Documents (15) Notice Categories Documents 15 Print Share Mail Email Facebook ",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Commissioning"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at BGIS - PWGSC RP1.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 50,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Mechanical systems lead",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design, Commissioning scopes.",
            "keywordHits": [
                "construction",
                "mechanical"
            ],
            "evidence": [
                "Keyword signals present: construction, mechanical.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "construction",
                "mechanical",
                "procurement"
            ]
        },
        {
            "id": "live-020",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Defence Construction Canada - Pacific Region",
            "location": "British Columbia, CAN",
            "title": "Mechanical Contractor Services QRT Source List for Interior, BC",
            "summary": "CH250005_CN84606 - Mechanical Contractor Services QRT Source List for Interior, BC CH250005_CN84606 - Mechanical Contractor Services QRT Source List for Interior, BC Time Left to Bid Select a tab Notice Categories Documents (8) Plan Holders List (21) Notice Categories Documents 8 Plan Holders List 2",
            "effectiveDate": "2025/07/21",
            "publishedAt": "2025/07/21",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/dcc/solicitations/open-bids/Mechanical-Contractor-Services-QRT-Source-List-for-Interior-BC/0000298682?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "CH250005_CN84606 - Mechanical Contractor Services QRT Source List for Interior, BC CH250005_CN84606 - Mechanical Contractor Services QRT Source List for Interior, BC Time Left to Bid Select a tab Notice Categories Documents (8) Plan Holders List (21) Notice Categories Documents 8 Plan Holders List 2",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Monitor procurement milestones and identify entry points for mechanical design scope at Defence Construction Canada - Pacific Region.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 50,
            "priorityKey": "watch",
            "priorityLabel": "Watch",
            "classification": "Mechanical systems lead",
            "action": "Track council or owner procurement milestones and identify consultant entry points",
            "whyItMatters": "Procurement-facing motion with direct signals. Monitor for Mechanical Design scopes.",
            "keywordHits": [
                "construction",
                "mechanical"
            ],
            "evidence": [
                "Keyword signals present: construction, mechanical.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "construction",
                "mechanical",
                "procurement"
            ]
        },
        {
            "id": "live-021",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Project page",
            "entity": "City of Burnaby",
            "location": "Burnaby, BC",
            "title": "Brentwood Community Centre",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "planning",
            "stageLabel": "Planning",
            "sourceUrl": "https://www.burnaby.ca/our-city/projects/brentwood-community-centre",
            "sourceName": "City of Burnaby",
            "sourceExcerpt": "Brentwood Community Centre | City of Burnaby Skip to main content Brentwood Community Centre Contact [email protected] Timeline completed icon Completed in progress icon In progress not started icon Not started Status Completed 2021 Schematic design Status Completed 2021-2022 Council approvals of ag",
            "assetType": "Community centre",
            "estimatedScope": "",
            "ameServiceLines": [
                "Fire Suppression Design",
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on City of Burnaby capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 47,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Recreation facility lead",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Fire Suppression Design, Commissioning.",
            "keywordHits": [
                "community centre",
                "construction"
            ],
            "evidence": [
                "Keyword signals present: community centre, construction.",
                "Project stage identified as planning from source text.",
                "Source is a public record from City of Burnaby."
            ],
            "tags": [
                "community centre",
                "construction",
                "planning"
            ]
        },
        {
            "id": "live-022",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of North Vancouver",
            "location": "North Vancouver, BC",
            "title": "John Braithwaite Community Centre",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.cnv.org/Parks-Recreation/Recreation/John-Braithwaite-Rec-Centre",
            "sourceName": "City of North Vancouver",
            "sourceExcerpt": "John Braithwaite Community Centre | City of North Vancouver Online Services Careers Contact Us Home & Property Parks, Recreation & Culture Business & Development Community & Environment Streets & Transportation Government & City Hall Garbage, Green Can & Recycling Emergency Preparedness Public Safet",
            "assetType": "Community centre",
            "estimatedScope": "",
            "ameServiceLines": [
                "Fire Suppression Design",
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on City of North Vancouver capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 45,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Fire Suppression Design, Commissioning.",
            "keywordHits": [
                "community centre",
                "pool",
                "duct"
            ],
            "evidence": [
                "Keyword signals present: community centre, pool, duct.",
                "Source is a public record from City of North Vancouver."
            ],
            "tags": [
                "community centre",
                "pool",
                "duct"
            ]
        },
        {
            "id": "live-023",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "WorkSafeBC",
            "location": "British Columbia, CAN",
            "title": "Continuous RFP for Hearing Testing Services for the Construction Industry",
            "summary": "272-2023 - Continuous RFP for Hearing Testing Services for the Construction Industry This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter Basic Information Reference Number 00003843058 Issuing Organization WorkSafeBC Solicitation",
            "effectiveDate": "2023/12/15",
            "publishedAt": "2023/12/15",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/42979997630?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "272-2023 - Continuous RFP for Hearing Testing Services for the Construction Industry This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter Basic Information Reference Number 00003843058 Issuing Organization WorkSafeBC Solicitation",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on WorkSafeBC capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 44,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Commissioning.",
            "keywordHits": [
                "construction",
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: construction, rfp.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "construction",
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-024",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of North Vancouver",
            "location": "North Vancouver, BC",
            "title": "BC Energy Step Code for New Buildings",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.cnv.org/Business-Development/Building/Energy-Efficient-Buildings-Initiative/New-Buildings",
            "sourceName": "City of North Vancouver",
            "sourceExcerpt": "BC Energy Step Code for New Buildings Online Services Careers Contact Us Home & Property Parks, Recreation & Culture Business & Development Community & Environment Streets & Transportation Government & City Hall Garbage, Green Can & Recycling Emergency Preparedness Public Safety Fire Department Prop",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Energy + Sustainability"
            ],
            "goToMarketPlay": "Hold for background context on City of North Vancouver capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 44,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Energy + Sustainability.",
            "keywordHits": [
                "energy",
                "pool",
                "duct"
            ],
            "evidence": [
                "Keyword signals present: energy, pool, duct.",
                "Source is a public record from City of North Vancouver."
            ],
            "tags": [
                "energy",
                "pool",
                "duct"
            ]
        },
        {
            "id": "live-025",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of North Vancouver",
            "location": "North Vancouver, BC",
            "title": "Building Energy Efficiency",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.cnv.org/Community-Environment/Energy",
            "sourceName": "City of North Vancouver",
            "sourceExcerpt": "Building Energy Efficiency | City of North Vancouver Online Services Careers Contact Us Home & Property Parks, Recreation & Culture Business & Development Community & Environment Streets & Transportation Government & City Hall Garbage, Green Can & Recycling Emergency Preparedness Public Safety Fire ",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Energy + Sustainability"
            ],
            "goToMarketPlay": "Hold for background context on City of North Vancouver capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 44,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Energy + Sustainability.",
            "keywordHits": [
                "energy",
                "pool",
                "duct"
            ],
            "evidence": [
                "Keyword signals present: energy, pool, duct.",
                "Source is a public record from City of North Vancouver."
            ],
            "tags": [
                "energy",
                "pool",
                "duct"
            ]
        },
        {
            "id": "live-026",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "News release",
            "entity": "City of Surrey",
            "location": "Surrey, BC",
            "title": "Capital Projects",
            "summary": "Learn about key Capital Projects being planned or under construction in Surrey. The City of Surrey is investing in significant Capital Projects as one of Canada's most vibrant, livable cities.",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "construction",
            "stageLabel": "Construction",
            "sourceUrl": "https://www.surrey.ca/news-events/news",
            "sourceName": "City of Surrey",
            "sourceExcerpt": "Learn about key Capital Projects being planned or under construction in Surrey. The City of Surrey is investing in significant Capital Projects as one of Canada's most vibrant, livable cities.",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on City of Surrey capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 42,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Commissioning.",
            "keywordHits": [
                "construction"
            ],
            "evidence": [
                "Keyword signals present: construction.",
                "Project stage identified as construction from source text.",
                "Source is a public record from City of Surrey."
            ],
            "tags": [
                "construction"
            ]
        },
        {
            "id": "live-027",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of Nanaimo",
            "location": "Nanaimo, BC",
            "title": "Swimming Pool Permit",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.nanaimo.ca/property-development/building-permits/residential-building-permit/swimming-pool-permit",
            "sourceName": "City of Nanaimo",
            "sourceExcerpt": "Swimming Pool Permit HomePage / Property & Development / Building Permits / Application for a Residential Building Permit / Swimming Pool Permit Swimming Pool Permit A permit is required for the construction or installation of a swimming pool. The pool must be built/installed so that it conforms wit",
            "assetType": "Swimming pool",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on City of Nanaimo capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 42,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design, Energy + Sustainability, Commissioning.",
            "keywordHits": [
                "construction",
                "pool"
            ],
            "evidence": [
                "Keyword signals present: construction, pool.",
                "Source is a public record from City of Nanaimo."
            ],
            "tags": [
                "construction",
                "pool"
            ]
        },
        {
            "id": "live-028",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "News release",
            "entity": "City of Cranbrook",
            "location": "Cranbrook, BC",
            "title": "Cranbrook Hits Historic High In Building Permit Activity In 2025",
            "summary": "Posted on December 10, 2025 at 09:09 amZettel, Chris",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "construction",
            "stageLabel": "Construction",
            "sourceUrl": "https://www.cranbrook.ca/news/cranbrook-hits-historic-high-in-building-permit-activity-in-2025",
            "sourceName": "City of Cranbrook",
            "sourceExcerpt": "City of Cranbrook - Cranbrook Hits Historic High In Building Permit Activity In 2025 Skip to content news Make Payment Apply For Permits Faq Contact Us Data Portal Cranbrook Hits Historic High In Building Permit Activity In 2025 December 10, 2025 Cranbrook, BC (December 10, 2025) –  With less than a",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on City of Cranbrook capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 42,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "construction"
            ],
            "evidence": [
                "Keyword signals present: construction.",
                "Project stage identified as construction from source text.",
                "Source is a public record from City of Cranbrook."
            ],
            "tags": [
                "construction"
            ]
        },
        {
            "id": "live-029",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Liquor Distribution Branch",
            "location": "British Columbia, CAN",
            "title": "RFP2026-04-23 Fire Suppression and Detection System Services",
            "summary": "RFP2026-04-23 - RFP2026-04-23 Fire Suppression and Detection System Services This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Proposals are requested for inspection, preventative maintenance, repair or replacement",
            "effectiveDate": "2026/03/09",
            "publishedAt": "2026/03/09",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443913427584?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "RFP2026-04-23 - RFP2026-04-23 Fire Suppression and Detection System Services This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Proposals are requested for inspection, preventative maintenance, repair or replacement",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Fire Suppression Design"
            ],
            "goToMarketPlay": "Hold for background context on Liquor Distribution Branch capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 39,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Fire suppression lead",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Fire Suppression Design.",
            "keywordHits": [
                "fire suppression",
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: fire suppression, rfp.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "fire suppression",
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-030",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Defence Construction Canada - Pacific Region",
            "location": "British Columbia, CAN",
            "title": "Source List for Quick Response Tenders (QRT)-Various locations, interior BC",
            "summary": "CH250003_CN84604 - Source List for Quick Response Tenders (QRT)-Various locations, interior BC CH250003_CN84604 - Source List for Quick Response Tenders (QRT)-Various locations, interior BC Time Left to Bid Select a tab Notice Categories Documents (8) Plan Holders List (64) Notice Categories Documen",
            "effectiveDate": "2025/07/03",
            "publishedAt": "2025/07/03",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/dcc/solicitations/open-bids/Source-List-for-Quick-Response-Tenders-QRT-Various-locations-interior-BC/0000297378?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "CH250003_CN84604 - Source List for Quick Response Tenders (QRT)-Various locations, interior BC CH250003_CN84604 - Source List for Quick Response Tenders (QRT)-Various locations, interior BC Time Left to Bid Select a tab Notice Categories Documents (8) Plan Holders List (64) Notice Categories Documen",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on Defence Construction Canada - Pacific Region capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 38,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "construction"
            ],
            "evidence": [
                "Keyword signals present: construction.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "construction",
                "procurement"
            ]
        },
        {
            "id": "live-031",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of Nanaimo",
            "location": "Nanaimo, BC",
            "title": "Green Multi-Family Buildings",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "planning",
            "stageLabel": "Planning",
            "sourceUrl": "https://www.nanaimo.ca/green-initiatives/climate-action/green-buildings/green-multi--family-buildings",
            "sourceName": "City of Nanaimo",
            "sourceExcerpt": "Green Multi-Family Buildings HomePage / Green Initiatives / Climate Action / Green Buildings / Green Multi-Family Buildings Green Multiple Unit Residential Buildings Do you want to make your home more environmentally friendly and save energy, but live in an apartment or condo?  Don't worry there are",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Energy + Sustainability"
            ],
            "goToMarketPlay": "Hold for background context on City of Nanaimo capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 37,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Energy + Sustainability.",
            "keywordHits": [
                "retrofit",
                "energy"
            ],
            "evidence": [
                "Keyword signals present: retrofit, energy.",
                "Project stage identified as planning from source text.",
                "Source is a public record from City of Nanaimo."
            ],
            "tags": [
                "retrofit",
                "energy",
                "planning"
            ]
        },
        {
            "id": "live-032",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "School District 61 Greater Victoria",
            "location": "British Columbia, CAN",
            "title": "Tender No. 26-006 Torquay Elementary HVAC Upgrade",
            "summary": "227595 - Tender No. 26-006 Torquay Elementary HVAC Upgrade This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Proposals are invited for the installation of four new packaged rooftop units at an elementary school, wi",
            "effectiveDate": "2026/04/08",
            "publishedAt": "2026/04/08",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443959508287?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "227595 - Tender No. 26-006 Torquay Elementary HVAC Upgrade This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview Proposals are invited for the installation of four new packaged rooftop units at an elementary school, wi",
            "assetType": "HVAC systems",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Energy + Sustainability"
            ],
            "goToMarketPlay": "Hold for background context on School District 61 Greater Victoria capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 36,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Mechanical systems lead",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design, Energy + Sustainability.",
            "keywordHits": [
                "hvac"
            ],
            "evidence": [
                "Keyword signals present: hvac.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "hvac",
                "procurement"
            ]
        },
        {
            "id": "live-033",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "News release",
            "entity": "City of Victoria",
            "location": "Victoria, BC",
            "title": "Crystal Pool Closed, Summer Camp Registration Rescheduled",
            "summary": "",
            "effectiveDate": "DateApril 10, 2026",
            "publishedAt": "DateApril 10, 2026",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.victoria.ca/city-government/news/crystal-pool-closed-summer-camp-registration-rescheduled",
            "sourceName": "City of Victoria",
            "sourceExcerpt": "Crystal Pool Closed, Summer Camp Registration Rescheduled | City of Victoria Skip to main content Crystal Pool Closed, Summer Camp Registration Rescheduled Date April 10, 2026 Type(s) Latest News VICTORIA, B.C. — Due to a hazardous material incident, Crystal Pool and Fitness Centre is closed. The fa",
            "assetType": "Swimming pool",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on City of Victoria capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 36,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design, Energy + Sustainability, Commissioning.",
            "keywordHits": [
                "crystal pool"
            ],
            "evidence": [
                "Keyword signals present: crystal pool.",
                "Source is a public record from City of Victoria."
            ],
            "tags": [
                "crystal pool"
            ]
        },
        {
            "id": "live-034",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of Nanaimo",
            "location": "Nanaimo, BC",
            "title": "Green Buildings",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "funding",
            "stageLabel": "Funding",
            "sourceUrl": "https://www.nanaimo.ca/green-initiatives/climate-action/green-buildings",
            "sourceName": "City of Nanaimo",
            "sourceExcerpt": "Green Buildings HomePage / Green Initiatives / Climate Action / Green Buildings Green Buildings Buildings and Infrastructure account for 31% of Nanaimo’s community greenhouse gas emissions. Many of those emissions come from the use of fossil fuels, like natural gas, oil, and propane for space and wa",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Energy + Sustainability"
            ],
            "goToMarketPlay": "Hold for background context on City of Nanaimo capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 36,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Energy + Sustainability.",
            "keywordHits": [
                "infrastructure",
                "retrofit",
                "energy",
                "pump"
            ],
            "evidence": [
                "Keyword signals present: infrastructure, retrofit, energy.",
                "Project stage identified as funding from source text.",
                "Source is a public record from City of Nanaimo."
            ],
            "tags": [
                "infrastructure",
                "retrofit",
                "energy",
                "pump",
                "funding"
            ]
        },
        {
            "id": "live-035",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of North Vancouver",
            "location": "North Vancouver, BC",
            "title": "Building & Development",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.cnv.org/Business-Development/Building",
            "sourceName": "City of North Vancouver",
            "sourceExcerpt": "Building & Development | City of North Vancouver Online Services Careers Contact Us Home & Property Parks, Recreation & Culture Business & Development Community & Environment Streets & Transportation Government & City Hall Garbage, Green Can & Recycling Emergency Preparedness Public Safety Fire Depa",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on City of North Vancouver capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 36,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "pool",
                "duct"
            ],
            "evidence": [
                "Keyword signals present: pool, duct.",
                "Source is a public record from City of North Vancouver."
            ],
            "tags": [
                "pool",
                "duct"
            ]
        },
        {
            "id": "live-036",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of North Vancouver",
            "location": "North Vancouver, BC",
            "title": "General Building Permit Info",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.cnv.org/Business-Development/Permits-Inspections/Building-Permits/General-Building-Permit-Info",
            "sourceName": "City of North Vancouver",
            "sourceExcerpt": "General Building Permit Information Online Services Careers Contact Us Home & Property Parks, Recreation & Culture Business & Development Community & Environment Streets & Transportation Government & City Hall Garbage, Green Can & Recycling Emergency Preparedness Public Safety Fire Department Proper",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on City of North Vancouver capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 36,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "pool",
                "duct"
            ],
            "evidence": [
                "Keyword signals present: pool, duct.",
                "Source is a public record from City of North Vancouver."
            ],
            "tags": [
                "pool",
                "duct"
            ]
        },
        {
            "id": "live-037",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of North Vancouver",
            "location": "North Vancouver, BC",
            "title": "New Complex Buildings",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.cnv.org/Business-Development/Permits-Inspections/Building-Permits/New-Complex-Buildings",
            "sourceName": "City of North Vancouver",
            "sourceExcerpt": "New Complex Buildings Online Services Careers Contact Us Home & Property Parks, Recreation & Culture Business & Development Community & Environment Streets & Transportation Government & City Hall Garbage, Green Can & Recycling Emergency Preparedness Public Safety Fire Department Property Taxes Utili",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on City of North Vancouver capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 36,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "pool",
                "duct"
            ],
            "evidence": [
                "Keyword signals present: pool, duct.",
                "Source is a public record from City of North Vancouver."
            ],
            "tags": [
                "pool",
                "duct"
            ]
        },
        {
            "id": "live-038",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of North Vancouver",
            "location": "North Vancouver, BC",
            "title": "Swimming Pools",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.cnv.org/Business-Development/Permits-Inspections/Building-Permits/Swimming-Pools",
            "sourceName": "City of North Vancouver",
            "sourceExcerpt": "Swimming Pools Online Services Careers Contact Us Home & Property Parks, Recreation & Culture Business & Development Community & Environment Streets & Transportation Government & City Hall Garbage, Green Can & Recycling Emergency Preparedness Public Safety Fire Department Property Taxes Utility Rate",
            "assetType": "Swimming pool",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on City of North Vancouver capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 36,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design, Energy + Sustainability, Commissioning.",
            "keywordHits": [
                "pool",
                "duct"
            ],
            "evidence": [
                "Keyword signals present: pool, duct.",
                "Source is a public record from City of North Vancouver."
            ],
            "tags": [
                "pool",
                "duct"
            ]
        },
        {
            "id": "live-039",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of North Vancouver",
            "location": "North Vancouver, BC",
            "title": "Building Adaptive and Resilient Communities (BARC) Program",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.cnv.org/Community-Environment/Climate-Action/Climate-Change-Adaptation/Building-Adaptive-and-Resilient-Communities-Program",
            "sourceName": "City of North Vancouver",
            "sourceExcerpt": "Building Adaptive and Resilient Communities (BARC) Program | City of North Vancouver Online Services Careers Contact Us Home & Property Parks, Recreation & Culture Business & Development Community & Environment Streets & Transportation Government & City Hall Garbage, Green Can & Recycling Emergency ",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on City of North Vancouver capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 36,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "pool",
                "duct"
            ],
            "evidence": [
                "Keyword signals present: pool, duct.",
                "Source is a public record from City of North Vancouver."
            ],
            "tags": [
                "pool",
                "duct"
            ]
        },
        {
            "id": "live-040",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Project page",
            "entity": "City of North Vancouver",
            "location": "North Vancouver, BC",
            "title": "Harry Jerome Community Recreation Centre",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.cnv.org/City-Hall/About/Capital-Projects/Harry-Jerome-Community-Recreation-Centre",
            "sourceName": "City of North Vancouver",
            "sourceExcerpt": "Harry Jerome Community Recreation Centre Online Services Careers Contact Us Home & Property Parks, Recreation & Culture Business & Development Community & Environment Streets & Transportation Government & City Hall Garbage, Green Can & Recycling Emergency Preparedness Public Safety Fire Department P",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on City of North Vancouver capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 36,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "pool",
                "duct"
            ],
            "evidence": [
                "Keyword signals present: pool, duct.",
                "Source is a public record from City of North Vancouver."
            ],
            "tags": [
                "pool",
                "duct"
            ]
        },
        {
            "id": "live-041",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of North Vancouver",
            "location": "North Vancouver, BC",
            "title": "Swimming Pool Safety",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.cnv.org/Home-Property/Safety/Swimming-Pool-Safety",
            "sourceName": "City of North Vancouver",
            "sourceExcerpt": "Swimming Pool Safety Online Services Careers Contact Us Home & Property Parks, Recreation & Culture Business & Development Community & Environment Streets & Transportation Government & City Hall Garbage, Green Can & Recycling Emergency Preparedness Public Safety Fire Department Property Taxes Utilit",
            "assetType": "Swimming pool",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on City of North Vancouver capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 36,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design, Energy + Sustainability, Commissioning.",
            "keywordHits": [
                "pool",
                "duct"
            ],
            "evidence": [
                "Keyword signals present: pool, duct.",
                "Source is a public record from City of North Vancouver."
            ],
            "tags": [
                "pool",
                "duct"
            ]
        },
        {
            "id": "live-042",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of North Vancouver",
            "location": "North Vancouver, BC",
            "title": "Building Permit Statistical Reports",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.cnv.org/Business-Development/Permits-Inspections/Building-Permit-Statistical-Reports",
            "sourceName": "City of North Vancouver",
            "sourceExcerpt": "Building Permit Statistical Reports | City of North Vancouver Online Services Careers Contact Us Home & Property Parks, Recreation & Culture Business & Development Community & Environment Streets & Transportation Government & City Hall Garbage, Green Can & Recycling Emergency Preparedness Public Saf",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on City of North Vancouver capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 36,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "pool",
                "duct"
            ],
            "evidence": [
                "Keyword signals present: pool, duct.",
                "Source is a public record from City of North Vancouver."
            ],
            "tags": [
                "pool",
                "duct"
            ]
        },
        {
            "id": "live-043",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "EllisDon Construction Services Inc.",
            "location": "Vancouver Island and Coast, BC, CAN",
            "title": "Advance Procurement Notice - Junior NCM Training Accommodation Facility",
            "summary": "41355-APN-01 - Advance Procurement Notice - Junior NCM Training Accommodation Facility 41355-APN-01 - Advance Procurement Notice - Junior NCM Training Accommodation Facility Time Left to Bid Select a tab Notice Categories Documents (1) Plan Holders List (36) Notice Categories Documents 1 Plan Holder",
            "effectiveDate": "2025/06/23",
            "publishedAt": "2025/06/23",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/solicitations/open-bids/Advance-Procurement-Notice-Junior-NCM-Training-Accommodation-Facility/0000296513?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "41355-APN-01 - Advance Procurement Notice - Junior NCM Training Accommodation Facility 41355-APN-01 - Advance Procurement Notice - Junior NCM Training Accommodation Facility Time Left to Bid Select a tab Notice Categories Documents (1) Plan Holders List (36) Notice Categories Documents 1 Plan Holder",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on EllisDon Construction Services Inc. capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 35,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "infrastructure",
                "construction",
                "security"
            ],
            "evidence": [
                "Keyword signals present: infrastructure, construction, security.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "infrastructure",
                "construction",
                "security",
                "procurement"
            ]
        },
        {
            "id": "live-044",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of Nanaimo",
            "location": "Nanaimo, BC",
            "title": "Application for a Residential Building Permit",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.nanaimo.ca/property-development/building-permits/residential-building-permit",
            "sourceName": "City of Nanaimo",
            "sourceExcerpt": "Application for a Residential Building Permit HomePage / Property & Development / Building Permits / Application for a Residential Building Permit Application for a Residential Building Permit You have decided you want to put a suite in your home and you know exactly what you want it to look like. H",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on City of Nanaimo capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 32,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "construction",
                "sprinkler"
            ],
            "evidence": [
                "Keyword signals present: construction, sprinkler.",
                "Source is a public record from City of Nanaimo."
            ],
            "tags": [
                "construction",
                "sprinkler"
            ]
        },
        {
            "id": "live-045",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of Nanaimo",
            "location": "Nanaimo, BC",
            "title": "New Construction Permit",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.nanaimo.ca/property-development/building-permits/residential-building-permit/new-construction-permit",
            "sourceName": "City of Nanaimo",
            "sourceExcerpt": "New Construction Permit HomePage / Property & Development / Building Permits / Application for a Residential Building Permit / New Construction Permit New Construction - Single/Two Family Dwelling Permit A building permit is required when you are constructing a new residential building. There are ma",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on City of Nanaimo capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 32,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Commissioning.",
            "keywordHits": [
                "construction",
                "energy"
            ],
            "evidence": [
                "Keyword signals present: construction, energy.",
                "Source is a public record from City of Nanaimo."
            ],
            "tags": [
                "construction",
                "energy"
            ]
        },
        {
            "id": "live-046",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of Nanaimo",
            "location": "Nanaimo, BC",
            "title": "Apply for a Commercial Building Permit",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.nanaimo.ca/property-development/building-permits/apply-for-a-commercial-building-permit",
            "sourceName": "City of Nanaimo",
            "sourceExcerpt": "Apply for a Commercial Building Permit HomePage / Property & Development / Building Permits / Apply for a Commercial Building Permit Application for a Commercial Building Permit Your dream is to open a retail store or business and you are not sure where to start. Important first thoughts would be, \"",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on City of Nanaimo capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 32,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "construction",
                "sprinkler"
            ],
            "evidence": [
                "Keyword signals present: construction, sprinkler.",
                "Source is a public record from City of Nanaimo."
            ],
            "tags": [
                "construction",
                "sprinkler"
            ]
        },
        {
            "id": "live-047",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of Nanaimo",
            "location": "Nanaimo, BC",
            "title": "New Commercial Construction Permit",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.nanaimo.ca/property-development/building-permits/apply-for-a-commercial-building-permit/new-commercial-construction-permit",
            "sourceName": "City of Nanaimo",
            "sourceExcerpt": "New Commercial Construction Permit HomePage / Property & Development / Building Permits / Apply for a Commercial Building Permit / New Commercial Construction Permit New Commercial/Multi-Family/Industrial/Public Building Construction Permit A building permit is required for the construction of a new",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on City of Nanaimo capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 32,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Commissioning.",
            "keywordHits": [
                "construction",
                "energy"
            ],
            "evidence": [
                "Keyword signals present: construction, energy.",
                "Source is a public record from City of Nanaimo."
            ],
            "tags": [
                "construction",
                "energy"
            ]
        },
        {
            "id": "live-048",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Defence Construction Canada - Pacific Region",
            "location": "British Columbia, CAN",
            "title": "Advance Procurement Notice (APN) - BASE PROGRAM 19 WING, CFB COMOX, BC",
            "summary": "CO_Base_APN_26/27 - Advance Procurement Notice (APN) - BASE PROGRAM 19 WING, CFB COMOX, BC CO_Base_APN_26/27 - Advance Procurement Notice (APN) - BASE PROGRAM 19 WING, CFB COMOX, BC Time Left to Bid Select a tab Notice Categories Documents (2) Plan Holders List (92) Notice Categories Documents 2 Pla",
            "effectiveDate": "2026/04/02",
            "publishedAt": "2026/04/02",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/dcc/solicitations/open-bids/Advance-Procurement-Notice-APN-BASE-PROGRAM-19-WING-CFB-COMOX-BC/0000319074?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "CO_Base_APN_26/27 - Advance Procurement Notice (APN) - BASE PROGRAM 19 WING, CFB COMOX, BC CO_Base_APN_26/27 - Advance Procurement Notice (APN) - BASE PROGRAM 19 WING, CFB COMOX, BC Time Left to Bid Select a tab Notice Categories Documents (2) Plan Holders List (92) Notice Categories Documents 2 Pla",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on Defence Construction Canada - Pacific Region capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 30,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "construction",
                "security"
            ],
            "evidence": [
                "Keyword signals present: construction, security.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "construction",
                "security",
                "procurement"
            ]
        },
        {
            "id": "live-049",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Vancouver Community College",
            "location": "British Columbia, CAN",
            "title": "NRFP 27032026-FV Architectural Services for School of Health Simulation Centre",
            "summary": "227401 - NRFP 27032026-FV Architectural Services for School of Health Simulation Centre This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview A Request for Proposals has been issued for Architectural Services for the V",
            "effectiveDate": "2026/04/02",
            "publishedAt": "2026/04/02",
            "observedAt": "2026-04-11",
            "stage": "procurement",
            "stageLabel": "Procurement",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443950125837?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "227401 - NRFP 27032026-FV Architectural Services for School of Health Simulation Centre This solicitation is OPEN Select a tab Notice Categories Notice Categories Print Share Mail Email Facebook LinkedIn Twitter AI Overview A Request for Proposals has been issued for Architectural Services for the V",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on Vancouver Community College capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 30,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Municipal capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "rfp"
            ],
            "evidence": [
                "Keyword signals present: rfp.",
                "Project stage identified as procurement from source text.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "rfp",
                "procurement"
            ]
        },
        {
            "id": "live-050",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "Defence Construction Canada - Pacific Region",
            "location": "British Columbia, CAN",
            "title": "Mechanical Contractor Services QRT Source List for Lower Mainland, BC",
            "summary": "MERX public notice — Defence Construction Canada - Pacific Region",
            "effectiveDate": "2025/07/21",
            "publishedAt": "2025/07/21",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.merx.com/dcc/solicitations/open-bids/Mechanical-Contractor-Services-QRT-Source-List-for-Lower-Mainland-BC/0000298680?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "Mechanical Contractor Services QRT Source List for Lower Mainland, BC Defence Construction Canada - Pacific Region British Columbia, CAN 2 year(s) left Published 2025/07/21 Closing 2028/08/05 3536312756",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on Defence Construction Canada - Pacific Region capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 28,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Mechanical systems lead",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design, Commissioning.",
            "keywordHits": [
                "construction",
                "mechanical"
            ],
            "evidence": [
                "Keyword signals present: construction, mechanical.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "construction",
                "mechanical"
            ]
        },
        {
            "id": "live-051",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "BGIS - PWGSC RP1",
            "location": "Northern BC, BC, CAN",
            "title": "HVAC Upgrades - Construction Services",
            "summary": "MERX public notice — BGIS - PWGSC RP1",
            "effectiveDate": "2026/03/12",
            "publishedAt": "2026/03/12",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443919293675?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "HVAC Upgrades - Construction Services BGIS - PWGSC RP1 Northern BC, BC, CAN 2 day(s) left Published 2026/03/12 Closing 2026/04/14 443919293675 (opens in a new window)",
            "assetType": "HVAC systems",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on BGIS - PWGSC RP1 capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 28,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Mechanical systems lead",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design, Energy + Sustainability, Commissioning.",
            "keywordHits": [
                "construction",
                "hvac"
            ],
            "evidence": [
                "Keyword signals present: construction, hvac.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "construction",
                "hvac"
            ]
        },
        {
            "id": "live-052",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of Nanaimo",
            "location": "Nanaimo, BC",
            "title": "Building Permit Processing Times",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.nanaimo.ca/property-development/whats-building/processing-times",
            "sourceName": "City of Nanaimo",
            "sourceExcerpt": "Building Permit Processing Times | City of Nanaimo HomePage / Property & Development / Building Permit Processing Times Building Permit Processing Times The below table is meant to provide a general processing timeline for applications submitted for building permits.  This is a guide and gives an in",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on City of Nanaimo capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 28,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "pool"
            ],
            "evidence": [
                "Keyword signals present: pool.",
                "Source is a public record from City of Nanaimo."
            ],
            "tags": [
                "pool"
            ]
        },
        {
            "id": "live-053",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of North Vancouver",
            "location": "North Vancouver, BC",
            "title": "Harry Jerome Community Recreation Centre (current)",
            "summary": "",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.nvrc.ca/facilities-fields/locations-hours/community-recreation-centres/harry-jerome-community-recreation",
            "sourceName": "City of North Vancouver",
            "sourceExcerpt": "Harry Jerome Community Recreation Centre | North Vancouver Recreation and Culture Commission Skip to main content Skip to main menu Skip to footer Subscribe to our Newsletters Harry Jerome Community Recreation Centre Facebook LinkedIn Email Address 123 East 23rd St North Vancouver, BC V7L 3E2 Teleph",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design"
            ],
            "goToMarketPlay": "Hold for background context on City of North Vancouver capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 28,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design.",
            "keywordHits": [
                "pool"
            ],
            "evidence": [
                "Keyword signals present: pool.",
                "Source is a public record from City of North Vancouver."
            ],
            "tags": [
                "pool"
            ]
        },
        {
            "id": "live-054",
            "sourceKey": "municipal-public-records",
            "sourceLabel": "Verified public municipal pages",
            "sourceType": "Public record",
            "entity": "City of Maple Ridge",
            "location": "Maple Ridge, BC",
            "title": "View Current Alerts",
            "summary": "Alert Maple Ridge is the City's hub for major City alerts. Sign up to receive notifications related to emergencies like wildfires, floods, storms and other hazards in the community. We also share facility and program/service impacts such as pool closures, road work and traffic impacts. During an eme",
            "effectiveDate": "2026-04-11",
            "publishedAt": "2026-04-11",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://mapleridge.ca/community-safety/alert-maple-ridge/current-alerts",
            "sourceName": "City of Maple Ridge",
            "sourceExcerpt": "Alert Maple Ridge is the City's hub for major City alerts. Sign up to receive notifications related to emergencies like wildfires, floods, storms and other hazards in the community. We also share facility and program/service impacts such as pool closures, road work and traffic impacts. During an eme",
            "assetType": "Pool / aquatic centre",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Energy + Sustainability",
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on City of Maple Ridge capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 28,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Aquatic capital signal",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design, Energy + Sustainability, Commissioning.",
            "keywordHits": [
                "pool"
            ],
            "evidence": [
                "Keyword signals present: pool.",
                "Source is a public record from City of Maple Ridge."
            ],
            "tags": [
                "pool"
            ]
        },
        {
            "id": "live-055",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "City of Courtenay",
            "location": "British Columbia, CAN",
            "title": "Mechanical Contracting Services - Facility Energy Retrofits and Upgrades",
            "summary": "MERX public notice — City of Courtenay",
            "effectiveDate": "2026/03/31",
            "publishedAt": "2026/03/31",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443947818335?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "Mechanical Contracting Services - Facility Energy Retrofits and Upgrades City of Courtenay British Columbia, CAN 9 day(s) left Published 2026/03/31 Closing 2026/04/21 443947818335",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Energy + Sustainability"
            ],
            "goToMarketPlay": "Hold for background context on City of Courtenay capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 27,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Mechanical systems lead",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design, Energy + Sustainability.",
            "keywordHits": [
                "mechanical",
                "retrofit",
                "energy"
            ],
            "evidence": [
                "Keyword signals present: mechanical, retrofit, energy.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "mechanical",
                "retrofit",
                "energy"
            ]
        },
        {
            "id": "live-056",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "City of Courtenay",
            "location": "British Columbia, CAN",
            "title": "Mechanical Consulting Services - Facility Energy Retrofits and Upgrades",
            "summary": "MERX public notice — City of Courtenay",
            "effectiveDate": "2026/03/31",
            "publishedAt": "2026/03/31",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443947818336?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "Mechanical Consulting Services - Facility Energy Retrofits and Upgrades City of Courtenay British Columbia, CAN 9 day(s) left Published 2026/03/31 Closing 2026/04/21 443947818336",
            "assetType": "Municipal facility",
            "estimatedScope": "",
            "ameServiceLines": [
                "Mechanical Design",
                "Energy + Sustainability"
            ],
            "goToMarketPlay": "Hold for background context on City of Courtenay capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 27,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Mechanical systems lead",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Mechanical Design, Energy + Sustainability.",
            "keywordHits": [
                "mechanical",
                "retrofit",
                "energy"
            ],
            "evidence": [
                "Keyword signals present: mechanical, retrofit, energy.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "mechanical",
                "retrofit",
                "energy"
            ]
        },
        {
            "id": "live-057",
            "sourceKey": "merx-public-notices",
            "sourceLabel": "MERX public procurement notice",
            "sourceType": "Procurement notice",
            "entity": "City of Coquitlam",
            "location": "British Columbia, CAN",
            "title": "Burke Mountain Community Centre Construction",
            "summary": "MERX public notice — City of Coquitlam",
            "effectiveDate": "2025/12/05",
            "publishedAt": "2025/12/05",
            "observedAt": "2026-04-11",
            "stage": "unknown",
            "stageLabel": "Unknown",
            "sourceUrl": "https://www.merx.com/public/supplier/interception/view-notice/443778742079?origin=0",
            "sourceName": "MERX",
            "sourceExcerpt": "Burke Mountain Community Centre Construction City of Coquitlam British Columbia, CAN 354 day(s) left Published 2025/12/05 Closing 2027/03/31 443778742079",
            "assetType": "Community centre",
            "estimatedScope": "",
            "ameServiceLines": [
                "Fire Suppression Design",
                "Commissioning"
            ],
            "goToMarketPlay": "Hold for background context on City of Coquitlam capital activity.",
            "dataMode": "verified-public",
            "verificationStatus": "verified-public",
            "verificationLabel": "Verified public source",
            "lastVerifiedAt": "2026-04-11",
            "score": 25,
            "priorityKey": "peripheral",
            "priorityLabel": "Peripheral",
            "classification": "Recreation facility lead",
            "action": "Hold for background context only",
            "whyItMatters": "Background context for related project activity. Service lines: Fire Suppression Design, Commissioning.",
            "keywordHits": [
                "community centre",
                "construction"
            ],
            "evidence": [
                "Keyword signals present: community centre, construction.",
                "Source is a public record from MERX."
            ],
            "tags": [
                "community centre",
                "construction"
            ]
        }
    ]
};
