/**
 * RGBtoHSV
 */
export default function RGBtoHSV (
  src: ImageData,
  dst: ImageData
): void {
  for (let i = 0; i < src.data.length; i++) {
    dst.data[i] = src.data[i]
  }
}
