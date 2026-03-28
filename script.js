const appData = window.AME_DEMO_DATA;
const MORNING_DIGEST_URL = "artifacts/ame-proof-morning-digest.html";
const LEADERSHIP_BRIEF_URL = "artifacts/ame-proof-daily-briefing.html";
const DIGEST_RECORD_STORAGE_KEY = "ameDigestRecordId";
const EXECUTIVE_LEAD_STORAGE_KEY = "ameExecutiveLeadId";
const TRANSIENT_LEAD_STORAGE_KEY = "ameTransientDigestLead";
const BCBID_BROWSE_URL = "https://bcbid.gov.bc.ca/page.aspx/en/rfp/request_browse_public";

if (!appData) {
  document.body.innerHTML = `
    <main style="width:min(760px, calc(100vw - 2rem)); margin:4rem auto; color:#19222d; font-family:Aptos,Segoe UI,sans-serif;">
      <h1 style="font-family:Bahnschrift,Arial Narrow,sans-serif;">Proof data not found</h1>
      <p>Run <code>run-demo.ps1</code> to build <code>data/ame-proof-app-data.js</code> before opening this page.</p>
    </main>
  `;
  throw new Error("AME_DEMO_DATA is not available.");
}

const stageSequence = ["raw", "extracted", "scored", "briefing"];
const stageTitles = {
  raw: "Raw input",
  extracted: "Extracted facts",
  scored: "Scored result",
  briefing: "Briefing row",
};

const sourceOptions = [
  { key: "all", label: "All Signals" },
  { key: "municipal-public-records", label: "Public Pages" },
  { key: "municipal-meeting-linked", label: "Meeting-Linked Docs" },
];

const priorityOptions = [
  { key: "all", label: "All" },
  { key: "priority", label: "Priority" },
  { key: "watch", label: "Watchlist" },
  { key: "peripheral", label: "Peripheral" },
];

const sourceMonitorProfiles = [
  {
    key: "municipal-meeting-linked",
    label: "Meeting-Linked Documents",
    cadenceLabel: "Daily + meeting-day checks",
    watchLabel: "Council agendas, committee packets, and minutes",
    whyEarly: "These records often surface capital intent before broad procurement visibility.",
    roleLabel: "Earliest owner-side signal",
  },
  {
    key: "municipal-public-records",
    label: "Owner Project Pages",
    cadenceLabel: "Every 6 hours",
    watchLabel: "Project pages, owner news, and recreation strategy updates",
    whyEarly: "Owner-side page changes usually move ahead of inbox-based notice tools.",
    roleLabel: "Planning + funding movement",
  },
  {
    key: "public-notices",
    label: "Public Procurement Notices",
    cadenceLabel: "Every 4 hours",
    watchLabel: "Bids and tenders platforms and public procurement listings",
    whyEarly: "Not the earliest source, but the fastest qualification lane once a notice goes live.",
    roleLabel: "Fast qualification lane",
  },
];

const keywordRules = [
  ["aquatic centre", 30],
  ["crystal pool", 26],
  ["vancouver aquatic centre", 24],
  ["pool", 18],
  ["aquatic", 14],
  ["construction", 14],
  ["construction management", 14],
  ["community centre", 10],
  ["recreation complex", 10],
  ["50 metre", 8],
  ["50-metre", 8],
  ["leisure pool", 8],
  ["rfp", 6],
  ["renewal", 6],
  ["mechanical", 10],
  ["repair", 6],
  ["replacement", 8],
  ["ahu", 10],
  ["boiler", 14],
  ["chiller", 14],
  ["hvac", 12],
  ["commissioning", 10],
  ["cooling coil", 10],
  ["heat recovery", 10],
  ["dehumidification", 12],
  ["heat exchanger", 10],
  ["heat exchangers", 10],
  ["bas", 8],
];

const negativeRules = [
  ["roads", -22],
  ["road resurfacing", -28],
  ["wastewater", -32],
  ["scada", -20],
  ["asphalt", -18],
];

const stageWeights = {
  procurement: 22,
  planning: 14,
  construction: 18,
  funding: 2,
  reference: -6,
  deferred: 0,
  monitoring: 4,
};

const publicDemoAlert = [
  "Subject: CITY OF MERRITT #2025-112 - Nicola Valley Aquatic Centre Mechanical Mezzanine Repair",
  "Buyer: City of Merritt",
  "Location: Merritt, BC",
  "Closing Date: Fri Feb 27, 2026 2:00:00 PM (PST)",
  "Source: Interior Purchasing Office Bids and Tenders",
  "Public Source URL: https://interiorpurchasing.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/55d3cbae-8aa2-4bc5-8343-81dbf54465ac",
  "Description: Through this Request for Proposals (RFP), the City of Merritt invites proposals from suitably qualified and experienced companies to repair and replace the mechanical mezzanine space at the City's Nicola Valley Aquatic Centre. Work includes selective demolition, structural steel, reinforced concrete slab replacement, drainage system modifications, and concrete housekeeping slabs.",
].join("\n");

const knownLocations = [
  ["vancouver", "Vancouver, BC"],
  ["victoria", "Victoria, BC"],
  ["surrey", "Surrey, BC"],
  ["burnaby", "Burnaby, BC"],
  ["merritt", "Merritt, BC"],
  ["coquitlam", "Coquitlam, BC"],
  ["saanich", "Saanich, BC"],
];

const displayWordMap = {
  ahu: "AHU",
  ahu1: "AHU1",
  ahu2: "AHU2",
  bas: "BAS",
  bc: "BC",
  ccc: "CCC",
  cpcc: "CPCC",
  cvrd: "CVRD",
  ddc: "DDC",
  hrv: "HRV",
  hvac: "HVAC",
  liwwtp: "LIWWTP",
  mer: "MER",
  pgac: "PGAC",
  rfp: "RFP",
  rfq: "RFQ",
};

const realImportNotices = [
  {
    id: "merritt-aquatic-mezzanine",
    title: "City of Merritt #2025-112 - Nicola Valley Aquatic Centre Mechanical Mezzanine Repair",
    buyer: "City of Merritt",
    location: "Merritt, BC",
    closing: "Fri Feb 27, 2026 2:00:00 PM (PST)",
    sourceName: "Interior Purchasing Office Bids and Tenders",
    sourceUrl: "https://interiorpurchasing.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/55d3cbae-8aa2-4bc5-8343-81dbf54465ac",
    summary: "Mechanical mezzanine repair and replacement at the Nicola Valley Aquatic Centre with structural, slab, and drainage scope.",
    rawText: publicDemoAlert,
  },
  {
    id: "burnaby-eileen-daily-ahu1",
    title: "City of Burnaby Tender #64-05-25 - Eileen Daily Pool AHU1 Replacement",
    buyer: "City of Burnaby",
    location: "Burnaby, BC",
    closing: "Fri Dec 12, 2025 3:00:00 PM (PST)",
    sourceName: "Burnaby Bids and Tenders",
    sourceUrl: "https://burnaby.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/4cece47f-7fd9-4330-beb6-e13dcc4e2eb6",
    summary: "Pre-qualified mechanical contractor tender for AHU1 replacement at Eileen Daily Pool.",
    rawText: [
      "Subject: City of Burnaby Tender #64-05-25 - Eileen Daily Pool AHU1 Replacement",
      "Buyer: City of Burnaby",
      "Location: Burnaby, BC",
      "Closing Date: Fri Dec 12, 2025 3:00:00 PM (PST)",
      "Source: Burnaby Bids and Tenders",
      "Public Source URL: https://burnaby.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/4cece47f-7fd9-4330-beb6-e13dcc4e2eb6",
      "Description: The City of Burnaby invites tenders from pre-qualified mechanical contractors to complete AHU1 replacement work at Eileen Daily Pool, including rooftop access and existing unit replacement.",
    ].join("\n"),
  },
  {
    id: "burnaby-eileen-daily-ahu2-boilers",
    title: "City of Burnaby Tender #155-09-25 - Eileen Daily Pool AHU2 & Boilers Replacement",
    buyer: "City of Burnaby",
    location: "Burnaby, BC",
    closing: "Thu Oct 23, 2025 3:00:00 PM (PDT)",
    sourceName: "Burnaby Bids and Tenders",
    sourceUrl: "https://burnaby.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/6a699f29-e93a-48f2-a292-3f599cb5a11e/",
    summary: "Mechanical contractor tender for AHU2 and boiler replacement at Eileen Daily Pool.",
    rawText: [
      "Subject: City of Burnaby Tender #155-09-25 - Eileen Daily Pool AHU2 & Boilers Replacement",
      "Buyer: City of Burnaby",
      "Location: Burnaby, BC",
      "Closing Date: Thu Oct 23, 2025 3:00:00 PM (PDT)",
      "Source: Burnaby Bids and Tenders",
      "Public Source URL: https://burnaby.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/6a699f29-e93a-48f2-a292-3f599cb5a11e/",
      "Description: The City of Burnaby invites tenders from pre-qualified mechanical contractors to replace AHU2 and boilers at Eileen Daily Pool.",
    ].join("\n"),
  },
  {
    id: "nanaimo-kin-pool-boiler",
    title: "City of Nanaimo Bid #4106 - Kin Pool: Boiler Replacement",
    buyer: "City of Nanaimo",
    location: "Nanaimo, BC",
    closing: "Thu Jan 8, 2026 3:00:00 PM (PST)",
    sourceName: "Nanaimo Bids and Tenders",
    sourceUrl: "https://nanaimo.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/33d31690-dfa8-4bea-92b4-eb565559857f",
    summary: "New boiler plant and hydronic pool water heating system for Kin Pool.",
    rawText: [
      "Subject: City of Nanaimo Bid #4106 - Kin Pool: Boiler Replacement",
      "Buyer: City of Nanaimo",
      "Location: Nanaimo, BC",
      "Closing Date: Thu Jan 8, 2026 3:00:00 PM (PST)",
      "Source: Nanaimo Bids and Tenders",
      "Public Source URL: https://nanaimo.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/33d31690-dfa8-4bea-92b4-eb565559857f",
      "Description: Provide a new, complete, operational and tested boiler plant and hydronic pool water heating system for Kin Pool, as described in the mechanical and electrical drawings.",
    ].join("\n"),
  },
  {
    id: "port-moody-rocky-point-boilers",
    title: "City of Port Moody RFP24-26 - Rocky Point Pool Boiler Replacement",
    buyer: "City of Port Moody",
    location: "Port Moody, BC",
    closing: "Thu Jan 9, 2025 2:00:00 PM (PST)",
    sourceName: "Port Moody Bids and Tenders",
    sourceUrl: "https://portmoody.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/d151b963-87cd-4a81-a42d-bf37fdefa98c",
    summary: "Rocky Point Pool boiler replacement with pool air source heat pumps and electrical upgrades.",
    rawText: [
      "Subject: City of Port Moody RFP24-26 - Rocky Point Pool Boiler Replacement",
      "Buyer: City of Port Moody",
      "Location: Port Moody, BC",
      "Closing Date: Thu Jan 9, 2025 2:00:00 PM (PST)",
      "Source: Port Moody Bids and Tenders",
      "Public Source URL: https://portmoody.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/d151b963-87cd-4a81-a42d-bf37fdefa98c",
      "Description: Replace the gas-fired main pool boiler and tot pool boiler at Rocky Point Pool with pool air source heat pumps, including electrical distribution upgrades.",
    ].join("\n"),
  },
  {
    id: "prince-george-aquatic-renovation",
    title: "City of Prince George PQ24-113 - Prince George Aquatic Centre Renovation",
    buyer: "City of Prince George",
    location: "Prince George, BC",
    closing: "Thu Dec 19, 2024 2:00:00 PM (PST)",
    sourceName: "Prince George Bids and Tenders",
    sourceUrl: "https://princegeorge.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/537a956c-32c4-4a76-972b-08f470b51012",
    summary: "Aquatic centre renovation with HVAC, hydronic systems, DDC controls, plumbing, and pool filter replacement.",
    rawText: [
      "Subject: City of Prince George PQ24-113 - Prince George Aquatic Centre Renovation",
      "Buyer: City of Prince George",
      "Location: Prince George, BC",
      "Closing Date: Thu Dec 19, 2024 2:00:00 PM (PST)",
      "Source: Prince George Bids and Tenders",
      "Public Source URL: https://princegeorge.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/537a956c-32c4-4a76-972b-08f470b51012",
      "Description: Renovation scope includes HVAC, hydronic system work, new DDC controls, plumbing fixtures, pool tank tile repair, pool filter replacement, and related construction at the Prince George Aquatic Centre.",
    ].join("\n"),
  },
  {
    id: "cvrd-aquatic-roof",
    title: "CVRD-25-015 - RFQ: Aquatic Centre Roof Replacement",
    buyer: "Comox Valley Regional District",
    location: "Courtenay, BC",
    closing: "Thu Jul 3, 2025 2:00:00 PM (PDT)",
    sourceName: "CVRD Bids and Tenders",
    sourceUrl: "https://comoxvalleyrd.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/219731e1-aae5-485a-b5c4-ea8790787728",
    summary: "Roofing, flashing, and drain replacement at the Comox Valley Aquatic Centre.",
    rawText: [
      "Subject: CVRD-25-015 - RFQ: Aquatic Centre Roof Replacement",
      "Buyer: Comox Valley Regional District",
      "Location: Courtenay, BC",
      "Closing Date: Thu Jul 3, 2025 2:00:00 PM (PDT)",
      "Source: CVRD Bids and Tenders",
      "Public Source URL: https://comoxvalleyrd.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/219731e1-aae5-485a-b5c4-ea8790787728",
      "Description: The Comox Valley Regional District is seeking quotations from qualified contractors for roof, flashing, and drain replacement at the Comox Valley Aquatic Centre.",
    ].join("\n"),
  },
  {
    id: "langley-acc-cooling-coil",
    title: "Township of Langley ITT 26-130 - ACC AHU-1 Cooling Coil Addition",
    buyer: "Township of Langley",
    location: "Langley, BC",
    closing: "Tue Mar 3, 2026 2:00:00 PM (PST)",
    sourceName: "Township of Langley Bids and Tenders",
    sourceUrl: "https://tol.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/b878aec5-c600-4f8e-b77b-298b5a107597",
    summary: "Cooling coil addition and associated electrical and mechanical systems to AHU-1 at Aldergrove Community Centre.",
    rawText: [
      "Subject: Township of Langley ITT 26-130 - ACC AHU-1 Cooling Coil Addition",
      "Buyer: Township of Langley",
      "Location: Langley, BC",
      "Closing Date: Tue Mar 3, 2026 2:00:00 PM (PST)",
      "Source: Township of Langley Bids and Tenders",
      "Public Source URL: https://tol.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/b878aec5-c600-4f8e-b77b-298b5a107597",
      "Description: Provide all labour, materials, equipment, and services necessary for addition of a cooling coil and associated electrical and mechanical systems to AHU-1 serving the arena at Aldergrove Community Centre.",
    ].join("\n"),
  },
  {
    id: "interior-health-merritt-chiller",
    title: "Interior Health RFP 6225006 - MER Chiller Replacement: Mechanical Engineering Services",
    buyer: "Interior Health",
    location: "Merritt, BC",
    closing: "Fri May 30, 2025 2:00:00 PM (PDT)",
    sourceName: "Interior Health Bids and Tenders",
    sourceUrl: "https://interiorhealth.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/d20e288c-3c93-4dbf-8350-3987b1617db2",
    summary: "Mechanical engineering services for chiller replacement and HVAC integration at Nicola Valley Hospital & Health Centre.",
    rawText: [
      "Subject: Interior Health RFP 6225006 - MER Chiller Replacement: Mechanical Engineering Services",
      "Buyer: Interior Health",
      "Location: Merritt, BC",
      "Closing Date: Fri May 30, 2025 2:00:00 PM (PDT)",
      "Source: Interior Health Bids and Tenders",
      "Public Source URL: https://interiorhealth.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/d20e288c-3c93-4dbf-8350-3987b1617db2",
      "Description: Chiller replacement at Nicola Valley Hospital & Health Centre includes a new chiller and integration with the existing HVAC system under a design-bid-build delivery model.",
    ].join("\n"),
  },
  {
    id: "burnaby-cpcc-commissioning",
    title: "City of Burnaby RFP #63-03-24 - Independent Commissioning Authority Consulting Services: CPCC",
    buyer: "City of Burnaby",
    location: "Burnaby, BC",
    closing: "Thu Apr 18, 2024 3:00:00 PM (PDT)",
    sourceName: "Burnaby Bids and Tenders",
    sourceUrl: "https://burnaby.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/ad7b82a2-4c07-47ff-8822-9c19af1c6bf9",
    summary: "Commissioning authority consulting services during design, construction, commissioning, and handover for Confederation Park Community Centre.",
    rawText: [
      "Subject: City of Burnaby RFP #63-03-24 - Independent Commissioning Authority Consulting Services: CPCC",
      "Buyer: City of Burnaby",
      "Location: Burnaby, BC",
      "Closing Date: Thu Apr 18, 2024 3:00:00 PM (PDT)",
      "Source: Burnaby Bids and Tenders",
      "Public Source URL: https://burnaby.bidsandtenders.ca/Module/Tenders/en/Tender/Detail/ad7b82a2-4c07-47ff-8822-9c19af1c6bf9",
      "Description: The City of Burnaby invites qualified commissioning firms to provide commissioning authority consulting services during the design, construction, commissioning, and handover phases for Confederation Park Community Centre.",
    ].join("\n"),
  },
];

const bcBidSnapshot = {
  checkedAtLabel: "Mar 27, 2026",
  checkedAtDetail: "Live snapshot checked from the BC Bid public browse page on Mar 27, 2026.",
  newest: [
    {
      id: "226887",
      title: "RFI-2026-03-20-CRE Residential Rental",
      commodity: "Request for Information",
      opportunityType: "Request for Information (BPS)",
      issueDate: "2026-03-20 3:08:07 PM",
      closeDate: "2026-03-30 4:30:00 PM",
      issuingOrganization: "Northern Health Authority",
      location: "Northern BC",
      summary: "Current public-browse example showing a same-day BC Bid posting from Northern Health.",
      sourceUrl: BCBID_BROWSE_URL,
      sourceMode: "latest",
    },
    {
      id: "8557P",
      title: "Property Management Service for Childcare Facilities",
      commodity: "Property management services",
      opportunityType: "Request for Proposal (BPS)",
      issueDate: "2026-03-20 3:00:00 PM",
      closeDate: "2026-04-17 3:00:00 PM",
      issuingOrganization: "City of Richmond",
      location: "Richmond, BC",
      summary: "A fresh owner-side facilities opportunity posted on BC Bid the same day as the live snapshot.",
      sourceUrl: BCBID_BROWSE_URL,
      sourceMode: "latest",
    },
    {
      id: "226712",
      title: "Emergency Equipment Outfitting for Vancouver Fire Rescue Services Battalion Chief Vehicles",
      commodity: "Emergency equipment outfitting",
      opportunityType: "Request for Proposal (BPS)",
      issueDate: "2026-03-20 3:00:00 PM",
      closeDate: "2026-04-20 3:00:00 PM",
      issuingOrganization: "City of Vancouver",
      location: "Vancouver, BC",
      summary: "A current City of Vancouver public posting included here to prove the platform can surface truly new BC Bid activity.",
      sourceUrl: BCBID_BROWSE_URL,
      sourceMode: "latest",
    },
    {
      id: "226886",
      title: "Secure E-Device for E-Service's and Electronic Disclosure",
      commodity: "Notice of Intent",
      opportunityType: "Notice of Intent",
      issueDate: "2026-03-20 2:50:13 PM",
      closeDate: "2026-03-30 3:30:00 PM",
      issuingOrganization: "Ministry of Public Safety and Solicitor General",
      location: "Victoria, BC",
      summary: "A same-day provincial posting that demonstrates freshness even when the opportunity is not an AME fit.",
      sourceUrl: BCBID_BROWSE_URL,
      sourceMode: "latest",
    },
    {
      id: "2026-P010",
      title: "Rose Valley Dam Spillway Options Assessment Phase 2",
      commodity: "Engineering and infrastructure assessment",
      opportunityType: "Request for Proposal (BPS)",
      issueDate: "2026-03-20 2:00:11 PM",
      closeDate: "2026-04-16 2:00:00 PM",
      issuingOrganization: "City of West Kelowna",
      location: "West Kelowna, BC",
      summary: "A live municipal engineering assessment example from the newest BC Bid public list.",
      sourceUrl: BCBID_BROWSE_URL,
      sourceMode: "latest",
    },
    {
      id: "226709",
      title: "PA26007 - Supply of Software-as-a-Service (SaaS) Subscriptions",
      commodity: "Software subscriptions",
      opportunityType: "Request for Quotation (BPS)",
      issueDate: "2026-03-20 2:00:00 PM",
      closeDate: "2026-04-03 2:00:00 PM",
      issuingOrganization: "Capital Regional District",
      location: "Victoria, BC",
      summary: "A current CRD posting that stays in the watch section as a low-fit control example.",
      sourceUrl: BCBID_BROWSE_URL,
      sourceMode: "latest",
    },
  ],
  boiler: [
    {
      id: "224762",
      title: "ITT 24414-M Harry Sayers Elementary Boiler Plant Upgrade",
      commodity: "Boilers",
      opportunityType: "Request for Proposal (BPS)",
      issueDate: "2026-02-06 1:32:37 PM",
      closeDate: "2026-03-25 2:00:00 PM",
      issuingOrganization: "School District 34 Abbotsford",
      location: "Abbotsford, BC",
      summary: "Boiler plant upgrade opportunity surfaced from a live BC Bid keyword search for boiler.",
      sourceUrl: "https://bcbid.gov.bc.ca/page.aspx/en/bpm/process_manage_extranet/226882",
      sourceMode: "keyword",
    },
    {
      id: "226317",
      title: "ITT-2026-003 Glenrosa Middle School Chiller & Boiler Upgrade",
      commodity: "Boiler maintenance service",
      opportunityType: "Invitation to Tender (BPS)",
      issueDate: "2026-03-10 1:32:45 PM",
      closeDate: "2026-03-26 2:00:00 PM",
      issuingOrganization: "School District 23 Central Okanagan",
      location: "West Kelowna, BC",
      summary: "Chiller and boiler upgrade opportunity captured when the watch term boiler is used on BC Bid.",
      sourceUrl: "https://bcbid.gov.bc.ca/page.aspx/en/bpm/process_manage_extranet/226317",
      sourceMode: "keyword",
    },
    {
      id: "225445",
      title: "26 - 02 Boiler Replacement LCS",
      commodity: "Boilers",
      opportunityType: "Negotiated Request for Proposal (BPS)",
      issueDate: "2026-02-20 11:35:00 AM",
      closeDate: "2026-03-25 2:00:00 PM",
      issuingOrganization: "School District 79 Cowichan Valley",
      location: "Cowichan Valley, BC",
      summary: "A live boiler replacement procurement example from the BC Bid public browse search results.",
      sourceUrl: "https://bcbid.gov.bc.ca/page.aspx/en/bpm/process_manage_extranet/225445",
      sourceMode: "keyword",
    },
    {
      id: "225543",
      title: "6213 Sema:th Boiler Upgrade (24403-M)",
      commodity: "Boilers",
      opportunityType: "Request for Quotation (BPS)",
      issueDate: "2026-02-23 2:55:28 PM",
      closeDate: "2026-03-24 2:00:00 PM",
      issuingOrganization: "School District 34 Abbotsford",
      location: "Abbotsford, BC",
      summary: "A second Abbotsford boiler opportunity that proves the keyword watch can surface a cluster of related work.",
      sourceUrl: "https://bcbid.gov.bc.ca/page.aspx/en/bpm/process_manage_extranet/226098",
      sourceMode: "keyword",
    },
    {
      id: "225310",
      title: "E260-00 VGH Willow Boilers Replacement",
      commodity: "Hospital construction service",
      opportunityType: "Invitation to Tender (BPS)",
      issueDate: "2026-02-18 1:09:32 PM",
      closeDate: "2026-03-31 3:00:00 PM",
      issuingOrganization: "Fraser Health Authority / Vancouver Coastal Health Authority",
      location: "Vancouver, BC",
      summary: "Hospital boilers replacement opportunity that shows how a boiler query can surface health-sector work, not only schools.",
      sourceUrl: "https://bcbid.gov.bc.ca/page.aspx/en/bpm/process_manage_extranet/225310",
      sourceMode: "keyword",
    },
  ],
};

const verifiedWorkflows = appData.proofWorkflows.filter((workflow) => workflow.verificationStatus === "verified-public");
const featuredRecords = [...appData.processedRecords]
  .sort((left, right) => {
    if (right.score !== left.score) return right.score - left.score;
    const leftDate = left.effectiveDate || left.publishedAt || "";
    const rightDate = right.effectiveDate || right.publishedAt || "";
    return rightDate.localeCompare(leftDate);
  })
  .slice(0, 4);
function getStoredRecordId(storageKey) {
  try {
    return window.localStorage.getItem(storageKey) || null;
  } catch (error) {
    return null;
  }
}

const storedDigestRecordId = getStoredRecordId(DIGEST_RECORD_STORAGE_KEY);
const storedExecutiveLeadId = getStoredRecordId(EXECUTIVE_LEAD_STORAGE_KEY);

const initialDigestRecord = appData.processedRecords.find((record) => record.id === storedDigestRecordId)
  || appData.processedRecords.find((record) => record.title === appData.briefing.priorityLeads[0]?.title)
  || appData.processedRecords[0]
  || null;

const initialExecutiveRecord = appData.processedRecords.find((record) => record.id === storedExecutiveLeadId)
  || initialDigestRecord
  || null;

const state = {
  source: "all",
  priority: "all",
  query: "",
  activeSection: "feed",
  selectedRecordId: null,
  selectedBcbidOpportunityId: null,
  bcbidAnalyzed: false,
  bcbidRouteTarget: "",
  digestRecordId: initialDigestRecord?.id || null,
  executiveLeadId: initialExecutiveRecord?.id || initialDigestRecord?.id || null,
  signalRouteTarget: "",
  workflowId: verifiedWorkflows[0]?.id || null,
  workflowStage: "raw",
  playTimer: null,
  selectedMerxNoticeId: null,
  merxAnalyzed: false,
  merxRouteTarget: "",
  digestPreviewLead: initialDigestRecord || null,
  executivePreviewLead: initialExecutiveRecord || initialDigestRecord || null,
};

const truthStrip = document.getElementById("truthStrip");
const featuredCards = document.getElementById("featuredCards");
const sourceFilterChips = document.getElementById("sourceFilterChips");
const priorityFilterChips = document.getElementById("priorityFilterChips");
const filterStatus = document.getElementById("filterStatus");
const recordGrid = document.getElementById("recordGrid");
const signalInspector = document.getElementById("signalInspector");
const signalSteps = document.getElementById("signalSteps");
const bcbidOptions = document.getElementById("bcbidOptions");
const bcbidFields = document.getElementById("bcbidFields");
const bcbidResult = document.getElementById("bcbidResult");
const bcbidSteps = document.getElementById("bcbidSteps");
const bcbidStatus = document.getElementById("bcbidStatus");
const artifactPreview = document.getElementById("artifactPreview");
const workflowSelect = document.getElementById("workflowSelect");
const stageButtons = document.getElementById("stageButtons");
const workflowMode = document.getElementById("workflowMode");
const workflowTitle = document.getElementById("workflowTitle");
const workflowSource = document.getElementById("workflowSource");
const workflowBody = document.getElementById("workflowBody");
const workflowMeta = document.getElementById("workflowMeta");
const playWorkflow = document.getElementById("playWorkflow");
const nextWorkflow = document.getElementById("nextWorkflow");
const merxDemoOptions = document.getElementById("merxDemoOptions");
const merxRaw = document.getElementById("merxRaw");
const merxFields = document.getElementById("merxFields");
const merxResult = document.getElementById("merxResult");
const merxSteps = document.getElementById("merxSteps");
const classifyMerx = document.getElementById("classifyMerx");
const clearMerx = document.getElementById("clearMerx");
const briefingTable = document.getElementById("briefingTable");
const searchFilter = document.getElementById("searchFilter");
const heroLastRun = document.getElementById("heroLastRun");
const heroLastChecked = document.getElementById("heroLastChecked");
const heroMerxCount = document.getElementById("heroMerxCount");
const heroPriorityCount = document.getElementById("heroPriorityCount");
const heroEarlyCount = document.getElementById("heroEarlyCount");
const earlySignalGrid = document.getElementById("earlySignalGrid");
const earlyCadenceStrip = document.getElementById("earlyCadenceStrip");
const runHistorySummary = document.getElementById("runHistorySummary");
const runHistoryList = document.getElementById("runHistoryList");
const topCtaBriefing = document.getElementById("topCtaBriefing");
const topCtaDigest = document.getElementById("topCtaDigest");
const feedOpenDigest = document.getElementById("feedOpenDigest");
const workspaceTabs = [...document.querySelectorAll("[data-section-target]")];
const jumpButtons = [...document.querySelectorAll("[data-nav-target]")];
const workspacePanels = [...document.querySelectorAll(".workspace-panel")];

const dateFormatter = new Intl.DateTimeFormat("en-CA", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const parseDateValue = (value) => {
  if (!value) return null;

  if (/^\d{4}-\d{2}-\d{2}$/.test(String(value))) {
    const isoDate = new Date(`${value}T12:00:00`);
    return Number.isNaN(isoDate.getTime()) ? null : isoDate;
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const formatDate = (value) => {
  const parsed = parseDateValue(value);
  if (!parsed) return "Undated";
  return dateFormatter.format(parsed);
};

const esc = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

function formatDisplayLabel(value) {
  return String(value ?? "").replace(/\b([A-Za-z][A-Za-z0-9]*)\b/g, (word) => {
    const mapped = displayWordMap[word.toLowerCase()];
    if (mapped) return mapped;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

function formatDisplayList(values = []) {
  return values.map((value) => formatDisplayLabel(value));
}

function getReferenceDate() {
  return parseDateValue(appData.truthModel?.lastVerifiedAt || appData.generatedOn) || new Date();
}

function getDateAgeInDays(value) {
  const parsed = parseDateValue(value);
  if (!parsed) return null;
  return Math.floor((getReferenceDate().getTime() - parsed.getTime()) / MS_PER_DAY);
}

function getRecordStageKey(record) {
  return String(record.stage || record.stageLabel || "").trim().toLowerCase();
}

function getRecordFirstSeenValue(record) {
  return record.observedAt || record.effectiveDate || record.publishedAt || record.lastVerifiedAt || appData.generatedOn;
}

function isEarlySignalRecord(record) {
  const stageKey = getRecordStageKey(record);
  return record.sourceKey === "municipal-meeting-linked" || ["planning", "funding", "monitoring"].includes(stageKey);
}

function getMonitorProfileForRecord(record) {
  if (record.sourceKey === "municipal-meeting-linked") {
    return sourceMonitorProfiles.find((profile) => profile.key === "municipal-meeting-linked");
  }

  return sourceMonitorProfiles.find((profile) => profile.key === "municipal-public-records");
}

function getEarlySignalReason(record) {
  const stageKey = getRecordStageKey(record);

  if (record.sourceKey === "municipal-meeting-linked") {
    return "Meeting-linked material can reveal owner direction before formal procurement notices surface.";
  }

  if (stageKey === "planning") {
    return "Planning-stage owner updates let AME position before procurement and partner lists harden.";
  }

  if (stageKey === "funding") {
    return "Funding movement is an early indicator that scope is getting closer to delivery and partner conversations should start now.";
  }

  if (stageKey === "monitoring") {
    return "Monitoring-stage owner updates keep AME close enough to move when the next procurement step appears.";
  }

  return "This owner-side signal surfaced before broad procurement visibility and is worth monitoring closely.";
}

function getEarlySignalSortRank(record) {
  const stageKey = getRecordStageKey(record);

  if (record.sourceKey === "municipal-meeting-linked") return 0;
  if (stageKey === "planning") return 1;
  if (stageKey === "funding") return 2;
  if (stageKey === "monitoring") return 3;
  return 4;
}

function getEarlySignalRecords() {
  return appData.processedRecords
    .filter((record) => isEarlySignalRecord(record))
    .sort((left, right) => {
      const rankDelta = getEarlySignalSortRank(left) - getEarlySignalSortRank(right);
      if (rankDelta !== 0) return rankDelta;
      if (right.score !== left.score) return right.score - left.score;

      const leftDate = parseDateValue(getRecordFirstSeenValue(left));
      const rightDate = parseDateValue(getRecordFirstSeenValue(right));
      if (!leftDate && !rightDate) return 0;
      if (!leftDate) return 1;
      if (!rightDate) return -1;
      return rightDate.getTime() - leftDate.getTime();
    });
}

function getRecordTimingSignals(record) {
  const firstSeenValue = getRecordFirstSeenValue(record);
  const firstSeenAge = getDateAgeInDays(firstSeenValue);
  const verifiedValue = record.lastVerifiedAt || appData.truthModel?.lastVerifiedAt || appData.generatedOn;
  const verifiedAge = getDateAgeInDays(verifiedValue);
  const stageKey = getRecordStageKey(record);
  const sourceMeta = getSourceMeta(record.sourceKey);
  const chips = [];
  const notes = [];

  if (firstSeenAge !== null && firstSeenAge <= 7) {
    chips.push({ label: "New", tone: "signal-new" });
  } else if (firstSeenAge !== null && firstSeenAge <= 30) {
    chips.push({ label: "Recent", tone: "signal-recent" });
  }

  if (record.sourceKey === "municipal-meeting-linked" || ["planning", "funding", "monitoring"].includes(stageKey)) {
    chips.push({ label: "Early Signal", tone: "signal-early" });
  }

  if (firstSeenValue) {
    chips.push({ label: `First Seen ${formatDate(firstSeenValue)}`, tone: "signal-date" });
    notes.push(`First surfaced on ${formatDate(firstSeenValue)} through ${sourceMeta.label.toLowerCase()} monitoring.`);
  }

  if (record.sourceKey === "municipal-meeting-linked") {
    notes.push("Meeting-linked material usually appears before broad tender visibility, which helps AME position earlier.");
  } else if (["planning", "funding", "monitoring"].includes(stageKey)) {
    notes.push(`The project is still in ${formatDisplayLabel(stageKey)}. AME can act before procurement locks in the field.`);
  } else if (stageKey === "procurement") {
    notes.push("This owner-side signal is already procurement-facing, so the team can qualify it immediately instead of waiting on inbox noise.");
  } else if (stageKey === "construction") {
    notes.push("The delivery stage still leaves room to map downstream packages, specialists, and partner moves ahead of late-stage pursuit.");
  }

  if (verifiedValue && verifiedAge !== null && verifiedAge <= 2) {
    notes.push(`Verified against the public source on ${formatDate(verifiedValue)}.`);
  }

  const uniqueChips = chips.filter((chip, index, collection) => collection.findIndex((item) => item.label === chip.label) === index);
  const uniqueNotes = notes.filter((note, index, collection) => collection.findIndex((item) => item === note) === index);

  return {
    chips: uniqueChips.slice(0, 3),
    notes: uniqueNotes.slice(0, 3),
    firstSeenLabel: formatDate(firstSeenValue),
    verifiedLabel: formatDate(verifiedValue),
  };
}

function getMerxNoticeState(notice) {
  const closingAge = getDateAgeInDays(notice?.closing);
  const closingLabel = formatDate(notice?.closing);
  const isRecent = closingAge !== null && closingAge <= 180;

  if (closingAge !== null && closingAge < 0) {
    return {
      key: "recent",
      label: "Active notice",
      timeline: `Closes ${closingLabel}`,
      explainer: "This notice is still active in the intake lane.",
      actionLabel: "Select Notice",
    };
  }

  if (isRecent) {
    return {
      key: "recent",
      label: "Recent notice",
      timeline: `Closed ${closingLabel}`,
      explainer: "This recent notice keeps the intake lane grounded in current procurement behavior.",
      actionLabel: "Select Notice",
    };
  }

  return {
    key: "reference",
    label: "Reference notice",
    timeline: `Reference from ${closingLabel}`,
    explainer: "This older notice stays here as a demo example for the intake workflow.",
    actionLabel: "Open Example",
  };
}

function getMerxNoticeBuckets() {
  const sortedNotices = [...realImportNotices].sort((left, right) => {
    const leftDate = parseDateValue(left.closing);
    const rightDate = parseDateValue(right.closing);
    if (!leftDate && !rightDate) return 0;
    if (!leftDate) return 1;
    if (!rightDate) return -1;
    return rightDate.getTime() - leftDate.getTime();
  });

  return sortedNotices.reduce((buckets, notice) => {
    const noticeState = getMerxNoticeState(notice);
    if (noticeState.key === "recent") {
      buckets.recent.push(notice);
    } else {
      buckets.reference.push(notice);
    }
    return buckets;
  }, { recent: [], reference: [] });
}

function getBcbidSourceGroups(query = state.query.trim().toLowerCase()) {
  if (!query) {
    return [
      {
        key: "newest",
        title: "Newest public opportunities",
        copy: `Fresh public-browse examples checked ${bcBidSnapshot.checkedAtLabel}.`,
        records: bcBidSnapshot.newest,
      },
    ];
  }

  const combined = new Map();
  bcBidSnapshot.newest
    .concat(bcBidSnapshot.boiler)
    .filter((record) => matchesBcbidQuery(record, query))
    .forEach((record) => {
      combined.set(record.id, record);
    });

  if (!combined.size) return [];

  return [
    {
      key: "search",
      title: `BC Bid results for "${query}"`,
      copy: "Current BC Bid matches surfaced through the shared dashboard search.",
      records: [...combined.values()],
    },
  ];
}

function matchesBcbidQuery(record, query) {
  if (!query) return true;

  const haystack = [
    record.id,
    record.title,
    record.commodity,
    record.opportunityType,
    record.issuingOrganization,
    record.location,
    record.summary,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function getAllBcbidRecords() {
  const collection = new Map();

  bcBidSnapshot.newest.concat(bcBidSnapshot.boiler).forEach((record) => {
    const existing = collection.get(record.id);
    if (existing) {
      existing.groupKeys = [...new Set([...(existing.groupKeys || []), record.sourceMode || "newest"])];
    } else {
      collection.set(record.id, { ...record, groupKeys: [record.sourceMode || "newest"] });
    }
  });

  return [...collection.values()];
}

function getFilteredBcbidGroups(query = state.query.trim().toLowerCase()) {
  return getBcbidSourceGroups(query)
    .map((group) => ({
      ...group,
      records: group.records.filter((record) => matchesBcbidQuery(record, query)),
    }))
    .filter((group) => group.records.length);
}

function getActiveBcbidRecord() {
  return getAllBcbidRecords().find((record) => record.id === state.selectedBcbidOpportunityId) || null;
}

function getBcbidAnalysisText(record) {
  return [
    record.title,
    record.commodity,
    record.opportunityType,
    record.issuingOrganization,
    record.location,
    record.summary,
  ].join(" | ");
}

function getBcbidDisplaySource(record) {
  return record.sourceMode === "keyword" ? "BC Bid search match" : "BC Bid public-browse snapshot";
}

function inferLocationFromText(text) {
  const normalized = text.toLowerCase();
  const match = knownLocations.find(([token]) => normalized.includes(token));
  return match ? match[1] : "Not detected";
}

function pulseMerxResult() {
  merxResult.classList.remove("is-updated");
  window.requestAnimationFrame(() => {
    merxResult.classList.add("is-updated");
    window.setTimeout(() => {
      merxResult.classList.remove("is-updated");
    }, 1400);
  });
}

function persistStorageValue(key, value) {
  try {
    if (value === null || value === undefined || value === "") {
      window.localStorage.removeItem(key);
      return;
    }

    if (typeof value === "string") {
      window.localStorage.setItem(key, value);
      return;
    }

    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Ignore storage failures in file:// mode and keep the demo moving.
  }
}

function persistDigestRecord(recordId) {
  persistStorageValue(DIGEST_RECORD_STORAGE_KEY, recordId);
}

function persistExecutiveLead(recordId) {
  persistStorageValue(EXECUTIVE_LEAD_STORAGE_KEY, recordId);
}

function persistTransientLead(lead) {
  persistStorageValue(TRANSIENT_LEAD_STORAGE_KEY, lead || null);
}

function getStoredTransientLead() {
  try {
    const raw = window.localStorage.getItem(TRANSIENT_LEAD_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && parsed.id ? parsed : null;
  } catch (error) {
    return null;
  }
}

function getKnownLead(recordId, explicitLead = null) {
  if (explicitLead?.id === recordId) return explicitLead;

  const transientLead = getStoredTransientLead();
  if (transientLead?.id === recordId) return transientLead;

  return appData.processedRecords.find((record) => record.id === recordId) || null;
}

function buildRouteUrl(baseUrl, recordId, leadPayload = null) {
  const params = new URLSearchParams();
  if (recordId) params.set("lead", recordId);
  if (leadPayload && leadPayload.id) {
    params.set("payload", JSON.stringify(leadPayload));
  }
  const query = params.toString();
  if (!query) return baseUrl;
  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}${query}`;
}

function openMorningDigestPage(recordId = state.digestRecordId, leadPayload = null) {
  if (recordId) persistDigestRecord(recordId);
  if (leadPayload?.id) persistTransientLead(leadPayload);
  const digestUrl = buildRouteUrl(MORNING_DIGEST_URL, recordId, leadPayload);
  if (typeof window.AMEGuidedOpenPagePreview === "function") {
    const handled = window.AMEGuidedOpenPagePreview(digestUrl, "Morning Digest");
    if (handled) return;
  }
  window.open(digestUrl, "_blank", "noopener,noreferrer");
}

function openLeadershipBriefPage(recordId = state.digestRecordId, leadPayload = null) {
  if (recordId) persistExecutiveLead(recordId);
  if (leadPayload?.id) persistTransientLead(leadPayload);
  const briefingUrl = buildRouteUrl(LEADERSHIP_BRIEF_URL, recordId, leadPayload);
  if (typeof window.AMEGuidedOpenPagePreview === "function") {
    const handled = window.AMEGuidedOpenPagePreview(briefingUrl, "Leadership Brief");
    if (handled) return;
  }
  window.open(briefingUrl, "_blank", "noopener,noreferrer");
}

function flashPanel(element) {
  if (!element) return;
  element.classList.remove("is-updated");
  window.requestAnimationFrame(() => {
    element.classList.add("is-updated");
    window.setTimeout(() => {
      element.classList.remove("is-updated");
    }, 1200);
  });
}

function spotlightRecord(recordId) {
  const card = recordGrid.querySelector(`[data-record-card="${recordId}"]`);
  if (!card) return;
  card.classList.remove("is-highlighted");
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  window.requestAnimationFrame(() => {
    card.classList.add("is-highlighted");
    window.setTimeout(() => {
      card.classList.remove("is-highlighted");
    }, 1800);
  });
}

function updateSectionState(section) {
  state.activeSection = section;

  workspaceTabs.forEach((button) => {
    button.classList.toggle("is-active", button.getAttribute("data-section-target") === section);
  });

  workspacePanels.forEach((panel) => {
    const isTarget = panel.getAttribute("data-section") === section;
    panel.classList.toggle("is-current", isTarget);
    panel.classList.toggle("is-active", isTarget);
  });
}

function getScoreDrivers(record) {
  const drivers = [];
  const hits = formatDisplayList((record.keywordHits || []).slice(0, 3));
  const serviceLines = (record.ameServiceLines || []).slice(0, 3);
  const sourceMeta = getSourceMeta(record.sourceKey);

  if (hits.length) drivers.push(`Keyword fit: ${hits.join(", ")}`);
  if (record.stageLabel) drivers.push(`Timing signal: ${formatDisplayLabel(record.stageLabel)}`);
  if (serviceLines.length) drivers.push(`Service line fit: ${serviceLines.join(", ")}`);
  drivers.push(`Source confidence: ${sourceMeta.label}`);

  return drivers;
}

function getSignalRouteStepState() {
  if (!state.selectedRecordId) {
    return {
      detail: "Ready after inspection",
      status: "",
    };
  }

  if (state.signalRouteTarget === "leadership") {
    return {
      detail: "Leadership brief routed",
      status: "is-complete",
    };
  }

  if (state.signalRouteTarget === "digest" && state.digestRecordId === state.selectedRecordId) {
    return {
      detail: "Morning digest updated",
      status: "is-complete",
    };
  }

  return {
    detail: "Choose Morning Digest or Leadership Brief",
    status: "is-active",
  };
}

function renderSignalSteps() {
  if (!signalSteps) return;

  const routeStep = getSignalRouteStepState();

  const steps = [
    {
      label: "Select Project Signal",
      detail: state.selectedRecordId ? "Signal chosen" : "Choose one record",
      status: state.selectedRecordId ? "is-complete" : "is-active",
    },
    {
      label: "Inspect Evidence",
      detail: state.selectedRecordId ? "Inspector populated" : "Waiting for selection",
      status: state.selectedRecordId ? "is-complete" : "",
    },
    {
      label: "Route To Morning Digest / Leadership Brief",
      detail: routeStep.detail,
      status: routeStep.status,
    },
  ];

  signalSteps.innerHTML = steps.map((step, index) => `
    <article class="flow-pill-card ${step.status}">
      <span class="flow-pill-number">${index + 1}</span>
      <div class="flow-pill-copy">
        <strong>${esc(step.label)}</strong>
        <span>${esc(step.detail)}</span>
      </div>
    </article>
  `).join("");
}

function renderSignalInspector() {
  if (!signalInspector) return;

  const record = appData.processedRecords.find((item) => item.id === state.selectedRecordId) || null;

  if (!record) {
    signalInspector.innerHTML = `
      <article class="inspector-card inspector-empty">
        <p class="section-tag">Signal Workflow</p>
        <h4>Select one signal to inspect</h4>
        <p class="empty-copy">Each click should do something obvious: it pins the verified source here, explains why the lead scored the way it did, and unlocks the morning-digest action.</p>
        <div class="detail-list-wrap">
          <ol class="detail-list numbered-list">
            <li>Pick one record from the board.</li>
            <li>Review source evidence and AME fit.</li>
            <li>Send the chosen lead into the morning digest.</li>
          </ol>
        </div>
      </article>
    `;
    return;
  }

  const sourceMeta = getSourceMeta(record.sourceKey);
  const evidenceItems = (record.evidence || [])
    .slice(0, 3)
    .map((item) => `<li>${esc(item)}</li>`)
    .join("");
  const keywordHits = formatDisplayList((record.keywordHits || []).slice(0, 4));
  const drivers = getScoreDrivers(record);
  const timingSignals = getRecordTimingSignals(record);
  const verifiedDate = timingSignals.verifiedLabel;

  signalInspector.innerHTML = `
    <article class="inspector-card">
      <div class="inspector-head">
        <div class="inspector-hero">
          <p class="section-tag inspector-kicker">Selected Signal</p>
          <h4 class="inspector-title">${esc(record.title)}</h4>
          <p class="record-meta inspector-meta">${esc(record.entity)} - ${esc(record.location)}</p>
        </div>
        <div class="chip-row inspector-head-chips">
          <span class="source-badge">${esc(sourceMeta.label)}</span>
          <span class="pill priority-${esc(record.priorityKey)}">${esc(record.priorityLabel)}</span>
          <span class="pill">Score ${esc(record.score)}</span>
        </div>
      </div>
      <div class="chip-row inspector-timing-row">
        ${timingSignals.chips.map((chip) => `<span class="pill ${esc(chip.tone)}">${esc(chip.label)}</span>`).join("")}
      </div>
      <div class="inspector-grid">
        <section class="detail-block">
          <p class="detail-label">Verified Source</p>
          <p>${esc(record.sourceExcerpt || record.summary)}</p>
          <div class="chip-row">
            <span class="pill">${esc(formatDisplayLabel(record.stageLabel))}</span>
            <span class="pill">${esc(formatDisplayLabel(record.assetType))}</span>
            <span class="pill">Checked ${esc(verifiedDate)}</span>
          </div>
        </section>
        <section class="detail-block">
          <p class="detail-label">Why It Scored</p>
          <ul class="detail-list">${drivers.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </section>
      </div>
      <div class="inspector-grid">
        <section class="detail-block">
          <p class="detail-label">Why AME Sees This Early</p>
          <ul class="detail-list">${timingSignals.notes.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </section>
        <section class="detail-block">
          <p class="detail-label">AME Fit</p>
          <p>${esc(record.whyItMatters || "Verified project signal for AME review.")}</p>
          <div class="chip-row">
            ${keywordHits.map((hit) => `<span class="pill">${esc(hit)}</span>`).join("")}
          </div>
        </section>
      </div>
      <section class="detail-block detail-block-wide">
        <p class="detail-label">Next Move</p>
        <p>${esc(record.action || "Open the source and decide whether it belongs in the morning digest.")}</p>
      </section>
      <details class="record-evidence" open>
        <summary>Source evidence</summary>
        <ul class="detail-list">${evidenceItems}</ul>
      </details>
      <div class="record-inline-actions">
        <a class="record-inline-link action-blue" href="${esc(record.sourceUrl)}" target="_blank" rel="noreferrer" data-source-proof-inspector="${esc(record.id)}">Open Official Source</a>
        <button class="record-inline-link action-grey" type="button" data-open-digest="${esc(record.id)}">Send To Morning Digest</button>
        <button class="record-inline-link action-green" type="button" data-open-brief="${esc(record.id)}">Route To Leadership Brief</button>
      </div>
    </article>
  `;

  signalInspector.querySelectorAll("[data-open-digest]").forEach((button) => {
    button.addEventListener("click", () => {
      selectDigestRecord(button.getAttribute("data-open-digest"), true);
    });
  });

  signalInspector.querySelectorAll("[data-open-brief]").forEach((button) => {
    button.addEventListener("click", () => {
      routeSelectedSignalToLeadership(button.getAttribute("data-open-brief"), true);
    });
  });
}

function renderActionRoutingPreview() {
  syncDashboardLinks();
}

function syncDashboardLinks() {
  const digestLead = getKnownLead(state.digestRecordId, state.digestPreviewLead);
  const executiveLead = getKnownLead(state.executiveLeadId, state.executivePreviewLead);
  const digestHref = buildRouteUrl(MORNING_DIGEST_URL, state.digestRecordId, digestLead);
  const briefingHref = buildRouteUrl(LEADERSHIP_BRIEF_URL, state.executiveLeadId, executiveLead);

  [topCtaDigest, feedOpenDigest].filter(Boolean).forEach((link) => {
    link.href = digestHref;
  });

  [topCtaBriefing].filter(Boolean).forEach((link) => {
    link.href = briefingHref;
  });
}

function renderMerxSteps() {
  if (!merxSteps) return;

  const hasNotice = Boolean(state.selectedMerxNoticeId);
  const hasRoute = Boolean(state.merxRouteTarget);
  const steps = [
    {
      label: "Select Notice",
      detail: hasNotice ? "Notice loaded" : "Choose a real public notice",
      status: hasNotice ? "is-complete" : "is-active",
    },
    {
      label: "Review Fields",
      detail: hasNotice ? "Fields extracted" : "Waiting for notice",
      status: hasNotice ? "is-complete" : "",
    },
    {
      label: "Generate Recommendation",
      detail: state.merxAnalyzed ? "AME recommendation built" : (hasNotice ? "Click Generate Recommendation" : "Waiting for notice"),
      status: state.merxAnalyzed ? "is-complete" : (hasNotice ? "is-active" : ""),
    },
    {
      label: "Route To Morning Digest / Leadership Brief",
      detail: !state.merxAnalyzed
        ? "Ready after recommendation"
        : (state.merxRouteTarget === "leadership"
          ? "Leadership brief routed"
          : (state.merxRouteTarget === "digest"
            ? "Morning digest updated"
            : "Choose Morning Digest or Leadership Brief")),
      status: hasRoute ? "is-complete" : (state.merxAnalyzed ? "is-active" : ""),
    },
  ];

  merxSteps.innerHTML = steps.map((step, index) => `
    <article class="flow-pill-card ${step.status}">
      <span class="flow-pill-number">${index + 1}</span>
      <div class="flow-pill-copy">
        <strong>${esc(step.label)}</strong>
        <span>${esc(step.detail)}</span>
      </div>
    </article>
  `).join("");
}

function initSectionObserver() {
  let ticking = false;

  const syncActiveSection = () => {
    ticking = false;

    if (!workspacePanels.length) return;

    const header = document.querySelector(".shell-topbar");
    const marker = (header?.getBoundingClientRect().bottom || 120) + 18;

    let currentPanel = null;
    let fallbackPanel = null;
    let fallbackDistance = Number.POSITIVE_INFINITY;

    workspacePanels.forEach((panel) => {
      const rect = panel.getBoundingClientRect();

      if (rect.top <= marker && rect.bottom > marker) {
        if (!currentPanel || rect.top > currentPanel.getBoundingClientRect().top) {
          currentPanel = panel;
        }
      }

      const distance = Math.abs(rect.top - marker);
      if (distance < fallbackDistance) {
        fallbackDistance = distance;
        fallbackPanel = panel;
      }
    });

    const activePanel = currentPanel || fallbackPanel;
    if (activePanel) {
      updateSectionState(activePanel.getAttribute("data-section"));
    }
  };

  const requestSync = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(syncActiveSection);
  };

  window.addEventListener("scroll", requestSync, { passive: true });
  window.addEventListener("resize", requestSync);
  requestSync();
}

function getActiveMerxNotice() {
  return realImportNotices.find((notice) => notice.id === state.selectedMerxNoticeId) || null;
}

function renderMerxToolbarState() {
  const hasSelection = Boolean(state.selectedMerxNoticeId);
  classifyMerx.disabled = !hasSelection;
  clearMerx.disabled = !hasSelection && !state.merxAnalyzed;
}

function getActiveMerxText() {
  return getActiveMerxNotice()?.rawText || "";
}

function getRecommendedOfficeName(location) {
  const normalized = String(location || "").toLowerCase();
  if (/(victoria|saanich)/.test(normalized)) return "Victoria Office";
  if (/(kelowna|merritt|kamloops|interior)/.test(normalized)) return "Kelowna Satellite Office";
  if (/(nanaimo|courtenay|comox|island)/.test(normalized)) return "Nanaimo Satellite Office";
  return "Vancouver Office";
}

function getMerxAssetType(analysis) {
  const hits = analysis?.hits || [];

  if (hits.some((item) => /(aquatic|pool)/.test(item))) return "Pool / Aquatic Centre";
  if (hits.includes("community centre")) return "Community Centre";
  if (hits.some((item) => /(mechanical|ahu|boiler|chiller|hvac|cooling coil|heat recovery|heat exchanger|commissioning)/.test(item))) {
    return "Mechanical Systems";
  }

  return "Procurement Notice";
}

function buildMerxWhyItMatters(analysis, displayHits) {
  const hitText = displayHits.length ? displayHits.join(", ") : "the imported scope";

  if (analysis.priorityKey === "priority") {
    return `This real public procurement notice is already in market and gives AME a fast qualification signal around ${hitText}.`;
  }

  if (analysis.priorityKey === "watch") {
    return `This imported notice may fit AME through ${hitText}, but the team should validate scope and delivery path before briefing leadership.`;
  }

  return `This imported notice is better treated as context unless the watch profile changes, even though it still provides a live read on ${hitText}.`;
}

function buildMerxTransientLead() {
  const notice = getActiveMerxNotice();
  const rawText = getActiveMerxText();

  if (!notice || !rawText) return null;

  const parsed = parseMerxInput(rawText);
  const analysis = analyzeText(rawText, "procurement", "merx_import");
  const noticeState = getMerxNoticeState(notice);
  const displayHits = formatDisplayList(analysis.hits);
  const summary = notice.summary || `${parsed.subject} routed from the intake lane.`;

  return {
    id: `merx-${notice.id}`,
    title: parsed.subject,
    entity: parsed.buyer,
    location: parsed.location,
    priorityKey: analysis.priorityKey,
    priorityLabel: analysis.priorityLabel,
    score: analysis.score,
    stageLabel: "procurement",
    assetType: getMerxAssetType(analysis),
    summary,
    sourceExcerpt: summary,
    whyItMatters: buildMerxWhyItMatters(analysis, displayHits),
    action: analysis.action,
    goToMarketPlay: "Use intake speed to confirm fit, identify the right office, and align preferred partners before the field crowds in.",
    estimatedScope: summary,
    classification: analysis.classification,
    sourceKey: "merx-import",
    sourceUrl: parsed.sourceUrl || notice.sourceUrl,
    keywordHits: analysis.hits,
    ameServiceLines: analysis.serviceLines,
    evidence: [
      `Imported from ${parsed.sourceName || notice.sourceName || "a public procurement notice"} through the AME intake lane.`,
      `Buyer: ${parsed.buyer} | Location: ${parsed.location}.`,
      `Closing: ${parsed.closing}.`,
    ],
    sourceLabel: "Imported Notice",
    recommendedOffice: getRecommendedOfficeName(parsed.location),
    noticeState: noticeState.label,
  };
}

function buildBcbidTransientLead() {
  const record = getActiveBcbidRecord();
  if (!record) return null;

  const analysis = analyzeText(getBcbidAnalysisText(record), "procurement", "merx_import");
  const displayHits = formatDisplayList(analysis.hits);

  return {
    id: `bcbid-${record.id}`,
    title: record.title,
    entity: record.issuingOrganization,
    location: record.location,
    priorityKey: analysis.priorityKey,
    priorityLabel: analysis.priorityLabel,
    score: analysis.score,
    stageLabel: "procurement",
    assetType: displayHits.some((item) => /(Boiler|Chiller|Mechanical|HVAC|Cooling Coil)/.test(item))
      ? "Mechanical Systems"
      : "Public Procurement Notice",
    summary: record.summary,
    sourceExcerpt: record.summary,
    whyItMatters: record.sourceMode === "keyword"
    ? `Current BC Bid search result surfaced from the public browse flow and ready for AME qualification.`
      : `Live BC Bid newest-opportunity snapshot showing the platform can surface current public opportunities, not only older saved examples.`,
    action: analysis.action,
    goToMarketPlay: "Use the live public signal to qualify fit quickly, then decide whether it belongs in AME's daily triage or leadership routing.",
    estimatedScope: record.summary,
    classification: analysis.classification,
    sourceKey: "bcbid-watch",
    sourceUrl: record.sourceUrl,
    keywordHits: analysis.hits,
    ameServiceLines: analysis.serviceLines,
    evidence: [
      `${getBcbidDisplaySource(record)} checked on ${bcBidSnapshot.checkedAtLabel}.`,
      `Organization: ${record.issuingOrganization} | Location: ${record.location}.`,
      `Issue: ${record.issueDate} | Close: ${record.closeDate}.`,
    ],
    sourceLabel: "BC Bid Watch",
    recommendedOffice: getRecommendedOfficeName(record.location),
  noticeState: record.sourceMode === "keyword" ? "Search result" : "Newest BC Bid example",
  };
}

function routeMerxLead(destination = "digest") {
  const transientLead = buildMerxTransientLead();
  if (!transientLead) return;

  if (destination === "leadership") {
    state.executiveLeadId = transientLead.id;
    state.executivePreviewLead = transientLead;
  } else {
    state.digestRecordId = transientLead.id;
    state.digestPreviewLead = transientLead;
  }
  state.merxRouteTarget = destination;
  persistTransientLead(transientLead);
  if (destination === "leadership") {
    persistExecutiveLead(transientLead.id);
  } else {
    persistDigestRecord(transientLead.id);
  }
  renderSignalSteps();
  renderMerxSteps();
  renderMerxResult();
  renderActionRoutingPreview();
  renderArtifact();

  if (destination === "leadership") {
    openLeadershipBriefPage(transientLead.id, transientLead);
    return;
  }

  openMorningDigestPage(transientLead.id, transientLead);
}

function routeBcbidLead(destination = "digest") {
  const transientLead = buildBcbidTransientLead();
  if (!transientLead) return;

  if (destination === "leadership") {
    state.executiveLeadId = transientLead.id;
    state.executivePreviewLead = transientLead;
  } else {
    state.digestRecordId = transientLead.id;
    state.digestPreviewLead = transientLead;
  }
  state.bcbidRouteTarget = destination;
  persistTransientLead(transientLead);
  if (destination === "leadership") {
    persistExecutiveLead(transientLead.id);
  } else {
    persistDigestRecord(transientLead.id);
  }
  renderBcbidSteps();
  renderBcbidResult();
  renderActionRoutingPreview();

  if (destination === "leadership") {
    openLeadershipBriefPage(transientLead.id, transientLead);
    return;
  }

  openMorningDigestPage(transientLead.id, transientLead);
}

function getPriorityBadge(score) {
  if (score >= 80) return { key: "priority", label: "Priority" };
  if (score >= 50) return { key: "watch", label: "Watch" };
  if (score >= 25) return { key: "peripheral", label: "Peripheral" };
  return { key: "filtered", label: "Filtered out" };
}

function deriveServiceLines(text) {
  const normalized = text.toLowerCase();
  const lines = new Set();

  if (/(mechanical|hvac|plumbing|pool|aquatic|natatorium|dehumidification)/.test(normalized)) {
    lines.add("Mechanical Design");
  }
  if (/(fire suppression|sprinkler|life safety)/.test(normalized)) lines.add("Fire Suppression Design");
  if (/(energy|sustainability|decarbonization|heat recovery|heat exchanger)/.test(normalized)) {
    lines.add("Energy + Sustainability");
  }
  if (/(commissioning|controls|bas|integration)/.test(normalized)) lines.add("Commissioning");
  if (!lines.size && normalized.includes("aquatic")) lines.add("Mechanical Design");

  return [...lines];
}

function getClassification(stage, hits) {
  const joined = hits.join(" ");

  if (/(aquatic centre|crystal pool|vancouver aquatic centre|pool)/.test(joined)) {
    if (stage === "procurement") return "Aquatic procurement lead";
    if (stage === "construction") return "Aquatic construction lead";
    return "Aquatic capital signal";
  }

  if (/(boiler|chiller|hvac|mechanical|ahu|commissioning|cooling coil|heat recovery|heat exchanger|bas)/.test(joined)) {
    return "Mechanical systems lead";
  }

  if (/(community centre|construction)/.test(joined)) return "Community infrastructure signal";
  return "Low-fit public signal";
}

function getAction(category, classification, priorityKey) {
  if (category === "merx_import") {
    if (priorityKey === "priority") return "Prioritize for AME review and validate the buyer, consultant, and delivery path through the approved intake lane.";
    if (priorityKey === "watch") return "Keep in the import queue and validate scope, timing, and delivery path before briefing.";
    return "Do not brief unless the watch profile changes.";
  }

  if (classification === "Aquatic procurement lead") return "Track owner, architect, and procurement movement while the project is still shapeable.";
  if (classification === "Aquatic construction lead") return "Map downstream scopes, specialists, and likely partner teams.";
  if (classification === "Aquatic capital signal") return "Monitor for the next design, management, or enabling-works step.";
  if (classification === "Mechanical systems lead") return "Validate fit with AME's mechanical, sustainability, and commissioning services, then map the likely decision makers.";
  return "Hold as background context and validate against relationship strategy.";
}

function analyzeText(text, stage = "procurement", category = "municipal_public_page") {
  const normalized = text.toLowerCase();
  const hits = [];
  let score = 0;

  keywordRules.forEach(([term, weight]) => {
    if (normalized.includes(term)) {
      score += weight;
      hits.push(term);
    }
  });

  const hasCoreSignal = ["pool", "aquatic", "aquatic centre", "community centre"].some((term) => hits.includes(term));

  negativeRules.forEach(([term, weight]) => {
    if (normalized.includes(term) && !hasCoreSignal) score += weight;
  });

  score += stageWeights[stage] || 0;
  if (category === "municipal_meeting") score += 12;
  if (category === "municipal_public_page") score += 10;
  if (category === "merx_import") score += 2;

  score = Math.max(0, Math.min(100, score));
  const priority = getPriorityBadge(score);
  const classification = getClassification(stage, hits);

  return {
    score,
    priorityKey: priority.key,
    priorityLabel: priority.label,
    hits: [...new Set(hits)],
    classification,
    serviceLines: deriveServiceLines(normalized),
    action: getAction(category, classification, priority.key),
  };
}

function getSourceMeta(sourceKey) {
  if (sourceKey === "bcbid-watch") {
    return {
      label: "BC Bid Watch",
      cardClass: "source-public",
    };
  }

  if (sourceKey === "merx-import") {
    return {
      label: "Imported Notice",
      cardClass: "source-import",
    };
  }

  if (sourceKey === "municipal-meeting-linked") {
    return {
      label: "Meeting-Linked Doc",
      cardClass: "source-meeting",
    };
  }

  return {
    label: "Public Page",
    cardClass: "source-public",
  };
}

function formatSourceFilterLabel(key) {
  return sourceOptions.find((option) => option.key === key)?.label || "All signals";
}

function formatPriorityFilterLabel(key) {
  return priorityOptions.find((option) => option.key === key)?.label || "All";
}

function matchesPriority(record, priorityKey) {
  if (priorityKey === "all") return true;
  const order = { filtered: 0, peripheral: 1, watch: 2, priority: 3 };
  return order[record.priorityKey] >= (order[priorityKey] || 0);
}

function matchesQuery(record, query) {
  const haystack = [
    record.title,
    record.entity,
    record.location,
    record.stageLabel,
    record.summary,
    record.assetType,
    record.classification,
    record.sourceExcerpt,
    (record.ameServiceLines || []).join(" "),
    (record.keywordHits || []).join(" "),
    (record.tags || []).join(" "),
  ].join(" ").toLowerCase();

  return !query || haystack.includes(query);
}

function applyQuickFilter({ source = state.source, priority = state.priority, query = state.query } = {}) {
  state.source = source;
  state.priority = priority;
  state.query = query;
  searchFilter.value = query;
  rerenderFeed();
}

function filterRecords({
  source = state.source,
  priority = state.priority,
  query = state.query.trim().toLowerCase(),
} = {}) {
  return appData.processedRecords.filter((record) => {
    const sourceMatch = source === "all" || record.sourceKey === source;
    const priorityMatch = matchesPriority(record, priority);
    const queryMatch = matchesQuery(record, query);
    return sourceMatch && priorityMatch && queryMatch;
  });
}

function renderTruthStrip() {
  const merxBuckets = getMerxNoticeBuckets();
  const meetingLinkedCount = appData.processedRecords.filter((record) => record.sourceKey === "municipal-meeting-linked").length;
  const earlySignalCount = getEarlySignalRecords().length;
  const items = [
    ["Signals tracked", appData.processedRecords.length, "Municipal records currently loaded into the board."],
    ["BC Bid watch", getAllBcbidRecords().length, "Current BC Bid public opportunities scored for AME relevance."],
    ["Early signals", earlySignalCount, "Owner-side signals that surface before broad procurement visibility."],
    ["Priority leads", appData.briefing.totals.priorityCount, "High-fit opportunities scored for AME."],
    ["Meeting-linked docs", meetingLinkedCount, "Council-linked records surfaced before broad market visibility."],
    ["Recent notices", merxBuckets.recent.length, "Recent public procurement notices ready to run through the intake lane."],
  ];

  truthStrip.innerHTML = items.map(([label, value, note]) => `
    <article class="truth-card">
      <p class="metric-label">${esc(label)}</p>
      <strong class="metric-value">${esc(value)}</strong>
      <p class="metric-note">${esc(note)}</p>
    </article>
  `).join("");
}

function renderShellSnapshot() {
  const merxBuckets = getMerxNoticeBuckets();
  const lastCheckedValue = formatDate(appData.truthModel.lastVerifiedAt || appData.generatedOn);
  const priorityCount = appData.briefing.totals.priorityCount;
  const earlySignalCount = getEarlySignalRecords().length;
  const latestRunLabel = appData.runLog?.latestRun?.label || "Not yet rebuilt";

  if (heroLastRun) heroLastRun.textContent = latestRunLabel;
  if (heroLastChecked) heroLastChecked.textContent = lastCheckedValue;
  if (heroMerxCount) heroMerxCount.textContent = `${merxBuckets.recent.length} MERX / ${bcBidSnapshot.newest.length} BC Bid`;
  if (heroPriorityCount) heroPriorityCount.textContent = `${priorityCount} Priority Leads`;
  if (heroEarlyCount) heroEarlyCount.textContent = `${earlySignalCount} Early Signals`;
}

function renderRunHistory() {
  if (!runHistorySummary || !runHistoryList) return;

  const latestRun = appData.runLog?.latestRun;
  const history = appData.runLog?.history || [];

  if (!latestRun) {
    runHistorySummary.innerHTML = `
      <article class="run-history-card">
        <p class="section-tag">Run status</p>
        <h4>No local run history yet</h4>
        <p class="empty-copy">Run <code>run-demo.ps1</code> to stamp the dashboard with a local execution time and refreshed outputs.</p>
      </article>
    `;
    runHistoryList.innerHTML = "";
    return;
  }

  runHistorySummary.innerHTML = `
    <article class="run-history-card run-history-card-primary">
      <p class="section-tag">Latest local automation run</p>
      <h4>${esc(latestRun.label)}</h4>
      <p class="empty-copy">${esc(latestRun.detail || "Local demo rebuild completed.")}</p>
      <div class="run-history-kpis">
        <div class="run-kpi">
          <span class="detail-label">Signals loaded</span>
          <strong>${esc(latestRun.signalsLoaded || appData.processedRecords.length)}</strong>
        </div>
        <div class="run-kpi">
          <span class="detail-label">Priority leads</span>
          <strong>${esc(latestRun.priorityLeads || appData.briefing.totals.priorityCount)}</strong>
        </div>
        <div class="run-kpi">
          <span class="detail-label">Early signals</span>
          <strong>${esc(latestRun.earlySignals || 0)}</strong>
        </div>
        <div class="run-kpi">
          <span class="detail-label">Meeting-linked</span>
          <strong>${esc(latestRun.meetingLinked || 0)}</strong>
        </div>
      </div>
      <div class="chip-row">
        <span class="pill signal-verified">${esc(latestRun.status || "Completed")}</span>
        <span class="pill">${esc(latestRun.mode || "Local demo rebuild")}</span>
        <span class="pill">Verified data date ${esc(formatDate(latestRun.verifiedDate || appData.truthModel?.lastVerifiedAt))}</span>
      </div>
    </article>
  `;

  runHistoryList.innerHTML = history.map((run, index) => `
    <article class="run-history-item ${index === 0 ? "is-latest" : ""}">
      <div class="run-history-item-head">
        <div>
          <p class="detail-label">${index === 0 ? "Current run" : "Previous run"}</p>
          <h4>${esc(run.label)}</h4>
        </div>
        <span class="pill ${index === 0 ? "signal-verified" : "signal-date"}">${esc(run.status || "Completed")}</span>
      </div>
      <p class="run-history-copy">${esc(run.detail || "Local demo rebuild completed.")}</p>
      <div class="chip-row">
        <span class="pill">Signals ${esc(run.signalsLoaded || 0)}</span>
        <span class="pill">Priority ${esc(run.priorityLeads || 0)}</span>
        <span class="pill">Early ${esc(run.earlySignals || 0)}</span>
      </div>
      <ul class="run-history-output-list">
        ${((run.outputsRefreshed || []).slice(0, 3)).map((item) => `<li>${esc(item.label)}: ${esc(item.path)}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function setActiveSection(section, shouldScroll = true) {
  updateSectionState(section);

  if (section === "briefing" && briefingTable && artifactPreview) {
    renderBriefingTable();
    renderArtifact();
  }

  if (shouldScroll) {
    const panel = document.querySelector(`[data-section="${section}"]`);
    const header = document.querySelector(".shell-topbar");
    const headerOffset = (header?.getBoundingClientRect().height || 112) + 26;
    if (panel) {
      const targetTop = panel.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
    }
  }
}

function selectDigestRecord(recordId, shouldScroll = false) {
  state.selectedRecordId = recordId;
  state.digestRecordId = recordId;
  state.digestPreviewLead = getKnownLead(recordId);
  state.signalRouteTarget = "digest";
  persistDigestRecord(recordId);
  renderSignalSteps();
  renderRecordGrid();
  renderSignalInspector();
  renderEarlySignalRadar();
  renderActionRoutingPreview();
  if (briefingTable && artifactPreview) {
    setActiveSection("briefing", shouldScroll);
    renderBriefingTable();
    renderArtifact();
  } else if (shouldScroll) {
    openMorningDigestPage(recordId);
  }
}

function routeSelectedSignalToLeadership(recordId, shouldOpen = true) {
  state.selectedRecordId = recordId;
  state.executiveLeadId = recordId;
  state.executivePreviewLead = getKnownLead(recordId);
  state.signalRouteTarget = "leadership";
  persistExecutiveLead(recordId);
  renderSignalSteps();
  renderRecordGrid();
  renderSignalInspector();
  renderEarlySignalRadar();
  renderActionRoutingPreview();
  renderBriefingTable();
  renderArtifact();
  if (shouldOpen) {
    openLeadershipBriefPage(recordId);
  }
}

function selectRecord(recordId, options = {}) {
  const { shouldScroll = false, focusInspector = false } = options;
  state.selectedRecordId = recordId;
  state.signalRouteTarget = recordId === state.digestRecordId ? "digest" : "";
  setActiveSection("feed", shouldScroll);
  renderSignalSteps();
  renderRecordGrid();
  renderSignalInspector();
  renderEarlySignalRadar();
  renderBriefingTable();
  renderArtifact();
  if (shouldScroll && state.selectedRecordId && !focusInspector) {
    spotlightRecord(state.selectedRecordId);
  }
  if (focusInspector && signalInspector) {
    signalInspector.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  flashPanel(signalInspector);
}

function renderFeaturedCards() {
  if (!featuredCards) return;

  const query = state.query.trim().toLowerCase();
  const hasScopedFilter = query || state.source !== "all" || state.priority !== "all";
  const scopedRecords = hasScopedFilter
    ? filterRecords({ source: state.source, priority: state.priority, query })
      .sort((left, right) => {
        if (right.score !== left.score) return right.score - left.score;
        const leftDate = left.effectiveDate || left.publishedAt || "";
        const rightDate = right.effectiveDate || right.publishedAt || "";
        return rightDate.localeCompare(leftDate);
      })
      .slice(0, 4)
    : featuredRecords;

  if (!scopedRecords.length) {
    featuredCards.innerHTML = `
      <article class="featured-card featured-empty">
        <p class="section-tag">No matching signals</p>
        <h4>Nothing matches the current search or filters.</h4>
        <p class="featured-meta">Try another city, project name, or keyword like Pool, Aquatic, or Construction.</p>
      </article>
    `;
    return;
  }

  featuredCards.innerHTML = scopedRecords.map((record) => {
    const sourceMeta = getSourceMeta(record.sourceKey);
    const displayStage = formatDisplayLabel(record.stageLabel);
    const displayAsset = formatDisplayLabel(record.assetType);

    return `
      <button class="featured-card ${sourceMeta.cardClass}" type="button" data-featured-record="${esc(record.id)}">
        <div class="card-topline">
          <span class="source-badge">${esc(sourceMeta.label)}</span>
          <span class="pill priority-${esc(record.priorityKey)}">${esc(record.priorityLabel)}</span>
        </div>
        <h4>${esc(record.title)}</h4>
        <p class="featured-meta">${esc(record.entity)} - ${esc(record.location)}</p>
        <p class="record-fact">${esc(record.sourceExcerpt || record.summary)}</p>
        <div class="chip-row">
          <span class="pill">${esc(displayStage)}</span>
          <span class="pill">${esc(displayAsset)}</span>
        </div>
      </button>
    `;
  }).join("");

  featuredCards.querySelectorAll("[data-featured-record]").forEach((button) => {
    button.addEventListener("click", () => {
      applyQuickFilter({ source: "all", priority: "all", query: "" });
      selectRecord(button.getAttribute("data-featured-record"), { shouldScroll: true, forceOpen: true });
    });
  });
}

function renderFilterWorkbench() {
  sourceFilterChips.innerHTML = sourceOptions.map((option) => {
    const count = filterRecords({
      source: option.key,
      priority: state.priority,
      query: state.query,
    }).length;

    return `
      <button class="filter-chip ${option.key === state.source ? "is-active" : ""}" type="button" data-source-chip="${esc(option.key)}">
        <span class="filter-chip-label">${esc(option.label)}</span>
        <span class="filter-chip-count">${esc(count)}</span>
      </button>
    `;
  }).join("");

  priorityFilterChips.innerHTML = priorityOptions.map((option) => {
    const count = filterRecords({
      source: state.source,
      priority: option.key,
      query: state.query,
    }).length;

    return `
      <button class="filter-chip ${option.key === state.priority ? "is-active" : ""}" type="button" data-priority-chip="${esc(option.key)}">
        <span class="filter-chip-label">${esc(option.label)}</span>
        <span class="filter-chip-count">${esc(count)}</span>
      </button>
    `;
  }).join("");

  const visibleCount = filterRecords().length;
  const totalCount = appData.processedRecords.length;
  const queryStatus = state.query.trim()
    ? `<span class="filter-status-pill">Search: ${esc(state.query.trim())}</span>`
    : "";

  filterStatus.innerHTML = `
    <strong>Showing ${esc(visibleCount)} of ${esc(totalCount)} signals</strong>
    <span class="filter-status-pill">Source: ${esc(formatSourceFilterLabel(state.source))}</span>
    <span class="filter-status-pill">Relevance: ${esc(formatPriorityFilterLabel(state.priority))}</span>
    ${queryStatus}
    <span class="filter-status-tip">Click any chip to refilter instantly.</span>
  `;

  sourceFilterChips.querySelectorAll("[data-source-chip]").forEach((button) => {
    button.addEventListener("click", () => {
      state.source = button.getAttribute("data-source-chip");
      rerenderFeed();
    });
  });

  priorityFilterChips.querySelectorAll("[data-priority-chip]").forEach((button) => {
    button.addEventListener("click", () => {
      state.priority = button.getAttribute("data-priority-chip");
      rerenderFeed();
    });
  });
}

function renderEarlySignalRadar() {
  if (!earlySignalGrid || !earlyCadenceStrip) return;

  const earlyRecords = getEarlySignalRecords().slice(0, 5);

  if (!earlyRecords.length) {
    earlySignalGrid.innerHTML = `
      <article class="early-signal-card early-signal-card-empty">
        <p class="section-tag">No early signals</p>
        <h4>Nothing in the current dataset is classified as an early owner-side signal.</h4>
        <p class="empty-copy">As soon as planning-stage or meeting-linked records appear, they will surface here automatically.</p>
      </article>
    `;
  } else {
    earlySignalGrid.innerHTML = earlyRecords.map((record) => {
      const sourceMeta = getSourceMeta(record.sourceKey);
      const monitorProfile = getMonitorProfileForRecord(record);
      const firstSeenLabel = formatDate(getRecordFirstSeenValue(record));
      const stageLabel = formatDisplayLabel(record.stageLabel);
      const isActive = record.id === state.selectedRecordId;

      return `
        <article class="early-signal-card ${sourceMeta.cardClass} ${isActive ? "is-active" : ""}">
          <div class="card-topline">
            <span class="source-badge">${esc(sourceMeta.label)}</span>
            <span class="pill priority-${esc(record.priorityKey)}">${esc(record.priorityLabel)}</span>
            <span class="pill signal-early">Early Signal</span>
          </div>
          <h4>${esc(record.title)}</h4>
          <p class="record-meta">${esc(record.entity)} - ${esc(record.location)}</p>
          <p class="record-fact">${esc(getEarlySignalReason(record))}</p>
          <div class="chip-row">
            <span class="pill">${esc(stageLabel)}</span>
            <span class="pill">${esc(monitorProfile.cadenceLabel)}</span>
            <span class="pill">First Seen ${esc(firstSeenLabel)}</span>
          </div>
          <div class="early-signal-card-note">
            <strong>Monitor:</strong> ${esc(monitorProfile.watchLabel)}
          </div>
          <div class="record-inline-actions">
            <button class="record-inline-link primary compact" type="button" data-early-inspect="${esc(record.id)}">Inspect On Dashboard</button>
            <a class="record-inline-link compact" href="${esc(record.sourceUrl)}" target="_blank" rel="noreferrer">Open Official Source</a>
          </div>
        </article>
      `;
    }).join("");
  }

  earlyCadenceStrip.innerHTML = sourceMonitorProfiles.map((profile) => `
    <article class="early-cadence-card">
      <div class="early-cadence-meta">
        <span class="source-badge">${esc(profile.label)}</span>
        <span class="pill signal-date">${esc(profile.cadenceLabel)}</span>
      </div>
      <h4>${esc(profile.roleLabel)}</h4>
      <p class="early-cadence-copy">${esc(profile.watchLabel)}</p>
    </article>
  `).join("");

  earlySignalGrid.querySelectorAll("[data-early-inspect]").forEach((button) => {
    button.addEventListener("click", () => {
      applyQuickFilter({ source: "all", priority: "all", query: "" });
      selectRecord(button.getAttribute("data-early-inspect"), { shouldScroll: true, focusInspector: true });
    });
  });
}

function renderRecordGrid() {
  const records = filterRecords();

  if (!records.length) {
    recordGrid.innerHTML = `
      <article class="record-card record-card-empty">
        <p class="section-tag">No records</p>
        <h4 class="empty-title">No project signals match the current filters.</h4>
        <p class="empty-copy">Try broadening the source or lowering the relevance threshold.</p>
      </article>
    `;
    return;
  }

  recordGrid.innerHTML = records.map((record) => {
    const sourceMeta = getSourceMeta(record.sourceKey);
    const isActive = record.id === state.selectedRecordId;
    const displayStage = formatDisplayLabel(record.stageLabel);
    const displayAsset = formatDisplayLabel(record.assetType);
    const displayHits = formatDisplayList((record.keywordHits || []).slice(0, 2));
    const compactFact = record.sourceExcerpt || record.summary || "Verified project signal for AME review.";
    const timingSignals = getRecordTimingSignals(record);
    const verifiedDate = timingSignals.verifiedLabel;

    return `
      <article class="record-card ${sourceMeta.cardClass} ${isActive ? "is-active" : ""}" data-record-card="${esc(record.id)}">
        <div class="card-topline">
          <button class="source-badge chip-button" type="button" data-chip-source="${esc(record.sourceKey)}">${esc(sourceMeta.label)}</button>
          <button class="pill chip-button priority-${esc(record.priorityKey)}" type="button" data-chip-priority="${esc(record.priorityKey)}">${esc(record.priorityLabel)}</button>
          <span class="pill">Score ${esc(record.score)}</span>
        </div>
        <div class="record-card-toggle" role="button" tabindex="0" data-record-id="${esc(record.id)}" aria-expanded="${isActive ? "true" : "false"}">
          <div>
            <h4 class="record-title">${esc(record.title)}</h4>
            <p class="record-meta">${esc(record.entity)} - ${esc(record.location)}</p>
          </div>
          <div class="record-stat-row">
            <button class="pill chip-button" type="button" data-chip-query="${esc(record.stageLabel)}">${esc(displayStage)}</button>
            <button class="pill chip-button" type="button" data-chip-query="${esc(record.assetType)}">${esc(displayAsset)}</button>
            <span class="record-stat">Checked ${esc(verifiedDate)}</span>
          </div>
          <div class="chip-row record-freshness-row">
            ${timingSignals.chips.map((chip) => `<span class="pill ${esc(chip.tone)}">${esc(chip.label)}</span>`).join("")}
          </div>
          <p class="record-fact record-fact-compact">${esc(compactFact)}</p>
        </div>
        <div class="chip-row chip-row-actions">
          ${displayHits.map((hit, index) => `<button class="pill chip-button" type="button" data-chip-query="${esc((record.keywordHits || [])[index] || hit)}">${esc(hit)}</button>`).join("")}
        </div>
        <div class="record-card-actions">
          <button class="record-inline-link primary compact" type="button" data-inspect-record="${esc(record.id)}">Inspect Signal</button>
          <a class="record-inline-link compact" href="${esc(record.sourceUrl)}" target="_blank" rel="noreferrer" data-source-proof-card="${esc(record.id)}">Open Source</a>
        </div>
      </article>
    `;
  }).join("");

  recordGrid.querySelectorAll(".record-card-toggle[data-record-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectRecord(button.getAttribute("data-record-id"));
    });

    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectRecord(button.getAttribute("data-record-id"));
      }
    });
  });

  recordGrid.querySelectorAll("[data-inspect-record]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      selectRecord(button.getAttribute("data-inspect-record"), { shouldScroll: true, focusInspector: true });
    });
  });

  recordGrid.querySelectorAll("[data-chip-source]").forEach((button) => {
    button.addEventListener("click", () => {
      applyQuickFilter({ source: button.getAttribute("data-chip-source"), priority: state.priority, query: "" });
    });
  });

  recordGrid.querySelectorAll("[data-chip-priority]").forEach((button) => {
    button.addEventListener("click", () => {
      applyQuickFilter({ source: state.source, priority: button.getAttribute("data-chip-priority"), query: "" });
    });
  });

  recordGrid.querySelectorAll("[data-chip-query]").forEach((button) => {
    button.addEventListener("click", () => {
      applyQuickFilter({ source: state.source, priority: state.priority, query: button.getAttribute("data-chip-query") });
    });
  });

}

function renderWorkflowControls() {
  if (!verifiedWorkflows.length) return;

  if (!state.workflowId || !verifiedWorkflows.find((workflow) => workflow.id === state.workflowId)) {
    state.workflowId = verifiedWorkflows[0].id;
  }

  workflowSelect.innerHTML = verifiedWorkflows.map((workflow) => `
    <option value="${esc(workflow.id)}">${esc(workflow.title)}</option>
  `).join("");

  workflowSelect.value = state.workflowId;

  stageButtons.innerHTML = stageSequence.map((stage) => `
    <button class="stage-button ${stage === state.workflowStage ? "is-active" : ""}" type="button" data-stage="${stage}">
      ${esc(stageTitles[stage])}
    </button>
  `).join("");

  stageButtons.querySelectorAll("[data-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      state.workflowStage = button.getAttribute("data-stage");
      renderWorkflowControls();
      renderWorkflowView();
    });
  });
}

function renderWorkflowView() {
  const workflow = verifiedWorkflows.find((item) => item.id === state.workflowId);
  if (!workflow) return;

  const analysis = analyzeText(
    workflow.rawInput,
    workflow.extracted.stage.toLowerCase(),
    workflow.category,
  );

  workflowMode.textContent = workflow.sourceName;
  workflowTitle.textContent = workflow.title;
  workflowSource.textContent = workflow.sourceUrl;

  if (state.workflowStage === "raw") {
    workflowBody.textContent = workflow.rawInput;
    workflowMeta.innerHTML = `
      <p class="detail-label">Step outcome</p>
      <p>This is the exact public-source language captured before the parser touches it.</p>
      <div class="chip-row">
        <span class="pill">${esc(workflow.verificationLabel)}</span>
        <span class="pill">${esc(workflow.category.replaceAll("_", " "))}</span>
      </div>
    `;
    return;
  }

  if (state.workflowStage === "extracted") {
    workflowBody.textContent = JSON.stringify(workflow.extracted, null, 2);
    workflowMeta.innerHTML = `
      <p class="detail-label">Step outcome</p>
      <p>The parser extracts the project, municipality, stage, asset, and likely AME service lines from the source.</p>
      <div class="chip-row">
        ${workflow.extracted.serviceLines.map((line) => `<span class="pill">${esc(line)}</span>`).join("")}
      </div>
    `;
    return;
  }

  if (state.workflowStage === "scored") {
    workflowBody.textContent = JSON.stringify({
      score: analysis.score,
      priority: analysis.priorityLabel,
      classification: analysis.classification,
      hits: analysis.hits,
      serviceLines: analysis.serviceLines,
    }, null, 2);

    workflowMeta.innerHTML = `
      <p class="detail-label">Step outcome</p>
      <ul class="detail-list">${workflow.scoringRationale.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
      <p class="detail-label">Suggested action</p>
      <p>${esc(analysis.action)}</p>
    `;
    return;
  }

  workflowBody.textContent = JSON.stringify({
    headline: workflow.briefingPreview.headline,
    municipality: workflow.extracted.municipality,
    assetType: workflow.extracted.assetType,
    stage: workflow.extracted.stage,
    serviceLines: workflow.extracted.serviceLines,
    action: workflow.briefingPreview.action,
  }, null, 2);

  workflowMeta.innerHTML = `
    <p class="detail-label">Step outcome</p>
    <p>This is the briefing-ready entry that would land in AME's morning digest and leadership handoff.</p>
    <div class="chip-row">
      <span class="pill priority-${esc(analysis.priorityKey)}">${esc(analysis.priorityLabel)}</span>
      <span class="pill">${esc(analysis.classification)}</span>
    </div>
  `;
}

function stopWorkflowPlayback() {
  if (!state.playTimer) return;
  window.clearInterval(state.playTimer);
  state.playTimer = null;
}

function advanceWorkflowStage() {
  const currentIndex = stageSequence.indexOf(state.workflowStage);
  const nextIndex = Math.min(currentIndex + 1, stageSequence.length - 1);
  state.workflowStage = stageSequence[nextIndex];
  renderWorkflowControls();
  renderWorkflowView();
}

function startWorkflowPlayback() {
  stopWorkflowPlayback();
  state.workflowStage = "raw";
  renderWorkflowControls();
  renderWorkflowView();

  let index = 0;
  state.playTimer = window.setInterval(() => {
    index += 1;
    if (index >= stageSequence.length) {
      stopWorkflowPlayback();
      return;
    }
    state.workflowStage = stageSequence[index];
    renderWorkflowControls();
    renderWorkflowView();
  }, 1100);
}

function parseMerxInput(text) {
  const cleaned = text.replace(/\r/g, "").trim();
  const firstLine = cleaned.split("\n").find((line) => line.trim()) || "Imported alert";
  const subjectMatch = cleaned.match(/subject:\s*(.+)/i) || cleaned.match(/title:\s*(.+)/i);
  const buyerMatch = cleaned.match(/buyer:\s*(.+)/i)
    || cleaned.match(/issuer:\s*(.+)/i)
    || cleaned.match(/owner:\s*(.+)/i)
    || cleaned.match(/entity:\s*(.+)/i);
  const closingMatch = cleaned.match(/closing(?: date)?\s*:\s*(.+)/i)
    || cleaned.match(/close(?:s|)\s*:\s*(.+)/i);
  const locationMatch = cleaned.match(/location:\s*(.+)/i);
  const sourceNameMatch = cleaned.match(/source:\s*(.+)/i);
  const sourceUrlMatch = cleaned.match(/public source url:\s*(.+)/i)
    || cleaned.match(/source url:\s*(.+)/i);

  return {
    subject: (subjectMatch ? subjectMatch[1] : firstLine).trim() || "Imported alert",
    buyer: (buyerMatch ? buyerMatch[1] : "Not detected").trim(),
    closing: (closingMatch ? closingMatch[1] : "Not detected").trim(),
    location: (locationMatch ? locationMatch[1] : inferLocationFromText(cleaned)).trim(),
    sourceName: (sourceNameMatch ? sourceNameMatch[1] : "").trim(),
    sourceUrl: (sourceUrlMatch ? sourceUrlMatch[1] : "").trim(),
  };
}

function renderMerxOptions() {
  const buckets = getMerxNoticeBuckets();
  const groups = [
    {
      key: "recent",
      title: "Recent notices",
      copy: "Use these first when you want to prove AME can qualify recent procurement signals quickly.",
      notices: buckets.recent,
    },
    {
      key: "reference",
      title: "Reference notices",
      copy: "Older notices stay here only as demo examples, not as fresh market signals.",
      notices: buckets.reference,
    },
  ].filter((group) => group.notices.length);

  merxDemoOptions.innerHTML = groups.map((group) => `
    <section class="merx-library-group">
      <div class="merx-group-head">
        <div>
          <p class="detail-label">${esc(group.title)}</p>
          <p class="empty-copy">${esc(group.copy)}</p>
        </div>
        <span class="pill ${group.key === "recent" ? "signal-verified" : "signal-date"}">${esc(group.notices.length)}</span>
      </div>
      <div class="merx-group-list">
        ${group.notices.map((notice) => {
          const isActive = notice.id === state.selectedMerxNoticeId;
          const analysis = analyzeText(notice.rawText, "procurement", "merx_import");
          const primaryService = analysis.serviceLines[0] || "General Review";
          const noticeState = getMerxNoticeState(notice);
          return `
            <button class="merx-demo-card ${isActive ? "is-active" : ""}" type="button" data-merx-notice="${esc(notice.id)}">
              <p class="section-tag">${esc(noticeState.label)}</p>
              <h4>${esc(notice.title)}</h4>
              <p class="merx-meta">${esc(notice.buyer)} | ${esc(notice.location)}</p>
              <p class="merx-summary">${esc(notice.summary)}</p>
              <div class="chip-row">
                <span class="pill priority-${esc(analysis.priorityKey)}">${esc(analysis.priorityLabel)}</span>
                <span class="pill">Score ${esc(analysis.score)}</span>
                <span class="pill">${esc(formatDisplayLabel(primaryService))}</span>
              </div>
              <div class="merx-card-footer">
                <span class="pill ${esc(noticeState.key === "recent" ? "signal-verified" : "signal-date")}">${esc(noticeState.timeline)}</span>
                <span class="merx-card-action">${isActive ? "Selected" : esc(noticeState.actionLabel)}</span>
              </div>
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");

  merxDemoOptions.querySelectorAll("[data-merx-notice]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedMerxNoticeId = button.getAttribute("data-merx-notice");
      state.merxAnalyzed = false;
      state.merxRouteTarget = "";
      renderMerxOptions();
      renderMerxSteps();
      renderMerxRaw();
      renderMerxFields();
      renderMerxResult();
      renderMerxToolbarState();
      flashPanel(merxFields);
    });
  });

  renderMerxToolbarState();
}

function renderMerxRaw() {
  const notice = getActiveMerxNotice();

  if (!notice) {
    merxRaw.innerHTML = `
      <p class="section-tag">Imported notice</p>
      <h4>Choose a real public notice</h4>
      <p class="empty-copy">This section no longer accepts invented free text. Pick one of the real source-backed notices above.</p>
    `;
    return;
  }

  const noticeState = getMerxNoticeState(notice);
  merxRaw.innerHTML = `
    <p class="section-tag">Step 1 - Imported Notice</p>
    <h4>${esc(notice.title)}</h4>
    <p class="empty-copy">${esc(notice.buyer)} | ${esc(notice.location)} | closes ${esc(notice.closing)}</p>
    <div class="chip-row">
      <span class="pill ${esc(noticeState.key === "recent" ? "signal-verified" : "signal-date")}">${esc(noticeState.label)}</span>
      <span class="pill">${esc(noticeState.timeline)}</span>
    </div>
    <div class="detail-block">
      <p class="detail-label">Notice summary</p>
      <p>${esc(notice.summary)}</p>
      <p class="detail-note">${esc(noticeState.explainer)}</p>
      <a class="detail-link" href="${esc(notice.sourceUrl)}" target="_blank" rel="noreferrer" data-source-proof-merx-raw="${esc(notice.id)}">Open source notice</a>
    </div>
    <details class="merx-details">
      <summary>Show Raw Imported Notice (the exact notice text pulled into the intake)</summary>
      <pre class="workflow-body">${esc(notice.rawText)}</pre>
    </details>
  `;
}

function renderMerxFields() {
  const notice = getActiveMerxNotice();
  const rawText = getActiveMerxText();

  if (!notice || !rawText) {
    merxFields.innerHTML = `
      <p class="section-tag">Field extraction</p>
      <h4>Waiting for a real notice</h4>
      <p class="empty-copy">Select one of the real procurement notices above to inspect the extracted project fields.</p>
    `;
    return;
  }

  const parsed = parseMerxInput(rawText);
  const liveAnalysis = analyzeText(rawText, "procurement", "merx_import");
  const displayHits = formatDisplayList(liveAnalysis.hits.length ? liveAnalysis.hits : ["No strong hits yet"]);
  const noticeState = getMerxNoticeState(notice);

  merxFields.innerHTML = `
    <p class="section-tag">Step 2 - Extracted Fields</p>
    <h4>Detected values from the selected notice</h4>
    <div class="chip-row">
      <span class="pill ${esc(noticeState.key === "recent" ? "signal-verified" : "signal-date")}">${esc(noticeState.label)}</span>
      <span class="pill">${esc(noticeState.timeline)}</span>
    </div>
    <div class="detail-grid">
      <div class="detail-block"><p class="detail-label">Project</p><p>${esc(parsed.subject)}</p></div>
      <div class="detail-block"><p class="detail-label">Buyer</p><p>${esc(parsed.buyer)}</p></div>
      <div class="detail-block"><p class="detail-label">Location</p><p>${esc(parsed.location)}</p></div>
      <div class="detail-block"><p class="detail-label">Closing</p><p>${esc(parsed.closing)}</p></div>
    </div>
    <div class="detail-block">
      <p class="detail-label">Keyword hits</p>
      <div class="chip-row">
        ${displayHits.map((item) => `<span class="pill">${esc(item)}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderMerxResult() {
  const notice = getActiveMerxNotice();
  const rawText = getActiveMerxText();
  merxResult.classList.remove("is-recommendation-panel", "is-pending-panel");

  if (!notice || !rawText) {
    merxResult.classList.add("is-pending-panel");
    merxResult.innerHTML = `
      <p class="section-tag">AME Recommendation</p>
      <h4>Choose a real notice to run the demo</h4>
      <p class="empty-copy">This section shows how AME would score a real imported notice once an approved MERX alert path is available.</p>
    `;
    return;
  }

  if (!state.merxAnalyzed) {
    merxResult.classList.add("is-pending-panel");
    merxResult.innerHTML = `
      <p class="section-tag">Step 3 - Generate Recommendation</p>
      <h4>${esc(notice.title)}</h4>
      <p class="empty-copy">The notice is loaded and the fields are extracted. Click <strong>Generate Recommendation</strong> to show the AME classification, service lines, and next move.</p>
      <div class="record-inline-actions">
        <button class="record-inline-link primary" type="button" data-inline-classify="true">Generate Recommendation</button>
      </div>
    `;

    merxResult.querySelectorAll("[data-inline-classify]").forEach((button) => {
      button.addEventListener("click", () => {
        state.merxAnalyzed = true;
        renderMerxSteps();
        renderMerxResult();
        pulseMerxResult();
        merxResult.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });
    return;
  }

  const parsed = parseMerxInput(rawText);
  const analysis = analyzeText(rawText, "procurement", "merx_import");
  const displayHits = formatDisplayList(analysis.hits);
  const noticeState = getMerxNoticeState(notice);
  const confidenceNote = analysis.hits.length
    ? (noticeState.key === "reference"
      ? "This older reference notice still shows the intake logic clearly, but AME should use the recent lane for live opportunity discussion."
      : "This imported notice contains clear aquatic and mechanical scope language AME can act on.")
    : "This notice does not contain enough scope detail for a confident AME move.";
  const normalizedLead = {
    title: parsed.subject,
    buyer: parsed.buyer,
    location: parsed.location,
    closing: parsed.closing,
    classification: analysis.classification,
    score: analysis.score,
    priority: analysis.priorityLabel,
    serviceLines: analysis.serviceLines,
    keywordHits: analysis.hits,
    suggestedAction: analysis.action,
  };

  merxResult.classList.add("is-recommendation-panel");
  merxResult.innerHTML = `
    <div class="merx-status">Recommendation generated</div>
    <p class="section-tag">Step 3 - AME Recommendation</p>
    <h4>${esc(parsed.subject)}</h4>
    <p class="empty-copy">${esc(parsed.buyer)} | ${esc(parsed.location)} | closes ${esc(parsed.closing)}</p>
    <div class="chip-row">
      <span class="pill ${esc(noticeState.key === "recent" ? "signal-verified" : "signal-date")}">${esc(noticeState.label)}</span>
      <span class="pill priority-${esc(analysis.priorityKey)}">${esc(analysis.priorityLabel)}</span>
      <span class="pill">Score ${esc(analysis.score)}</span>
      <span class="pill">${esc(analysis.classification)}</span>
    </div>
    <div class="record-expanded-grid">
      <div class="detail-block">
        <p class="detail-label">Why it fits</p>
        <p>${esc(displayHits.join(", ") || "No strong keyword hits detected")}</p>
      </div>
      <div class="detail-block">
        <p class="detail-label">Suggested service lines</p>
        <p>${esc(analysis.serviceLines.join(", ") || "No clear AME fit")}</p>
      </div>
    </div>
    <div class="detail-block">
      <p class="detail-label">Recommended AME move</p>
      <p>${esc(analysis.action)}</p>
    </div>
    <div class="detail-block merx-note">
      <p class="detail-label">Recommendation note</p>
      <p>${esc(confidenceNote)}</p>
    </div>
    <div class="detail-block">
      <p class="detail-label">Source backing this notice</p>
      <div class="record-inline-actions">
        <a class="record-inline-link action-blue" href="${esc(parsed.sourceUrl || notice.sourceUrl)}" target="_blank" rel="noreferrer" data-source-proof-merx="${esc(notice.id)}">Open Official Source</a>
        <button class="record-inline-link action-grey" type="button" data-route-merx="digest">Send To Morning Digest</button>
        <button class="record-inline-link action-green" type="button" data-route-merx="leadership">Route To Leadership Brief</button>
      </div>
    </div>
    <div class="detail-block merx-note">
      <p class="detail-label">Decision flow</p>
      <p>This imported notice now follows the same AME path as a municipal signal: qualify it here, send it into the morning digest for triage, then route it into the leadership brief for ownership.</p>
    </div>
    <details class="merx-details">
      <summary>Show Normalized Lead Payload (the cleaned structured data passed into the scoring pipeline)</summary>
      <pre class="merx-json">${esc(JSON.stringify(normalizedLead, null, 2))}</pre>
    </details>
  `;

  merxResult.querySelectorAll("[data-route-merx]").forEach((button) => {
    button.addEventListener("click", () => {
      routeMerxLead(button.getAttribute("data-route-merx"));
    });
  });
}

function renderBcbidSteps() {
  if (!bcbidSteps) return;

  const hasSelection = Boolean(state.selectedBcbidOpportunityId);
  const hasRoute = Boolean(state.bcbidRouteTarget);
  const steps = [
    {
      label: "Select BC Bid Opportunity",
      detail: hasSelection ? "Opportunity loaded" : "Choose a current public opportunity",
      status: hasSelection ? "is-complete" : "is-active",
    },
    {
      label: "Review Snapshot",
      detail: hasSelection ? "Fields extracted" : "Waiting for selection",
      status: hasSelection ? "is-complete" : "",
    },
    {
      label: "Generate Recommendation",
      detail: state.bcbidAnalyzed ? "AME recommendation built" : (hasSelection ? "Click Generate Recommendation" : "Waiting for selection"),
      status: state.bcbidAnalyzed ? "is-complete" : (hasSelection ? "is-active" : ""),
    },
    {
      label: "Route To Morning Digest / Leadership Brief",
      detail: !state.bcbidAnalyzed
        ? "Ready after recommendation"
        : (state.bcbidRouteTarget === "leadership"
          ? "Leadership brief routed"
          : (state.bcbidRouteTarget === "digest"
            ? "Morning digest updated"
            : "Choose Morning Digest or Leadership Brief")),
      status: hasRoute ? "is-complete" : (state.bcbidAnalyzed ? "is-active" : ""),
    },
  ];

  bcbidSteps.innerHTML = steps.map((step, index) => `
    <article class="flow-pill-card ${step.status}">
      <span class="flow-pill-number">${index + 1}</span>
      <div class="flow-pill-copy">
        <strong>${esc(step.label)}</strong>
        <span>${esc(step.detail)}</span>
      </div>
    </article>
  `).join("");
}

function renderBcbidOptions() {
  if (!bcbidOptions) return;

  const query = state.query.trim().toLowerCase();
  const groups = getFilteredBcbidGroups(query);

  if (bcbidStatus) {
    if (!query) {
  bcbidStatus.textContent = `Current BC Bid public opportunities checked ${bcBidSnapshot.checkedAtLabel}.`;
    } else {
      const total = groups.reduce((sum, group) => sum + group.records.length, 0);
      bcbidStatus.textContent = `${total} BC Bid result${total === 1 ? "" : "s"} match "${query}".`;
    }
  }

  if (!groups.length) {
    bcbidOptions.innerHTML = `
      <article class="record-card record-card-empty">
        <p class="section-tag">No BC Bid matches</p>
        <h4 class="empty-title">No current BC Bid opportunities match this search.</h4>
        <p class="empty-copy">Try a broader term like mechanical, pool, Richmond, or community centre.</p>
      </article>
    `;
    return;
  }

  bcbidOptions.innerHTML = groups.map((group) => `
    <section class="merx-library-group">
      <div class="merx-group-head">
        <div>
          <p class="detail-label">${esc(group.title)}</p>
          <p class="empty-copy">${esc(group.copy)}</p>
        </div>
        <span class="pill ${group.key === "boiler" ? "signal-verified" : "signal-date"}">${esc(group.records.length)}</span>
      </div>
      <div class="merx-group-list">
        ${group.records.map((record) => {
          const isActive = record.id === state.selectedBcbidOpportunityId;
          const analysis = analyzeText(getBcbidAnalysisText(record), "procurement", "merx_import");
          const primaryService = analysis.serviceLines[0] || "General Review";
      const stateLabel = record.sourceMode === "keyword" ? "Search result" : "Newest example";
          const stateTone = record.sourceMode === "keyword" ? "signal-verified" : "signal-date";

          return `
            <button class="merx-demo-card ${isActive ? "is-active" : ""}" type="button" data-bcbid-record="${esc(record.id)}">
              <p class="section-tag">${esc(stateLabel)}</p>
              <h4>${esc(record.title)}</h4>
              <p class="merx-meta">${esc(record.issuingOrganization)} | ${esc(record.location)}</p>
              <p class="merx-summary">${esc(record.summary)}</p>
              <div class="chip-row">
                <span class="pill priority-${esc(analysis.priorityKey)}">${esc(analysis.priorityLabel)}</span>
                <span class="pill">Score ${esc(analysis.score)}</span>
                <span class="pill">${esc(formatDisplayLabel(primaryService))}</span>
              </div>
              <div class="merx-card-footer">
                <span class="pill ${stateTone}">${esc(formatDate(record.closeDate))}</span>
                <span class="merx-card-action">${isActive ? "Selected" : "Select Opportunity"}</span>
              </div>
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");

  bcbidOptions.querySelectorAll("[data-bcbid-record]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedBcbidOpportunityId = button.getAttribute("data-bcbid-record");
      state.bcbidAnalyzed = false;
      state.bcbidRouteTarget = "";
      renderBcbidOptions();
      renderBcbidSteps();
      renderBcbidFields();
      renderBcbidResult();
      flashPanel(bcbidFields);
    });
  });
}

function renderBcbidFields() {
  if (!bcbidFields) return;

  const record = getActiveBcbidRecord();

  if (!record) {
    bcbidFields.innerHTML = `
      <p class="section-tag">BC Bid snapshot</p>
      <h4>Waiting for a current public opportunity</h4>
      <p class="empty-copy">Select a current BC Bid opportunity to review the extracted snapshot.</p>
    `;
    return;
  }

  const displaySource = getBcbidDisplaySource(record);

  bcbidFields.innerHTML = `
    <p class="section-tag">Step 2 - Review Snapshot</p>
    <h4>Detected values from the selected BC Bid opportunity</h4>
    <div class="chip-row">
      <span class="pill ${esc(record.sourceMode === "keyword" ? "signal-verified" : "signal-date")}">${esc(displaySource)}</span>
      <span class="pill">Checked ${esc(bcBidSnapshot.checkedAtLabel)}</span>
    </div>
    <div class="detail-grid">
      <div class="detail-block"><p class="detail-label">Opportunity</p><p>${esc(record.title)}</p></div>
      <div class="detail-block"><p class="detail-label">Organization</p><p>${esc(record.issuingOrganization)}</p></div>
      <div class="detail-block"><p class="detail-label">Location</p><p>${esc(record.location)}</p></div>
      <div class="detail-block"><p class="detail-label">Close date</p><p>${esc(formatDate(record.closeDate))}</p></div>
    </div>
    <div class="detail-block">
      <p class="detail-label">Opportunity type</p>
      <p>${esc(record.opportunityType)}</p>
    </div>
    <div class="detail-block">
      <p class="detail-label">Commodity / watch term</p>
      <div class="chip-row">
        <span class="pill">${esc(formatDisplayLabel(record.commodity))}</span>
        ${record.sourceMode === "keyword" ? `<span class="pill signal-verified">Search result</span>` : ""}
      </div>
    </div>
  `;
}

function renderBcbidResult() {
  if (!bcbidResult) return;

  const record = getActiveBcbidRecord();
  bcbidResult.classList.remove("is-recommendation-panel", "is-pending-panel");

  if (!record) {
    bcbidResult.classList.add("is-pending-panel");
    bcbidResult.innerHTML = `
      <p class="section-tag">AME Recommendation</p>
      <h4>Choose a BC Bid opportunity to run through the intake flow</h4>
      <p class="empty-copy">This section shows current BC Bid public opportunities moving through the same AME qualification and routing workflow.</p>
    `;
    return;
  }

  if (!state.bcbidAnalyzed) {
    bcbidResult.classList.add("is-pending-panel");
    bcbidResult.innerHTML = `
      <p class="section-tag">Step 3 - Generate Recommendation</p>
      <h4>${esc(record.title)}</h4>
      <p class="empty-copy">The current BC Bid snapshot is loaded. Click <strong>Generate Recommendation</strong> to score the opportunity for AME and route it into the same decision flow as the BC Project Intelligence Dashboard and MERX Intake.</p>
      <div class="record-inline-actions">
        <button class="record-inline-link primary" type="button" data-inline-bcbid="true">Generate Recommendation</button>
      </div>
    `;

    bcbidResult.querySelectorAll("[data-inline-bcbid]").forEach((button) => {
      button.addEventListener("click", () => {
        state.bcbidAnalyzed = true;
        renderBcbidSteps();
        renderBcbidResult();
        flashPanel(bcbidResult);
      });
    });
    return;
  }

  const analysis = analyzeText(getBcbidAnalysisText(record), "procurement", "merx_import");
  const displayHits = formatDisplayList(analysis.hits);

  bcbidResult.classList.add("is-recommendation-panel");
  bcbidResult.innerHTML = `
    <div class="merx-status">Recommendation generated</div>
    <p class="section-tag">Step 3 - AME Recommendation</p>
    <h4>${esc(record.title)}</h4>
    <p class="empty-copy">${esc(record.issuingOrganization)} | ${esc(record.location)} | closes ${esc(formatDate(record.closeDate))}</p>
    <div class="chip-row">
      <span class="pill ${esc(record.sourceMode === "keyword" ? "signal-verified" : "signal-date")}">${esc(getBcbidDisplaySource(record))}</span>
      <span class="pill priority-${esc(analysis.priorityKey)}">${esc(analysis.priorityLabel)}</span>
      <span class="pill">Score ${esc(analysis.score)}</span>
      <span class="pill">${esc(analysis.classification)}</span>
    </div>
    <div class="record-expanded-grid">
      <div class="detail-block">
        <p class="detail-label">Why it fits</p>
        <p>${esc(displayHits.join(", ") || "No strong keyword hits detected")}</p>
      </div>
      <div class="detail-block">
        <p class="detail-label">Suggested service lines</p>
        <p>${esc(analysis.serviceLines.join(", ") || "No clear AME fit")}</p>
      </div>
    </div>
    <div class="detail-block">
      <p class="detail-label">Recommended AME move</p>
      <p>${esc(analysis.action)}</p>
    </div>
    <div class="detail-block merx-note">
      <p class="detail-label">Why this matters</p>
      <p>${esc(record.sourceMode === "keyword"
      ? "This shows a current BC Bid search result AME can qualify immediately."
        : "This proves the platform can surface truly current BC Bid public opportunities, not only static older examples.")}</p>
    </div>
    <div class="detail-block">
      <p class="detail-label">Source backing this opportunity</p>
      <div class="record-inline-actions">
        <a class="record-inline-link action-blue" href="${esc(record.sourceUrl)}" target="_blank" rel="noreferrer">Open Official Source</a>
        <button class="record-inline-link action-grey" type="button" data-route-bcbid="digest">Send To Morning Digest</button>
        <button class="record-inline-link action-green" type="button" data-route-bcbid="leadership">Route To Leadership Brief</button>
      </div>
    </div>
  `;

  bcbidResult.querySelectorAll("[data-route-bcbid]").forEach((button) => {
    button.addEventListener("click", () => {
      routeBcbidLead(button.getAttribute("data-route-bcbid"));
    });
  });
}

function renderBriefingTable() {
  if (!briefingTable) return;

  const sections = [
    ["Priority", appData.briefing.priorityLeads],
    ["Watchlist", appData.briefing.watchlist],
  ];

  briefingTable.innerHTML = sections.map(([label, rows]) => {
    if (!rows.length) return "";

    return `
      <section class="brief-section">
        <p class="section-tag">${esc(label)}</p>
        ${rows.map((row) => {
          const record = appData.processedRecords.find((item) => item.title === row.title);
          const recordId = record?.id || "";
          const isActive = recordId && recordId === state.digestRecordId;

          return `
            <button class="brief-row ${isActive ? "is-active" : ""}" type="button" data-brief-record="${esc(recordId)}">
              <div class="brief-topline">
                <span class="pill priority-${esc(record?.priorityKey || "watch")}">${esc(label)}</span>
                <span class="pill">${esc(formatDisplayLabel(record?.assetType || "Project"))}</span>
                <span class="pill">${esc(formatDisplayLabel(record?.stageLabel || "Stage"))}</span>
              </div>
              <h4>${esc(row.title)}</h4>
              <p>${esc(row.entity)} - ${esc(row.location)}</p>
              <p class="brief-fact">${esc(record?.summary || row.whyItMatters)}</p>
              <div class="detail-block">
                <p class="detail-label">AME next step</p>
                <p>${esc(row.action)}</p>
              </div>
              <div class="brief-footer">
                <span>${esc((record?.ameServiceLines || []).join(", "))}</span>
                ${record?.sourceUrl ? `<a class="detail-link" href="${esc(record.sourceUrl)}" target="_blank" rel="noreferrer">Open source</a>` : `<span class="detail-link muted">No live link</span>`}
              </div>
            </button>
          `;
        }).join("")}
      </section>
    `;
  }).join("");

  briefingTable.querySelectorAll("[data-brief-record]").forEach((button) => {
    button.addEventListener("click", () => {
      const recordId = button.getAttribute("data-brief-record");
      if (recordId) selectDigestRecord(recordId, false);
    });
  });
}

function renderArtifact() {
  if (!artifactPreview) return;

  const briefedPriorityCount = appData.briefing.priorityLeads.length;
  const briefedWatchCount = appData.briefing.watchlist.length;
  const fallbackTitle = appData.briefing.priorityLeads[0]?.title;
  const transientLead = getStoredTransientLead();
  const focusRecord = (transientLead && transientLead.id === state.digestRecordId ? transientLead : null)
    || appData.processedRecords.find((record) => record.id === state.digestRecordId)
    || appData.processedRecords.find((record) => record.title === fallbackTitle)
    || appData.processedRecords[0];
  const focusSource = focusRecord?.sourceLabel ? { label: focusRecord.sourceLabel } : getSourceMeta(focusRecord?.sourceKey || "");
  const focusEvidence = (focusRecord?.evidence || [])
    .slice(0, 3)
    .map((item) => `<li>${esc(item)}</li>`)
    .join("");
  const focusAction = focusRecord?.action || "Review manually and decide whether it belongs in tomorrow's brief.";
  const focusWhy = focusRecord?.whyItMatters || "This signal aligns with AME's current watch profile.";
  const focusPlay = focusRecord?.goToMarketPlay || focusWhy;
  const focusScope = focusRecord?.estimatedScope || "Scope not specified on the source page.";
  const focusServices = (focusRecord?.ameServiceLines || []).join(", ") || "No AME service line match detected yet.";
  const focusDrivers = focusRecord ? getScoreDrivers(focusRecord) : [];

  artifactPreview.innerHTML = `
    <article class="digest-card">
      <p class="section-tag">Digest Workflow</p>
      <h4>Morning handoff ready for AME</h4>
      <div class="digest-kpi-grid">
        <div class="detail-block">
          <p class="detail-label">Priority Leads</p>
          <p class="digest-kpi">${esc(briefedPriorityCount)}</p>
        </div>
        <div class="detail-block">
          <p class="detail-label">Watchlist</p>
          <p class="digest-kpi">${esc(briefedWatchCount)}</p>
        </div>
        <div class="detail-block">
          <p class="detail-label">Checked</p>
          <p class="digest-kpi-small">${esc(formatDate(appData.briefing.generatedOn))}</p>
        </div>
      </div>
      <div class="flow-strip digest-flow">
        <article class="flow-pill-card is-complete"><span class="flow-pill-number">1</span><div class="flow-pill-copy"><strong>Select Lead</strong><span>From the shortlist</span></div></article>
        <article class="flow-pill-card is-complete"><span class="flow-pill-number">2</span><div class="flow-pill-copy"><strong>Review Action</strong><span>Why it matters and next move</span></div></article>
        <article class="flow-pill-card is-active"><span class="flow-pill-number">3</span><div class="flow-pill-copy"><strong>Open Brief</strong><span>Use the leadership handoff</span></div></article>
      </div>
      <div class="digest-actions">
        <button class="digest-link digest-link-primary" type="button" data-open-brief="${esc(focusRecord?.id || "")}">Open Leadership Brief</button>
        <button class="digest-link" type="button" data-nav-target="feed">Back To BC Project Intelligence Dashboard</button>
      </div>
    </article>

    <article class="digest-card digest-focus">
      <p class="section-tag">Selected Briefing Entry</p>
      <h4>${esc(focusRecord?.title || "No project selected")}</h4>
      <p class="empty-copy">${esc(focusRecord?.entity || "")}${focusRecord ? " - " : ""}${esc(focusRecord?.location || "")} | ${esc(focusSource.label)}</p>
      <div class="chip-row">
        <span class="pill priority-${esc(focusRecord?.priorityKey || "watch")}">${esc(focusRecord?.priorityLabel || "Watch")}</span>
        <span class="pill">${esc(formatDisplayLabel(focusRecord?.stageLabel || "Stage"))}</span>
        <span class="pill">${esc(formatDisplayLabel(focusRecord?.assetType || "Project"))}</span>
      </div>
      <div class="record-expanded-grid">
        <div class="detail-block">
          <p class="detail-label">Verified project signal</p>
          <p>${esc(focusRecord?.summary || focusRecord?.sourceExcerpt || focusWhy)}</p>
        </div>
        <div class="detail-block">
          <p class="detail-label">Commercial angle for AME</p>
          <p>${esc(focusPlay)}</p>
        </div>
      </div>
      <div class="record-expanded-grid">
        <div class="detail-block">
          <p class="detail-label">Why it matters now</p>
          <p>${esc(focusWhy)}</p>
        </div>
        <div class="detail-block">
          <p class="detail-label">Recommended next step</p>
          <p>${esc(focusAction)}</p>
        </div>
      </div>
      <div class="record-expanded-grid">
        <div class="detail-block">
          <p class="detail-label">Scope signal</p>
          <p>${esc(focusScope)}</p>
        </div>
        <div class="detail-block">
          <p class="detail-label">AME service lines</p>
          <p>${esc(focusServices)}</p>
        </div>
      </div>
      <div class="detail-block">
        <p class="detail-label">Score drivers</p>
        <ul class="detail-list">${focusDrivers.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
      </div>
      <div class="detail-block">
        <p class="detail-label">Source evidence</p>
        <ul class="detail-list">${focusEvidence}</ul>
      </div>
      <div class="digest-actions">
        ${focusRecord?.sourceUrl ? `<a class="digest-link digest-link-primary" href="${esc(focusRecord.sourceUrl)}" target="_blank" rel="noreferrer">Open official source</a>` : ""}
        <button class="digest-link" type="button" data-open-brief="${esc(focusRecord?.id || "")}">Open Leadership Brief</button>
        <button class="digest-link" type="button" data-nav-target="feed">Back To BC Project Intelligence Dashboard</button>
      </div>
    </article>
  `;

  artifactPreview.querySelectorAll("[data-nav-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-nav-target");
      if (target === "feed" && focusRecord?.id) {
        selectRecord(focusRecord.id, { shouldScroll: true });
        return;
      }
      setActiveSection(target, true);
    });
  });

  artifactPreview.querySelectorAll("[data-open-brief]").forEach((button) => {
    button.addEventListener("click", () => {
      openLeadershipBriefPage(button.getAttribute("data-open-brief") || state.digestRecordId, focusRecord || null);
    });
  });
}

function rerenderFeed() {
  const visibleRecords = filterRecords();
  if (!visibleRecords.some((record) => record.id === state.selectedRecordId)) {
    state.selectedRecordId = null;
  }

  renderFeaturedCards();
  renderFilterWorkbench();
  renderSignalSteps();
  renderRecordGrid();
  renderSignalInspector();
  renderEarlySignalRadar();
  renderActionRoutingPreview();
  rerenderBcbid();
}

function rerenderBcbid() {
  const visibleIds = getFilteredBcbidGroups()
    .flatMap((group) => group.records.map((record) => record.id));

  if (state.selectedBcbidOpportunityId && !visibleIds.includes(state.selectedBcbidOpportunityId)) {
    state.selectedBcbidOpportunityId = null;
    state.bcbidAnalyzed = false;
    state.bcbidRouteTarget = "";
  }

  renderBcbidOptions();
  renderBcbidSteps();
  renderBcbidFields();
  renderBcbidResult();
  renderActionRoutingPreview();
}

searchFilter.addEventListener("input", (event) => {
  state.query = event.target.value;
  const normalized = state.query.trim().toLowerCase();
  const feedMatches = filterRecords({ source: state.source, priority: state.priority, query: normalized }).length;
  const bcbidMatches = getFilteredBcbidGroups(normalized).reduce((sum, group) => sum + group.records.length, 0);

  if (!feedMatches && bcbidMatches) {
    setActiveSection("bcbid", true);
  } else if (state.activeSection !== "feed") {
    setActiveSection("feed", true);
  }

  rerenderFeed();
});

workflowSelect.addEventListener("change", (event) => {
  state.workflowId = event.target.value;
  state.workflowStage = "raw";
  stopWorkflowPlayback();
  renderWorkflowControls();
  renderWorkflowView();
});

playWorkflow.addEventListener("click", startWorkflowPlayback);

nextWorkflow.addEventListener("click", () => {
  stopWorkflowPlayback();
  advanceWorkflowStage();
});

classifyMerx.addEventListener("click", () => {
  if (!getActiveMerxNotice()) return;
  state.merxAnalyzed = true;
  renderMerxSteps();
  renderMerxRaw();
  renderMerxFields();
  renderMerxResult();
  pulseMerxResult();
  merxResult.scrollIntoView({ behavior: "smooth", block: "center" });
});

clearMerx.addEventListener("click", () => {
  state.selectedMerxNoticeId = null;
  state.merxAnalyzed = false;
  state.merxRouteTarget = "";
  renderMerxOptions();
  renderMerxSteps();
  renderMerxRaw();
  renderMerxFields();
  renderMerxResult();
  renderMerxToolbarState();
});

workspaceTabs.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveSection(button.getAttribute("data-section-target"), true);
  });
});

jumpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveSection(button.getAttribute("data-nav-target"), true);
  });
});

renderTruthStrip();
renderShellSnapshot();
renderRunHistory();
renderEarlySignalRadar();
renderFeaturedCards();
renderFilterWorkbench();
renderSignalSteps();
renderRecordGrid();
renderSignalInspector();
renderWorkflowControls();
renderWorkflowView();
renderBcbidOptions();
renderBcbidSteps();
renderBcbidFields();
renderBcbidResult();
renderMerxOptions();
renderMerxSteps();
renderMerxRaw();
renderMerxFields();
renderMerxResult();
renderMerxToolbarState();
renderBriefingTable();
renderArtifact();
renderActionRoutingPreview();
initSectionObserver();
