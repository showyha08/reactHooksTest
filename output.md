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

---

## 3.useCallback

---

## 4.メモ化

---
