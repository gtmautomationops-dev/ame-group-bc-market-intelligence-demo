window.AME_DEMO_DATA = {
    "datasetName":  "AME proof of concept - verified public source demo",
    "generatedOn":  "2026-03-18",
    "runLog":  {
                   "mode":  "Local demo rebuild",
                   "latestRun":  {
                                     "runId":  "20260319-154219",
                                     "generatedAt":  "2026-03-19T15:42:19.9995696-07:00",
                                     "label":  "Mar 19, 2026 3:42 PM",
                                     "status":  "Completed",
                                     "runner":  "run-demo.ps1",
                                     "mode":  "Local demo rebuild",
                                     "datasetDate":  "2026-03-18",
                                     "verifiedDate":  "2026-03-18",
                                     "signalsLoaded":  9,
                                     "priorityLeads":  7,
                                     "earlySignals":  5,
                                     "meetingLinked":  1,
                                     "outputsRefreshed":  [
                                                              {
                                                                  "label":  "Dashboard bundle",
                                                                  "path":  "ame-proof-app-data.js"
                                                              },
                                                              {
                                                                  "label":  "Leadership Brief",
                                                                  "path":  "ame-proof-daily-briefing.html"
                                                              },
                                                              {
                                                                  "label":  "Morning Digest",
                                                                  "path":  "ame-proof-morning-digest.html"
                                                              }
                                                          ],
                                     "detail":  "Dashboard, Morning Digest, and Leadership Brief refreshed from the local demo build."
                                 },
                   "history":  [
                                   {
                                       "runId":  "20260319-154219",
                                       "generatedAt":  "2026-03-19T15:42:19.9995696-07:00",
                                       "label":  "Mar 19, 2026 3:42 PM",
                                       "status":  "Completed",
                                       "runner":  "run-demo.ps1",
                                       "mode":  "Local demo rebuild",
                                       "datasetDate":  "2026-03-18",
                                       "verifiedDate":  "2026-03-18",
                                       "signalsLoaded":  9,
                                       "priorityLeads":  7,
                                       "earlySignals":  5,
                                       "meetingLinked":  1,
                                       "outputsRefreshed":  [
                                                                {
                                                                    "label":  "Dashboard bundle",
                                                                    "path":  "ame-proof-app-data.js"
                                                                },
                                                                {
                                                                    "label":  "Leadership Brief",
                                                                    "path":  "ame-proof-daily-briefing.html"
                                                                },
                                                                {
                                                                    "label":  "Morning Digest",
                                                                    "path":  "ame-proof-morning-digest.html"
                                                                }
                                                            ],
                                       "detail":  "Dashboard, Morning Digest, and Leadership Brief refreshed from the local demo build."
                                   }
                               ]
               },
    "truthModel":  {
                       "defaultMode":  "verified-public-only",
                       "lastVerifiedAt":  "2026-03-18",
                       "primaryClaim":  "Every record in the main feed is backed by a public source URL from a municipal or official public page.",
                       "sampleClaim":  "MERX is shown as an import workflow simulation until AME has an approved access path.",
                       "presentationNote":  "Use the main feed as the proof lane and the workflow lab as the automation lane."
                   },
    "clientContext":  {
                          "companyName":  "AME Group",
                          "website":  "https://amegroup.ca",
                          "sector":  "Mechanical engineering consultancy",
                          "fullNameNote":  "Aquatic Mechanical Engineers",
                          "primaryMarkets":  [
                                                 "British Columbia",
                                                 "Alberta"
                                             ],
                          "serviceLines":  [
                                               "Mechanical Design",
                                               "Fire Suppression Design",
                                               "Energy + Sustainability",
                                               "Commissioning"
                                           ]
                      },
    "demoObjectives":  [
                           "Show a trustworthy main feed built from verified public-source records.",
                           "Show exactly how municipal meeting-linked documents can be turned into structured opportunity records.",
                           "Show how a MERX alert can be normalized and scored once AME has an approved import path.",
                           "Produce a daily briefing format that AME can imagine receiving every morning."
                       ],
    "successCriteria":  {
                            "confidenceGoal":  "No ambiguity between verified public records and simulated import scenarios.",
                            "briefingFormat":  "Project, municipality, asset type, stage, AME service lines, source, and action.",
                            "workflowGoal":  "Demonstrate collection, extraction, scoring, and briefing step by step."
                        },
    "briefingPreferences":  {
                                "cadence":  "daily weekday digest",
                                "audience":  [
                                                 "Principals",
                                                 "Associates",
                                                 "Marketing team"
                                             ]
                            },
    "watchProfile":  {
                         "name":  "AME verified aquatic + civic watch",
                         "keywords":  [
                                          "construction",
                                          "pool",
                                          "aquatic centre"
                                      ],
                         "aliases":  [
                                         "aquatic",
                                         "community centre",
                                         "recreation complex",
                                         "arena",
                                         "HVAC",
                                         "plumbing",
                                         "fire suppression",
                                         "commissioning",
                                         "energy",
                                         "sustainability",
                                         "construction management"
                                     ]
                     },
    "sourcePolicies":  [
                           {
                               "key":  "municipal-public-records",
                               "label":  "Verified public municipal pages",
                               "mode":  "verified public-source feed",
                               "collectionMethod":  "public page capture and normalization",
                               "scraping":  "allowed only where source terms and site behavior permit",
                               "status":  "proof-ready",
                               "note":  "These records are backed by live public URLs and are safe to present as verified public signals."
                           },
                           {
                               "key":  "municipal-meeting-linked",
                               "label":  "Verified meeting-linked documents",
                               "mode":  "verified PDF or meeting summary feed",
                               "collectionMethod":  "meeting-linked document extraction",
                               "scraping":  "site-by-site review required before scaling",
                               "status":  "proof-ready",
                               "note":  "These records show how council summaries and meeting-linked PDFs can surface projects before broader market awareness."
                           },
                           {
                               "key":  "merx-import-simulation",
                               "label":  "MERX import workflow",
                               "mode":  "sample import only",
                               "collectionMethod":  "saved-search email or CSV import after approved access",
                               "scraping":  "not implemented",
                               "status":  "simulation only",
                               "note":  "This lane demonstrates the automation design without claiming live MERX scraping."
                           }
                       ],
    "proofWorkflows":  [
                           {
                               "id":  "burnaby-council-brief",
                               "title":  "Verified municipal meeting-linked extraction",
                               "category":  "municipal_meeting",
                               "verificationStatus":  "verified-public",
                               "verificationLabel":  "Verified public source",
                               "sourceName":  "Burnaby Council in Brief PDF",
                               "sourceUrl":  "https://www.burnaby.ca/sites/default/files/acquiadam/2024-07/2024-7-22-Council-in-Brief.pdf",
                               "rawInput":  "Council summary for July 22, 2024 notes approval of the construction contract for the Cameron Community Centre and Library replacement, including a new library and aquatic facility, with estimated construction cost of $267 million.",
                               "extracted":  {
                                                 "projectName":  "Cameron Community Centre and Library",
                                                 "municipality":  "Burnaby",
                                                 "assetType":  "Community centre / aquatic facility",
                                                 "stage":  "Procurement",
                                                 "estimatedScope":  "$267 million construction contract award",
                                                 "serviceLines":  [
                                                                      "Mechanical Design",
                                                                      "Fire Suppression Design",
                                                                      "Energy + Sustainability",
                                                                      "Commissioning"
                                                                  ]
                                             },
                               "scoringRationale":  [
                                                        "Meeting-linked source tied to a council date",
                                                        "Aquatic facility mentioned explicitly",
                                                        "Construction contract award means high relevance"
                                                    ],
                               "briefingPreview":  {
                                                       "headline":  "Burnaby awards Cameron construction contract",
                                                       "action":  "Map the design-build team and likely downstream specialist scopes."
                                                   }
                           },
                           {
                               "id":  "victoria-project-page",
                               "title":  "Verified municipal public-page extraction",
                               "category":  "municipal_public_page",
                               "verificationStatus":  "verified-public",
                               "verificationLabel":  "Verified public source",
                               "sourceName":  "City of Victoria project page",
                               "sourceUrl":  "https://www.victoria.ca/city-government/projects/crystal-pool-replacement-project",
                               "rawInput":  "The project page says schematic design is nearing completion, construction management procurement is underway, and interim recreation planning is active ahead of the Crystal Pool closure timeline.",
                               "extracted":  {
                                                 "projectName":  "Crystal Pool Replacement Project",
                                                 "municipality":  "Victoria",
                                                 "assetType":  "Pool / aquatic centre",
                                                 "stage":  "Procurement",
                                                 "estimatedScope":  "Replacement aquatic and wellness facility",
                                                 "serviceLines":  [
                                                                      "Mechanical Design",
                                                                      "Fire Suppression Design",
                                                                      "Energy + Sustainability",
                                                                      "Commissioning"
                                                                  ]
                                             },
                               "scoringRationale":  [
                                                        "Current project page with explicit procurement movement",
                                                        "Aquatic scope is core to AME\u0027s sector strength",
                                                        "Opportunity is still shapeable before full downstream packages"
                                                    ],
                               "briefingPreview":  {
                                                       "headline":  "Victoria moves Crystal Pool into procurement-facing phase",
                                                       "action":  "Track construction manager and architect decision points."
                                                   }
                           },
                           {
                               "id":  "merx-import-sample",
                               "title":  "MERX alert import simulation",
                               "category":  "merx_import",
                               "verificationStatus":  "sample-import",
                               "verificationLabel":  "Sample import workflow",
                               "sourceName":  "Saved-search email sample",
                               "sourceUrl":  null,
                               "rawInput":  "Subject: Aquatic Centre Mechanical Renewal. Buyer: Lower Mainland civic owner. Scope includes natatorium dehumidification replacement, pool-water heat exchangers, BAS integration, and phased shutdown planning. Closing date: March 29, 2026.",
                               "extracted":  {
                                                 "projectName":  "Aquatic Centre Mechanical Renewal",
                                                 "municipality":  "Lower Mainland civic owner",
                                                 "assetType":  "Aquatic centre",
                                                 "stage":  "Procurement",
                                                 "estimatedScope":  "Mechanical renewal and controls integration",
                                                 "serviceLines":  [
                                                                      "Mechanical Design",
                                                                      "Energy + Sustainability",
                                                                      "Commissioning"
                                                                  ]
                                             },
                               "scoringRationale":  [
                                                        "Explicit aquatic and pool-hall mechanical keywords",
                                                        "Procurement timing is clear",
                                                        "Would be imported from approved alert access, not scraped live"
                                                    ],
                               "briefingPreview":  {
                                                       "headline":  "Sample MERX import qualifies as a high-fit aquatic renewal lead",
                                                       "action":  "Review manually through the approved access path before pursuing."
                                                   }
                           }
                       ],
    "briefing":  {
                     "generatedOn":  "2026-03-18",
                     "headline":  "4 priority leads and 1 watchlist signals for AME\u0027s aquatic + construction brief on March 18, 2026.",
                     "summary":  "This briefing surfaces the strongest BC municipal project signals relevant to AME and shows how approved MERX alerts would join the same daily pipeline.",
                     "totals":  {
                                    "rawCount":  9,
                                    "priorityCount":  7,
                                    "watchCount":  1,
                                    "peripheralCount":  1,
                                    "filteredCount":  0
                                },
                     "priorityLeads":  [
                                           {
                                               "title":  "Burnaby civic update says Burnaby Lake Recreation Complex is past 50% completion",
                                               "entity":  "City of Burnaby",
                                               "location":  "Burnaby, BC",
                                               "score":  100,
                                               "effectiveDate":  "2026-03-09",
                                               "whyItMatters":  "The project is in delivery and still relevant for downstream packages, specialist scopes, and relationship mapping around aquatic centre, pool, aquatic.",
                                               "action":  "Map likely packages, local partners, and probable follow-on scopes for AME pursuit."
                                           },
                                           {
                                               "title":  "Crystal Pool project page says construction management procurement is underway",
                                               "entity":  "City of Victoria",
                                               "location":  "Victoria, BC",
                                               "score":  100,
                                               "effectiveDate":  "2026-02-17",
                                               "whyItMatters":  "This record is already in procurement-facing motion and contains direct signals around aquatic centre, crystal pool, pool.",
                                               "action":  "Track council or owner procurement milestones and identify likely consultant or trade entry points."
                                           },
                                           {
                                               "title":  "Park Board gives greenlight to Vancouver Aquatic Centre renewal",
                                               "entity":  "City of Vancouver",
                                               "location":  "Vancouver, BC",
                                               "score":  100,
                                               "effectiveDate":  "2025-04-01",
                                               "whyItMatters":  "The project is pre-construction but clearly aligned with AME\u0027s watch profile through aquatic centre, vancouver aquatic centre, pool.",
                                               "action":  "Monitor the project for next-phase design, enabling works, or management procurements."
                                           },
                                           {
                                               "title":  "Newton Community Centre page lists 50-metre pool and early-2026 design-build target",
                                               "entity":  "City of Surrey",
                                               "location":  "Surrey, BC",
                                               "score":  88,
                                               "effectiveDate":  "2026-03-18",
                                               "whyItMatters":  "The project is pre-construction but clearly aligned with AME\u0027s watch profile through pool, aquatic, construction.",
                                               "action":  "Monitor the project for next-phase design, enabling works, or management procurements."
                                           }
                                       ],
                     "watchlist":  [
                                       {
                                           "title":  "Contract for direct-access road to future Newton Community Centre goes before council",
                                           "entity":  "City of Surrey",
                                           "location":  "Surrey, BC",
                                           "score":  70,
                                           "effectiveDate":  "2026-02-09",
                                           "whyItMatters":  "This record is already in procurement-facing motion and contains direct signals around aquatic, construction, community centre.",
                                           "action":  "Hold for background context only."
                                       }
                                   ],
                     "sourceNotes":  [
                                         "Signal Board cards link directly to official public sources.",
                                         "Meeting-linked records help surface civic projects before broader market visibility.",
                                         "The MERX alert intake flow is designed for approved alert imports such as saved-search emails or CSV exports."
                                     ]
                 },
    "processedRecords":  [
                             {
                                 "id":  "proof-003",
                                 "sourceKey":  "municipal-public-records",
                                 "sourceLabel":  "Verified public municipal pages",
                                 "sourceType":  "Project update",
                                 "entity":  "City of Burnaby",
                                 "location":  "Burnaby, BC",
                                 "title":  "Burnaby civic update says Burnaby Lake Recreation Complex is past 50% completion",
                                 "summary":  "Burnaby\u0027s March 9, 2026 civic building update says Burnaby Lake Recreation Complex is more than 50% complete and lists an estimated completion date of 2028.",
                                 "effectiveDate":  "2026-03-09",
                                 "publishedAt":  "2026-03-09",
                                 "observedAt":  "2026-03-18",
                                 "stage":  "construction",
                                 "stageLabel":  "Construction",
                                 "sourceUrl":  "https://www.burnaby.ca/our-city/news/2026-03-09/burnabys-once-generation-civic-building-program-reaches-50-completion",
                                 "sourceName":  "Burnaby civic building update",
                                 "sourceExcerpt":  "Burnaby\u0027s March 9, 2026 update says Burnaby Lake Recreation Complex is past the halfway point and includes Burnaby\u0027s first Olympic-sized swimming pool.",
                                 "assetType":  "Recreation complex",
                                 "estimatedScope":  "Large-scale aquatic and arena delivery",
                                 "ameServiceLines":  [
                                                         "Mechanical Design",
                                                         "Commissioning",
                                                         "Energy + Sustainability"
                                                     ],
                                 "goToMarketPlay":  "Use as a downstream package and reference-story example for AME\u0027s aquatic track record positioning.",
                                 "dataMode":  "verified-public",
                                 "verificationStatus":  "verified-public",
                                 "verificationLabel":  "Verified public source",
                                 "lastVerifiedAt":  "2026-03-18",
                                 "score":  100,
                                 "priorityKey":  "priority",
                                 "priorityLabel":  "Priority",
                                 "classification":  "Aquatic construction lead",
                                 "action":  "Map likely packages, local partners, and probable follow-on scopes for AME pursuit.",
                                 "whyItMatters":  "The project is in delivery and still relevant for downstream packages, specialist scopes, and relationship mapping around aquatic centre, pool, aquatic.",
                                 "keywordHits":  [
                                                     "aquatic centre",
                                                     "pool",
                                                     "aquatic",
                                                     "construction",
                                                     "recreation complex"
                                                 ],
                                 "evidence":  [
                                                  "Construction progress is reported directly by the City.",
                                                  "Aquatic scale remains central to the project definition.",
                                                  "The project is recent enough to feel current in a proof demo."
                                              ],
                                 "tags":  [
                                              "construction",
                                              "pool",
                                              "aquatic centre",
                                              "capital project"
                                          ]
                             },
                             {
                                 "id":  "proof-006",
                                 "sourceKey":  "municipal-public-records",
                                 "sourceLabel":  "Verified public municipal pages",
                                 "sourceType":  "Project page",
                                 "entity":  "City of Victoria",
                                 "location":  "Victoria, BC",
                                 "title":  "Crystal Pool project page says construction management procurement is underway",
                                 "summary":  "Victoria\u0027s project page says schematic design is nearing completion and construction management procurement is underway for the Crystal Pool replacement.",
                                 "effectiveDate":  "2026-02-17",
                                 "publishedAt":  "2026-02-17",
                                 "observedAt":  "2026-03-18",
                                 "stage":  "procurement",
                                 "stageLabel":  "Procurement",
                                 "sourceUrl":  "https://www.victoria.ca/city-government/projects/crystal-pool-replacement-project",
                                 "sourceName":  "City of Victoria project page",
                                 "sourceExcerpt":  "Victoria\u0027s project page says construction management procurement is underway and the replacement facility remains active.",
                                 "assetType":  "Pool / aquatic centre",
                                 "estimatedScope":  "Replacement aquatic and wellness facility",
                                 "ameServiceLines":  [
                                                         "Mechanical Design",
                                                         "Fire Suppression Design",
                                                         "Energy + Sustainability",
                                                         "Commissioning"
                                                     ],
                                 "goToMarketPlay":  "Track construction manager, architect, and owner-side decision points while the project is still shapeable.",
                                 "dataMode":  "verified-public",
                                 "verificationStatus":  "verified-public",
                                 "verificationLabel":  "Verified public source",
                                 "lastVerifiedAt":  "2026-03-18",
                                 "score":  100,
                                 "priorityKey":  "priority",
                                 "priorityLabel":  "Priority",
                                 "classification":  "Aquatic procurement lead",
                                 "action":  "Track council or owner procurement milestones and identify likely consultant or trade entry points.",
                                 "whyItMatters":  "This record is already in procurement-facing motion and contains direct signals around aquatic centre, crystal pool, pool.",
                                 "keywordHits":  [
                                                     "aquatic centre",
                                                     "crystal pool",
                                                     "pool",
                                                     "aquatic",
                                                     "construction",
                                                     "construction management"
                                                 ],
                                 "evidence":  [
                                                  "Construction management procurement is explicitly underway.",
                                                  "Aquatic replacement scope is central to the published project page.",
                                                  "Strong fit for AME\u0027s aquatic specialization."
                                              ],
                                 "tags":  [
                                              "construction",
                                              "pool",
                                              "construction management",
                                              "aquatic centre"
                                          ]
                             },
                             {
                                 "id":  "proof-009",
                                 "sourceKey":  "municipal-public-records",
                                 "sourceLabel":  "Verified public municipal pages",
                                 "sourceType":  "Park Board news",
                                 "entity":  "City of Vancouver",
                                 "location":  "Vancouver, BC",
                                 "title":  "Park Board gives greenlight to Vancouver Aquatic Centre renewal",
                                 "summary":  "Vancouver Park Board approved the renewal direction for the Vancouver Aquatic Centre, including lap pool, leisure pool, hot pool, and dive features ahead of the next capital steps.",
                                 "effectiveDate":  "2025-04-01",
                                 "publishedAt":  "2025-04-01",
                                 "observedAt":  "2026-03-18",
                                 "stage":  "planning",
                                 "stageLabel":  "Planning",
                                 "sourceUrl":  "https://vancouver.ca/news-calendar/green-light-for-vancouver-aquatic-centre-renewal-april-1.aspx",
                                 "sourceName":  "City of Vancouver news release",
                                 "sourceExcerpt":  "Vancouver approved the renewal program direction for the Vancouver Aquatic Centre, including lap and leisure pool elements.",
                                 "assetType":  "Aquatic centre",
                                 "estimatedScope":  "Program approval and design direction",
                                 "ameServiceLines":  [
                                                         "Mechanical Design",
                                                         "Energy + Sustainability",
                                                         "Commissioning"
                                                     ],
                                 "goToMarketPlay":  "Use as the policy and program signal that complements the renewal project page.",
                                 "dataMode":  "verified-public",
                                 "verificationStatus":  "verified-public",
                                 "verificationLabel":  "Verified public source",
                                 "lastVerifiedAt":  "2026-03-18",
                                 "score":  100,
                                 "priorityKey":  "priority",
                                 "priorityLabel":  "Priority",
                                 "classification":  "Aquatic capital signal",
                                 "action":  "Monitor the project for next-phase design, enabling works, or management procurements.",
                                 "whyItMatters":  "The project is pre-construction but clearly aligned with AME\u0027s watch profile through aquatic centre, vancouver aquatic centre, pool.",
                                 "keywordHits":  [
                                                     "aquatic centre",
                                                     "vancouver aquatic centre",
                                                     "pool",
                                                     "aquatic",
                                                     "construction",
                                                     "leisure pool",
                                                     "renewal"
                                                 ],
                                 "evidence":  [
                                                  "Program direction is published openly by Vancouver.",
                                                  "Pool and aquatic features are identified publicly.",
                                                  "Useful for showing how policy signals become project signals."
                                              ],
                                 "tags":  [
                                              "construction",
                                              "aquatic centre",
                                              "pool",
                                              "capital plan"
                                          ]
                             },
                             {
                                 "id":  "proof-008",
                                 "sourceKey":  "municipal-public-records",
                                 "sourceLabel":  "Verified public municipal pages",
                                 "sourceType":  "Project page",
                                 "entity":  "City of Vancouver",
                                 "location":  "Vancouver, BC",
                                 "title":  "Vancouver Aquatic Centre renewal page says construction is anticipated in late 2026",
                                 "summary":  "The Vancouver Aquatic Centre renewal page says the approved capital plan supports planning, design, and construction of a new facility, with start of construction anticipated in late 2026.",
                                 "effectiveDate":  "2025-03-31",
                                 "publishedAt":  "2025-03-31",
                                 "observedAt":  "2026-03-18",
                                 "stage":  "planning",
                                 "stageLabel":  "Planning",
                                 "sourceUrl":  "https://vancouver.ca/parks-recreation-culture/vancouver-aquatic-centre-renewal.aspx",
                                 "sourceName":  "City of Vancouver project page",
                                 "sourceExcerpt":  "Vancouver\u0027s renewal page ties the aquatic centre to planning, design, and a late-2026 construction start.",
                                 "assetType":  "Aquatic centre",
                                 "estimatedScope":  "Major civic aquatic renewal",
                                 "ameServiceLines":  [
                                                         "Mechanical Design",
                                                         "Fire Suppression Design",
                                                         "Energy + Sustainability",
                                                         "Commissioning"
                                                     ],
                                 "goToMarketPlay":  "Use as a flagship aquatic renewal lead in Vancouver with strong relationship-building value.",
                                 "dataMode":  "verified-public",
                                 "verificationStatus":  "verified-public",
                                 "verificationLabel":  "Verified public source",
                                 "lastVerifiedAt":  "2026-03-18",
                                 "score":  100,
                                 "priorityKey":  "priority",
                                 "priorityLabel":  "Priority",
                                 "classification":  "Aquatic capital signal",
                                 "action":  "Monitor the project for next-phase design, enabling works, or management procurements.",
                                 "whyItMatters":  "The project is pre-construction but clearly aligned with AME\u0027s watch profile through aquatic centre, vancouver aquatic centre, pool.",
                                 "keywordHits":  [
                                                     "aquatic centre",
                                                     "vancouver aquatic centre",
                                                     "pool",
                                                     "aquatic",
                                                     "construction",
                                                     "renewal"
                                                 ],
                                 "evidence":  [
                                                  "The renewal page is explicit about construction timing.",
                                                  "Aquatic scope is direct and high fit for AME.",
                                                  "The source is easy to defend in a client demo."
                                              ],
                                 "tags":  [
                                              "construction",
                                              "aquatic centre",
                                              "pool",
                                              "renewal"
                                          ]
                             },
                             {
                                 "id":  "proof-007",
                                 "sourceKey":  "municipal-public-records",
                                 "sourceLabel":  "Verified public municipal pages",
                                 "sourceType":  "Council news",
                                 "entity":  "City of Victoria",
                                 "location":  "Victoria, BC",
                                 "title":  "Crystal Pool Replacement Project moves forward to design and construction",
                                 "summary":  "Victoria Council moved the Crystal Pool Replacement Project forward, clearing the way for design and construction planning on a new aquatic and wellness facility.",
                                 "effectiveDate":  "2025-03-14",
                                 "publishedAt":  "2025-03-14",
                                 "observedAt":  "2026-03-18",
                                 "stage":  "planning",
                                 "stageLabel":  "Planning",
                                 "sourceUrl":  "https://www.victoria.ca/city-government/news/crystal-pool-replacement-project-moves-forward",
                                 "sourceName":  "City of Victoria news release",
                                 "sourceExcerpt":  "Victoria Council moved the Crystal Pool replacement forward, creating a strong pre-procurement aquatic signal in AME\u0027s home market.",
                                 "assetType":  "Pool / aquatic centre",
                                 "estimatedScope":  "Major aquatic replacement project",
                                 "ameServiceLines":  [
                                                         "Mechanical Design",
                                                         "Fire Suppression Design",
                                                         "Energy + Sustainability",
                                                         "Commissioning"
                                                     ],
                                 "goToMarketPlay":  "Use as a council-backed home-market signal tied to AME\u0027s strongest category of work.",
                                 "dataMode":  "verified-public",
                                 "verificationStatus":  "verified-public",
                                 "verificationLabel":  "Verified public source",
                                 "lastVerifiedAt":  "2026-03-18",
                                 "score":  100,
                                 "priorityKey":  "priority",
                                 "priorityLabel":  "Priority",
                                 "classification":  "Aquatic capital signal",
                                 "action":  "Monitor the project for next-phase design, enabling works, or management procurements.",
                                 "whyItMatters":  "The project is pre-construction but clearly aligned with AME\u0027s watch profile through aquatic centre, crystal pool, pool.",
                                 "keywordHits":  [
                                                     "aquatic centre",
                                                     "crystal pool",
                                                     "pool",
                                                     "aquatic",
                                                     "construction"
                                                 ],
                                 "evidence":  [
                                                  "Council action is explicit.",
                                                  "Aquatic replacement scope is direct and material.",
                                                  "The project is still relevant to an early-intelligence narrative."
                                              ],
                                 "tags":  [
                                              "construction",
                                              "pool",
                                              "aquatic centre",
                                              "council"
                                          ]
                             },
                             {
                                 "id":  "proof-004",
                                 "sourceKey":  "municipal-public-records",
                                 "sourceLabel":  "Verified public municipal pages",
                                 "sourceType":  "Capital project page",
                                 "entity":  "City of Surrey",
                                 "location":  "Surrey, BC",
                                 "title":  "Newton Community Centre page lists 50-metre pool and early-2026 design-build target",
                                 "summary":  "Surrey\u0027s Newton Community Centre page describes a $310.6 million project with a 50-metre pool, leisure pool, library, and an early-2026 design-build team target.",
                                 "effectiveDate":  "2026-03-18",
                                 "publishedAt":  null,
                                 "observedAt":  "2026-03-18",
                                 "stage":  "planning",
                                 "stageLabel":  "Planning",
                                 "sourceUrl":  "https://www.surrey.ca/about-surrey/capital-projects/newton-community-centre",
                                 "sourceName":  "City of Surrey capital projects",
                                 "sourceExcerpt":  "Surrey\u0027s Newton Community Centre page lists a 50-metre pool, leisure pool, library program, and says design-build team selection was anticipated in early 2026.",
                                 "assetType":  "Community centre / aquatic centre",
                                 "estimatedScope":  "Multi-use civic community hub",
                                 "ameServiceLines":  [
                                                         "Mechanical Design",
                                                         "Fire Suppression Design",
                                                         "Energy + Sustainability",
                                                         "Commissioning"
                                                     ],
                                 "goToMarketPlay":  "Use as a major pre-procurement target where AME can map architects and preconstruction partners.",
                                 "dataMode":  "verified-public",
                                 "verificationStatus":  "verified-public",
                                 "verificationLabel":  "Verified public source",
                                 "lastVerifiedAt":  "2026-03-18",
                                 "score":  88,
                                 "priorityKey":  "priority",
                                 "priorityLabel":  "Priority",
                                 "classification":  "Aquatic capital signal",
                                 "action":  "Monitor the project for next-phase design, enabling works, or management procurements.",
                                 "whyItMatters":  "The project is pre-construction but clearly aligned with AME\u0027s watch profile through pool, aquatic, construction.",
                                 "keywordHits":  [
                                                     "pool",
                                                     "aquatic",
                                                     "construction",
                                                     "community centre",
                                                     "leisure pool"
                                                 ],
                                 "evidence":  [
                                                  "Aquatic amenities are central to the published project definition.",
                                                  "The page frames the project before full downstream package release.",
                                                  "Strong fit for AME\u0027s BC municipal focus."
                                              ],
                                 "tags":  [
                                              "pool",
                                              "aquatic",
                                              "community centre",
                                              "construction"
                                          ]
                             },
                             {
                                 "id":  "proof-002",
                                 "sourceKey":  "municipal-public-records",
                                 "sourceLabel":  "Verified public municipal pages",
                                 "sourceType":  "Council-linked news",
                                 "entity":  "City of Burnaby",
                                 "location":  "Burnaby, BC",
                                 "title":  "Council approves contract to complete the Burnaby Lake Recreation Complex",
                                 "summary":  "Burnaby approved the contract to complete the Burnaby Lake Recreation Complex, a major aquatic and arena project with a 50 metre pool, leisure pool, and diving facilities.",
                                 "effectiveDate":  "2024-05-06",
                                 "publishedAt":  "2024-05-06",
                                 "observedAt":  "2026-03-18",
                                 "stage":  "procurement",
                                 "stageLabel":  "Procurement",
                                 "sourceUrl":  "https://www.burnaby.ca/our-city/news/2024-05-06/council-approves-contract-complete-burnaby-lake-recreation-complex",
                                 "sourceName":  "Burnaby news release",
                                 "sourceExcerpt":  "Burnaby approved the contract to complete the Burnaby Lake Recreation Complex, including major aquatic program elements.",
                                 "assetType":  "Recreation complex",
                                 "estimatedScope":  "Major aquatic and arena design-build delivery",
                                 "ameServiceLines":  [
                                                         "Mechanical Design",
                                                         "Energy + Sustainability",
                                                         "Commissioning"
                                                     ],
                                 "goToMarketPlay":  "Use as a benchmark for high-profile aquatic and arena delivery in the Lower Mainland.",
                                 "dataMode":  "verified-public",
                                 "verificationStatus":  "verified-public",
                                 "verificationLabel":  "Verified public source",
                                 "lastVerifiedAt":  "2026-03-18",
                                 "score":  80,
                                 "priorityKey":  "priority",
                                 "priorityLabel":  "Priority",
                                 "classification":  "Aquatic procurement lead",
                                 "action":  "Track council or owner procurement milestones and identify likely consultant or trade entry points.",
                                 "whyItMatters":  "This record is already in procurement-facing motion and contains direct signals around pool, aquatic, construction.",
                                 "keywordHits":  [
                                                     "pool",
                                                     "aquatic",
                                                     "construction",
                                                     "recreation complex",
                                                     "50 metre",
                                                     "leisure pool"
                                                 ],
                                 "evidence":  [
                                                  "Project scope includes multiple aquatic features.",
                                                  "Council approval ties the record to procurement movement.",
                                                  "A large civic delivery program is implied."
                                              ],
                                 "tags":  [
                                              "construction",
                                              "pool",
                                              "aquatic",
                                              "recreation complex"
                                          ]
                             },
                             {
                                 "id":  "proof-005",
                                 "sourceKey":  "municipal-public-records",
                                 "sourceLabel":  "Verified public municipal pages",
                                 "sourceType":  "Council-linked media release",
                                 "entity":  "City of Surrey",
                                 "location":  "Surrey, BC",
                                 "title":  "Contract for direct-access road to future Newton Community Centre goes before council",
                                 "summary":  "Surrey advanced a direct-access road and utility package for the future Newton Community Centre, a useful sign that enabling works are moving ahead.",
                                 "effectiveDate":  "2026-02-09",
                                 "publishedAt":  "2026-02-09",
                                 "observedAt":  "2026-03-18",
                                 "stage":  "procurement",
                                 "stageLabel":  "Procurement",
                                 "sourceUrl":  "https://www.surrey.ca/news-events/news/contract-direct-access-road-future-newton-community-centre-goes-council",
                                 "sourceName":  "City of Surrey news release",
                                 "sourceExcerpt":  "Surrey advanced enabling works tied directly to the future Newton Community Centre, signaling momentum toward delivery.",
                                 "assetType":  "Community centre enabling works",
                                 "estimatedScope":  "Access road and utility package",
                                 "ameServiceLines":  [
                                                         "Mechanical Design",
                                                         "Fire Suppression Design",
                                                         "Commissioning"
                                                     ],
                                 "goToMarketPlay":  "Use as a timing signal that the broader project is moving from concept toward delivery.",
                                 "dataMode":  "verified-public",
                                 "verificationStatus":  "verified-public",
                                 "verificationLabel":  "Verified public source",
                                 "lastVerifiedAt":  "2026-03-18",
                                 "score":  70,
                                 "priorityKey":  "watch",
                                 "priorityLabel":  "Watch",
                                 "classification":  "Community infrastructure signal",
                                 "action":  "Hold for background context only.",
                                 "whyItMatters":  "This record is already in procurement-facing motion and contains direct signals around aquatic, construction, community centre.",
                                 "keywordHits":  [
                                                     "aquatic",
                                                     "construction",
                                                     "community centre"
                                                 ],
                                 "evidence":  [
                                                  "Council-facing enabling works indicate project movement.",
                                                  "The release explicitly ties the contract to the future centre.",
                                                  "Useful as an early warning signal, even if aquatic scope is indirect."
                                              ],
                                 "tags":  [
                                              "construction",
                                              "community centre",
                                              "infrastructure",
                                              "council"
                                          ]
                             },
                             {
                                 "id":  "proof-001",
                                 "sourceKey":  "municipal-meeting-linked",
                                 "sourceLabel":  "Verified meeting-linked documents",
                                 "sourceType":  "Meeting-linked council summary PDF",
                                 "entity":  "City of Burnaby",
                                 "location":  "Burnaby, BC",
                                 "title":  "Burnaby Council in Brief records Cameron aquatic facility contract approval",
                                 "summary":  "Burnaby\u0027s July 22, 2024 Council in Brief says Council approved the Cameron Community Centre and Library construction contract and identifies the aquatic facility as part of the scope.",
                                 "effectiveDate":  "2024-07-22",
                                 "publishedAt":  "2024-07-22",
                                 "observedAt":  "2026-03-18",
                                 "stage":  "procurement",
                                 "stageLabel":  "Procurement",
                                 "sourceUrl":  "https://www.burnaby.ca/sites/default/files/acquiadam/2024-07/2024-7-22-Council-in-Brief.pdf",
                                 "sourceName":  "Burnaby Council in Brief",
                                 "sourceExcerpt":  "Burnaby\u0027s July 22, 2024 Council in Brief notes approval of the Cameron Community Centre and Library construction contract, including a new aquatic facility.",
                                 "assetType":  "Community centre / aquatic facility",
                                 "estimatedScope":  "$267 million construction contract award",
                                 "ameServiceLines":  [
                                                         "Mechanical Design",
                                                         "Fire Suppression Design",
                                                         "Energy + Sustainability",
                                                         "Commissioning"
                                                     ],
                                 "goToMarketPlay":  "Use as a meeting-linked proof point for how municipal documents surface major aquatic scope.",
                                 "dataMode":  "verified-public",
                                 "verificationStatus":  "verified-public",
                                 "verificationLabel":  "Verified public source",
                                 "lastVerifiedAt":  "2026-03-18",
                                 "score":  48,
                                 "priorityKey":  "peripheral",
                                 "priorityLabel":  "Peripheral",
                                 "classification":  "Community infrastructure signal",
                                 "action":  "Hold for background context only.",
                                 "whyItMatters":  "This record is already in procurement-facing motion and contains direct signals around aquatic, construction, community centre.",
                                 "keywordHits":  [
                                                     "aquatic",
                                                     "construction",
                                                     "community centre"
                                                 ],
                                 "evidence":  [
                                                  "Council summary is tied to a specific meeting date.",
                                                  "Aquatic facility is named directly in the document.",
                                                  "Construction contract has already been awarded."
                                              ],
                                 "tags":  [
                                              "construction",
                                              "community centre",
                                              "aquatic",
                                              "council"
                                          ]
                             }
                         ],
    "briefingMarkdown":  "# AME Daily Public Project Intelligence Briefing\r\n\r\nGenerated: March 18, 2026\r\n\r\n## Headline\r\n4 priority leads and 1 watchlist signals for AME\u0027s aquatic + construction brief on March 18, 2026.\r\n\r\nThis briefing surfaces the strongest BC municipal project signals relevant to AME and shows how approved MERX alerts would join the same daily pipeline.\r\n\r\n## Priority leads\r\n### Burnaby civic update says Burnaby Lake Recreation Complex is past 50% completion\r\n- Entity: City of Burnaby\r\n- Location: Burnaby, BC\r\n- Score: 100\r\n- Why it matters: The project is in delivery and still relevant for downstream packages, specialist scopes, and relationship mapping around aquatic centre, pool, aquatic.\r\n- Action: Map likely packages, local partners, and probable follow-on scopes for AME pursuit.\r\n\r\n### Crystal Pool project page says construction management procurement is underway\r\n- Entity: City of Victoria\r\n- Location: Victoria, BC\r\n- Score: 100\r\n- Why it matters: This record is already in procurement-facing motion and contains direct signals around aquatic centre, crystal pool, pool.\r\n- Action: Track council or owner procurement milestones and identify likely consultant or trade entry points.\r\n\r\n### Park Board gives greenlight to Vancouver Aquatic Centre renewal\r\n- Entity: City of Vancouver\r\n- Location: Vancouver, BC\r\n- Score: 100\r\n- Why it matters: The project is pre-construction but clearly aligned with AME\u0027s watch profile through aquatic centre, vancouver aquatic centre, pool.\r\n- Action: Monitor the project for next-phase design, enabling works, or management procurements.\r\n\r\n### Newton Community Centre page lists 50-metre pool and early-2026 design-build target\r\n- Entity: City of Surrey\r\n- Location: Surrey, BC\r\n- Score: 88\r\n- Why it matters: The project is pre-construction but clearly aligned with AME\u0027s watch profile through pool, aquatic, construction.\r\n- Action: Monitor the project for next-phase design, enabling works, or management procurements.\r\n\r\n## Watchlist\r\n### Contract for direct-access road to future Newton Community Centre goes before council\r\n- Entity: City of Surrey\r\n- Location: Surrey, BC\r\n- Score: 70\r\n- Why it matters: This record is already in procurement-facing motion and contains direct signals around aquatic, construction, community centre.\r\n- Action: Hold for background context only.\r\n\r\n## Source notes\r\n- Signal Board cards link directly to official public sources.\r\n- Meeting-linked records help surface civic projects before broader market visibility.\r\n- The MERX alert intake flow is designed for approved alert imports such as saved-search emails or CSV exports."
};
