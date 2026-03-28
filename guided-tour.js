(function () {
  if (!document.body.matches("[data-guided-demo='true']")) return;

  const appData = window.AME_DEMO_DATA;
  if (!appData) return;

  const DIGEST_RECORD_STORAGE_KEY = "ameDigestRecordId";
  const EXECUTIVE_LEAD_STORAGE_KEY = "ameExecutiveLeadId";
  const TRANSIENT_LEAD_STORAGE_KEY = "ameTransientDigestLead";
  const MORNING_DIGEST_URL = "artifacts/ame-proof-morning-digest.html";
  const LEADERSHIP_BRIEF_URL = "artifacts/ame-proof-daily-briefing.html";

  const els = {
    rail: document.getElementById("guidedTourCard"),
    step: document.getElementById("guidedTourStep"),
    title: document.getElementById("guidedTourTitle"),
    body: document.getElementById("guidedTourBody"),
    hint: document.getElementById("guidedTourHint"),
    value: document.getElementById("guidedTourValue"),
    status: document.getElementById("guidedTourStatus"),
    progress: document.getElementById("guidedTourProgress"),
    restart: document.getElementById("startGuidedTour"),
    back: document.getElementById("guidedTourBack"),
    showMe: document.getElementById("guidedTourShowMe"),
    next: document.getElementById("guidedTourNext"),
    skip: document.getElementById("guidedTourSkip"),
    previewModal: document.getElementById("guidedPreviewModal"),
    previewLabel: document.getElementById("guidedPreviewLabel"),
    previewTitle: document.getElementById("guidedPreviewTitle"),
    previewCopy: document.getElementById("guidedPreviewCopy"),
    previewStage: document.getElementById("guidedPreviewStage"),
    previewOpen: document.getElementById("guidedPreviewOpen"),
    previewClose: document.getElementById("guidedPreviewClose"),
    previewCloseX: document.getElementById("guidedPreviewCloseX"),
    cue: document.getElementById("guidedActionCue"),
    cueText: document.getElementById("guidedActionCueText"),
  };

  const state = {
    stepIndex: 0,
    stepSatisfied: false,
    completed: new Set(),
    currentTarget: null,
    lastPreviewType: "",
    lastPreviewRecordId: "",
    lastPreviewUrl: "",
    tickTimer: null,
    finished: false,
  };

  const steps = [
    {
      key: "dashboard",
      title: "Start on the dashboard",
      body: "This is AME BC Market Intelligence. It combines verified BC municipal signals, real public procurement notices, daily triage, and executive routing into one workflow.",
      hint: "Look at Last Automation Run, Last Checked, Priority Leads, and Notice Library. Then click Continue.",
      value: "The dashboard makes freshness explicit, so leadership can see when the demo was refreshed and when the source material was actually verified.",
      target: () => document.querySelector(".welcome-panel"),
      cueText: "Start here",
      actionRequired: false,
      onEnter: () => {
        closePreview();
        openSection("feed");
        setSourceFilter("all");
        setPriorityFilter("all");
        setSearchValue("");
      },
    },
    {
      key: "workflow-map",
      title: "Understand the workflow surfaces",
      body: "The experience breaks into three working surfaces. Project Signals is the early-warning surface. MERX Intake is the qualification lane. How It Works makes the automation explainable. Morning Digest and Leadership Brief turn the same intelligence into action.",
      hint: "Look across the top navigation and action buttons. Then click Continue.",
      value: "This prevents the demo from feeling like one big board. Each section has a clear job in the operating model.",
      target: () => document.querySelector(".shell-topbar"),
      cueText: "Workflow map",
      actionRequired: false,
      onEnter: () => {
        closePreview();
        openSection("feed");
      },
    },
    {
      key: "priority-filter",
      title: "Narrow the market to the strongest signals",
      body: "Start in Project Signals by applying the Priority filter. This removes lower-fit noise and brings the strongest opportunities to the top.",
      hint: "Click the highlighted Priority chip, or press Do It For Me.",
      value: "Filtering immediately turns a broad market scan into a focused pursuit conversation.",
      target: () => document.querySelector("#priorityFilterChips [data-priority-chip='priority']"),
      cueText: "Click Priority",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("feed");
        setSourceFilter("all");
        setSearchValue("");
      },
      check: () => isChipActive("#priorityFilterChips [data-priority-chip='priority']"),
      showMe: () => clickSelector("#priorityFilterChips [data-priority-chip='priority']"),
    },
    {
      key: "search-victoria",
      title: "Search a city or project fast",
      body: "Now search Victoria. The goal is to show how quickly AME can go from a broad board to a named opportunity in one city.",
      hint: "Type Victoria into Search Signals, or press Do It For Me.",
      value: "Speed is the advantage here. Faster filtering means AME can start positioning and partner conversations before the market crowds in.",
      target: () => document.getElementById("searchFilter"),
      cueText: "Type Victoria",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("feed");
      },
      check: () => document.getElementById("searchFilter")?.value.trim().toLowerCase() === "victoria",
      showMe: () => setSearchValue("Victoria"),
    },
    {
      key: "inspect-crystal-pool",
      title: "Inspect the Crystal Pool lead",
      body: "Open the Crystal Pool signal. One click should turn a public page into a working AME review surface with evidence, score drivers, and next move.",
      hint: "Click Inspect Signal on Crystal Pool, or press Do It For Me.",
      value: "This is where AME saves time and can start moving toward partner outreach faster than teams still reading public pages manually.",
      target: () => document.querySelector("#recordGrid [data-inspect-record='proof-006']"),
      cueText: "Inspect Crystal Pool",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("feed");
        setSourceFilter("all");
        setPriorityFilter("all");
      },
      check: () => Boolean(document.querySelector("#signalInspector [data-open-digest='proof-006']")),
      showMe: () => clickSelector("#recordGrid [data-inspect-record='proof-006']"),
    },
    {
      key: "compare-vancouver",
      title: "Compare with a planning-stage Vancouver lead",
      body: "Clear the search and inspect the Vancouver Aquatic Centre renewal signal. This shows how the board can compare multiple live opportunities quickly.",
      hint: "Click Inspect Signal on the Vancouver lead, or press Do It For Me.",
      value: "The value is not just finding opportunities. It is finding them at a stage where AME can still shape its response and build early alliances with preferred partners.",
      target: () => document.querySelector("#recordGrid [data-inspect-record='proof-009']"),
      cueText: "Inspect Vancouver",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("feed");
        setSearchValue("");
      },
      check: () => Boolean(document.querySelector("#signalInspector [data-open-digest='proof-009']")),
      showMe: () => clickSelector("#recordGrid [data-inspect-record='proof-009']"),
    },
    {
      key: "digest-project",
      title: "Send the project signal into Morning Digest",
      body: "Now push the selected project signal into Morning Digest. This is the daily triage surface the team would actually use each morning.",
      hint: "Click Send To Morning Digest in the inspector, or press Do It For Me.",
      value: "This turns discovery into a repeatable daily workflow instead of leaving the lead trapped in one person's browser.",
      target: () => document.querySelector("#signalInspector [data-open-digest='proof-009']"),
      cueText: "Send to digest",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("feed");
      },
      check: () => state.lastPreviewType === "digest" && state.lastPreviewRecordId === "proof-009",
      showMe: () => {
        ensureProjectSelected("proof-009", () => clickSelector("#signalInspector [data-open-digest='proof-009']"));
      },
    },
    {
      key: "leadership-project",
      title: "Route the same signal into Leadership Brief",
      body: "Route the Vancouver signal into Leadership Brief. This is where the same opportunity stops being information and becomes ownership, routing, and executive follow-through.",
      hint: "Click Route To Leadership Brief in the inspector, or press Do It For Me.",
      value: "Leadership can decide who owns the opportunity, which office should lead, and how quickly AME should mobilize the right partner network.",
      target: () => document.querySelector("#signalInspector [data-open-brief='proof-009']"),
      cueText: "Route to leadership",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("feed");
      },
      check: () => state.lastPreviewType === "brief" && state.lastPreviewRecordId === "proof-009",
      showMe: () => {
        ensureProjectSelected("proof-009", () => clickSelector("#signalInspector [data-open-brief='proof-009']"));
      },
    },
    {
      key: "meeting-filter",
      title: "Switch to meeting-linked documents",
      body: "Now narrow Project Signals to meeting-linked documents. This is where AME can catch municipal signals before broad procurement visibility.",
      hint: "Click Meeting-Linked Docs, or press Do It For Me.",
      value: "This is the true early-warning lane. It helps AME get into the conversation sooner and build preferred-partner alignment before competitors react to a formal notice.",
      target: () => document.querySelector("#sourceFilterChips [data-source-chip='municipal-meeting-linked']"),
      cueText: "Meeting-linked docs",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("feed");
        setPriorityFilter("all");
        setSearchValue("");
      },
      check: () => isChipActive("#sourceFilterChips [data-source-chip='municipal-meeting-linked']"),
      showMe: () => clickSelector("#sourceFilterChips [data-source-chip='municipal-meeting-linked']"),
    },
    {
      key: "meeting-source",
      title: "Open the meeting-minutes source proof",
      body: "Open the Burnaby Council in Brief source. This demonstrates that the signal is traceable to the original municipal document, not just a cooked-up summary.",
      hint: "Click Open Source on the meeting-linked record, or press Do It For Me.",
      value: "When a new tab opens here in the real workflow, it is showing the underlying source of the opportunity so leadership can verify the exact public evidence.",
      target: () => document.querySelector("#recordGrid [data-source-proof-card='proof-001']"),
      cueText: "Open meeting source",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("feed");
      },
      check: () => state.lastPreviewType === "source" && state.lastPreviewRecordId === "proof-001",
      showMe: () => clickSelector("#recordGrid [data-source-proof-card='proof-001']"),
    },
    {
      key: "merx-intake",
      title: "Move into MERX Intake",
      body: "Now switch into MERX Intake. This is the qualification lane. For the demo it uses real public procurement notices, not live MERX scraping.",
      hint: "Click MERX Intake in the top navigation, or press Do It For Me.",
      value: "The earliest signals come from municipal records. This lane becomes valuable once a procurement notice is actually in market.",
      target: () => document.querySelector("[data-section-target='merx']"),
      cueText: "Go to MERX",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("feed");
      },
      check: () => isSectionActive("merx"),
      showMe: () => clickSelector("[data-section-target='merx']"),
    },
    {
      key: "select-merritt",
      title: "Select the Merritt aquatic notice",
      body: "Choose the Merritt aquatic notice. This is a real public procurement notice, and it is the cleanest example of the qualification workflow.",
      hint: "Click the Merritt notice card, or press Do It For Me.",
      value: "This proves the intake lane starts with real notice text and preserves traceability back to the public source.",
      target: () => document.querySelector("#merxDemoOptions [data-merx-notice='merritt-aquatic-mezzanine']"),
      cueText: "Select Merritt",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("merx");
      },
      check: () => document.querySelector("#merxDemoOptions [data-merx-notice='merritt-aquatic-mezzanine']")?.classList.contains("is-active"),
      showMe: () => clickSelector("#merxDemoOptions [data-merx-notice='merritt-aquatic-mezzanine']"),
    },
    {
      key: "merx-recommendation",
      title: "Generate the AME recommendation",
      body: "Now generate the recommendation. Step 1 imports the notice. Step 2 extracts structure. Step 3 turns it into a commercial AME recommendation.",
      hint: "Click Generate Recommendation, or press Do It For Me.",
      value: "This is where qualification becomes useful. AME can score fit, suggest service lines, and decide whether to brief leadership or hold.",
      target: () => document.getElementById("classifyMerx"),
      cueText: "Generate recommendation",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("merx");
      },
      check: () => Boolean(document.querySelector("#merxResult [data-route-merx='digest']")),
      showMe: () => {
        ensureMerxSelected("merritt-aquatic-mezzanine", () => clickSelector("#classifyMerx"));
      },
    },
    {
      key: "merx-source",
      title: "Open the procurement source proof",
      body: "Open the Merritt source proof. This acknowledges the real procurement page without pulling the viewer away from the guided flow.",
      hint: "Click Open Official Source, or press Do It For Me.",
      value: "In the real workflow the new tab opens the source of this opportunity, which lets leadership verify the public procurement record directly.",
      target: () => document.querySelector("#merxResult [data-source-proof-merx='merritt-aquatic-mezzanine']"),
      cueText: "Open source proof",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("merx");
      },
      check: () => state.lastPreviewType === "source" && state.lastPreviewRecordId === "merritt-aquatic-mezzanine",
      showMe: () => {
        ensureMerxAnalyzed("merritt-aquatic-mezzanine", () => clickSelector("#merxResult [data-source-proof-merx='merritt-aquatic-mezzanine']"));
      },
    },
    {
      key: "merx-digest",
      title: "Send the notice into Morning Digest",
      body: "Now route the selected MERX-style notice into Morning Digest. It should follow the same decision path as a municipal signal.",
      hint: "Click Send To Morning Digest, or press Do It For Me.",
      value: "This is where the intake lane connects to the team's daily triage surface instead of stopping in a silo.",
      target: () => document.querySelector("#merxResult [data-route-merx='digest']"),
      cueText: "Send to digest",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("merx");
      },
      check: () => state.lastPreviewType === "digest" && state.lastPreviewRecordId === "merx-merritt-aquatic-mezzanine",
      showMe: () => {
        ensureMerxAnalyzed("merritt-aquatic-mezzanine", () => clickSelector("#merxResult [data-route-merx='digest']"));
      },
    },
    {
      key: "merx-brief",
      title: "Route the notice into Leadership Brief",
      body: "Now send that same notice into Leadership Brief. This shows that procurement intake is connected to executive routing, not stranded in the intake lane.",
      hint: "Click Route To Leadership Brief, or press Do It For Me.",
      value: "Once AME sees a real notice, the system should let leadership move quickly with office routing, ownership, and preferred-partner outreach.",
      target: () => document.querySelector("#merxResult [data-route-merx='leadership']"),
      cueText: "Route to leadership",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("merx");
      },
      check: () => state.lastPreviewType === "brief" && state.lastPreviewRecordId === "merx-merritt-aquatic-mezzanine",
      showMe: () => {
        ensureMerxAnalyzed("merritt-aquatic-mezzanine", () => clickSelector("#merxResult [data-route-merx='leadership']"));
      },
    },
    {
      key: "how-it-works",
      title: "Open How It Works",
      body: "Switch to How It Works. This is the explainability layer that shows how raw public text becomes an AME-ready lead.",
      hint: "Click How It Works in the top navigation, or press Do It For Me.",
      value: "No one wants a black-box score. This is the surface that makes the pipeline credible to leadership and clients.",
      target: () => document.querySelector("[data-section-target='workflow']"),
      cueText: "Open How It Works",
      actionRequired: true,
      onEnter: () => {
        closePreview();
      },
      check: () => isSectionActive("workflow"),
      showMe: () => clickSelector("[data-section-target='workflow']"),
    },
    {
      key: "play-pipeline",
      title: "Play the pipeline",
      body: "Now play the pipeline. Watch the source move from raw public text to extracted facts to scored result to briefing row.",
      hint: "Click Play Steps, or press Do It For Me.",
      value: "This is the final proof: AME is not just collecting data. It is compressing the time from public signal to AME action.",
      target: () => document.getElementById("playWorkflow"),
      cueText: "Play the pipeline",
      actionRequired: true,
      onEnter: () => {
        closePreview();
        openSection("workflow");
      },
      check: () => Boolean(document.querySelector(".stage-button.is-active[data-stage='extracted'], .stage-button.is-active[data-stage='scored'], .stage-button.is-active[data-stage='briefing']")),
      showMe: () => clickSelector("#playWorkflow"),
    },
  ];

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function getStoredTransientLead() {
    try {
      const raw = window.localStorage.getItem(TRANSIENT_LEAD_STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function getLeadById(recordId) {
    if (!recordId) return null;
    const transientLead = getStoredTransientLead();
    if (transientLead?.id === recordId) return transientLead;
    return appData.processedRecords.find((record) => record.id === recordId) || null;
  }

  function getRecordById(recordId) {
    return appData.processedRecords.find((record) => record.id === recordId) || null;
  }

  function getCurrentDigestLeadId() {
    return window.localStorage.getItem(DIGEST_RECORD_STORAGE_KEY) || "";
  }

  function getCurrentBriefLeadId() {
    return window.localStorage.getItem(EXECUTIVE_LEAD_STORAGE_KEY) || "";
  }

  function parseLeadIdFromUrl(url) {
    try {
      const parsed = new URL(url, window.location.href);
      return parsed.searchParams.get("lead") || "";
    } catch (error) {
      return "";
    }
  }

  function buildSourcePreview({ title, href, sourceName, sourceType, summary, bullets, note }) {
    return `
      <div class="guided-preview-shell">
        <section class="guided-preview-hero">
          <p class="section-tag">${esc(sourceType || "Source proof")}</p>
          <h4>${esc(title)}</h4>
          <div class="guided-preview-subline">
            <span class="pill">${esc(sourceName || "Public source")}</span>
            <span class="pill">${esc(href ? "Verified URL available" : "Source URL unavailable")}</span>
          </div>
        </section>
        <div class="guided-preview-grid">
          <article class="guided-preview-card-block">
            <p class="detail-label">What this proves</p>
            <p>${esc(summary)}</p>
          </article>
          <article class="guided-preview-card-block guided-preview-proof">
            <p class="detail-label">Source URL</p>
            <p><a class="detail-link" href="${esc(href || "#")}" target="_blank" rel="noreferrer">${esc(href || "No URL available")}</a></p>
          </article>
        </div>
        <article class="guided-preview-card-block">
          <p class="detail-label">Why this matters</p>
          <ul>${(bullets || []).map((bullet) => `<li>${esc(bullet)}</li>`).join("")}</ul>
        </article>
        <div class="guided-preview-proof-note">${esc(note)}</div>
      </div>
    `;
  }

  function buildDigestPreview(recordId) {
    const lead = getLeadById(recordId) || getLeadById(getCurrentDigestLeadId());
    if (!lead) {
      return {
        title: "Morning Digest",
        copy: "The digest opens as AME's daily review surface. Once a lead is routed here, the team can review it without returning to the full Project Signals board.",
        html: `<div class="guided-preview-shell"><div class="guided-preview-proof-note">No routed lead was found yet. Route a signal or notice into Morning Digest to populate this preview.</div></div>`,
        href: MORNING_DIGEST_URL,
      };
    }

    return {
      title: "Morning Digest",
      copy: "This is the daily triage surface. The selected lead is now packaged for the morning review instead of staying stranded in the board or intake lane.",
      href: `${MORNING_DIGEST_URL}?lead=${encodeURIComponent(lead.id)}`,
      html: `
        <div class="guided-preview-shell">
          <section class="guided-preview-hero">
            <p class="section-tag">Daily triage</p>
            <h4>${esc(lead.title)}</h4>
            <div class="guided-preview-subline">
              <span class="pill priority-${esc(lead.priorityKey || "watch")}">${esc(lead.priorityLabel || "Watch")}</span>
              <span class="pill">${esc(lead.entity || lead.buyer || "")}</span>
              <span class="pill">${esc(lead.location || "")}</span>
            </div>
          </section>
          <div class="guided-preview-grid">
            <article class="guided-preview-card-block">
              <p class="detail-label">Why it matters</p>
              <p>${esc(lead.whyItMatters || lead.summary || "")}</p>
            </article>
            <article class="guided-preview-card-block">
              <p class="detail-label">Next move</p>
              <p>${esc(lead.action || lead.suggestedAction || "")}</p>
            </article>
          </div>
          <article class="guided-preview-card-block">
            <p class="detail-label">Service lines</p>
            <div class="chip-row">${(lead.ameServiceLines || lead.serviceLines || []).map((item) => `<span class="pill">${esc(item)}</span>`).join("")}</div>
          </article>
          <div class="guided-preview-proof-note">Open Full Page to see the complete Morning Digest handoff page in its own tab.</div>
        </div>
      `,
    };
  }

  function buildLeadershipPreview(recordId) {
    const lead = getLeadById(recordId) || getLeadById(getCurrentBriefLeadId());
    if (!lead) {
      return {
        title: "Leadership Brief",
        copy: "Leadership Brief is the executive routing surface. Once a lead is routed here, directors and principals can assign ownership and prepare the next move.",
        html: `<div class="guided-preview-shell"><div class="guided-preview-proof-note">No routed lead was found yet. Route a signal or notice into Leadership Brief to populate this preview.</div></div>`,
        href: LEADERSHIP_BRIEF_URL,
      };
    }

    return {
      title: "Leadership Brief",
      copy: "This is the executive action dashboard. The same lead is now ready for office routing, principal assignment, and next-step communication.",
      href: `${LEADERSHIP_BRIEF_URL}?lead=${encodeURIComponent(lead.id)}`,
      html: `
        <div class="guided-preview-shell">
          <section class="guided-preview-hero">
            <p class="section-tag">Executive routing</p>
            <h4>${esc(lead.title)}</h4>
            <div class="guided-preview-subline">
              <span class="pill priority-${esc(lead.priorityKey || "watch")}">${esc(lead.priorityLabel || "Watch")}</span>
              <span class="pill">${esc(lead.recommendedOffice || "Vancouver Office")}</span>
              <span class="pill">${esc(lead.location || "")}</span>
            </div>
          </section>
          <div class="guided-preview-console">
            <article class="guided-preview-card-block">
              <p class="detail-label">Executive assignment</p>
              <div class="guided-preview-form-grid">
                <div class="guided-preview-field"><strong>Role</strong><span>Principal</span></div>
                <div class="guided-preview-field"><strong>Owner</strong><span>Assigned from AME leadership pool</span></div>
                <div class="guided-preview-field"><strong>Office</strong><span>${esc(lead.recommendedOffice || "Vancouver Office")}</span></div>
                <div class="guided-preview-field"><strong>Action</strong><span>${esc(lead.action || lead.suggestedAction || "Lead pursuit review")}</span></div>
              </div>
            </article>
            <article class="guided-preview-card-block">
              <p class="detail-label">Commercial angle</p>
              <p>${esc(lead.goToMarketPlay || lead.whyItMatters || lead.summary || "")}</p>
              <div class="guided-preview-subline">
                <span class="pill">${esc(lead.entity || lead.buyer || "")}</span>
                <span class="pill">${esc(lead.assetType || lead.classification || "")}</span>
              </div>
            </article>
          </div>
          <div class="guided-preview-proof-note">Open Full Page to use the full executive console and generated routing content.</div>
        </div>
      `,
    };
  }

  function openPreview({ label, title, copy, html, openHref, type = "", recordId = "" }) {
    els.previewLabel.textContent = label || "Preview";
    els.previewTitle.textContent = title || "Preview";
    els.previewCopy.textContent = copy || "";
    els.previewStage.innerHTML = html || "";
    els.previewOpen.href = openHref || "#";
    els.previewModal.hidden = false;
    els.previewModal.classList.add("is-open");
    state.lastPreviewType = type;
    state.lastPreviewRecordId = recordId;
    state.lastPreviewUrl = openHref || "";
  }

  function closePreview() {
    els.previewModal.classList.remove("is-open");
    els.previewModal.hidden = true;
    els.previewStage.innerHTML = "";
  }

  function hideActionCue() {
    els.cue.hidden = true;
  }

  function positionActionCue(target, text) {
    if (!target || !text) {
      hideActionCue();
      return;
    }

    const rect = target.getBoundingClientRect();
    const maxLeft = window.innerWidth - 220;
    const left = Math.max(12, Math.min(rect.left + (rect.width / 2) - 95, maxLeft));
    const top = Math.max(88, rect.top - 52);

    els.cueText.textContent = text;
    els.cue.style.left = `${left}px`;
    els.cue.style.top = `${top}px`;
    els.cue.hidden = false;
  }

  function clearTarget() {
    if (state.currentTarget) {
      state.currentTarget.classList.remove("tour-target-active", "tour-target-pulse");
    }
    state.currentTarget = null;
    hideActionCue();
  }

  function resolveTarget(target) {
    return typeof target === "function" ? target() : target;
  }

  function focusTarget(target, cueText, needsAction) {
    if (!target) {
      clearTarget();
      return;
    }

    if (state.currentTarget !== target) {
      clearTarget();
      state.currentTarget = target;
      target.classList.add("tour-target-active");
      target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }

    target.classList.toggle("tour-target-pulse", Boolean(needsAction));
    if (needsAction) {
      positionActionCue(target, cueText || "Click here");
    } else {
      hideActionCue();
    }
  }

  function renderProgress() {
    els.progress.innerHTML = steps.map((step, index) => {
      const isActive = index === state.stepIndex;
      const isComplete = state.completed.has(step.key) || index < state.stepIndex;
      const classes = [
        "guided-tour-progress-item",
        isActive ? "is-active" : "",
        isComplete ? "is-complete" : "",
      ].filter(Boolean).join(" ");

      return `
        <div class="${classes}">
          <span class="guided-tour-progress-number">${isComplete ? "✓" : index + 1}</span>
          <span class="guided-tour-progress-copy">${esc(step.shortLabel || step.title)}</span>
        </div>
      `;
    }).join("");
  }

  function setStatus(message, tone = "default") {
    els.status.textContent = message;
    els.status.classList.remove("is-success", "is-warning");
    if (tone === "success") els.status.classList.add("is-success");
    if (tone === "warning") els.status.classList.add("is-warning");
  }

  function renderStep() {
    const step = steps[state.stepIndex];
    const stepNumber = state.stepIndex + 1;

    els.step.textContent = `Step ${stepNumber} of ${steps.length}`;
    els.title.textContent = step.title;
    els.body.textContent = step.body;
    els.hint.textContent = step.hint;
    els.value.textContent = step.value;

    const hasShowMe = typeof step.showMe === "function";
    els.showMe.hidden = !hasShowMe;
    els.showMe.textContent = step.showMeLabel || "Do It For Me";
    els.back.disabled = state.stepIndex === 0;
    els.next.disabled = Boolean(step.actionRequired && !state.stepSatisfied);
    els.next.textContent = state.stepIndex === steps.length - 1 ? "Finish Tour" : "Continue";
    els.skip.textContent = state.stepIndex === steps.length - 1 ? "Close Tour" : "Skip Tour";

    if (step.actionRequired && !state.stepSatisfied) {
      setStatus("Follow the highlighted action or press Do It For Me. Continue will unlock as soon as the step is complete.", "warning");
    } else if (step.actionRequired) {
      setStatus("Step completed. Continue when you are ready.", "success");
    } else {
      setStatus("Read-only step - review the highlighted area, then click Continue when ready.", "success");
    }

    renderProgress();
    els.rail.scrollTop = 0;
  }

  function isSectionActive(section) {
    return qs(`[data-section-target='${section}']`)?.classList.contains("is-active");
  }

  function isChipActive(selector) {
    return qs(selector)?.classList.contains("is-active");
  }

  function clickSelector(selector) {
    const element = qs(selector);
    if (!element) return false;
    element.focus({ preventScroll: true });
    element.click();
    return true;
  }

  function setSearchValue(value) {
    const input = document.getElementById("searchFilter");
    if (!input) return;
    input.focus();
    input.value = value;
    input.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function openSection(section) {
    if (isSectionActive(section)) return true;
    return clickSelector(`[data-section-target='${section}']`);
  }

  function setSourceFilter(key) {
    if (isChipActive(`#sourceFilterChips [data-source-chip='${key}']`)) return true;
    return clickSelector(`#sourceFilterChips [data-source-chip='${key}']`);
  }

  function setPriorityFilter(key) {
    if (isChipActive(`#priorityFilterChips [data-priority-chip='${key}']`)) return true;
    return clickSelector(`#priorityFilterChips [data-priority-chip='${key}']`);
  }

  function waitForCondition(check, done, attempts = 16, delay = 180) {
    if (check()) {
      done();
      return;
    }

    if (attempts <= 0) return;
    window.setTimeout(() => waitForCondition(check, done, attempts - 1, delay), delay);
  }

  function ensureProjectSelected(recordId, callback) {
    if (qs(`#signalInspector [data-open-digest='${recordId}'], #signalInspector [data-open-brief='${recordId}']`)) {
      callback();
      return;
    }

    clickSelector(`#recordGrid [data-inspect-record='${recordId}']`);
    waitForCondition(
      () => Boolean(qs(`#signalInspector [data-open-digest='${recordId}'], #signalInspector [data-open-brief='${recordId}']`)),
      callback,
    );
  }

  function ensureMerxSelected(noticeId, callback) {
    if (qs(`#merxDemoOptions [data-merx-notice='${noticeId}']`)?.classList.contains("is-active")) {
      callback();
      return;
    }

    clickSelector(`#merxDemoOptions [data-merx-notice='${noticeId}']`);
    waitForCondition(
      () => Boolean(qs(`#merxDemoOptions [data-merx-notice='${noticeId}']`)?.classList.contains("is-active")),
      callback,
    );
  }

  function ensureMerxAnalyzed(noticeId, callback) {
    ensureMerxSelected(noticeId, () => {
      if (qs("#merxResult [data-route-merx='digest']")) {
        callback();
        return;
      }

      clickSelector("#classifyMerx");
      waitForCondition(() => Boolean(qs("#merxResult [data-route-merx='digest']")), callback);
    });
  }

  function completeCurrentStep() {
    const step = steps[state.stepIndex];
    if (state.stepSatisfied) return;
    state.stepSatisfied = true;
    state.completed.add(step.key);
    renderStep();
  }

  function evaluateCurrentStep(force = false) {
    if (state.finished) return;
    const step = steps[state.stepIndex];
    if (!step) return;

    const target = resolveTarget(step.target);
    const needsAction = Boolean(step.actionRequired && !state.stepSatisfied);

    if (!needsAction) {
      hideActionCue();
    }

    focusTarget(target, step.cueText, needsAction);

    const satisfied = step.check ? Boolean(step.check()) : true;
    if (satisfied) {
      completeCurrentStep();
    } else if (force) {
      state.stepSatisfied = false;
      renderStep();
    }
  }

  function goToStep(index) {
    if (index < 0 || index >= steps.length) return;
    hideActionCue();

    state.stepIndex = index;
    state.stepSatisfied = false;
    const step = steps[state.stepIndex];

    clearTarget();
    if (typeof step.onEnter === "function") {
      step.onEnter();
    }

    renderStep();
    window.setTimeout(() => evaluateCurrentStep(true), 60);
  }

  function finishTour() {
    state.finished = true;
    clearTarget();
    closePreview();
    els.step.textContent = "Tour complete";
    els.title.textContent = "Explore the demo freely";
    els.body.textContent = "You have walked through the full AME flow: early public signals, procurement intake, source proof, daily triage, leadership routing, and pipeline explainability.";
    els.hint.textContent = "You can now browse the page normally or restart the guided walkthrough.";
    els.value.textContent = "The advantage is not just seeing data. It is compressing the time from public signal to AME action.";
    setStatus("Tour finished. Use Restart to run it again.");
    els.showMe.hidden = true;
    els.back.disabled = false;
    els.next.disabled = true;
    els.next.textContent = "Complete";
    els.skip.textContent = "Close Tour";
    renderProgress();
  }

  function restartTour() {
    state.finished = false;
    state.completed.clear();
    state.lastPreviewType = "";
    state.lastPreviewRecordId = "";
    state.lastPreviewUrl = "";
    goToStep(0);
  }

  function handlePreviewFromUrl(url, title) {
    const leadId = parseLeadIdFromUrl(url) || getCurrentDigestLeadId() || getCurrentBriefLeadId();

    if (/morning-digest/i.test(title) || /morning-digest/i.test(url)) {
      const preview = buildDigestPreview(leadId);
      openPreview({
        label: "Guided preview",
        title: preview.title,
        copy: preview.copy,
        html: preview.html,
        openHref: preview.href,
        type: "digest",
        recordId: leadId,
      });
      return true;
    }

    if (/leadership-brief|daily-briefing/i.test(title) || /daily-briefing/i.test(url)) {
      const preview = buildLeadershipPreview(leadId);
      openPreview({
        label: "Guided preview",
        title: preview.title,
        copy: preview.copy,
        html: preview.html,
        openHref: preview.href,
        type: "brief",
        recordId: leadId,
      });
      return true;
    }

    return false;
  }

  function openSourcePreviewFromRecord(recordId) {
    const record = getRecordById(recordId);
    if (!record) return false;

    openPreview({
      label: "Source proof",
      title: record.sourceName || record.title,
      copy: "This preview acknowledges the live source material without pulling the viewer out of the walkthrough.",
      html: buildSourcePreview({
        title: record.title,
        href: record.sourceUrl,
        sourceName: record.sourceName,
        sourceType: record.sourceType || "Public source",
        summary: record.sourceExcerpt || record.summary,
        bullets: record.evidence || [
          `Entity: ${record.entity}`,
          `Location: ${record.location}`,
          `Last verified: ${record.lastVerifiedAt || "Verified public source"}`,
        ],
        note: "Use Open Full Page if you want to open the original source document in a new tab.",
      }),
      openHref: record.sourceUrl,
      type: "source",
      recordId,
    });
    return true;
  }

  function openSourcePreviewFromMerx(noticeId, anchor) {
    const title = qs("#merxResult h4")?.textContent?.trim()
      || qs("#merxRaw h4")?.textContent?.trim()
      || "Public procurement source";
    const href = anchor?.href || "#";
    const summary = qs("#merxResult .detail-block p:not(.detail-label)")?.textContent?.trim()
      || qs("#merxRaw .detail-block p:not(.detail-label)")?.textContent?.trim()
      || "The selected public procurement notice is traceable back to its original source page.";

    openPreview({
      label: "Source proof",
      title: "Public procurement notice",
      copy: "This preview confirms that the selected intake record is backed by a real public notice source.",
      html: buildSourcePreview({
        title,
        href,
        sourceName: "Public procurement source",
        sourceType: "Public procurement source",
        summary,
        bullets: [
          "This is the real source page for the selected procurement notice.",
          "The intake lane preserves a direct path back to the public record.",
          "Use Open Full Page to view the source in a new browser tab.",
        ],
        note: "In the live workflow, clicking the source opens the original notice so AME can defend the recommendation with the underlying public record.",
      }),
      openHref: href,
      type: "source",
      recordId: noticeId,
    });
    return true;
  }

  window.AMEGuidedOpenPagePreview = (url, title) => handlePreviewFromUrl(url, title);

  document.addEventListener("click", (event) => {
    const digestLink = event.target.closest(".top-cta-digest");
    if (digestLink) {
      event.preventDefault();
      handlePreviewFromUrl(digestLink.getAttribute("href"), "Morning Digest");
      return;
    }

    const briefLink = event.target.closest(".top-cta-briefing");
    if (briefLink) {
      event.preventDefault();
      handlePreviewFromUrl(briefLink.getAttribute("href"), "Leadership Brief");
      return;
    }

    const recordSource = event.target.closest("[data-source-proof-card]");
    if (recordSource) {
      event.preventDefault();
      openSourcePreviewFromRecord(recordSource.getAttribute("data-source-proof-card"));
      return;
    }

    const inspectorSource = event.target.closest("[data-source-proof-inspector]");
    if (inspectorSource) {
      event.preventDefault();
      openSourcePreviewFromRecord(inspectorSource.getAttribute("data-source-proof-inspector"));
      return;
    }

    const merxSource = event.target.closest("[data-source-proof-merx]");
    if (merxSource) {
      event.preventDefault();
      openSourcePreviewFromMerx(merxSource.getAttribute("data-source-proof-merx"), merxSource);
      return;
    }

    const merxRawSource = event.target.closest("[data-source-proof-merx-raw]");
    if (merxRawSource) {
      event.preventDefault();
      openSourcePreviewFromMerx(merxRawSource.getAttribute("data-source-proof-merx-raw"), merxRawSource);
    }
  }, true);

  els.previewClose.addEventListener("click", closePreview);
  els.previewCloseX.addEventListener("click", closePreview);

  els.restart.addEventListener("click", restartTour);
  els.back.addEventListener("click", () => {
    if (state.finished) {
      goToStep(steps.length - 1);
      return;
    }
    goToStep(Math.max(0, state.stepIndex - 1));
  });
  els.showMe.addEventListener("click", () => {
    const step = steps[state.stepIndex];
    if (typeof step?.showMe === "function") {
      step.showMe();
      window.setTimeout(() => evaluateCurrentStep(true), 280);
    }
  });
  els.next.addEventListener("click", () => {
    if (state.finished) return;
    if (state.stepIndex === steps.length - 1) {
      finishTour();
      return;
    }
    goToStep(state.stepIndex + 1);
  });
  els.skip.addEventListener("click", finishTour);

  state.tickTimer = window.setInterval(() => evaluateCurrentStep(false), 250);

  restartTour();
})();
