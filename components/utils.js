const TOTAL_PROJECTS_COMPLETE = 10

const jumpToProjects = () => {
	let jumpToPrjHtml = '<h1 style="text-align: center;">Jump to project</h1><div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; line-height: 1;">'
	for (let i = 1; i <= TOTAL_PROJECTS_COMPLETE; i++) {
		jumpToPrjHtml += `<a href="/${i}" class="prjLink">${i}</a>`

		if (i === TOTAL_PROJECTS_COMPLETE) {
			jumpToPrjHtml += '</div>'
		}
	}
	return document.write(jumpToPrjHtml)
}

const forwardAndBackwardsArrow = (backward, forward) => {
	return document.write
		(`
			<div style="display: flex; justify-content: space-between;">
				<a class="arrow" href="/${backward}">&#x2190;</a>
				<a class="arrow" href="/${forward}">&#x2192;</a>
			</div>
		`)
}

const backArrowOnly = (backward) => {
	return document.write
		(`
			<div style="display: flex; justify-content: start;">
				<a class="arrow" href="/${backward}">&#x2190;</a>
			</div>
		`)
}

const forwardArrowOnly = (forward) => {
	return document.write
		(`
			<div style="display: flex; justify-content: end;">
				<a class="arrow" href="/${forward}">&#x2192;</a>
			</div>
		`)
}

const workOutCurrentPage = () => {
	let path = window.location.pathname
	path = path.replace('.html', '')
	path = path.replace('/', '')
	return parseInt(path, 10)
}