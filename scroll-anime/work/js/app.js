//HTMLを構成するDOMが形成された瞬間に発動する
document.addEventListener('DOMContentLoaded', () => {
	const scrollboxs = document.querySelectorAll('.box');//アニメーションさせたい要素のの取得

	const options = {
		threshold: 1,// 100%表示されたら反応 0.3= 30%表示されたら反応
	};

    //実行する処理
	const callback = (entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.classList.add('displayed');//entry.targetで対象の要素を取得できる
        }else {
            entry.target.classList.remove('displayed');//要素が画面外に出たらdisplayedクラスを削除
        }
		});
	});

    //Intersection Observer APIの設定
	const observer = new IntersectionObserver(callback, options);

	scrollboxs.forEach(target => {
		observer.observe(target);
	});
});
