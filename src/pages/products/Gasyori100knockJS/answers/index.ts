/**
 * @file 解答済みのanswerXXXを取り込んで，
 *
 */

import RGBtoBGR from './answer1'
import grayscale from './answer2'
import binalize from './answer3'
import binalizeOtsu from './answer4'
import RGBtoHSV from './answer5'
import subtractiveColor from './answer6'

/**
 * キャンバスに画像を描画する関数．
 */
export function drawCanvas (canvasId: string, image: HTMLImageElement): void {
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

/**
 * 画像に指定idの画像処理関数を施してキャンバスに描画する関数
 */
export function answerFunction (id: number, canvasId: string, image: HTMLImageElement): void {
  // 画像処理関数のリスト．インデックスを指定してアクセス．
  const answers: any = [
    /** 1 */ RGBtoBGR,
    /** 2 */ grayscale,
    /** 3 */ binalize,
    /** 4 */ binalizeOtsu,
    /** 5 */ RGBtoHSV,
    /** 6 */ subtractiveColor
  ]

  /**
   * 画像処理関数が存在すれば
   * 画像処理を適用してキャンバスに描画します．
   * TODO: 処理が drawCanvas と被るので，もう一度出てくれば別関数で切り出しましょう．
   */
  if (answers[id - 1]) {
    const _image: HTMLImageElement = new Image()

    _image.onload = () => {
      const canvas: HTMLCanvasElement = document.getElementById(canvasId) as HTMLCanvasElement
      canvas.width = _image.naturalWidth
      canvas.height = _image.naturalHeight

      const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
      ctx.drawImage(_image, 0, 0)

      let src: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      let dst: ImageData = ctx.createImageData(_image.naturalWidth, image.naturalHeight)
      answers[id - 1](src.data, dst.data)

      ctx.putImageData(dst, 0, 0)
    }

    _image.src = image.src
  } else {
    console.log("the value of 'id' argment in answerFunction is invalid. just input number like '28' not 'answer28', or you did, the answer does not exist now.")
  }
}
