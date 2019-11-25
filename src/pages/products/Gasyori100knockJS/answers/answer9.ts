/**
 * ガウシアンフィルター
 */
import * as tf from '@tensorflow/tfjs'

export default function gaussianFilter (
  src: ImageData,
  _dst: ImageData,
  canvas: HTMLCanvasElement
): void {
  const srcTensor = tf.browser.fromPixels(src)
  tf.browser.toPixels(srcTensor, canvas)
}
