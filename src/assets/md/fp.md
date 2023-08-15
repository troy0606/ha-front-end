## Functional Programming Intro

內容是看完 FP 介紹影片的內容筆記
跟一些自己查閱的資料

影片:
[大神來六角」Functional Programming 都可以當你阿公了 - 入門篇](https://www.youtube.com/watch?v=V-zunDXzA2g)

### OOP VS FP

| 比較項目 | OOP            |       FP       |
| :------- | :------------- | :------------: |
| 思考方式 | 以物件為出發點 | 以函式為出發點 |
| 資料處理 | 資料可異動     |  資料不可變動  |
| 敘述 | 命令式     |  陳述式  |
| 平行運算 | 不是設計來平行運算     |  天生就可以平行運算  |
| 執行順序 | 必須按照特定執行順序     |  任何執行順序都可以  |
| 耦合 | 容易耦合     |  不容易耦合  |
| 執行結果 | 不容易預判     |  容易預判  |


1. 資料處理
   1. 可異動 : 可以透過呼叫的函式(或方法)改到外部的資料
      ```Javascript
        let full = false;
        function eat() {
          full = true;
        }
        eat();
        console.log(full === true)  // true
      ```
   1. 不可異動 :
      ```Javascript
        function eat(full) {
          if(full) {
            return 
          }
          return !full;
        }

        const full = false;
        eat();
        console.log(full === true)  // false
      ```

1. 敘述
    1. 命令式 / 指令式 : 對程式說明怎麼做，詳細指示每個行動
        ```Javascript
        let array = [3,2,1]
        let total = 0
        for( let i = 0 ; i <= array.length ; i ++ ){
            total += array[i]
        }
        ```
        1. 會把所有程式執行的步驟一步步列出，能夠看到整個運作的過程
    1. 陳述式 / 宣告式 : 對程式說明做甚麼，對它聲明想達成的結果

        ```Javascript
        let array = [3,2,1]
        array.reduce( function( previous, current ){ 
            return previous + current 
        })
        ```
        1. 直接跟程式說我要甚麼
        
            如上範例中，我要程式進行一個「reduce」，
            並說明計算方式是「previous + current」，
            至於實際要如何達成，則完全交給程式處理。

    感覺這兩種方式的差別在於，陳述式 / 宣告式 會把詳細的程式執行封裝，在使用時可以直接用抽象表示這段封裝的程式碼。

    因為封裝
    1. 可讀性上會比較高
    1. 不會頻繁更動較不容易有 bug
    1. 也比較難調整內部的執行邏輯所以較不靈活

參考: [Day20【Dev】編程方法：Imperative 與 Declarative](<https://ithelp.ithome.com.tw/articles/10278441>) 

### FP 的特徵
