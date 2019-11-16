export default function RGBtoBGR (data: Uint8ClampedArray): void {
  for (let i = 0; i < data.length; i += 4) {
    // (r+g+b)/3
    const color = (data[i] + data[i + 1] + data[i + 2]) / 3
    data[i] = data[i + 1] = data[i + 2] = color
  }
}
