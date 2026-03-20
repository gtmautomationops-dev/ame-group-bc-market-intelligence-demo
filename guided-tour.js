(function () {
  if (document.body.dataset.guidedDemo !== "true") return;

  const card = document.getElementById("guidedTourCard");
  const stepLabel = document.getElementById("guidedTourStep");
  const titleEl = document.getElementById("guidedTourTitle");
  const bodyEl = document.getElementById("guidedTourBody");
  const hintEl = document.getElementById("guidedTourHint");
  const valueEl = document.getElementById("guidedTourValue");
  const statusEl = document.getElementById("guidedTourStatus");
  const progressEl = document.getElementById("guidedTourProgress");
  const nextButton = document.getElementById("guidedTourNext");
  const showMeButton = document.getElementById("guidedTourShowMe");
  const backButton = document.getElementById("guidedTourBack");
  const finishButton = document.getElementById("guidedTourSkip");
  const restartButton = document.getElementById("startGuidedTour");
  const searchInput = document.getElementById("searchFilter");

  const previewModal = document.getElementById("guidedPreviewModal");
  const previewFrame = document.getElementById("guidedPreviewFrame");
  const previewTitle = document.getElementById("guidedPreviewTitle");
  const previewLabel = document.getElementById("guidedPreviewLabel");
  const previewCopy = document.getElementById("guidedPreviewCopy");
  const previewOpen = document.getElementById("guidedPreviewOpen");
  const previewClose = document.getElementById("guidedPreviewClose");
  const previewCloseX = document.getElementById("guidedPreviewCloseX");

  if (
    !card ||
    !stepLabel ||
    !titleEl ||
    !bodyEl ||
    !hintEl ||
    !valueEl ||
    !statusEl ||
    !progressEl ||
    !nextButton ||
    !showMeButton ||
    !backButton ||
    !finishButton ||
    !restartButton ||
    !searchInput ||
    !previewModal ||
    !previewFrame ||
    !previewTitle ||
    !previewLabel ||
    !previewCopy ||
    !previewOpen ||
    !previewClose ||
    !previewCloseX
  ) {
    return;
  }

  const MERRITT_NOTICE_ID = "merritt-aquatic-mezzanine";
  const CRYSTAL_RECORD_ID = "proof-006";
  const VANCOUVER_RECORD_ID = "proof-009";

  const PREVIEW_COPY = {
    "Morning Digest": "This is the daily triage surface. The team can review the strongest leads without returning to the full board.",
    "Leadership Brief": "This is the executive action surface. It routes the lead to the right owner, office, and next move.",
  };

  const state = {
    stepIndex: 0,
    currentTarget: null,
    validationTimer: null,
    completedSteps: new Set(),
  };

  const steps = [
    {
      label: "Dashboard",
      kicker: "Step 1 of 14",
      title: "Start on the dashboard",
      body: "This is AME BC Market Intelligence. It combines verified BC municipal signals, real public procurement notices, daily triage, and executive routing into one workflow.",
      hint: "Look at Last Automation Run, Last Checked, Priority Leads, and Recent Notices. Then continue.",
      value: "The first trust signal is transparency. The viewer can immediately see when the demo was refreshed and when the public sources were last checked.",
      selector: ".welcome-panel",
      status: "Read the opening snapshot, then continue.",
    },
    {
      label: "Workflow Map",
      kicker: "Step 2 of 14",
      title: "Use the top navigation as the workflow map",
      body: "Signal Board is the early-warning surface. MERX Intake is the qualification lane. How It Works explains the automation. Morning Digest and Leadership Brief turn the same intelligence into daily and executive action.",
      hint: "Use the top navigation as your map. Then continue.",
      value: "This removes the 'where do I go next?' problem. The workflow is explicit before the viewer clicks anything.",
      selector: ".shell-topbar-nav",
      status: "This step is orientation only.",
    },
    {
      label: "Priority Filter",
      kicker: "Step 3 of 14",
      title: "Filter to priority leads first",
      body: "Start in Signal Board by narrowing the feed to AME's highest-fit opportunities. This is the fastest route from a full feed to the small set worth immediate attention.",
      hint: "Click the Priority chip under Relevance. Or press Show Me.",
      value: "This is the first speed move: turn a broad market view into a shortlist in one click.",
      selector: '#priorityFilterChips [data-priority-chip="priority"]',
      section: "feed",
      perform() {
        clickSelector('#priorityFilterChips [data-priority-chip="priority"]');
      },
      validate() {
        return Boolean(document.querySelector('#priorityFilterChips [data-priority-chip="priority"].is-active'));
      },
      successStatus: "Priority filter applied. Continue to narrow by city.",
    },
    {
      label: "Search Victoria",
      kicker: "Step 4 of 14",
      title: "Search Victoria",
      body: "Now search for Victoria to pull the Crystal Pool opportunity to the surface. This shows how quickly the board can move from broad filtering to a city-specific pursuit conversation.",
      hint: "Type Victoria in the search box above. Or press Show Me.",
      value: "The board can be narrowed instantly by city, project, or keyword without rereading the full feed.",
      selector: "#searchFilter",
      section: "feed",
      perform() {
        setSearchValue("Victoria");
      },
      validate() {
        return searchInput.value.trim().toLowerCase() === "victoria"
          && Boolean(document.querySelector(`#recordGrid [data-inspect-record="${CRYSTAL_RECORD_ID}"]`));
      },
      successStatus: "Victoria filter applied. Crystal Pool is ready to inspect.",
    },
    {
      label: "Inspect Crystal Pool",
      kicker: "Step 5 of 14",
      title: "Inspect the Crystal Pool lead",
      body: "Open the Crystal Pool signal. This turns public source text into a decision-ready AME lead with verified source, scoring logic, timing advantage, and next move.",
      hint: "Click Inspect Signal on the Crystal Pool record. Or press Show Me.",
      value: "This is where the system saves time: it translates scattered public information into a working review surface the team can actually use.",
      selector: `#recordGrid [data-inspect-record="${CRYSTAL_RECORD_ID}"]`,
      section: "feed",
      perform() {
        clickSelector(`#recordGrid [data-inspect-record="${CRYSTAL_RECORD_ID}"]`);
      },
      validate() {
        return getText("#signalInspector .inspector-title").includes("Crystal Pool project page says construction management procurement is underway");
      },
      successStatus: "Crystal Pool is open in the inspector. Review the source, score drivers, and next move, then continue.",
      successSelector: "#signalInspector",
    },
    {
      label: "Clear Search",
      kicker: "Step 6 of 14",
      title: "Clear the search to compare another lead",
      body: "Now clear Victoria so the rest of the priority board comes back into view. This sets up a second example without leaving the filtered shortlist.",
      hint: "Delete Victoria from the search box. Or press Show Me.",
      value: "This shows how quickly the board can move from one focused view to another without losing your filtered context.",
      selector: "#searchFilter",
      section: "feed",
      perform() {
        setSearchValue("");
      },
      validate() {
        return searchInput.value.trim() === "";
      },
      successStatus: "Search cleared. Compare the Vancouver signal next.",
    },
    {
      label: "Compare Vancouver",
      kicker: "Step 7 of 14",
      title: "Compare a planning-stage Vancouver signal",
      body: "Now inspect the Vancouver Aquatic Centre renewal signal. This is a planning-stage example where AME can still shape its response before the market crowds in.",
      hint: "Click Inspect Signal on the Vancouver Aquatic Centre renewal record. Or press Show Me.",
      value: "The real value is not just finding opportunities. It is finding them early enough to build partner alignment before competitors react.",
      selector: `#recordGrid [data-inspect-record="${VANCOUVER_RECORD_ID}"]`,
      section: "feed",
      perform() {
        clickSelector(`#recordGrid [data-inspect-record="${VANCOUVER_RECORD_ID}"]`);
      },
      validate() {
        return getText("#signalInspector .inspector-title").includes("Park Board gives greenlight to Vancouver Aquatic Centre renewal");
      },
      successStatus: "Vancouver is open in the inspector. This is the planning-stage speed advantage.",
      successSelector: "#signalInspector",
    },
    {
      label: "Morning Digest",
      kicker: "Step 8 of 14",
      title: "Send the selected lead into Morning Digest",
      body: "Now move the selected lead into Morning Digest. This is the team's daily triage surface for reviewing the strongest signals without going back through the full board.",
      hint: "Click Send To Morning Digest in the inspector. Or press Show Me.",
      value: "This turns discovery into a daily team workflow instead of leaving the lead trapped in one person’s browser.",
      selector: '#signalInspector [data-open-digest]',
      section: "feed",
      perform() {
        clickSelector('#signalInspector [data-open-digest]');
      },
      validate() {
        return !previewModal.hidden && previewTitle.textContent.trim() === "Morning Digest";
      },
      successStatus: "Morning Digest is open. The team triage view is now visible in place.",
      successSelector: "#guidedPreviewModal .guided-preview-card",
    },
    {
      label: "Leadership Brief",
      kicker: "Step 9 of 14",
      title: "Open the Leadership Brief",
      body: "Now move from team triage into executive routing. Leadership Brief is where the same signal becomes ownership, office routing, and next-step action.",
      hint: "Click Leadership Brief in the top-right actions. Or press Show Me.",
      value: "Morning Digest is for triage. Leadership Brief is for ownership and executive follow-through.",
      selector: ".top-cta-briefing",
      section: "feed",
      prepare() {
        closePreview();
      },
      perform() {
        clickSelector(".top-cta-briefing");
      },
      validate() {
        return !previewModal.hidden && previewTitle.textContent.trim() === "Leadership Brief";
      },
      successStatus: "Leadership Brief is open. This is the executive handoff surface.",
      successSelector: "#guidedPreviewModal .guided-preview-card",
    },
    {
      label: "MERX Intake",
      kicker: "Step 10 of 14",
      title: "Move into MERX Intake",
      body: "Now switch to MERX Intake. This is the qualification lane. For the demo it uses real public procurement notices, not live MERX scraping.",
      hint: "Click MERX Intake in the top navigation. Or press Show Me.",
      value: "The earliest signals come from municipal records. This lane becomes valuable once a procurement notice is in market.",
      selector: '[data-section-target="merx"]',
      section: "merx",
      prepare() {
        closePreview();
      },
      perform() {
        clickSelector('[data-section-target="merx"]');
      },
      validate() {
        return Boolean(document.querySelector('[data-section-target="merx"].is-active'))
          && Boolean(document.querySelector('#workspaceMerx.is-current'));
      },
      successStatus: "MERX Intake is open. Now choose a real public notice.",
      successSelector: "#workspaceMerx",
    },
    {
      label: "Select Merritt Notice",
      kicker: "Step 11 of 14",
      title: "Select a real public notice",
      body: "Choose the Merritt aquatic-centre notice. This loads a real public procurement example into the intake workflow instead of fabricated sample text.",
      hint: "Click the Merritt notice card on the left. Or press Show Me.",
      value: "This keeps the demo grounded. The viewer sees a real public notice enter the qualification lane.",
      selector: `#merxDemoOptions [data-merx-notice="${MERRITT_NOTICE_ID}"]`,
      section: "merx",
      perform() {
        clickSelector(`#merxDemoOptions [data-merx-notice="${MERRITT_NOTICE_ID}"]`);
      },
      validate() {
        return Boolean(document.querySelector(`#merxDemoOptions [data-merx-notice="${MERRITT_NOTICE_ID}"].is-active`));
      },
      successStatus: "Merritt notice selected. Step 1 and Step 2 are now populated.",
      successSelector: "#merxFields",
    },
    {
      label: "Recommendation",
      kicker: "Step 12 of 14",
      title: "Generate the recommendation",
      body: "Now score the selected notice. This is where the system becomes commercially useful: it classifies fit, suggests service lines, and recommends AME’s next move.",
      hint: "Click Generate Recommendation. Or press Show Me.",
      value: "This is the qualification-speed advantage. AME can route, partner, and act while competitors are still parsing the notice.",
      selector: "#classifyMerx",
      section: "merx",
      perform() {
        clickSelector("#classifyMerx");
      },
      validate() {
        return Boolean(document.querySelector("#merxResult .merx-status"));
      },
      waitAttempts: 50,
      waitDelay: 140,
      successStatus: "Recommendation generated. Review Priority, Score, Service Lines, and Next Move, then continue.",
      successSelector: "#merxResult",
    },
    {
      label: "How It Works",
      kicker: "Step 13 of 14",
      title: "Open the explainability view",
      body: "Now switch to How It Works. This is the explainability layer that shows how public source text becomes an AME-ready lead.",
      hint: "Click How It Works in the top navigation. Or press Show Me.",
      value: "No one wants a black-box score. This is what makes the workflow easier to trust internally.",
      selector: '[data-section-target="workflow"]',
      section: "workflow",
      perform() {
        clickSelector('[data-section-target="workflow"]');
      },
      validate() {
        return Boolean(document.querySelector('[data-section-target="workflow"].is-active'))
          && Boolean(document.querySelector('#workspaceWorkflow.is-current'));
      },
      successStatus: "How It Works is open. Now play the pipeline.",
      successSelector: "#workspaceWorkflow",
    },
    {
      label: "Pipeline Proof",
      kicker: "Step 14 of 14",
      title: "Play the pipeline",
      body: "Click Play Steps. The workflow will move through Raw input, Extracted facts, Scored result, and Briefing row so the viewer can see the machine doing real work.",
      hint: "Click Play Steps. Or press Show Me.",
      value: "This is the final proof: the system is not just describing automation, it is showing the transformation from public source to AME-ready output.",
      selector: "#playWorkflow",
      section: "workflow",
      perform() {
        clickSelector("#playWorkflow");
      },
      validate() {
        return Boolean(document.querySelector('#stageButtons [data-stage="briefing"].is-active'));
      },
      waitAttempts: 70,
      waitDelay: 160,
      successStatus: "Pipeline complete. You have seen the flow from public signal to AME action.",
      successSelector: "#workflowMeta",
    },
  ];

  function getTarget(selector, root = document) {
    return selector ? root.querySelector(selector) : null;
  }

  function getText(selector, root = document) {
    return getTarget(selector, root)?.textContent?.trim() || "";
  }

  function clickSelector(selector, root = document) {
    const target = getTarget(selector, root);
    if (!target) return false;
    target.click();
    return true;
  }

  function setSearchValue(value) {
    searchInput.value = value;
    searchInput.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function stopValidationLoop() {
    if (state.validationTimer) {
      window.clearInterval(state.validationTimer);
      state.validationTimer = null;
    }
  }

  function clearTarget() {
    if (state.currentTarget) {
      state.currentTarget.classList.remove("tour-target-active", "tour-target-pulse");
      state.currentTarget = null;
    }
  }

  function closePreview() {
    previewModal.hidden = true;
    previewModal.classList.remove("is-open");
    previewFrame.src = "about:blank";
  }

  function openPreview(url, title) {
    previewLabel.textContent = "Guided Preview";
    previewTitle.textContent = title;
    previewCopy.textContent = PREVIEW_COPY[title] || "This preview keeps the next surface inside the guided walkthrough so the viewer stays oriented.";
    previewOpen.href = url;
    previewFrame.src = `${url}${url.includes("?") ? "&" : "?"}guided-preview=1`;
    previewModal.hidden = false;
    previewModal.classList.add("is-open");
    return true;
  }

  function focusTarget(target, { pulse = false } = {}) {
    clearTarget();
    state.currentTarget = target;
    target.classList.add("tour-target-active");
    if (pulse) {
      target.classList.remove("tour-target-pulse");
      window.requestAnimationFrame(() => target.classList.add("tour-target-pulse"));
    }
    target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }

  function waitForTarget(selector, callback, attempts = 30, delay = 140) {
    const target = getTarget(selector);
    if (target) {
      callback(target);
      return;
    }
    if (attempts <= 0) return;
    window.setTimeout(() => waitForTarget(selector, callback, attempts - 1, delay), delay);
  }

  function waitFor(check, callback, attempts = 36, delay = 140) {
    let passed = false;
    try {
      passed = Boolean(check());
    } catch (error) {
      passed = false;
    }

    if (passed) {
      callback();
      return;
    }

    if (attempts <= 0) return;
    window.setTimeout(() => waitFor(check, callback, attempts - 1, delay), delay);
  }

  function openSection(section) {
    if (!section) return;
    const button = document.querySelector(`[data-section-target="${section}"]`);
    if (button && !button.classList.contains("is-active")) {
      button.click();
    }
  }

  function renderProgress() {
    progressEl.innerHTML = steps.map((step, index) => {
      const isComplete = state.completedSteps.has(index);
      const isActive = index === state.stepIndex;
      return `
        <article class="guided-tour-progress-item ${isActive ? "is-active" : ""} ${isComplete ? "is-complete" : ""}">
          <span class="guided-tour-progress-number">${isComplete ? "&check;" : index + 1}</span>
          <span class="guided-tour-progress-copy">${step.label}</span>
        </article>
      `;
    }).join("");
  }

  function updateButtons(step, isComplete) {
    const requiresAction = Boolean(step.perform || step.validate);
    backButton.disabled = state.stepIndex === 0;
    nextButton.textContent = state.stepIndex === steps.length - 1 ? "Finish" : "Continue";
    nextButton.disabled = requiresAction && !isComplete;
    showMeButton.hidden = !step.perform || isComplete;
  }

  function updateStatus(text, tone = "neutral") {
    statusEl.textContent = text;
    statusEl.classList.remove("is-success", "is-warning");
    if (tone === "success") statusEl.classList.add("is-success");
    if (tone === "warning") statusEl.classList.add("is-warning");
  }

  function completeStep(step) {
    if (state.completedSteps.has(state.stepIndex)) return;

    state.completedSteps.add(state.stepIndex);
    stopValidationLoop();
    updateButtons(step, true);
    updateStatus(step.successStatus || "Action complete. Continue when you're ready.", "success");
    renderProgress();

    const successTarget = getTarget(step.successSelector) || getTarget(step.selector);
    if (successTarget) {
      focusTarget(successTarget, { pulse: true });
    }
  }

  function startValidation(step) {
    stopValidationLoop();
    if (!step.validate) return;

    state.validationTimer = window.setInterval(() => {
      let passed = false;
      try {
        passed = Boolean(step.validate());
      } catch (error) {
        passed = false;
      }

      if (passed) {
        completeStep(step);
      }
    }, 180);
  }

  function performCurrentStep() {
    const step = steps[state.stepIndex];
    if (!step || !step.perform) return;
    step.perform();

    waitFor(
      () => !step.validate || step.validate(),
      () => completeStep(step),
      step.waitAttempts || 40,
      step.waitDelay || 140,
    );
  }

  function renderStep(index) {
    stopValidationLoop();
    clearTarget();

    state.stepIndex = index;
    const step = steps[index];

    if (typeof step.prepare === "function") {
      step.prepare();
    }

    openSection(step.section || "feed");

    stepLabel.textContent = step.kicker;
    titleEl.textContent = step.title;
    bodyEl.textContent = step.body;
    hintEl.textContent = step.hint;
    valueEl.textContent = step.value;

    const stepAlreadyComplete = state.completedSteps.has(index);
    updateButtons(step, stepAlreadyComplete);
    updateStatus(stepAlreadyComplete ? (step.successStatus || "Completed.") : (step.status || "Complete the step on the right or press Show Me."), stepAlreadyComplete ? "success" : "neutral");
    renderProgress();
    card.scrollTop = 0;

    waitForTarget(step.selector, (target) => {
      focusTarget(target, { pulse: true });
      if (!stepAlreadyComplete && step.validate) {
        startValidation(step);
      }
    });
  }

  function advance() {
    if (nextButton.disabled) return;
    if (state.stepIndex === steps.length - 1) {
      closePreview();
      updateStatus("Walkthrough complete. You can restart or continue exploring on your own.", "success");
      nextButton.disabled = true;
      showMeButton.hidden = true;
      clearTarget();
      return;
    }
    renderStep(state.stepIndex + 1);
  }

  function previous() {
    if (state.stepIndex === 0) return;
    renderStep(state.stepIndex - 1);
  }

  function restart() {
    state.completedSteps.clear();
    stopValidationLoop();
    closePreview();
    setSearchValue("");
    clickSelector('[data-source-chip="all"]');
    clickSelector('[data-priority-chip="all"]');
    clickSelector("#clearMerx");
    openSection("feed");
    renderStep(0);
  }

  function interceptPreviewLinks() {
    document.querySelectorAll(".top-cta-briefing, .top-cta-digest").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        openPreview(link.getAttribute("href"), link.textContent.trim());
      });
    });
  }

  window.AMEGuidedOpenPagePreview = (url, title = "Preview") => openPreview(url, title);

  nextButton.addEventListener("click", advance);
  showMeButton.addEventListener("click", performCurrentStep);
  backButton.addEventListener("click", previous);
  finishButton.addEventListener("click", () => {
    closePreview();
    stopValidationLoop();
    clearTarget();
    updateStatus("Walkthrough closed. You can keep exploring or restart from the top.", "neutral");
  });
  restartButton.addEventListener("click", restart);
  previewClose.addEventListener("click", closePreview);
  previewCloseX.addEventListener("click", closePreview);

  interceptPreviewLinks();
  closePreview();
  document.body.classList.add("tour-running");
  renderStep(0);
}());
