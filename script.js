// 1. 定義您的靈感列表 (可以在這裡盡情發揮創意)
const inspirations = [
    "畫一隻在太空旅行的貓咪",
    "用水彩畫出你最喜歡的食物",
    "一個機器人在雨中撐傘的場景",
    "用三種顏色畫出你的夢想",
    "畫一個長滿植物的廢棄城市",
    "畫出你今天的心情，用抽象的方式",
    "設計一個未來世界的交通工具"
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
