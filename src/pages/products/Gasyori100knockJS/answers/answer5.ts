/**
 * RGBtoHSV
 */
export default function RGBtoHSV (
  srcData: Uint8ClampedArray,
  dstData: Uint8ClampedArray
): void {
  for (let i = 0; i < srcData.length; i++) {
    dstData[i] = srcData[i]
  }
}
