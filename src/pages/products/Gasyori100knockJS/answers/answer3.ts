/**
 * 二値化
 */
import grayscale from './answer2'

export default function binarize (
  src: ImageData,
  dst: ImageData
): void {
  grayscale(src, dst)
  const threshhold = 128

  for (let i = 0; i < src.data.length; i++) {
    /** RGBaからRGBを抜き出して二値化を施します */
    if (i % 4 === 3) {
      dst.data[i] = src.data[i]
    } else {
      dst.data[i] > threshhold ? dst.data[i] = 255 : dst.data[i] = 0
    }
  }
}
