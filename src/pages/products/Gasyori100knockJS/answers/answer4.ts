/**
 * 大津の二値化（省略）
 */
import grayscale from './answer2'

export default function binarizeOtsu (
  srcData: Uint8ClampedArray,
  dstData: Uint8ClampedArray
): void {
  grayscale(srcData, dstData)
  const threshhold = 128

  for (let i = 0; i < srcData.length; i++) {
    /** RGBaからRGBを抜き出して二値化を施す */
    if (i % 4 !== 3) {
      dstData[i] > threshhold ? dstData[i] = 255 : dstData[i] = 0
    }
  }
}
