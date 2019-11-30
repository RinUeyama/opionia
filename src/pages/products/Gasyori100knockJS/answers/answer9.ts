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

  const gaussianKernel = (
    ksize: number,
    sigma: number
  ) => {
    if (ksize % 2 === 0) {
      console.error(`ksize is inputed ${ksize}. ksize must be odd.`)
    }

    const x: tf.Tensor<tf.Rank.R1> = tf.linspace(-sigma, sigma, ksize)
    const y: tf.Tensor<tf.Rank.R1> = tf.linspace(-sigma, sigma, ksize)
    console.log(`x, y: ${x}, ${y}`)
    const kernel = tf.exp(-(tf.square(x).add(tf.square(y))).floorDiv(2 * Math.pow(sigma, 2))).floorDiv(Math.sqrt(2 * Math.PI) * sigma)

    return kernel
  }

  console.log(`kernel: ${gaussianKernel(3, 1.3)}`)

  const kernel = gaussianKernel(3, 1.3)

  const padTensor = srcTensor.pad([[1, 1], [1, 1]])
  let dstTensor = tf.zeros([src.height, src.width, 3]).pad([[1, 1], [1, 1]])

  for (let i = 0; i < src.width; i++) {
    for (let j = 0; j < src.height; j++) {
      tf.add(dstTensor.slice([i, j], [3, 3]), padTensor.slice([i, j], [3, 3]).matMul(kernel))
    }
  }

  console.log(`Dst after for: ${dstTensor}`)
}
