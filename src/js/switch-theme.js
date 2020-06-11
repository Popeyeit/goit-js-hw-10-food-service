import refs from './refs'
import saveTheme from './saveTheme'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
export default Theme

refs.switch.addEventListener('change', switchTheme)

saveTheme()

function switchTheme(event) {
  if (event.currentTarget.checked) {
    localStorage.setItem('theme', Theme.DARK)
    refs.body.classList.remove(Theme.LIGHT)
    refs.body.classList.add(Theme.DARK)
  } else(
    localStorage.setItem('theme', Theme.LIGHT),
    refs.body.classList.remove(Theme.DARK),
    refs.body.classList.add(Theme.LIGHT)
  )
}
