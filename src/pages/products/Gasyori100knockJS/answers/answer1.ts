/**
 * 1番目のチャネルと3番目のチャネルを入れ替えます．
 */
export default function RGBtoBGR (
  srcData: Uint8ClampedArray,
  dstData: Uint8ClampedArray
): void {
  for (let i = 0; i < srcData.length; i += 4) {
    dstData[i + 0] = srcData[i + 2] // R -> B
    dstData[i + 1] = srcData[i + 1] // G -> G
    dstData[i + 2] = srcData[i + 0] // B -> R
    dstData[i + 3] = srcData[i + 3] // a -> a
  }
}
