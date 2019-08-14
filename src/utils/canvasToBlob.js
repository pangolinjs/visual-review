/**
 * Promisified `toBlob()` method
 * @param {HTMLCanvasElement} canvas Canvas to convert
 * @param {String} mimetype Desired mimetype
 * @return {Promise<Blob>} The Blob
 */
export default function (canvas, mimetype) {
  return new Promise(resolve => {
    canvas.toBlob(blob => resolve(blob), mimetype)
  })
}
