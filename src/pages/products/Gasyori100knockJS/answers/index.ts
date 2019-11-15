/**
 * @file 解答済みのanswerXXXを取り込んで，
 *
 */

import answer1 from './answer1'
import answer2 from './answer2'

export function getContext2DfromHTMLCanvasID (canvasID: string): CanvasRenderingContext2D {
  const canvas = <HTMLCanvasElement> document.getElementById(canvasID)
  const ctx = <CanvasRenderingContext2D> canvas.getContext('2d')
  return ctx
}

export function answerFunction (id: number, ctx: CanvasRenderingContext2D, image: HTMLImageElement): void {
  const answers: any = [
    answer1,
    answer2
  ]
  if (answers[id - 1]) {
    ctx.drawImage(image, 0, 0, image.width, image.height)
    const imageData = ctx.getImageData(0, 0, image.width, image.height)
    const dst = ctx.createImageData(image.width, image.height)

    answers[id](ctx, imageData, dst)
  } else {
    console.log("the value of 'id' argment in answerFunction is invalid. just input number like '28' not 'answer28', or you did, the answer does not exist now.")
  }
}
