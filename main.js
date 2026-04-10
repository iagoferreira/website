const RESUME_HREF = "/resume.pdf";

const tabExperience = document.getElementById("tab-experience");
const tabAbout = document.getElementById("tab-about");
const panelExperience = document.getElementById("panel-experience");
const panelAbout = document.getElementById("panel-about");
const resumeLink = document.getElementById("resume-link");

if (resumeLink) {
  resumeLink.setAttribute("href", RESUME_HREF);
}

const tabs = [
  { tab: tabExperience, panel: panelExperience, id: "experience" },
  { tab: tabAbout, panel: panelAbout, id: "about" },
].filter((t) => t.tab && t.panel);

function selectTab(id) {
  for (const { tab, panel, id: tid } of tabs) {
    const on = tid === id;
    tab.setAttribute("aria-selected", on ? "true" : "false");
    tab.tabIndex = on ? 0 : -1;
    if (on) {
      panel.hidden = false;
    } else {
      panel.hidden = true;
    }
  }
  if (history.replaceState) {
    const hash = id === "experience" ? "" : `#${id}`;
    history.replaceState(null, "", `${window.location.pathname}${hash}`);
  }
}

function tabFromHash() {
  const h = (window.location.hash || "").slice(1).toLowerCase();
  if (h === "about") return "about";
  return "experience";
}

tabs.forEach(({ tab, id }) => {
  tab.addEventListener("click", () => selectTab(id));
});

tabExperience?.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    tabAbout?.focus();
    selectTab("about");
  }
});

tabAbout?.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    tabExperience?.focus();
    selectTab("experience");
  }
});

window.addEventListener("hashchange", () => {
  selectTab(tabFromHash());
});

selectTab(tabFromHash());
