const themes = ['dark', 'light']

const switchThemes = () => {
    const body = document.querySelector('body')
    const currentTheme = body.classList[0].replace('c--theme-', '')
    const currentThemeIndex = themes.indexOf(currentTheme)
    // move to next theme
    const newTheme = `c--theme-${
        themes[(currentThemeIndex + 1) % themes.length]
    }`
    body.classList = newTheme
    localStorage.setItem('theme', newTheme)
}

const processForm = form => {
    const data = new FormData(form)
    data.append('form-name', 'newsletter');
    fetch('/', {
        method: 'POST',
        body: data,
    })
        .then(() => {
            form.innerHTML = `<div class="form--success">Thank you! Check your inbox for a confirmation e-mail.</div>`;
            
        })
        .catch(error => {
            
        })
}

window.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.nav--theme-switcher')
    themeToggle.addEventListener('click', e => {
        e.preventDefault()
        switchThemes()
    })

    const emailForm = document.querySelector('.email-form')

    if (emailForm) {
        emailForm.addEventListener('submit', e => {
            e.preventDefault();
            processForm(emailForm);
        })
    }
})
