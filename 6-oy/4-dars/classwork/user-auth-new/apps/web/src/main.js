const BASE = 'http://localhost:3000'
let accessToken = null

const ERROR_MESSAGES = {
  APP_USERNAME_REQUIRED: 'Username kiritilmagan',
  APP_USERNAME_INVALID: "Username faqat harf, raqam va _ bo'lishi kerak (3-20 ta belgi)",
  APP_USERNAME_ALREADY_EXISTS: 'Bu username allaqachon mavjud',
  APP_USERNAME_NOT_EXISTS: 'Bunday username topilmadi',
  APP_PASSWORD_REQUIRED: 'Parol kiritilmagan',
  APP_PASSWORD_TOO_SHORT: "Parol kamida 8 ta belgi bo'lishi kerak",
  APP_PASSWORD_MUST_CONTAIN_ONE_NUMBER: "Parolda kamida 1 ta raqam bo'lishi kerak",
  APP_PASSWORD_CONFIRMATION_DOES_NOT_MATCH: 'Parollar mos kelmadi',
  APP_PASSWORD_INVALID: "Parol noto'g'ri",
}

async function request(url, options = {}) {
  return fetch(BASE + url, {
    headers: {
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    },
    credentials: 'include',
    ...options
  })
}

const app = document.getElementById('app')

function renderAuth(activeTab = 'login') {
  app.innerHTML = `
    <div class="card">
      <div class="tabs">
        <button class="tab ${activeTab === 'login' ? 'active' : ''}" data-tab="login">Kirish</button>
        <button class="tab ${activeTab === 'signup' ? 'active' : ''}" data-tab="signup">Ro'yxatdan o'tish</button>
      </div>
      <form id="auth-form">
        <div class="field">
          <label>Username</label>
          <input id="username" type="text" placeholder="username" />
        </div>
        <div class="field">
          <label>Parol</label>
          <input id="password" type="password" placeholder="••••••••" />
        </div>
        ${activeTab === 'signup' ? `
        <div class="field">
          <label>Parolni tasdiqlang</label>
          <input id="confirmPassword" type="password" placeholder="••••••••" />
        </div>` : ''}
        <p id="error-msg" class="error"></p>
        <button type="submit" class="btn-primary">
          ${activeTab === 'login' ? 'Kirish' : "Ro'yxatdan o'tish"}
        </button>
      </form>
    </div>
  `

  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => renderAuth(btn.dataset.tab))
  })

  document.getElementById('auth-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const errorMsg = document.getElementById('error-msg')
    errorMsg.textContent = ''

    const username = document.getElementById('username').value.trim()
    const password = document.getElementById('password').value
    const confirmPasswordEl = document.getElementById('confirmPassword')
    const confirmPassword = confirmPasswordEl?.value

    const btn = e.target.querySelector('button[type="submit"]')
    btn.disabled = true

    try {
      const url = activeTab === 'login' ? '/login' : '/signup'
      const body = activeTab === 'login'
        ? { username, password }
        : { username, password, confirmPassword }

      const res = await request(url, { method: 'POST', body: JSON.stringify(body) })
      const data = await res.json()

      if (!res.ok) {
        errorMsg.textContent = ERROR_MESSAGES[data.code] || data.code
        return
      }

      accessToken = data.accessToken
      const payload = JSON.parse(atob(accessToken.split('.')[1]))
      renderDashboard(payload.username)
    } finally {
      btn.disabled = false
    }
  })
}

async function renderDashboard(username) {
  app.innerHTML = `
    <div class="dashboard">
      <header>
        <h2>Salom, <span>${username}</span>!</h2>
        <button id="logout-btn" class="btn-outline">Chiqish</button>
      </header>
      <section>
        <h3>Ranglar</h3>
        <div id="colors-list" class="colors-list">
          <p class="loading">Yuklanmoqda...</p>
        </div>
      </section>
    </div>
  `

  document.getElementById('logout-btn').addEventListener('click', async () => {
    await request('/logout', { method: 'POST' })
    accessToken = null
    renderAuth('login')
  })

  const res = await request('/colors', { method: 'POST' })
  const colorsList = document.getElementById('colors-list')

  if (!res.ok) {
    colorsList.innerHTML = "<p class='error'>Ma'lumot olishda xatolik</p>"
    return
  }

  const colors = await res.json()
  colorsList.innerHTML = colors.length
    ? colors.map(c => `<div class="color-item" style="background:${c}"><span>${c}</span></div>`).join('')
    : '<p>Ranglar yo\'q</p>'
}

async function boot() {
  try {
    const res = await request('/refresh', { method: 'POST' })
    if (res.ok) {
      const data = await res.json()
      accessToken = data.accessToken
      const payload = JSON.parse(atob(accessToken.split('.')[1]))
      renderDashboard(payload.username)
    } else {
      renderAuth('login')
    }
  } catch {
    renderAuth('login')
  }
}

boot()
