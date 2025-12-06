// 1. 定義您的靈感列表 (可以在這裡盡情發揮創意)
const inspirations = [
    "一隻在太空旅行的貓咪",
    "你最喜歡的食物",
    "一個機器人在雨中撐傘的場景",
    "用三種顏色畫出你的夢想",
    "一個長滿植物的廢棄城市",
    "畫出你今天的心情，用抽象的方式",
    "設計一個未來世界的交通工具",
    "一隻烤雞",
    "一棵樹",
    "一朵花",
    "一座森林",
    "一片花海",
    "一隻泡溫泉的卡皮巴拉",
    "一座瀑布",
    "一杯咖啡",
    "一杯茶",
    "一壺茶壺",
    "夜空",
    "一顆星星",
    "一枚明月",
    "晴朗的天空",
    "一片雲",
    "一座青山",
    "一座雪山",
    "一片綠油油的草原",
    "一條廣闊的河流",
    "一條清澈的小溪",
    "一片海",
    "一片美麗海灘",
    "一片明朗的沙灘",
    "你現在想吃的食物",
    "一種美味的水果",
    "一隻在湖中悠哉游泳的水鳥，畫好多隻也可以啦~",
    "一棟蘑菇屋",
    "一棟紅蘿蔔屋",
    "一棟你夢寐以求的房子"
];

// 2. 獲取 HTML 中的元素
const rollButton = document.getElementById('rollButton');
const displayArea = document.getElementById('inspirationDisplay');

// 3. 添加點擊事件監聽器
rollButton.addEventListener('click', function() {
    // 隨機選擇一個靈感
    const randomIndex = Math.floor(Math.random() * inspirations.length);
    const selectedInspiration = inspirations[randomIndex];

    // 更新顯示區域的文字
    displayArea.textContent = selectedInspiration;
    
    // (可選) 添加一些簡單的動畫效果，讓它看起來更像扭蛋機
    displayArea.style.transform = 'scale(0.8)';
    setTimeout(() => {
        displayArea.style.transform = 'scale(1)';
    }, 100);
});









