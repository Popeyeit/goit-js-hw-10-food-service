import refs from './refs'
import checkCorrect from './checkCorrect'
import setThemeOnOpeningPage from './setThemeOnOpeningPage'
export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('change', switchTheme)

setThemeOnOpeningPage()

function switchTheme(event) {
  if (event.currentTarget.checked) {
    checkCorrect.save('theme', Theme.DARK)
    refs.body.classList.remove(Theme.LIGHT)
    refs.body.classList.add(Theme.DARK)
    return
  }
  checkCorrect.save('theme', Theme.LIGHT)
  refs.body.classList.remove(Theme.DARK),
    refs.body.classList.add(Theme.LIGHT)
}
