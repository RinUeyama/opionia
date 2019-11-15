export default function answer1 (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): ImageData {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  console.log(imageData)
  return imageData
}
