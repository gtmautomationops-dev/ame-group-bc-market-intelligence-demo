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
    targetSelector: null,
  };

  const steps = [
    {
      kicker: "Step 1 of 6",
      title: "Start in Signal Board",
      body: "This is the early-warning surface. AME can scan verified BC municipal signals here, spot timing earlier than a procurement notice, and use that speed as a competitive advantage to start aligning with preferred partners before the market crowds in.",
      value: "This is where AME gains the earliest visibility and starts building partner alignment before the market fully mobilizes.",
      hint: "Click Next to continue.",
      selector: "#workspaceFeed .section-head > div:first-child",
      section: "feed",
    },
    {
      kicker: "Step 2 of 6",
      title: "Inspect a live signal",
      body: "Click Inspect Signal on a real municipal lead. This opens the selected lead and turns public text into a review surface your team can actually use.",
      value: "A raw municipal page becomes a qualified lead with evidence, score drivers, and a next move that AME can act on immediately.",
      hint: "Click the highlighted Inspect Signal button, or press Next to continue.",
      selector: "#recordGrid [data-inspect-record]",
      section: "feed",
      advanceOn: "click",
    },
    {
      kicker: "Step 3 of 6",
      title: "See why the signal matters",
      body: "This inspector is where the value becomes obvious. It shows verified source text, score drivers, AME fit, and the next move, so the team can decide quickly and build early alliances through its preferred partner network.",
      value: "This cuts down review time and gives AME a faster path from public signal to internal action and partner outreach.",
      hint: "Click Next to continue.",
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
      hint: "Click the highlighted MERX Intake tab, or press Next to continue.",
      selector: '[data-section-target="merx"]',
      advanceOn: "click",
    },
    {
      kicker: "Step 5 of 6",
      title: "Generate a recommendation",
      body: "Once a notice is selected, this button scores fit for AME, suggests likely service lines, and recommends the next action. That lets AME move faster than competitors who are still reading the notice manually.",
      value: "This is the speed layer: AME can decide faster, route to the right office faster, and activate preferred partners faster.",
      hint: "Click Generate Recommendation, or press Next to continue.",
      selector: "#classifyMerx",
      section: "merx",
      advanceOn: "click",
      beforeEnter: () => {
        const firstNotice = document.querySelector("#merxDemoOptions [data-merx-notice]");
        if (firstNotice) {
          firstNotice.click();
        }
      },
    },
    {
      kicker: "Step 6 of 6",
      title: "Finish in Leadership Brief",
      body: "Leadership Brief is the executive handoff. It packages the strongest lead for directors, principals, offices, and next-step action so intelligence becomes movement, not just monitoring.",
      value: "This is where the opportunity stops being information and becomes ownership, routing, and executive follow-through.",
      hint: "Click Leadership Brief to open the executive handoff, or click Finish to end the tour here.",
      selector: ".top-cta-briefing",
      advanceOn: "click",
      finalStep: true,
    },
  ];

  function renderProgress(index) {
    progressEl.innerHTML = steps.map((step, stepIndex) => `
      <button class="guided-tour-progress-item ${stepIndex === index ? "is-active" : ""}" type="button" data-tour-step="${stepIndex}">
        <span class="guided-tour-progress-number">${stepIndex + 1}</span>
        <span class="guided-tour-progress-copy">${step.title}</span>
      </button>
    `).join("");

    progressEl.querySelectorAll("[data-tour-step]").forEach((button) => {
      button.addEventListener("click", () => {
        renderStep(Number(button.getAttribute("data-tour-step")));
      });
    });
  }

  function clearTarget() {
    if (state.currentTarget) {
      state.currentTarget.classList.remove("tour-target-active");
      state.currentTarget = null;
    }

    state.targetSelector = null;

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

  function waitForTarget(selector, callback, attempts = 18) {
    const target = document.querySelector(selector);
    if (target) {
      callback(target);
      return;
    }

    if (attempts <= 0) return;
    window.setTimeout(() => waitForTarget(selector, callback, attempts - 1), 120);
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
    tourRoot.hidden = true;
    tourRoot.classList.remove("is-active");
    document.body.classList.remove("tour-running");
    state.stepIndex = -1;
  }

  function attachAdvanceOn(target, step) {
    if (step.advanceOn !== "click") return;

    const handler = () => {
      window.setTimeout(() => {
        if (step.finalStep) {
          finishTour();
        } else {
          advance();
        }
      }, 320);
    };

    target.addEventListener("click", handler, { once: true });
    state.cleanupAction = () => target.removeEventListener("click", handler);
  }

  function performStepAction(step) {
    if (!step) return;

    const target = step.selector ? document.querySelector(step.selector) : null;
    if (!target) return;

    if (typeof step.beforeEnter === "function") {
      step.beforeEnter();
    }

    if (target.matches("a")) {
      target.click();
      if (step.finalStep) finishTour();
      return;
    }

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
      state.currentTarget = target;
      state.targetSelector = step.selector;
      target.classList.add("tour-target-active");
      target.scrollIntoView({ behavior: "smooth", block: "center" });

      titleEl.textContent = step.title;
      bodyEl.textContent = step.body;
      stepLabel.textContent = step.kicker;
      hintEl.textContent = step.hint || "";
      valueEl.textContent = step.value || "";
      backButton.disabled = index === 0;
      nextButton.textContent = step.finalStep ? "Finish" : "Next";
      nextButton.disabled = false;
      showMeButton.textContent = step.finalStep ? "Open Brief" : "Show Me";
      showMeButton.disabled = false;

      renderProgress(index);
      updateSpotlight(target);
      attachAdvanceOn(target, step);
    });
  }

  startButton.addEventListener("click", () => {
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
