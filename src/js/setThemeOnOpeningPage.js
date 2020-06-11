import refs from './refs';
import checkCorrect from './checkCorrect'
import {
  Theme
} from './switch-theme'
export default function setThemeOnOpeningPage() {
  const savedStorage = checkCorrect.load('theme')
  if (savedStorage) {
    refs.body.classList.add(savedStorage)
  }
  if (savedStorage === Theme.DARK) {
    refs.switch.checked = true
  }
}
