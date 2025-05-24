// すべての.list-titleを取得 クリックする部分
const buttons = document.querySelectorAll(".list-title");

// 各titleにクリックイベントを設定
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // クリックされたボタンに紐づく要素(.list-content)を取得
        const content = button.nextElementSibling;
      
        // activeクラスをトグル（あれば削除、なければ追加）
        content.classList.toggle('active');
        
        if(content.classList.contains('active')) { 
            content.style.height = content.scrollHeight + 'px'; 
        } else {
            content.style.height = '0'; 
        }
    });
});

