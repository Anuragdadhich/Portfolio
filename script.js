function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.style.display = "none");

    const activeTab = document.getElementById(tabId);
    if (activeTab) activeTab.style.display = "block";
  }

