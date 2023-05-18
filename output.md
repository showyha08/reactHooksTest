---
marp: true
theme: gaia
style: |
  section.center {
      text-align: center;
  }
---

<!--
_backgroundColor: MediumSeaGreen
_color: white
-->

## 目次

- 1.レンダリングの仕組み
- 2.useMemo
- 3.useCallback
- 4.メモ化

---

## 1.レンダリングの仕組み

- レンダリングとは
  - 画面描画 (DOM の構築)
- 再レンダリングの仕組み
  - 仮想 DOM を作成し、差分を検知して再描画する
- 再レンダリングのタイミング
  - state が更新された時
  - props が更新された時
  - 親コンポーネントが再描画された時

---

## 2.useMemo

- useMemo とは
  - 関数の戻り値をメモ化する Hooks
  - メモ化とは
    - 一度計算した結果を保存しておくこと
    - 重い処理をキャッシュすることで、高速化を図る
    - 依存する値が変更されない限り、再計算されない
- 使い方
  - `useMemo(() => {処理}, [依存する値])`
  - 依存する値が変更された時だけ再計算される

---

## 3.useCallback

---

## 4.メモ化

---
