// Common.
let elm;
let content;

// Menu.
const elmsMenu = document.querySelectorAll('.ui-menuitem-link');
const revisions = [
	'114(1) (Return of Income filed voluntarily for complete year)',
	'114(6) (Return of Income filed after revision for complete year)',
	'116(3) (Statement of Assets / Liabilities filed after revision)'
];

const filings = [
	'114(1) (Return of Income filed voluntarily for complete year)',
	'116(2) (Statement of Assets / Liabilities filed voluntarily)'
];

for (let i = 0; i < elmsMenu.length; i++) {
	elm = elmsMenu[i];
	content = elm.innerText.trim();
	if (revisions.indexOf(content) !== -1) {
		elm.style = 'background: #fad000';
	}

	if (filings.indexOf(content) !== -1) {
		elm.style = 'background: #bada55';
	}
}

// Lists.
const elmsList = document.querySelectorAll('td');
const returns = [
	'114(1) (Return of Income filed voluntarily for complete year)',
	'114(4) (Return of Income filed on notice for complete year)',
	'114(6) (Return of Income filed after revision for complete year)'
];

const wealthStatements = [
	'116(3) (Statement of Assets / Liabilities filed after revision)',
	'116(2) (Statement of Assets / Liabilities filed voluntarily)',
	'116(2) (Statement of Assets / Liabilities filed voluntarily)'
];

const notices = ['114(4) (Notice to file Return of Income for complete year)'];

for (let i = 0; i < elmsList.length; i++) {
	elm = elmsList[i];
	content = elm.innerText.trim();

	if (returns.indexOf(content) !== -1) {
		elm.style = 'background: #cfb4ff !important';
	}

	if (wealthStatements.indexOf(content) !== -1) {
		elm.style = 'background: #6dff93fa !important';
	}

	if (notices.indexOf(content) !== -1) {
		elm.style = 'background: mistyrose !important';
	}
}
