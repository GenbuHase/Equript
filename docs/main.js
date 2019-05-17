/** @type {HTMLInputElement} */
const formulaInputter = document.getElementById("tester-formula");
const codePreviewPanel = document.getElementById("tester-info-code_preview");
const resultPanel = document.getElementById("tester-info-result");
/** @type {HTMLButtonElement} */
const runButton = document.getElementById("tester-run");



formulaInputter.addEventListener("input", e => {
	codePreviewPanel.textContent = `new Equript.Equation("${e.target.value}").get({ });`;
});

runButton.addEventListener("click", () => {
	try {
		resultPanel.textContent = new Equript.Equation(formulaInputter.value).get({ });
	} catch (err) {
		M.toast({ html: err, classes: "red" });
		throw err;
	}
});