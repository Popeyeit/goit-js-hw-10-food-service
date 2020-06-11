import refs from './refs'
import Theme from './switch-theme'


function saveTheme() {
  const localTheme = localStorage.getItem('theme')
  if (localTheme === Theme.DARK) {
    refs.switch.defaultChecked = true
  }
  if (localTheme) {
    refs.body.classList.add(localTheme)
  }
}
export default saveTheme
