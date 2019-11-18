# opionia

Opionのポートフォリオです．
元はブログとして運用していましたが，大きく改装中．
以下は自分用のメモ．

## サイト構成

Top，Product，Aboutの3種類のコンテンツから構成されています．
そのうちProductのみ頻繁に更新されます．

### Top

タイトルとナビゲーションを担います．
Pixi.jsを利用しています．

### Product

趣味や仕事での成果物をカード状に展開しています．
`@/pages/products/*.vue`に格納されLazy-loadが適用されます．

### About

ごく簡単な自己紹介と連絡先を記載しています．

## コーディング規約

個人開発なのでここにまとめておきますが，
長くなる場合，Notion等のWikiやVuepressを利用してください．

### コンポーネント

 - AtomicDesignに準拠

### @/pages/product/someProduct

趣味成果物のドメインを分散させまいとした結果，以下のような形になりました．
開発環境が違ったり収まりきらない規模になった場合は，
紹介ページを製作しURLを添付するべきでしょう．

 - `@/pages/products/someProduct`以下で専用の階層を作る場合，上記`@/${RODUCT_ROURTE}/Atoms/TriToggleButton`のように利用
 - コンポーネント専用の定数は`@/common/constants/`ではなく（commonではないので）コンポーネントと同階層に`./constants/`として設置

### 命名規則

 - コンポーネントはパスカルケース，それ以外のファイルはキャメルケース
 - 関数名，変数名はキャメルケース
 - pugのidやclassはスネークケース
 - 名前には手段を記載せず，目的と結果のみを記載
 - その他リーダブルコードを参照

### コメント

 - TypeDocを利用
 - 変数や関数の名前で説明しきれない場合のみコメントを付与

### Pug

 - Pugとしてコンポーネント化やforを用いず，Vueの機能を利用
 - インデントはスペースに統一（必要であれば「Tab時にスペース2マスを挿入」にチェック）
 - `dom.unique-class.util-class`の順に記述
 - idは，Canvasを除き，各templateのトップ階層以外に使用しない．必要があればコンポーネントを分離

### Stylus

 - Vuetifyを導入
 - RSCSSを利用
 - RSCSSのネストは4階層まで．それ以上はコンポーネントを分離
 - colorはVuetifyのJavascript変数として定義
 - mixinやextendのネストは極力避けて，使用時は名前に明記すること
 - util系のコンポーネントではmarginを使用せず，使用先で指定

### TypeScript

 - lodashで代替しうる関数はlodashを利用
 - 定数は`@/common/constants/`で定義
 - JSONを返すAPIを利用する場合，`@/interfaces/`に型ファイルを配置
 - `someValue!.property`,`someValue as any as string`等は使用せずガードを記述
 - string型を`enum`する際は原則として分割せず1つにまとめること
 - 関数の引数と返り値は，特に厳密な型定義を付与

### Pixi.js

 - 処理が短ければ，見通しを優先して`mounted`に直接記載
 - 規模が大きければ，別ファイルにクラスとして記載して`someAnimation.init()`のように呼び出すこと
 - svgを除き，処理が極めて低速になるので，`pixi.js`と`vue`の`data`を連携させないこと．
 - SSRとして開発しないこと．
 - `PIXI`に依存する処理 -> レイアウト -> アニメーション の順に記載

### images

 - `python png2webp.py`で`.webp`を用意
 - `picture`を用い，`.webp`非対応ブラウザでは`.png | .jpeg`にフォールバック

### sounds

 - `mp3``ogg`を用意
 - 鳴らす前にユーザーへ確認（Safariへの対応にもなります）
