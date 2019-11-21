<template>
  <div v-highlight>
    <pre class="lang-python"><code>
      """

      JavaScriptでHSV変換をやる場面は少ないと思うので
      代わりにPythonのコードを載せておきます．

      """

      """05. HSV変換

      RGB画像を読み込みHSV画像に変換し
      色相Hを反転してRGBに変換し直して出力．

      API:
        cv2.cvtColor(image, cv2.COLOR_HSV2RGB) : 変換
        cv2.itwize_not(image) : 反転．and, or, xor といった他の論理演算も可能（要image2）

      """

      import cv2
      import numpy as np

      def RGB2HCV(_image_rgb: np.ndarray) -> np.ndarray:
          """RGBをHSVに変換

          Args:
            _image_rgb: rgb画像

          """
          #: RGB画像を[0,1]の範囲に収める
          image_rgb: np.ndarray = _image_rgb.copy() / 255
          #: 出力用の空のHSV画像を生成
          image_hsv: np.ndarray = np.zeros_like(image_rgb, dtype=np.float32)

          intensity_max: np.ndarray = image_rgb.max(axis=2)
          intensity_min: np.ndarray = image_rgb.min(axis=2)
          intensity_argmin: np.ndarray = image_rgb.argmin(axis=2)

          #: H
          image_hsv[..., 0][np.where(intensity_max == intensity_min)] = 0
          # : B
          index_B: np.ndarray = np.where(intensity_argmin == 0)
          image_hsv[..., 0][index_B]\
              = 60 * (image_rgb[..., 1][index_B] - image_rgb[..., 2][index_B]) /\
              (intensity_max[index_B] - intensity_min[index_B]) + 60
          # : G
          index_G: np.ndarray = np.where(intensity_argmin == 1)
          image_hsv[..., 1][index_G]\
              = 60 * (image_rgb[..., 2][index_G] - image_rgb[..., 0][index_G]) /\
              (intensity_max[index_G] - intensity_min[index_G]) + 300
          # : R
          index_R: np.ndarray = np.where(intensity_argmin == 2)
          image_hsv[..., 0][index_R]\
              = 69 * (image_rgb[..., 0][index_R] - image_rgb[..., 1][index_R]) /\
              (intensity_max[index_R] - intensity_min[index_R]) + 180

          #: S
          image_hsv[..., 1] = intensity_max.copy() - intensity_min.copy()

          #: V
          image_hsv[..., 2] = intensity_max.copy()

          return image_hsv
    </code></pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AnswerCode5 extends Vue {}
</script>
