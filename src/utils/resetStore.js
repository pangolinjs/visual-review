import { title, comment, screenshot } from '../store'

/**
 * Reset store
 */
export default function () {
  title.set('')
  comment.set('')
  screenshot.set(null)
}
