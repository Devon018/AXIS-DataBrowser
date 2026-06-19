const browserState = {
  search: "",
  category: "all",
  difficulty: "all",
  page: 1,
  pageSize: 18,
  selectedRecordId: null,
  cameraView: "thirdPerson"
};

const browserEls = {
  taskList: document.querySelector("#task-list"),
  visibleTaskCount: document.querySelector("#visible-task-count"),
  visibleTaskLabel: document.querySelector("#visible-task-label"),
  pageLabel: document.querySelector("#page-label"),
  prevPage: document.querySelector("#prev-page"),
  nextPage: document.querySelector("#next-page"),
  search: document.querySelector("#task-search"),
  category: document.querySelector("#category-filter"),
  difficulty: document.querySelector("#difficulty-filter"),
  applyFilters: document.querySelector("#apply-filters"),
  detailKicker: document.querySelector("#detail-kicker"),
  detailTitle: document.querySelector("#detail-title"),
  detailRecordId: document.querySelector("#detail-record-id"),
  detailDescription: document.querySelector("#detail-description"),
  detailTags: document.querySelector("#detail-tags"),
  taskSummary: document.querySelector("#task-summary"),
  totalTasks: document.querySelector("#browser-total-tasks"),
  totalEpisodes: document.querySelector("#browser-total-episodes"),
  filteredRecords: document.querySelector("#filtered-records"),
  visibleDuration: document.querySelector("#visible-duration"),
  filteredTasks: document.querySelector("#filtered-tasks"),
  detailVideo: document.querySelector("#detail-video"),
  cameraToggle: document.querySelector("#camera-toggle")
};

const tasks = window.AXIS_BROWSER_DATA?.tasks || [];
const records = tasks.flatMap((task) => task.demos.map((demo) => ({ id: demo.id, task, demo })));
browserState.selectedRecordId = records[0]?.id || null;

function formatNumber(value) {
  return value.toLocaleString("en-US");
}

function formatDuration(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.round(totalSeconds % 60);
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
  return `${Math.max(1, seconds)}s`;
}

function formatFrameValue(demo) {
  return `${demo.estimatedFrames ? "~" : ""}${formatNumber(demo.frames)}`;
}

function getFilteredRecords() {
  const query = browserState.search.trim().toLowerCase();
  return records.filter(({ task, demo }) => {
    const text = [
      demo.id,
      demo.collector,
      task.id,
      task.title,
      task.slug,
      task.category,
      task.scene,
      task.source,
      demo.status,
      task.objects.join(" ")
    ].join(" ").toLowerCase();
    const matchesSearch = !query || text.includes(query);
    const matchesCategory = browserState.category === "all" || task.category === browserState.category;
    const matchesDifficulty = browserState.difficulty === "all" || String(task.difficulty) === browserState.difficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });
}

function getPageRecords(filteredRecords) {
  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / browserState.pageSize));
  browserState.page = Math.min(browserState.page, totalPages);
  const start = (browserState.page - 1) * browserState.pageSize;
  return filteredRecords.slice(start, start + browserState.pageSize);
}

function populateCategoryFilter() {
  if (!browserEls.category) return;
  const categories = [...new Set(tasks.map((task) => task.category))].sort();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    browserEls.category.appendChild(option);
  });
}

function renderChips(container, items) {
  container.innerHTML = "";
  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.textContent = item;
    container.appendChild(chip);
  });
}

function selectRecord(recordId) {
  browserState.selectedRecordId = recordId;
  renderRecordTable();
  renderRecordDetail();
}

function renderRecordTable() {
  if (!browserEls.taskList) return;
  const filtered = getFilteredRecords();
  const totalPages = Math.max(1, Math.ceil(filtered.length / browserState.pageSize));
  const pageRecords = getPageRecords(filtered);

  if (!filtered.some((record) => record.id === browserState.selectedRecordId)) {
    browserState.selectedRecordId = filtered[0]?.id || null;
  }

  browserEls.taskList.innerHTML = "";
  pageRecords.forEach(({ task, demo, id }) => {
    const row = document.createElement("tr");
    row.className = `task-row${id === browserState.selectedRecordId ? " is-selected" : ""}`;
    row.tabIndex = 0;
    row.setAttribute("aria-selected", String(id === browserState.selectedRecordId));
    row.dataset.recordId = id;
    row.innerHTML = `
      <td class="task-cell">
        <strong>${task.title}</strong>
        <span>${task.scene}</span>
      </td>
      <td>${task.category}</td>
      <td>${demo.collector}</td>
      <td>${formatFrameValue(demo)}</td>
      <td>${demo.duration}</td>
    `;
    row.addEventListener("click", () => selectRecord(id));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectRecord(id);
      }
    });
    browserEls.taskList.appendChild(row);
  });

  const visibleSeconds = pageRecords.reduce((sum, record) => sum + record.demo.durationSeconds, 0);
  const uniqueFilteredTasks = new Set(filtered.map((record) => record.task.id)).size;

  if (browserEls.visibleTaskCount) {
    browserEls.visibleTaskCount.textContent = formatNumber(pageRecords.length);
  }
  if (browserEls.visibleTaskLabel) {
    browserEls.visibleTaskLabel.textContent = `visible on this page of ${formatNumber(filtered.length)}`;
  }
  if (browserEls.pageLabel) {
    browserEls.pageLabel.textContent = `Page ${browserState.page} of ${totalPages}`;
  }
  if (browserEls.filteredRecords) browserEls.filteredRecords.textContent = formatNumber(filtered.length);
  if (browserEls.visibleDuration) browserEls.visibleDuration.textContent = formatDuration(visibleSeconds);
  if (browserEls.filteredTasks) browserEls.filteredTasks.textContent = formatNumber(uniqueFilteredTasks);
  if (browserEls.prevPage) browserEls.prevPage.disabled = browserState.page <= 1;
  if (browserEls.nextPage) browserEls.nextPage.disabled = browserState.page >= totalPages;
}

function getSelectedRecord() {
  return records.find((record) => record.id === browserState.selectedRecordId) || records[0];
}

function getDemoVideoSource(demo) {
  return demo.video?.[browserState.cameraView] || demo.video?.thirdPerson || demo.video?.wrist || "";
}

function updateCameraToggle(demo) {
  if (!browserEls.cameraToggle) return;
  browserEls.cameraToggle.querySelectorAll("[data-camera-view]").forEach((button) => {
    const view = button.dataset.cameraView;
    const hasView = Boolean(demo.video?.[view]);
    button.disabled = !hasView;
    button.classList.toggle("is-active", hasView && view === browserState.cameraView);
  });
}

function updateDetailVideo(demo) {
  if (!browserEls.detailVideo) return;
  const source = browserEls.detailVideo.querySelector("source");
  const nextSource = getDemoVideoSource(demo);
  if (!source || !nextSource) return;
  if (source.getAttribute("src") !== nextSource) {
    source.setAttribute("src", nextSource);
    browserEls.detailVideo.load();
  }
}

function renderRecordDetail() {
  const selected = getSelectedRecord();
  if (!selected) return;
  const { task, demo } = selected;
  const viewAvailable = Boolean(demo.video?.[browserState.cameraView]);
  if (!viewAvailable) browserState.cameraView = demo.video?.thirdPerson ? "thirdPerson" : "wrist";

  updateDetailVideo(demo);
  updateCameraToggle(demo);

  browserEls.detailKicker.textContent = `${task.id} / ${demo.status}`;
  browserEls.detailTitle.textContent = task.title;
  browserEls.detailRecordId.textContent = demo.id;
  browserEls.detailDescription.textContent = task.description;

  browserEls.taskSummary.innerHTML = `
    <div><span>Duration</span><strong>${demo.duration}</strong></div>
    <div><span>Frames</span><strong>${formatFrameValue(demo)}</strong></div>
    <div><span>Category</span><strong>${task.category}</strong></div>
    <div><span>Scene</span><strong>${task.scene}</strong></div>
    <div><span>Episode</span><strong>${String(demo.sourceEpisodeIndex).padStart(3, "0")}</strong></div>
    <div><span>Views</span><strong>${demo.cameraViews.length}</strong></div>
    <div><span>Clean Episodes</span><strong>${formatNumber(demo.cleaning.cleanEpisodes)}</strong></div>
    <div><span>Clean Frames</span><strong>${formatNumber(demo.cleaning.cleanFrames)}</strong></div>
  `;

  renderChips(browserEls.detailTags, task.objects);
}

function applyFilters() {
  browserState.search = browserEls.search?.value || "";
  browserState.category = browserEls.category?.value || "all";
  browserState.difficulty = browserEls.difficulty?.value || "all";
  browserState.page = 1;
  renderRecordTable();
  renderRecordDetail();
}

function setupPagination() {
  browserEls.prevPage?.addEventListener("click", () => {
    browserState.page = Math.max(1, browserState.page - 1);
    renderRecordTable();
  });
  browserEls.nextPage?.addEventListener("click", () => {
    browserState.page += 1;
    renderRecordTable();
  });
}

function setupCameraToggle() {
  browserEls.cameraToggle?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-camera-view]");
    if (!button || button.disabled) return;
    browserState.cameraView = button.dataset.cameraView;
    renderRecordDetail();
  });
}

function setupFilters() {
  browserEls.applyFilters?.addEventListener("click", applyFilters);
  [browserEls.category, browserEls.difficulty].forEach((field) => {
    field?.addEventListener("change", applyFilters);
  });
  browserEls.search?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") applyFilters();
  });
}

function initializeBrowser() {
  const totalEpisodes = records.length;
  if (browserEls.totalTasks) browserEls.totalTasks.textContent = formatNumber(tasks.length);
  if (browserEls.totalEpisodes) browserEls.totalEpisodes.textContent = formatNumber(totalEpisodes);
  populateCategoryFilter();
  setupFilters();
  setupPagination();
  setupCameraToggle();
  renderRecordTable();
  renderRecordDetail();
}

initializeBrowser();
