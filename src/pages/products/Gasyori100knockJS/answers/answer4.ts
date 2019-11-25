/**
 * 大津の二値化（省略）
 */
import grayscale from './answer2'

export default function binarizeOtsu (
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
