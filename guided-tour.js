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

  const previewModal = document.getElementById("guidedPreviewModal");
  const previewFrame = document.getElementById("guidedPreviewFrame");
  const previewTitle = document.getElementById("guidedPreviewTitle");
  const previewLabel = document.getElementById("guidedPreviewLabel");
  const previewCopy = document.getElementById("guidedPreviewCopy");
  const previewOpen = document.getElementById("guidedPreviewOpen");
  const previewClose = document.getElementById("guidedPreviewClose");
  const previewCloseX = document.getElementById("guidedPreviewCloseX");

  if (!spotlight || !card || !stepLabel || !titleEl || !bodyEl || !hintEl || !valueEl || !progressEl || !nextButton || !showMeButton || !backButton || !skipButton || !startButton || !previewModal || !previewFrame || !previewTitle || !previewLabel || !previewCopy || !previewOpen || !previewClose || !previewCloseX) {
    return;
  }

  const PREVIEW_COPY = {
    "Morning Digest": "This preview keeps the team handoff in the same guided experience. The viewer can see the shortlist and morning review surface without losing their place.",
    "Leadership Brief": "This preview shows the executive handoff in place. The viewer can see how AME routes ownership and action without jumping into a new tab unexpectedly.",
  };

  const state = {
    stepIndex: -1,
    currentTarget: null,
    cleanupAction: null,
    completedSteps: new Set(),
  };

  const steps = [
    {
      kicker: "Step 1 of 7",
      title: "Signal Board: inspect a real municipal signal",
      body: "Start on the board. Click Inspect Signal on a verified municipal record. This turns public source text into a working AME lead instead of leaving it buried in a public webpage.",
      value: "This is where AME gets early visibility and can start aligning with preferred partners before the wider market crowds in.",
      hint: "Click the highlighted Inspect Signal button. Or click Try It For Me.",
      selector: "#recordGrid [data-inspect-record]",
      section: "feed",
      advanceOn: "click",
      successSelector: "#signalInspector .inspector-card:not(.inspector-empty)",
      successTitle: "Signal Board turned a public source into a review surface",
      successBody: "The selected signal is now expanded with verified source text, score drivers, AME fit, and the next move.",
      successValue: "Instead of reading scattered public pages, the team gets one place to qualify what matters quickly.",
      successHint: "Now click Next to send this lead into Morning Digest.",
    },
    {
      kicker: "Step 2 of 7",
      title: "Morning Digest: send the lead to daily review",
      body: "Now move the selected lead into the team's morning review surface. This is the daily shortlist view that turns discovery into a team conversation.",
      value: "This compresses the time from 'we found something' to 'the team knows exactly what to discuss this morning.'",
      hint: "Click Send To Morning Digest. Or click Try It For Me.",
      selector: "#signalInspector [data-open-digest]",
      section: "feed",
      advanceOn: "click",
      successSelector: "#guidedPreviewModal:not([hidden]) .guided-preview-card",
      successTitle: "Morning Digest preview is open",
      successBody: "The daily review view is now open inside the guided demo, so the viewer can see the shortlist without losing their place.",
      successValue: "This is the handoff surface that keeps the team moving every morning.",
      successHint: "Look at the preview, then click Next for the executive handoff.",
    },
    {
      kicker: "Step 3 of 7",
      title: "Leadership Brief: open the executive handoff",
      body: "Now open the executive handoff. This is where opportunity intelligence turns into ownership, routing, and action for AME leadership.",
      value: "This is how AME moves from 'interesting signal' to 'who owns this and what happens next?'",
      hint: "Click Leadership Brief. Or click Try It For Me.",
      selector: ".top-cta-briefing",
      section: "feed",
      advanceOn: "click",
      beforeEnter: () => {
        closePreview();
      },
      successSelector: "#guidedPreviewModal:not([hidden]) .guided-preview-card",
      successTitle: "Leadership Brief preview is open",
      successBody: "The executive handoff is now open in-page, so the viewer can see leadership routing and action controls without leaving the demo.",
      successValue: "This is where AME routes the strongest leads to the right people and offices faster than the competition.",
      successHint: "Look at the executive view, then click Next to move into procurement intake.",
    },
    {
      kicker: "Step 4 of 7",
      title: "MERX Intake: move into procurement qualification",
      body: "Now switch to the intake lane. This is where real public procurement notices are qualified quickly once they reach market.",
      value: "At this point the advantage is qualification speed: AME can assess fit and route faster than teams who are still manually reading notices.",
      hint: "Click the highlighted MERX Intake tab. Or click Try It For Me.",
      selector: '[data-section-target="merx"]',
      section: "merx",
      advanceOn: "click",
      beforeEnter: () => {
        closePreview();
      },
      afterAction: () => {
        const firstNotice = document.querySelector("#merxDemoOptions [data-merx-notice]");
        if (firstNotice) {
          firstNotice.click();
        }
      },
      successSelector: "#workspaceMerx .section-head > div:first-child",
      successTitle: "MERX Intake is open",
      successBody: "The intake lane is now ready with a real notice selected for qualification.",
      successValue: "This shortens the time from notice arrival to a real AME go / no-go discussion.",
      successHint: "Now click Next to score the selected notice.",
    },
    {
      kicker: "Step 5 of 7",
      title: "MERX Intake: generate an AME recommendation",
      body: "Now generate the recommendation. This turns the selected notice into AME-specific guidance with fit, service lines, and the next move.",
      value: "This is the speed layer: AME can qualify, route, and activate preferred partners faster than competitors still reading the notice manually.",
      hint: "Click Generate Recommendation. Or click Try It For Me.",
      selector: "#classifyMerx",
      section: "merx",
      advanceOn: "click",
      beforeEnter: () => {
        const firstNotice = document.querySelector("#merxDemoOptions [data-merx-notice]");
        if (firstNotice) {
          firstNotice.click();
        }
      },
      successSelector: "#merxResult.is-recommendation-panel, #merxResult .merx-status",
      successTitle: "Recommendation generated",
      successBody: "The notice is now scored, classified, and tied to AME service lines and a concrete next move.",
      successValue: "This is how AME moves from notice-reading to decision-making faster than the competition.",
      successHint: "Look at the score and recommendation, then click Next to open the explainability view.",
    },
    {
      kicker: "Step 6 of 7",
      title: "How It Works: open the explainability view",
      body: "Now switch to the explainability layer. This is where the system shows how raw public text becomes an AME-ready lead.",
      value: "This removes the black-box problem and makes the workflow easier to trust internally.",
      hint: "Click the highlighted How It Works tab. Or click Try It For Me.",
      selector: '[data-section-target="workflow"]',
      section: "workflow",
      advanceOn: "click",
      successSelector: "#workspaceWorkflow .workflow-layout",
      successTitle: "How It Works is open",
      successBody: "The explainability view is now open and ready to step through.",
      successValue: "This gives AME a transparent, defensible workflow instead of a mystery score.",
      successHint: "Now click Next to step the pipeline once.",
    },
    {
      kicker: "Step 7 of 7",
      title: "How It Works: step the pipeline",
      body: "Step the workflow once. This lets the viewer see the pipeline change in place instead of just being told that the system extracts and scores the data.",
      value: "This makes the automation feel concrete instead of abstract.",
      hint: "Click Next Step. Or click Try It For Me.",
      selector: "#nextWorkflow",
      section: "workflow",
      advanceOn: "click",
      successSelector: "#workflowMeta",
      successTitle: "Pipeline step completed",
      successBody: "The workflow view just advanced, showing how source material moves through extraction, scoring, and briefing logic.",
      successValue: "The viewer can now see the machine doing work rather than just reading claims about it.",
      successHint: "Click Finish to end the tour, or use the preview buttons anytime.",
    },
  ];

  function getTarget(selector) {
    return selector ? document.querySelector(selector) : null;
  }

  function closePreview() {
    previewModal.hidden = true;
    previewModal.classList.remove("is-open");
    previewFrame.src = "about:blank";
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

  window.AMEGuidedOpenPagePreview = (url, title = "Preview") => openPreview(url, title);

  function interceptPreviewLinks() {
    document.querySelectorAll(".top-cta-briefing, .top-cta-digest").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }

        event.preventDefault();
        const title = link.textContent.trim();
        openPreview(link.getAttribute("href"), title);
      });
    });
  }

  function renderProgress(index) {
    progressEl.innerHTML = steps.map((step, stepIndex) => {
      const isComplete = state.completedSteps.has(stepIndex);
      const isActive = stepIndex === index;
      const isLocked = stepIndex > index && !state.completedSteps.has(stepIndex - 1);
      const marker = isComplete ? "&check;" : String(stepIndex + 1);

      return `
        <article class="guided-tour-progress-item ${isActive ? "is-active" : ""} ${isComplete ? "is-complete" : ""} ${isLocked ? "is-locked" : ""}">
          <span class="guided-tour-progress-number">${marker}</span>
          <span class="guided-tour-progress-copy">${step.title}</span>
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
    const tab = document.querySelector(`[data-section-target="${section}"]`);
    if (tab) {
      tab.click();
    }
  }

  function waitForTarget(selector, callback, attempts = 24) {
    const target = getTarget(selector);
    if (target) {
      callback(target);
      return;
    }

    if (attempts <= 0) return;
    window.setTimeout(() => waitForTarget(selector, callback, attempts - 1), 140);
  }

  function positionCard(rect) {
    const padding = 20;
    const cardRect = card.getBoundingClientRect();
    let top = rect.bottom + 18;
    let left = rect.left;

    if (top + cardRect.height > window.innerHeight - padding) {
      top = rect.top - cardRect.height - 18;
    }

    if (top < padding) {
      top = padding;
    }

    if (left + cardRect.width > window.innerWidth - padding) {
      left = window.innerWidth - cardRect.width - padding;
    }

    if (left < padding) {
      left = padding;
    }

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
      window.requestAnimationFrame(() => {
        target.classList.add("tour-target-pulse");
      });
    }

    if (scroll) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    updateSpotlight(target);
  }

  function setStepContent(step, isComplete = false) {
    const isLastStep = state.stepIndex === steps.length - 1;
    const kicker = isComplete ? `${step.kicker} Complete` : step.kicker;
    const title = isComplete && step.successTitle ? step.successTitle : step.title;
    const body = isComplete && step.successBody ? step.successBody : step.body;
    const hint = isComplete && step.successHint ? step.successHint : step.hint;
    const value = isComplete && step.successValue ? step.successValue : step.value;

    stepLabel.textContent = kicker;
    titleEl.textContent = title;
    bodyEl.textContent = body;
    hintEl.textContent = hint || "";
    valueEl.textContent = value || "";

    backButton.disabled = state.stepIndex === 0;
    nextButton.textContent = isLastStep ? "Finish" : "Next";
    nextButton.disabled = Boolean(step.advanceOn === "click" && !isComplete);
    showMeButton.textContent = isComplete ? "Show Result Again" : "Try It For Me";
    showMeButton.disabled = false;
  }

  function markCurrentStepComplete() {
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

    const successSelector = step.successSelector || step.selector;
    waitForTarget(successSelector, (target) => {
      focusTarget(target, { scroll: true, pulse: true });
      setStepContent(step, true);
      renderProgress(state.stepIndex);
    });
  }

  function advance() {
    const currentStep = steps[state.stepIndex];
    if (currentStep && !currentStep.advanceOn) {
      state.completedSteps.add(state.stepIndex);
    }

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

  function attachAdvanceOn(target, step) {
    if (step.advanceOn !== "click") return;

    const handler = () => {
      window.setTimeout(() => {
        markCurrentStepComplete();
      }, 280);
    };

    target.addEventListener("click", handler, { once: true });
    state.cleanupAction = () => target.removeEventListener("click", handler);
  }

  function performStepAction(step) {
    if (!step) return;

    if (typeof step.beforeEnter === "function") {
      step.beforeEnter();
    }

    const target = getTarget(step.selector);
    if (!target) return;

    target.click();
  }

  function renderStep(index) {
    clearTarget();
    state.stepIndex = index;

    const step = steps[index];
    openSection(step.section);

    if (typeof step.beforeEnter === "function") {
      step.beforeEnter();
    }

    waitForTarget(step.selector, (target) => {
      focusTarget(target, { scroll: true, pulse: true });
      setStepContent(step, false);
      renderProgress(index);
      attachAdvanceOn(target, step);
    });
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
    performStepAction(steps[state.stepIndex]);
  });

  backButton.addEventListener("click", previous);
  skipButton.addEventListener("click", finishTour);
  previewClose.addEventListener("click", closePreview);
  previewCloseX.addEventListener("click", closePreview);

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
