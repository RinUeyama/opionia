/**
 * 減色処理
 */
export default function subtractiveColor (
  src: ImageData,
  dst: ImageData
): void {
  for (let i = 0; i < src.data.length; i++) {
    /** RGBaからRGBを抜き出して減色処理を施します */
    if (i % 4 === 3) {
      dst.data[i] = src.data[i]
    } else {
      /** 64 区切りで 32, 96, 160, 224 に色をまるめます */
      dst.data[i] = 64 * (1 + Math.floor(src.data[i] / 64)) - 32
    }
  }
}
