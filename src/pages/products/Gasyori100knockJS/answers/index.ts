/**
 * @file 解答済みのanswerXXXを取り込んで，
 *
 */

import answer1 from './answer1'
import answer2 from './answer2'

export function drawCanvas (canvasId: string, image: HTMLImageElement): void {
  /**
   * キャンバスに画像を描画する関数．黄金律のようなものなので改変しないでください．
   * @param canvasId: canvasのid
   * @param imagePath: 画像へのパス．Vueなので，ビルド後のパスかURLで指定してください．
   */
  const _image: HTMLImageElement = new Image()

  _image.onload = () => {
    const canvas: HTMLCanvasElement = document.getElementById(canvasId) as HTMLCanvasElement
    canvas.width = _image.naturalWidth
    canvas.height = _image.naturalHeight

    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.drawImage(_image, 0, 0)
  }
  _image.src = image.src
}

export function answerFunction (id: number, canvasId: string, image: HTMLImageElement): void {
  const answers: any = [
    answer1,
    answer2
  ]
  if (answers[id - 1]) {
    drawCanvas(canvasId, image)
    const canvas: HTMLCanvasElement = document.getElementById(canvasId) as HTMLCanvasElement
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D

    const newImageData = answers[id - 1](canvas, ctx)
    ctx.putImageData(newImageData, 0, 0)
  } else {
    console.log("the value of 'id' argment in answerFunction is invalid. just input number like '28' not 'answer28', or you did, the answer does not exist now.")
  }
}
