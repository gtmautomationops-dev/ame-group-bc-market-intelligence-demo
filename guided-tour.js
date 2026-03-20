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

  if (!spotlight || !card || !stepLabel || !titleEl || !bodyEl || !hintEl || !valueEl || !progressEl || !nextButton || !showMeButton || !backButton || !skipButton || !startButton) {
    return;
  }

  const state = {
    stepIndex: -1,
    currentTarget: null,
    cleanupAction: null,
    completedSteps: new Set(),
  };

  const steps = [
    {
      kicker: "Step 1 of 6",
      title: "Start in Signal Board",
      body: "This is the early-warning surface. AME can scan verified BC municipal signals here, spot timing earlier than a procurement notice, and use that speed as a competitive advantage to start aligning with preferred partners before the market crowds in.",
      value: "This is where AME gains the earliest visibility and starts building partner alignment before the market fully mobilizes.",
      hint: "Look at the board first, then click Next.",
      selector: "#workspaceFeed .section-head > div:first-child",
      section: "feed",
    },
    {
      kicker: "Step 2 of 6",
      title: "Inspect a live signal",
      body: "Try this yourself. Click Inspect Signal on a real municipal lead. The goal is to turn public source text into a review surface your team can actually use.",
      value: "A raw municipal page becomes a qualified lead with evidence, score drivers, and a next move that AME can act on immediately.",
      hint: "Click the highlighted Inspect Signal button. If you want help, click Try It For Me. If you are skimming, click Skip Ahead.",
      selector: "#recordGrid [data-inspect-record]",
      section: "feed",
      advanceOn: "click",
      successSelector: "#signalInspector .inspector-card:not(.inspector-empty)",
      successTitle: "Signal opened in the inspector",
      successBody: "Good. The selected lead is now expanded into a working review surface instead of a flat card.",
      successValue: "This is where AME saves time and can start moving toward partner outreach faster than teams still reading public pages manually.",
      successHint: "Now look at Verified Source, Why It Scored, and Next Move. Then click Next.",
    },
    {
      kicker: "Step 3 of 6",
      title: "See why the signal matters",
      body: "This inspector is where the value becomes obvious. It shows verified source text, score drivers, AME fit, and the next move, so the team can decide quickly and build early alliances through its preferred partner network.",
      value: "This cuts down review time and gives AME a faster path from public signal to internal action and partner outreach.",
      hint: "Notice the evidence and the AME-specific next move, then click Next.",
      selector: "#signalInspector .inspector-card",
      section: "feed",
      beforeEnter: () => {
        if (!document.querySelector("#signalInspector .inspector-card:not(.inspector-empty)")) {
          document.querySelector("#recordGrid [data-inspect-record]")?.click();
        }
      },
    },
    {
      kicker: "Step 4 of 6",
      title: "Move into MERX Intake",
      body: "Now switch to the intake lane. This is where real public procurement notices get qualified quickly once they reach market.",
      value: "Once notices are in market, AME can qualify them faster than teams who are still manually reading and routing them.",
      hint: "Click the highlighted MERX Intake tab. If you want help, click Try It For Me.",
      selector: '[data-section-target="merx"]',
      advanceOn: "click",
      afterAction: () => {
        const firstNotice = document.querySelector("#merxDemoOptions [data-merx-notice]");
        if (firstNotice) {
          firstNotice.click();
        }
      },
      successSelector: "#merxDemoOptions [data-merx-notice]",
      successTitle: "The intake lane is open",
      successBody: "A real public notice is now loaded into the intake flow so AME can qualify it without copying text around manually.",
      successValue: "This shortens the time from notice arrival to a real AME go / no-go discussion.",
      successHint: "The notice is selected for you. Click Next to turn it into an AME recommendation.",
    },
    {
      kicker: "Step 5 of 6",
      title: "Generate a recommendation",
      body: "Now try the scoring step. Generate Recommendation turns the selected notice into AME-specific guidance with fit, service lines, and the next move.",
      value: "This is the speed layer: AME can decide faster, route to the right office faster, and activate preferred partners faster.",
      hint: "Click Generate Recommendation. If you want help, click Try It For Me.",
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
      successTitle: "Recommendation ready",
      successBody: "The notice has now been classified, scored, and translated into an AME recommendation with service-line fit and a next step.",
      successValue: "This is how AME moves from notice-reading to decision-making faster than the competition.",
      successHint: "Look at the score, suggested service lines, and recommended AME move. Then click Next.",
    },
    {
      kicker: "Step 6 of 6",
      title: "Finish in Leadership Brief",
      body: "Leadership Brief is the executive handoff. It packages the strongest lead for directors, principals, offices, and next-step action so intelligence becomes movement, not just monitoring.",
      value: "This is where the opportunity stops being information and becomes ownership, routing, and executive follow-through.",
      hint: "Click Leadership Brief to open the executive handoff in a new tab, or click Finish if you are done here.",
      selector: ".top-cta-briefing",
      advanceOn: "click",
      finalStep: true,
    },
  ];

  function getTarget(selector) {
    return selector ? document.querySelector(selector) : null;
  }

  function renderProgress(index) {
    progressEl.innerHTML = steps.map((step, stepIndex) => {
      const isComplete = state.completedSteps.has(stepIndex);
      const isActive = stepIndex === index;
      const marker = isComplete ? "&check;" : String(stepIndex + 1);

      return `
        <button class="guided-tour-progress-item ${isActive ? "is-active" : ""} ${isComplete ? "is-complete" : ""}" type="button" data-tour-step="${stepIndex}">
          <span class="guided-tour-progress-number">${marker}</span>
          <span class="guided-tour-progress-copy">${step.title}</span>
        </button>
      `;
    }).join("");

    progressEl.querySelectorAll("[data-tour-step]").forEach((button) => {
      button.addEventListener("click", () => {
        renderStep(Number(button.getAttribute("data-tour-step")));
      });
    });
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

  function waitForTarget(selector, callback, attempts = 20) {
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
    nextButton.textContent = step.finalStep ? "Finish" : (step.advanceOn === "click" && !isComplete ? "Skip Ahead" : "Next");
    showMeButton.textContent = step.finalStep ? "Open Brief" : (step.advanceOn === "click" ? (isComplete ? "Replay Step" : "Try It For Me") : "Focus Here");
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
    tourRoot.hidden = true;
    tourRoot.classList.remove("is-active");
    document.body.classList.remove("tour-running");
    state.stepIndex = -1;
  }

  function attachAdvanceOn(target, step) {
    if (step.advanceOn !== "click") return;

    const handler = () => {
      if (step.finalStep) {
        window.setTimeout(() => {
          finishTour();
        }, 200);
        return;
      }

      window.setTimeout(() => {
        markCurrentStepComplete();
      }, 260);
    };

    target.addEventListener("click", handler, { once: true });
    state.cleanupAction = () => target.removeEventListener("click", handler);
  }

  function performStepAction(step) {
    if (!step) return;

    const target = getTarget(step.selector);
    if (!target) return;

    if (typeof step.beforeEnter === "function") {
      step.beforeEnter();
    }

    if (step.advanceOn === "click" || target.matches("a, button, [role='button']")) {
      target.click();
      return;
    }

    focusTarget(target, { scroll: true, pulse: true });
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
    document.body.classList.add("tour-running");
    tourRoot.hidden = false;
    tourRoot.classList.add("is-active");
    renderStep(0);
  });

  nextButton.addEventListener("click", () => {
    const step = steps[state.stepIndex];
    if (step?.finalStep) {
      finishTour();
      return;
    }

    advance();
  });

  showMeButton.addEventListener("click", () => {
    performStepAction(steps[state.stepIndex]);
  });

  backButton.addEventListener("click", previous);
  skipButton.addEventListener("click", finishTour);

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
}());
