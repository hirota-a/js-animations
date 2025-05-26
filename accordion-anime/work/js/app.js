// すべての.list-titleを取得 クリックする部分
const buttons = document.querySelectorAll(".list-title");

// 各titleにクリックイベントを設定
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // クリックされたボタンに紐づく要素(.list-content)を取得
        const content = button.nextElementSibling;
      
        // activeクラスをトグル（あれば削除、なければ追加）
        content.classList.toggle('active');
        
        //もしactiveクラスが付いていたら表示　activeクラスが付いていなければheightを0にし、非表示にする
        if(content.classList.contains('active')) { 
            content.style.height = content.scrollHeight + 'px'; 
        } else {
            content.style.height = '0'; 
        }
    });
});

