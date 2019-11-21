/**
 * 減色処理
 */
export default function subtractiveColor (
  srcData: Uint8ClampedArray,
  dstData: Uint8ClampedArray
): void {
  for (let i = 0; i < srcData.length; i++) {
    /** RGBaからRGBを抜き出して減色処理を施します */
    if (i % 4 === 3) {
      dstData[i] = srcData[i]
    } else {
      /** 64 区切りで 32, 96, 160, 224 に色をまるめます */
      dstData[i] = 64 * (1 + Math.floor(srcData[i] / 64)) - 32
    }
  }
}
