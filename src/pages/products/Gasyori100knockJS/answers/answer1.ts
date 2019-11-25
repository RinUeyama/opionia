/**
 * 1番目のチャネルと3番目のチャネルを入れ替えます．
 */
export default function RGBtoBGR (
  src: ImageData,
  dst: ImageData
): void {
  for (let i = 0; i < src.data.length; i += 4) {
    dst.data[i + 0] = src.data[i + 2] // R -> B
    dst.data[i + 1] = src.data[i + 1] // G -> G
    dst.data[i + 2] = src.data[i + 0] // B -> R
    dst.data[i + 3] = src.data[i + 3] // a -> a
  }
}
