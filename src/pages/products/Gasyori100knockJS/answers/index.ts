/**
 * @file 解答済みのanswerXXXを取り込んで，
 *
 */

import answer2 from './answer2'
import RGBtoBGR from './answer1'

export function drawCanvas (canvasId: string, image: HTMLImageElement): void {
  /**
   * キャンバスに画像を描画する関数．
   * @param canvasId: canvasのid
   * @param imagePath: 画像へのパス．Vueなので，ビルド後のパスかURLで指定してください．
   */
  const _image: HTMLImageElement = new Image()
  _image.src = image.src

  _image.onload = () => {
    const canvas: HTMLCanvasElement = document.getElementById(canvasId) as HTMLCanvasElement
    canvas.width = _image.naturalWidth
    canvas.height = _image.naturalHeight

    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.drawImage(_image, 0, 0)
  }
}

export function answerFunction (id: number, canvasId: string, image: HTMLImageElement): void {
  /**
   * キャンバスに指定idの画像処理を施して描画する関数
   * @param id: 画像処理関数のid，1~100まで存在．
   * @param canvasId: 画像を描画する canvas の id
   * @param image: image 要素
   */

  // 画像処理関数のリスト．インデックスを指定してアクセス．
  const answers: any = [
    /** 1 **/ RGBtoBGR,
    /** 2 **/ answer2
  ]

  /**
   * 画像処理関数が存在すれば
   * 画像処理を適用してキャンバスに描画します．
   * TODO: 処理が drawCanvas と被るので，もう一度出てくれば別関数で切り出しましょう．
   */
  if (answers[id - 1]) {
    const _image: HTMLImageElement = new Image()
    _image.src = image.src

    _image.onload = () => {
      const canvas: HTMLCanvasElement = document.getElementById(canvasId) as HTMLCanvasElement
      canvas.width = _image.naturalWidth
      canvas.height = _image.naturalHeight

      const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
      ctx.drawImage(_image, 0, 0)

      const imageData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      let data = imageData.data

      /**
       * data を直接加工します．
       * ImageData.data は readonly プロパティなため
       * Image.data = newData のようにできません．
       * @param data {ImageData.data} 各ピクセルの色数情報
       */
      answers[id - 1](data)

      ctx.putImageData(imageData, 0, 0)
    }
  } else {
    console.log("the value of 'id' argment in answerFunction is invalid. just input number like '28' not 'answer28', or you did, the answer does not exist now.")
  }
}
