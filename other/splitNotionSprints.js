/*
export tasks with sprint column and this will group them by sprint
*/
(() => {
	const article = document.querySelector("article");
	const sprintsTxt = prompt("Enter sprints separated by commas");
	const sprints = sprintsTxt.split(",");
	for (const sprint of sprints) {
		const newArticle = article.cloneNode(true);
		document.querySelector("body")?.appendChild(newArticle);
		document.querySelector(".page-header-icon")?.remove();
		const sprintName = `Sprint ${sprint}`;
		newArticle.querySelector("h1").innerHTML = sprintName;
		newArticle.querySelectorAll("tbody tr").forEach((row) => {
			if (!row.textContent.includes(sprintName)) {
				row.remove();
			}
		});
	}
	article.remove();
	document.head.insertAdjacentHTML(
		"beforeend",
		`<style>
	.collection-content{width:100%;}
</style>`
	);
})();
