## area-populations
<img width="1120" alt="スクリーンショット 2023-04-23 11 36 07" src="https://user-images.githubusercontent.com/84382062/233816458-2bc0e1c7-889f-4b72-be52-57fbdafac5c8.png">

都道府県ごとの人口推移を可視化

## ローカルでの環境構築

* https://opendata.resas-portal.go.jp にアクセスし、新規登録を済ませてAPI Keyを取得
* 以下の二つの環境変数を設定
* * NEXT_PUBLIC_API_DOMAIN=https://opendata.resas-portal.go.jp/api/v1
* * NEXT_PUBLIC_API_KEY={取得したAPI Kay}

## 開発ルール
### Atoms下
* フックの呼び出し禁止
* データは全てPropsから取得

