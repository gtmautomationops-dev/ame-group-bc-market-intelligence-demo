(function () {
  const tourRoot = document.getElementById("guidedTourLayer");
  if (!tourRoot || document.body.dataset.guidedDemo !== "true") return;

  const spotlight = document.getElementById("guidedTourSpotlight");
  const card = document.getElementById("guidedTourCard");
  const stepLabel = document.getElementById("guidedTourStep");
  const titleEl = document.getElementById("guidedTourTitle");
  const bodyEl = document.getElementById("guidedTourBody");
  const hintEl = document.getElementById("guidedTourHint");
  const valueEl = document.getElementById("guidedTourValue");
  const progressEl = document.getElementById("guidedTourProgress");
  const nextButton = document.getElementById("guidedTourNext");
  const showMeButton = document.getElementById("guidedTourShowMe");
  const backButton = document.getElementById("guidedTourBack");
  const skipButton = document.getElementById("guidedTourSkip");
  const startButton = document.getElementById("startGuidedTour");
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
    !spotlight ||
    !card ||
    !stepLabel ||
    !titleEl ||
    !bodyEl ||
    !hintEl ||
    !valueEl ||
    !progressEl ||
    !nextButton ||
    !showMeButton ||
    !backButton ||
    !skipButton ||
    !startButton ||
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

  const MORNING_DIGEST_URL = "artifacts/ame-proof-morning-digest.html";
  const LEADERSHIP_BRIEF_URL = "artifacts/ame-proof-daily-briefing.html";
  const MERRITT_NOTICE_ID = "merritt-aquatic-mezzanine";
  const CRYSTAL_RECORD_ID = "proof-006";
  const VANCOUVER_RECORD_ID = "proof-009";

  const PREVIEW_COPY = {
    "Morning Digest": "This is the daily triage surface. The team can review the strongest leads without going back to the full board.",
    "Leadership Brief": "This is the executive routing surface. It turns a promising lead into ownership, follow-up, and the next move.",
  };

  const state = {
    stepIndex: -1,
    currentTarget: null,
    cleanupAction: null,
    completedSteps: new Set(),
  };

  const steps = [
    {
      kicker: "Step 1 of 12",
      progressLabel: "Dashboard",
      title: "Start on the dashboard",
      body: "This is AME BC Market Intelligence. It combines verified BC municipal signals, real public procurement notices, daily triage, and executive routing into one workflow.",
      hint: "Look at Last Automation Run, Last Checked, Priority Leads, and Notice Library. Then click Continue.",
      value: "The first promise is transparency. The demo shows when it refreshed and when the source data was actually checked.",
      selector: ".welcome-panel",
      successSelector: ".welcome-meta",
    },
    {
      kicker: "Step 2 of 12",
      progressLabel: "Workflow Map",
      title: "Frame the workflow",
      body: "The experience breaks into working surfaces. Signal Board is the early-warning surface. MERX Intake is the qualification lane. How It Works makes the automation explainable. Morning Digest and Leadership Brief turn the same intelligence into team and executive action.",
      hint: "Use the top navigation as your map, then click Continue.",
      value: "This removes the 'where do I go next?' problem. The viewer immediately understands the journey from signal to action.",
      selector: ".shell-topbar-nav",
      successSelector: ".shell-topbar-nav",
    },
    {
      kicker: "Step 3 of 12",
      progressLabel: "Priority Filter",
      title: "Filter to priority leads",
      body: "Start in Signal Board by narrowing the board to AME's highest-fit leads. This is the fastest way to get from a full feed to the small set that deserves attention first.",
      hint: "Click the highlighted Priority chip. Or click Do It For Me.",
      value: "This is the first time-saving move: turn a busy board into a shortlist in one click.",
      selector: '#priorityFilterChips [data-priority-chip="priority"]',
      section: "feed",
      actionLabel: "Do It For Me",
      perform() {
        clickSelector('#priorityFilterChips [data-priority-chip="priority"]');
      },
      validate() {
        return Boolean(document.querySelector('#priorityFilterChips [data-priority-chip="priority"].is-active'));
      },
      successSelector: "#filterStatus",
      successTitle: "Priority leads are isolated",
      successBody: "The board is now narrowed to high-fit AME leads, so the viewer is no longer scanning everything at once.",
      successHint: "Now search Victoria to pull one target lead to the surface, then click Continue.",
      successValue: "This is how AME moves from broad monitoring to focused pursuit discussion in seconds.",
    },
    {
      kicker: "Step 4 of 12",
      progressLabel: "Search Victoria",
      title: "Search for Victoria",
      body: "Now search Victoria to pull the Crystal Pool opportunity to the top. This shows how quickly the board can move from broad filtering to a city-specific pursuit conversation.",
      hint: "Type Victoria in the search box. Or click Do It For Me.",
      value: "This proves the board can be narrowed instantly by city, project, or keyword without re-reading the whole feed.",
      selector: "#searchFilter",
      section: "feed",
      actionLabel: "Do It For Me",
      completeOn: "input",
      prepare() {
        if (typeof window.applyQuickFilter === "function") {
          window.applyQuickFilter({ source: "all", priority: "priority", query: "" });
        }
      },
      perform() {
        setSearchValue("Victoria");
      },
      validate() {
        return searchInput.value.trim().toLowerCase() === "victoria"
          && Boolean(document.querySelector(`#recordGrid [data-inspect-record="${CRYSTAL_RECORD_ID}"]`));
      },
      successSelector: `#recordGrid [data-record-card="${CRYSTAL_RECORD_ID}"]`,
      successTitle: "The Victoria lead is now front and center",
      successBody: "The board is now narrowed to the Crystal Pool opportunity, ready to inspect.",
      successHint: "Now open the Crystal Pool lead in the inspector, then click Continue.",
      successValue: "This is how AME gets from a market scan to one specific opportunity in seconds.",
    },
    {
      kicker: "Step 5 of 12",
      progressLabel: "Inspect Crystal Pool",
      title: "Inspect the Crystal Pool lead",
      body: "Open the Crystal Pool signal. One click should turn public source text into a decision-ready AME lead with verified source, scoring logic, timing advantage, and next step.",
      hint: "Click the highlighted Inspect Signal button. Or click Do It For Me.",
      value: "This is where AME saves time: the system translates public text into a working review surface instead of leaving it in scattered websites.",
      selector: `#recordGrid [data-inspect-record="${CRYSTAL_RECORD_ID}"]`,
      section: "feed",
      actionLabel: "Do It For Me",
      perform() {
        clickSelector(`#recordGrid [data-inspect-record="${CRYSTAL_RECORD_ID}"]`);
      },
      validate() {
        return getText("#signalInspector .inspector-title").includes("Crystal Pool project page says construction management procurement is underway");
      },
      successSelector: "#signalInspector",
      successTitle: "The Crystal Pool lead is open in the inspector",
      successBody: "The selected signal now shows Verified Source, Why It Scored, Why AME Sees This Early, and Next Move in one place.",
      successHint: "Look at the inspector blocks, then click Continue to compare a second example.",
      successValue: "This is the core promise: public source text becomes a decision-ready AME lead instead of manual reading and interpretation.",
    },
    {
      kicker: "Step 6 of 12",
      progressLabel: "Compare Vancouver",
      title: "Compare a second early signal in Vancouver",
      body: "Now clear the search and inspect the Vancouver Aquatic Centre renewal signal. This shows a planning-stage opportunity where AME can still shape the response before the market crowds in.",
      hint: "Click the highlighted Inspect Signal button. Or click Do It For Me.",
      value: "The real value is not just finding opportunities. It is finding them early enough to build partner alignment and position before competitors react.",
      selector: `#recordGrid [data-inspect-record="${VANCOUVER_RECORD_ID}"]`,
      section: "feed",
      actionLabel: "Do It For Me",
      prepare() {
        if (typeof window.applyQuickFilter === "function") {
          window.applyQuickFilter({ source: "all", priority: "all", query: "" });
        }
      },
      perform() {
        clickSelector(`#recordGrid [data-inspect-record="${VANCOUVER_RECORD_ID}"]`);
      },
      validate() {
        return getText("#signalInspector .inspector-title").includes("Park Board gives greenlight to Vancouver Aquatic Centre renewal");
      },
      successSelector: "#signalInspector",
      successTitle: "A planning-stage Vancouver lead is now open",
      successBody: "The inspector now shows the planning signal, first-seen timing, and AME-fit chips for the Vancouver Aquatic Centre renewal.",
      successHint: "Notice the planning timing and AME-fit chips, then click Continue to move this lead into Morning Digest.",
      successValue: "This is where speed becomes a competitive advantage: AME can start building early alliances through its preferred partner network before the market fully mobilizes.",
    },
    {
      kicker: "Step 7 of 12",
      progressLabel: "Morning Digest",
      title: "Send the lead into Morning Digest",
      body: "Now move the selected lead into Morning Digest. This is the team's daily triage surface for reviewing what matters without going back through the full board.",
      hint: "Click Send To Morning Digest. Or click Do It For Me.",
      value: "This turns discovery into a daily team conversation instead of leaving the signal stuck in one person's browser.",
      selector: "#signalInspector [data-open-digest]",
      section: "feed",
      actionLabel: "Do It For Me",
      perform() {
        clickSelector("#signalInspector [data-open-digest]");
      },
      validate() {
        return !previewModal.hidden && previewTitle.textContent.trim() === "Morning Digest";
      },
      successSelector: "#guidedPreviewModal .guided-preview-card",
      successTitle: "Morning Digest is open",
      successBody: "The daily review surface is now visible inside the guided demo, so the viewer can see how the shortlist gets handed to the team.",
      successHint: "You can see the triage view now. Click Continue to open the executive handoff.",
      successValue: "This reduces time spent hunting for context and increases time spent deciding what to do next.",
    },
    {
      kicker: "Step 8 of 12",
      progressLabel: "Leadership Brief",
      title: "Open the Leadership Brief",
      body: "Now open the Leadership Brief. This is where the same intelligence becomes executive routing, ownership, and follow-through.",
      hint: "Click Leadership Brief. Or click Do It For Me.",
      value: "Morning Digest is for triage. Leadership Brief is for ownership and action.",
      selector: ".top-cta-briefing",
      section: "feed",
      actionLabel: "Do It For Me",
      prepare() {
        closePreview();
      },
      perform() {
        clickSelector(".top-cta-briefing");
      },
      validate() {
        return !previewModal.hidden && previewTitle.textContent.trim() === "Leadership Brief";
      },
      successSelector: "#guidedPreviewModal .guided-preview-card",
      successTitle: "Leadership Brief is open",
      successBody: "The executive handoff is now visible in the preview, showing how AME routes the lead to the right owner, office, and next move.",
      successHint: "This is the executive view. Click Continue to qualify a real procurement notice.",
      successValue: "This is where intelligence stops being information and becomes movement.",
    },
    {
      kicker: "Step 9 of 12",
      progressLabel: "MERX Intake",
      title: "Move into MERX Intake and load a real notice",
      body: "Now switch to MERX Intake. This is the qualification lane. For the demo it uses real public procurement notices, not live MERX scraping.",
      hint: "Click MERX Intake. Or click Do It For Me.",
      value: "This is where AME can qualify procurement notices quickly once they hit the market.",
      selector: '[data-section-target="merx"]',
      section: "merx",
      actionLabel: "Do It For Me",
      prepare() {
        closePreview();
      },
      afterAction() {
        window.setTimeout(() => {
          clickSelector(`#merxDemoOptions [data-merx-notice="${MERRITT_NOTICE_ID}"]`);
        }, 160);
      },
      perform() {
        clickSelector('[data-section-target="merx"]');
      },
      validate() {
        return getText("#merxRaw h4").includes("Nicola Valley Aquatic Centre Mechanical Mezzanine Repair");
      },
      successSelector: "#merxFields",
      successTitle: "A real public notice is loaded",
      successBody: "Step 1 now shows the imported notice and Step 2 shows the extracted project, buyer, location, date, and keyword hits.",
      successHint: "The notice is ready to score. Click Continue to generate the recommendation.",
      successValue: "This is how AME can move from notice arrival to a real qualification decision faster than teams still reading the notice manually.",
    },
    {
      kicker: "Step 10 of 12",
      progressLabel: "Recommendation",
      title: "Generate an AME recommendation",
      body: "Now score the selected notice. This is where the system becomes commercially useful: it classifies fit, suggests service lines, and recommends AME's next move.",
      hint: "Click Generate Recommendation. Or click Do It For Me.",
      value: "This turns a procurement notice into AME-specific guidance instead of forcing the team to interpret it from scratch.",
      selector: "#classifyMerx",
      section: "merx",
      actionLabel: "Do It For Me",
      prepare() {
        clickSelector(`#merxDemoOptions [data-merx-notice="${MERRITT_NOTICE_ID}"]`);
      },
      perform() {
        clickSelector("#classifyMerx");
      },
      validate() {
        return Boolean(document.querySelector("#merxResult .merx-status"));
      },
      successSelector: "#merxResult",
      successTitle: "The notice is now scored for AME fit",
      successBody: "The recommendation panel now shows priority, score, suggested service lines, and the recommended AME move, all tied back to the real public notice.",
      successHint: "Notice the Priority, Score, Suggested Service Lines, and Recommended AME Move, then click Continue.",
      successValue: "This is the qualification-speed advantage: AME can route, partner, and act while competitors are still parsing the notice.",
    },
    {
      kicker: "Step 11 of 12",
      progressLabel: "How It Works",
      title: "Open the explainability view",
      body: "Now switch to How It Works. This is the explainability layer that shows exactly how public source text becomes an AME-ready lead.",
      hint: "Click How It Works. Or click Do It For Me.",
      value: "No one wants a black-box score. This is what makes the workflow easier to trust internally.",
      selector: '[data-section-target="workflow"]',
      section: "workflow",
      actionLabel: "Do It For Me",
      perform() {
        clickSelector('[data-section-target="workflow"]');
      },
      validate() {
        return Boolean(document.querySelector("#workspaceWorkflow .workflow-layout"));
      },
      successSelector: "#workspaceWorkflow .workflow-layout",
      successTitle: "The explainability view is open",
      successBody: "The pipeline is now visible and ready to step through, showing how source material is extracted, scored, and turned into a briefing row.",
      successHint: "Click Continue to play the pipeline from raw input through briefing output.",
      successValue: "This makes the automation understandable, not mysterious.",
    },
    {
      kicker: "Step 12 of 12",
      progressLabel: "Pipeline Proof",
      title: "Play the pipeline",
      body: "Now click Play Steps. The workflow will move through Raw input, Extracted facts, Scored result, and Briefing row so the viewer can see the machine doing real work.",
      hint: "Click Play Steps. Or click Do It For Me.",
      value: "This is the final proof: the system is not just describing automation, it is showing the transformation from public source to AME-ready output.",
      selector: "#playWorkflow",
      section: "workflow",
      actionLabel: "Do It For Me",
      prepare() {
        const select = document.getElementById("workflowSelect");
        if (select && select.options.length) {
          select.selectedIndex = 0;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        }
      },
      perform() {
        clickSelector("#playWorkflow");
      },
      validate() {
        return Boolean(document.querySelector('#stageButtons [data-stage="briefing"].is-active'));
      },
      waitAttempts: 50,
      waitDelay: 140,
      successSelector: "#workflowMeta",
      successTitle: "The pipeline has played through to a briefing row",
      successBody: "You just saw raw public text move through extraction, scoring, and into a briefing-ready output that the team and leadership can use.",
      successHint: "That is the end of the guided proof. Click Finish to close the walkthrough.",
      successValue: "The advantage here is not just seeing data. It is compressing the time from public signal to AME action.",
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

  function closePreview() {
    previewModal.hidden = true;
    previewModal.classList.remove("is-open");
    previewFrame.src = "about:blank";
  }

  function isTourRunning() {
    return !tourRoot.hidden && tourRoot.classList.contains("is-active");
  }

  function openPreview(url, title) {
    previewLabel.textContent = "Guided Preview";
    previewTitle.textContent = title;
    previewCopy.textContent = PREVIEW_COPY[title] || "This preview keeps the next surface inside the guided experience so the viewer can stay oriented.";
    previewOpen.href = url;
    previewFrame.src = `${url}${url.includes("?") ? "&" : "?"}guided-preview=1`;
    previewModal.hidden = false;
    previewModal.classList.add("is-open");
    return true;
  }

  window.AMEGuidedOpenPagePreview = (url, title = "Preview") => {
    if (!isTourRunning()) return false;
    return openPreview(url, title);
  };

  function interceptPreviewLinks() {
    document.querySelectorAll(".top-cta-briefing, .top-cta-digest").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (!isTourRunning()) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        openPreview(link.getAttribute("href"), link.textContent.trim());
      });
    });
  }

  function waitFor(check, callback, attempts = 32, delay = 150) {
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

  function waitForTarget(selector, callback, attempts = 28, delay = 150) {
    waitFor(() => getTarget(selector), () => callback(getTarget(selector)), attempts, delay);
  }

  function renderProgress(index) {
    progressEl.innerHTML = steps.map((step, stepIndex) => {
      const isComplete = state.completedSteps.has(stepIndex);
      const isActive = stepIndex === index;
      const marker = isComplete ? "&check;" : String(stepIndex + 1);

      return `
        <article class="guided-tour-progress-item ${isActive ? "is-active" : ""} ${isComplete ? "is-complete" : ""}">
          <span class="guided-tour-progress-number">${marker}</span>
          <span class="guided-tour-progress-copy">${step.progressLabel || step.title}</span>
        </article>
      `;
    }).join("");
  }

  function clearTarget() {
    if (state.currentTarget) {
      state.currentTarget.classList.remove("tour-target-active", "tour-target-pulse");
      state.currentTarget = null;
    }

    if (typeof state.cleanupAction === "function") {
      state.cleanupAction();
      state.cleanupAction = null;
    }
  }

  function openSection(section) {
    if (!section) return;

    if (typeof window.setActiveSection === "function") {
      window.setActiveSection(section, true);
      return;
    }

    const button = document.querySelector(`[data-section-target="${section}"]`);
    if (button) button.click();
  }

  function positionCard(rect) {
    const padding = 20;
    const cardRect = card.getBoundingClientRect();
    let top = rect.bottom + 18;
    let left = rect.left;

    if (top + cardRect.height > window.innerHeight - padding) {
      top = rect.top - cardRect.height - 18;
    }

    if (top < padding) top = padding;

    if (left + cardRect.width > window.innerWidth - padding) {
      left = window.innerWidth - cardRect.width - padding;
    }

    if (left < padding) left = padding;

    card.style.top = `${top}px`;
    card.style.left = `${left}px`;
  }

  function updateSpotlight(target) {
    const rect = target.getBoundingClientRect();
    const pad = 10;
    spotlight.style.top = `${Math.max(8, rect.top - pad)}px`;
    spotlight.style.left = `${Math.max(8, rect.left - pad)}px`;
    spotlight.style.width = `${Math.min(window.innerWidth - 16, rect.width + pad * 2)}px`;
    spotlight.style.height = `${Math.min(window.innerHeight - 16, rect.height + pad * 2)}px`;
    positionCard(rect);
  }

  function focusTarget(target, options = {}) {
    const { scroll = true, pulse = false } = options;

    if (state.currentTarget && state.currentTarget !== target) {
      state.currentTarget.classList.remove("tour-target-active", "tour-target-pulse");
    }

    state.currentTarget = target;
    target.classList.add("tour-target-active");

    if (pulse) {
      target.classList.remove("tour-target-pulse");
      window.requestAnimationFrame(() => target.classList.add("tour-target-pulse"));
    }

    if (scroll) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    updateSpotlight(target);
  }

  function setButtons(step, isComplete) {
    const isActionStep = Boolean(step.perform || step.completeOn === "input" || step.selector);
    const isReadOnly = !step.perform && step.completeOn !== "input" && !step.actionLabel;
    const isLastStep = state.stepIndex === steps.length - 1;

    backButton.disabled = state.stepIndex === 0;
    nextButton.textContent = isLastStep ? "Finish" : "Continue";
    nextButton.disabled = isActionStep && !isReadOnly && !isComplete;

    if (isReadOnly) {
      showMeButton.hidden = true;
      return;
    }

    if (isComplete) {
      showMeButton.hidden = true;
      return;
    }

    showMeButton.hidden = false;
    showMeButton.textContent = step.actionLabel || "Do It For Me";
    showMeButton.disabled = false;
  }

  function setStepContent(step, isComplete = false) {
    stepLabel.textContent = isComplete && step.successTitle ? `${step.kicker} Complete` : step.kicker;
    titleEl.textContent = isComplete && step.successTitle ? step.successTitle : step.title;
    bodyEl.textContent = isComplete && step.successBody ? step.successBody : step.body;
    hintEl.textContent = isComplete && step.successHint ? step.successHint : (step.hint || "");
    valueEl.textContent = isComplete && step.successValue ? step.successValue : (step.value || "");
    setButtons(step, isComplete);
  }

  function resolveSuccessTarget(step) {
    if (step.successSelector) {
      return getTarget(step.successSelector);
    }
    return getTarget(step.selector);
  }

  function completeCurrentStep() {
    const step = steps[state.stepIndex];
    if (!step) return;

    state.completedSteps.add(state.stepIndex);

    if (typeof state.cleanupAction === "function") {
      state.cleanupAction();
      state.cleanupAction = null;
    }

    if (typeof step.afterAction === "function") {
      step.afterAction();
    }

    const validate = step.validate || (() => Boolean(resolveSuccessTarget(step)));
    waitFor(
      validate,
      () => {
        const successTarget = resolveSuccessTarget(step);
        if (successTarget) {
          focusTarget(successTarget, { scroll: true, pulse: true });
        }
        setStepContent(step, true);
        renderProgress(state.stepIndex);
      },
      step.waitAttempts || 32,
      step.waitDelay || 150,
    );
  }

  function attachStepAction(target, step) {
    const isReadOnly = !step.perform && !step.actionLabel && step.completeOn !== "input";
    if (isReadOnly) return;

    if (step.completeOn === "input") {
      const handler = () => {
        if (step.validate && step.validate()) {
          completeCurrentStep();
        }
      };
      target.addEventListener("input", handler);
      state.cleanupAction = () => target.removeEventListener("input", handler);
      return;
    }

    const handler = () => {
      window.setTimeout(() => completeCurrentStep(), step.successDelay || 260);
    };

    target.addEventListener("click", handler, { once: true });
    state.cleanupAction = () => target.removeEventListener("click", handler);
  }

  function performCurrentStep() {
    const step = steps[state.stepIndex];
    if (!step) return;

    if (typeof step.perform === "function") {
      step.perform();
    } else {
      clickSelector(step.selector);
    }

    if (step.completeOn === "input") {
      window.setTimeout(() => completeCurrentStep(), step.successDelay || 320);
      return;
    }

    if (!step.selector) {
      window.setTimeout(() => completeCurrentStep(), step.successDelay || 320);
    }
  }

  function renderStep(index) {
    clearTarget();
    state.stepIndex = index;

    const step = steps[index];
    closePreview();
    openSection(step.section || "feed");

    if (typeof step.prepare === "function") {
      step.prepare();
    }

    waitForTarget(step.selector || step.successSelector, (target) => {
      focusTarget(target, { scroll: true, pulse: true });
      setStepContent(step, false);
      renderProgress(index);
      attachStepAction(target, step);
    });
  }

  function advance() {
    if (state.stepIndex >= steps.length - 1) {
      finishTour();
      return;
    }
    renderStep(state.stepIndex + 1);
  }

  function previous() {
    if (state.stepIndex <= 0) return;
    renderStep(state.stepIndex - 1);
  }

  function finishTour() {
    clearTarget();
    closePreview();
    tourRoot.hidden = true;
    tourRoot.classList.remove("is-active");
    document.body.classList.remove("tour-running");
    state.stepIndex = -1;
  }

  startButton.addEventListener("click", () => {
    state.completedSteps.clear();
    closePreview();
    document.body.classList.add("tour-running");
    tourRoot.hidden = false;
    tourRoot.classList.add("is-active");
    renderStep(0);
  });

  nextButton.addEventListener("click", () => {
    if (nextButton.disabled) return;
    advance();
  });

  showMeButton.addEventListener("click", () => {
    performCurrentStep();
  });

  backButton.addEventListener("click", previous);
  skipButton.addEventListener("click", finishTour);
  previewClose.addEventListener("click", closePreview);
  previewCloseX.addEventListener("click", closePreview);

  closePreview();

  window.addEventListener("resize", () => {
    if (state.currentTarget && !tourRoot.hidden) {
      updateSpotlight(state.currentTarget);
    }
  });

  window.addEventListener("scroll", () => {
    if (state.currentTarget && !tourRoot.hidden) {
      updateSpotlight(state.currentTarget);
    }
  }, { passive: true });

  interceptPreviewLinks();
}());
