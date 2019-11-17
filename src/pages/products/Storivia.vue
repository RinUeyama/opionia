<template lang="pug">
  v-container
    v-row.mt-4(justify="center")
      h1 Storivia
    v-row.mt-4.pa-4(justify="center")
      v-img(
        src="@/assets/thumbnail/Storivia.png"
        max-width="420"
      )
    v-row.mt-4.pa-4(justify="center")
      article
        | プチ卒論で作成したプロット作成支援アプリ．プロットを「行動」「キャラクター」「世界観」の3点から捉えて組み進めていく形式．
        | 最初に作成したWebアプリであるためどう操作していいか分かりにくいですが，これを通してVue, Vuexの知識と納期への恐怖心を得ることができました．
    v-row.mt-4.pa-4(justify="center")
      v-btn(
        href="https://storivia.firebaseapp.com"
        outlined
        x-large
      ) アプリページ
</template>
