/**
 * ガウシアンフィルター
 */
import * as tf from '@tensorflow/tfjs'

export default function gaussianFilter (
  src: ImageData,
  _dst: ImageData,
  canvas: HTMLCanvasElement
): void {
  const srcTensor: tf.Tensor<tf.Rank.R3> = tf.browser.fromPixels(src)

  const kernel: tf.Tensor<tf.Rank.R3> = tf.tensor3d(
    [
      [[1, 1, 1], [2, 2, 2], [1, 1, 1]],
      [[2, 2, 2], [4, 4, 4], [2, 2, 2]],
      [[1, 1, 1], [2, 2, 2], [1, 1, 1]]
    ]
  )

  const padTensor: tf.Tensor<tf.Rank.R3> = tf.pad(srcTensor, [[1, 1], [1, 1], [0, 0]])
  const dstTensor: tf.Tensor<tf.Rank.R3> = tf.zerosLike(padTensor)

  for (let i = 0; i < src.width - 2; i++) {
    for (let j = 0; j < src.height - 2; j++) {
      tf.add(dstTensor.slice([i, j], [i + 3, j + 3]), srcTensor.slice([i, j], [i + 3, j + 3])).matMul(kernel)
    }
  }

  console.log(`Dst after for: ${dstTensor}`)

  tf.browser.toPixels(dstTensor, canvas)
}
