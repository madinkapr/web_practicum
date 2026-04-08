import "./main.css"
import * as CONFIG from "./CONFIG"

const state = {
	category: 0,
	page: 1,
	count: 10,
	name: ""
}

const categories = document.getElementById("categories")
const count = document.getElementById("count")
const loadMore = document.getElementById("loadMore")
const booksList = document.querySelector(".books ul")
const search = document.getElementById("search")

await loadCategories()
await updateBooks()

categories.onchange = async () => {

	state.page = 1
	state.category = categories.value
	booksList.innerHTML = ""

	await updateBooks()
}

count.onchange = async () => {

	state.page = 1
	state.count = parseInt(count.value)
	booksList.innerHTML = ""

	await updateBooks()
}

loadMore.onclick = async () => {

	state.page++

	await updateBooks()
}

search.oninput = async () => {
	state.page = 1
	state.name = search.value
	booksList.innerHTML = ""

	await updateBooks()
}

async function updateBooks() {

	const books = await getBooks(state)

	const regex = state.name ? new RegExp(`(${state.name})`, 'gi') : null

	// console.log( books )

	books.forEach(book => {

		const li = document.createElement("li")
		li.innerHTML = `
			<img src="${book.cover_url}" alt="${book.name}" />
			<h3>${regex ? book.name.replace(regex, '<b>$1</b>') : book.name}</h3>
			<p>Author: ${regex ? book.author.replace(regex, '<b>$1</b>') : book.author}</p>
			<p>Price: ${book.price}</p>
			<p>Category: ${book.category_name}</p>
		`
		booksList.appendChild(li)
	})
}

async function loadCategories() {

	const data = await fetch(`${CONFIG.API_URL}/categories`)
	const categoriesList = await data.json()

	categoriesList.forEach(category => {

		const option = document.createElement("option")
		option.value = category.id
		option.textContent = category.name
		categories.appendChild(option)
	})
}

async function getBooks({ category, page, count, name } = {}) {

	const query = new URLSearchParams({
		category,
		page,
		count,
		name
	})

	const booksURL = `${CONFIG.API_URL}/books?${query.toString()}`

	const response = await fetch(booksURL)
	const json = await response.json()

	return json
}
