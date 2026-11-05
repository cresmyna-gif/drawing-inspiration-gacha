// 1. 定義您的靈感列表 (可以在這裡盡情發揮創意)
const inspirations = [
    "一隻在太空旅行的貓咪",
    "你最喜歡的食物",
    "一個機器人在雨中撐傘的場景",
    "用三種顏色畫出你的夢想",
    "一個長滿植物的廢棄城市",
    "畫出你今天的心情，用抽象的方式",
    "設計一個未來世界的交通工具",
    "烤雞",
    "樹",
    "花",
    "森林",
    "花海",
    "草原",
    "花束",
    "花冠",
    "花環",
    "花圈",
    "泡溫泉的卡皮巴拉",
    "咖啡",
    "茶",
    "茶壺",
    "下午茶",
    "下午茶桌",
    "甜點",
    "點心",
    "麵包",
    "蛋糕",
    "餅乾",
    "鹹食",
    "飲料",
    "冰品",
    "早餐吃什麼?",
    "午餐吃什麼?",
    "晚餐吃什麼?",
    "夜空",
    "星星",
    "明月",
    "天空",
    "太陽",
    "雲",
    "山",
    "廣闊的河流",
    "清澈的小溪",
    "湖",
    "瀑布",
    "海",
    "魚",
    "海底世界",
    "美麗海灘",
    "明朗的沙灘",
    "你現在想吃的食物",
    "美味的水果",
    "蘑菇屋",
    "紅蘿蔔屋",
    "房子",
    "你夢寐以求的房子",
    "街景",
    "地圖",
    "鳥，翱翔天空",
    "鳥，處在你想得到的地方",
    "在湖中悠哉游泳的水鳥",
    "企鵝，在冰上發呆",
    "一個有蛋的鳥窩",
    "一個鳥屋",
    "地下的秘密小屋",
    "地下的隱密洞穴",
    "地下的秘密通道"
];

// 2. 獲取 HTML 中的元素
const rollButton = document.getElementById('rollButton');
const displayArea = document.getElementById('inspirationDisplay');

// 3. 添加點擊事件監聽器
rollButton.addEventListener('click', function() {
    // 隨機選擇一個靈感
    const randomIndex = Math.floor(Math.random() * inspirations.length);
    const selectedInspiration = inspirations[randomIndex];

    // --- 將新靈感加入歷史紀錄清單 ---
    addHistoryEntry(selectedInspiration);
    // ------------------------------------

    // 更新顯示區域的文字
    displayArea.textContent = selectedInspiration;
    
    // (可選) 添加一些簡單的動畫效果，讓它看起來更像扭蛋機
    displayArea.style.transform = 'scale(0.8)';
    setTimeout(() => {
        displayArea.style.transform = 'scale(1)';
    }, 100);
});


// 一個專門處理添加歷史紀錄的函式
function addHistoryEntry(inspirationText) {
    const newItem = document.createElement('li'); // 建立一個新的清單項目 <li>
    newItem.textContent = inspirationText;        // 設定清單項目的文字內容
    
    // 將新項目插入到清單的最前面 (unshift 的概念)
    historyList.insertBefore(newItem, historyList.firstChild);
    
    // (可選) 限制歷史紀錄的數量，避免列表過長
    if (historyList.children.length > 10) {
        historyList.removeChild(historyList.lastChild);
    }
}