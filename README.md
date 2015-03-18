# Todolist with Angular

這是個用AngularJS編寫而成的、具RESTful風格的待辦事項應用。

## Overview

功能如下：

1. 在輸入欄中鍵入待辦事項後，按左邊的加號掣或撳回車鍵，即可創建一條待辦事項；
2. 對於已創建的待辦事項，勾選左邊的checkbox即可以刪除線標記其完成狀態，或按刪除按鈕（滑鼠指針懸浮於該待辦事項方出現）永久移除之；
3. 最下方的「搜尋條目」輸入框提供了彈性搜尋機制，能所見即所得地篩選已創建的待辦清單；
4. 使用了localStorage本地存儲，即使關閉頁面/瀏覽器/機器，所創建的待辦事項及其狀態（完成與否）均會持續存在。

## Notice

* 該項目可能會令你聯想到MVC界著名範例[TodoMVC](http://todomvc.com)，但兩者業務邏輯、功能細節、代碼結構均不同，絕對保持原創！
* 未在Internet Explorer下測試過，不保證無樣式差異，功能應該無問題。