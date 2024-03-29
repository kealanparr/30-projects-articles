const axios = require('axios')
const validator = require('html-validator')

const TOTAL_PROJECTS = 8

const checkValidHTML = async response => {
  const options = {
    data: response.data
	}
  
  try {
    const htmlValidity = await validator(options)
    if (htmlValidity.messages.length !== 0) {
			console.error(`Issues with the page ${response.request.path}!`)
			console.error('To fix this, you can take a look at what is broken with the HTML here: https://validator.w3.org/#validate_by_input')
			process.exit(1)
		}
		return response
  } catch (err) {
    console.error('Failed to check valid HTML', err)
		process.exit(1)
  }
}

const checkArticle = async url => {
	try {
		await axios.get(encodeURI(url)).then(response => {
			checkValidHTML(response)
	})
	} catch (err) {
		console.error(`Failed on the GET request for url ${url}`, err)
		process.exit(1)
	}
}

(async () => {
	for (let i = 1; i <= TOTAL_PROJECTS; i++) {
		await checkArticle(`https://30-projects-articles.com/${i}`)
	}
})()