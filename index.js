// Just some nav functionality

const projectsButton = 'projects-nav'
const aboutButton = 'about-nav'
const projects = 'projects'
const about = 'about'

const hide = 'hidden'

// On load...
if (document.readyState != 'loading'){
  fn()
} else {
  document.addEventListener('DOMContentLoaded', fn)
}

// ...Do this
async function fn() {
  document.getElementById(projectsButton).addEventListener("click", () => {
    document.getElementById(about).classList.add(hide);
    document.getElementById(projects).classList.remove(hide);
  })
  document.getElementById(aboutButton).addEventListener("click", () => {
    document.getElementById(projects).classList.add(hide);
    document.getElementById(about).classList.remove(hide);
  })
}

async function startServer() {
  const Authorization = passwordField.value
  try {
    const response = await fetch(apiGatewayUrl + start, {method: 'POST', headers: {Authorization}})
    if (response.ok) {
      passwordCorrect()
      serverStarting()
    }
  } catch (e) {
    passwordIncorrect()
  }
}

async function stopServer() {
  const Authorization = passwordField.value
  try {
    const response = await fetch(apiGatewayUrl + stop, {method: 'POST', headers: {Authorization}})
    if (response.ok) {
      passwordCorrect()
      serverStopping()
    }
  } catch (e) {
    passwordIncorrect()
  }
}