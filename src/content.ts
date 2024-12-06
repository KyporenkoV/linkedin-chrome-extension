(() => {
  setTimeout(() => {
    const jobTitles = getJobTitlesOfSearchers();
    if (jobTitles.length === 0) return;
    const appearanceNumber = getAppearanceNumber();
    const jobTitlesBlockTitle = getJobTitlesBlockTitle();
    try {
      jobTitlesBlockTitle.textContent = `${jobTitlesBlockTitle.innerText} (${appearanceNumber})`;
    } catch (error) {
      console.error(
        `Failed to set textContent for jobTitlesBlockTitle.\nError: ${error}\nData: ${jobTitlesBlockTitle}`,
      );
    }

    updateJobTitles(jobTitles, appearanceNumber);
  }, 3000);
})();

function getAppearanceNumber(): number {
  const selector = '.member-analytics-addon-summary__list-item div p';
  const appearanceNumberElement = document.querySelector(selector) as HTMLElement;
  if (!appearanceNumberElement) throw new Error('appearanceNumber element not found on the page');
  return +appearanceNumberElement.innerText;
}

function getJobTitlesOfSearchers(): NodeListOf<HTMLElement> {
  const selector = '.member-analytics-addon-bar-chart__bar-label.t-14';
  const jobTitlesOfSearchersElements = document.querySelectorAll(selector);
  if (jobTitlesOfSearchersElements.length === 0) throw new Error('Job Titles not found on the page');
  return jobTitlesOfSearchersElements as NodeListOf<HTMLElement>;
}

function getJobTitlesBlockTitle(): HTMLElement {
  const jobTitlesBlockTitle = 'Top job titles of your searchers';
  const selector = 'member-analytics-addon-header__title';
  const pageTitlesElements = document.getElementsByClassName(selector) as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < pageTitlesElements.length; i++) {
    if (pageTitlesElements[i].innerText === jobTitlesBlockTitle) return pageTitlesElements[i];
  }
  throw new Error('Title of Job Titles block not found on the page');
}

function updateJobTitles(jobTitles: NodeListOf<HTMLElement>, appearanceNumber: number): void {
  try {
    let unknownJobRolesPercentage = 100;
    let unknownJobRolesNumber = appearanceNumber;

    for (let i = 0; i < jobTitles.length; i++) {
      const addonBarChartSelector = '.member-analytics-addon-bar-chart__bar';
      const addonBarChart = document.querySelectorAll(addonBarChartSelector) as NodeListOf<HTMLElement>;

      const jobTitleInfo = jobTitles[i].innerText;
      const splitPosition = jobTitleInfo.lastIndexOf(' ');
      const percent = jobTitleInfo.slice(splitPosition + 1, jobTitleInfo.length - 1);
      const percentage = +percent.replace('%', '');
      unknownJobRolesPercentage -= percentage;
      addonBarChart[i].style.width = percent + '%';
      const percentOfOneNumber = 100 / appearanceNumber;
      const titleNumber = Math.round(percentage / percentOfOneNumber);
      unknownJobRolesNumber -= titleNumber;
      jobTitles[i].textContent = `${jobTitleInfo} (${titleNumber})`;
    }

    addJobTitleInfoRow('UNKNOWN JOB TITLES', Math.round(unknownJobRolesPercentage), unknownJobRolesNumber);
  } catch (error) {
    console.error(`Updating job titles failed: ${error}`);
  }
}

function addJobTitleInfoRow(title: string, percentage: number, number: number) {
  try {
    const infoBlocks = document.querySelectorAll('[aria-labelledby*="member-analytics-addon-card-"]');
    const jobTitlesParent = infoBlocks[infoBlocks.length - 1];
    const row = document.getElementsByClassName('member-analytics-addon-bar-chart__row');
    const newRow = row[row.length - 1].cloneNode(true) as Document;

    const updatedRowInfo = `${title} ${percentage}% (${number})`;
    const rowTitle = newRow.getElementsByClassName('member-analytics-addon-bar-chart__bar-label')[0];
    rowTitle.textContent = updatedRowInfo;

    const rowBar = newRow.getElementsByClassName('member-analytics-addon-bar-chart__bar')[0] as HTMLElement;
    rowBar.style.width = `${percentage}%`;

    jobTitlesParent.appendChild(newRow);
  } catch (error) {
    console.error(`Adding job titles failed: ${error}`);
  }
}
