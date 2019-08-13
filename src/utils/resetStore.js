import { title, comment } from '../store'

/**
 * Reset store
 */
export default function () {
  title.set('')
  comment.set('')
}
