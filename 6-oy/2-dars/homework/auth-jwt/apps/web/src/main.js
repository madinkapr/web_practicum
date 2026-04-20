import "./main.css"

const app = document.getElementById("app")

checkRoutes()

function checkRoutes() {
    const user = getUser() // Foydalanuvchini olamiz

    if (window.location.pathname === "/") {
        if (!isLoggedIn()) {
            return (window.location.pathname = "/join")
        }
        homePage()
    }
    else if (window.location.pathname === "/join" || window.location.pathname === "/login") {
        if (isLoggedIn()) {
            // LOGIN QILGAN BO'LSA:
            if (user.is_admin) {
                return (window.location.pathname = "/users") // Admin bo'lsa /users
            } else {
                return (window.location.pathname = "/")      // Admin bo'lmasa / (Home)
            }
        }
        window.location.pathname === "/join" ? joinPage() : loginPage()
    }
    else if (window.location.pathname === "/users") {
        if (!isLoggedIn()) {
            return (window.location.pathname = "/login")
        }
        usersPage()
    }
}


function homePage() {

	const user = getUser()

	const innerHTML = `
		
		<div class="dashboard-card">
			<h1>Xush kelibsiz, @${user.username}!</h1>
			<p>Siz tizimga muvaffaqiyatli kirdingiz.</p>
			<button id="logout">Logout</button>
		</div>
	`

	app.innerHTML = innerHTML

	const logoutButton = document.getElementById("logout")

	logoutButton.onclick = () => {

		if (logout()) {

			window.location.pathname = "/"
		}
	}
}

function joinPage() {

	const innerHTML = `
		<form class="auth">
			<div>
				<input id="username" type="text" autocomplete="username" placeholder="Username" required>
			</div>
			<div>
				<input id="email" type="email" placeholder="Email" />
			</div>
			<div>
				<input id="password" type="password" autocomplete="new-password" placeholder="Password" required>
			</div>
			<div>
				<button>Signup</button>
			</div>
			<div>
				<a href='/login'>Login</a>
			</div>
		</form>
	`

	app.innerHTML = innerHTML

	//

	const username = document.getElementById("username")
	const password = document.getElementById("password")
	const email = document.getElementById("email")
	const form = document.querySelector("form")

	//

	form.onsubmit = async e => {

		e.preventDefault()

		const body = {
			username: username.value,
			password: password.value,
			email: email.value,
		}

		try {
			//sign up
			const response = await fetch("http://localhost:3000/join", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			})

			if (!response.ok) {
				const errorData = await response.json()
				if (errorData.code === "APP_AUTH_USERNAME_EXISTS") {
					throw new Error("This username already signed up!");
				}
				throw new Error("Signup failed!");
			}

			// login
			const response2 = await fetch("http://localhost:3000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			})

			const json = await response2.json()

			localStorage.setItem("auth_token", json.token)
			localStorage.setItem("user", JSON.stringify({ username: json.username }))

			window.location.pathname = "/"
		}
		catch (error) {

			console.error(error)
			alert(error.message)
		}
	}
}


function loginPage() {
	const innerHTML = `
		<form class="auth">
			<div>
				<input id="username" type="text" autocomplete="username" placeholder="Username" required>
			</div>
			<div>
				<input id="password" type="password" autocomplete="new-password" placeholder="Password" required>
			</div>
			<div>
				<button>Login</button>
			</div>
			<div>
				<a href='/join'>Signup</a>
			</div>
		</form>
	`

	app.innerHTML = innerHTML

	const username = document.getElementById("username")
	const password = document.getElementById("password")
	const form = document.querySelector("form")

	form.onsubmit = async e => {
		e.preventDefault()

		const body = {
			username: username.value,
			password: password.value,
		}

		try {
			const response = await fetch("http://localhost:3000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			})

			if (!response.ok) {
				const errorData = await response.json()

				if (errorData.code === "APP_AUTH_USER_NOT_FOUND") {
					throw new Error("Bunday foydalanuvchi topilmadi!");
				}
				else if (errorData.code === "Incorrect password") {
					throw new Error("Parol noto'g'ri! Iltimos, qaytadan tekshiring.");
				}

				throw new Error("Kirishda xatolik yuz berdi!");
			}

			const json = await response.json()

			localStorage.setItem("auth_token", json.token)
			localStorage.setItem("user", JSON.stringify({
				username: json.username,
				is_admin: json.is_admin
			}))

			if (json.is_admin) {
				window.location.pathname = "/users"
			}
			else {
				window.location.pathname = "/"
			}
		}
		catch (error) {
			console.error(error)
			alert(error.message)
		}
	}
}

async function usersPage() {

	const user = getUser()

	app.innerHTML = `<h1>Loading list...</h1>`

	try {
		const response = await fetch("http://localhost:3000/users", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + localStorage.getItem("auth_token")
			},
		})
		if (!response.ok) {
			throw new Error("Failed to get users")
		}

		const users = await response.json()

		const innerHTML = `
            <h1>User list</h1>
            <ul>
                ${users.map(u => `<li>${u}</li>`).join("")}
            </ul>
            <p>You entered as <b>@${user.username}</b></p>
            <button id="logout">Logout</button>
        `
		app.innerHTML = innerHTML

		document.getElementById("logout").onclick = () => {
			if (logout()) window.location.pathname = "/"
		}
	}
	catch (error) {
		console.log(error)
		alert("Sizda bu sahifaga kirish huquqi yo'q!")
		window.location.pathname = "/"
	}
}


function isLoggedIn() {

	return !!localStorage.getItem("auth_token")
}

function getUser() {

	return JSON.parse(localStorage.getItem("user") || "{}")
}

function logout() {

	localStorage.removeItem("auth_token")
	localStorage.removeItem("user")

	return true
}


