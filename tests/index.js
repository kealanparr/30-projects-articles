const axios = require('axios')
const validator = require('html-validator')
// const parser = require('node-html-parser')

const checkValidHTML = async response => {
  const options = {
    data: response.data
	}
  
  try {
    const htmlValidity = await validator(options)
    if (htmlValidity.messages.length !== 0) {
			console.error(`Issues with the page ${response.request.path}!`)
			console.error('To fix this, you can take a look at what is broken with the HTML here: https://validator.w3.org/#validate_by_input')
		}
  } catch (err) {
    console.error('Failed to check valid HTML', err)
  }
}

const checkArticle = async url => {
	try {
		await axios.get(encodeURI(url)).then(response => {
			checkValidHTML(response)
	})
	} catch (err) {
		console.error(`Failed on the GET request for url ${url}`, err)
	}
}


checkArticle('https://30-projects-articles.com')
checkArticle('https://30-projects-articles.com/1')
checkArticle('https://30-projects-articles.com/2')
checkArticle('https://30-projects-articles.com/3')
checkArticle('https://30-projects-articles.com/4')
checkArticle('https://30-projects-articles.com/5')
checkArticle('https://30-projects-articles.com/6')
checkArticle('https://30-projects-articles.com/7')