//HTMLを構成するDOMが形成された瞬間に発動する
document.addEventListener('DOMContentLoaded', () => {
	const scrollboxs = document.querySelectorAll('.box');//アニメーションさせたい要素のの取得

	const options = {
		threshold: 1,// 100%表示されたら反応 0.3= 30%表示されたら反応
	};

    //コールバック関数の作成
	//entriesはIntersectionObserverEntryの配列で、監視する領域と監視対象要素の交差状態を表す
	const callback = (entries => {
	//アニメーションさせたい複数の要素entriesをforEachで一つづつentryに取り出してそれぞれ処理
	entries.forEach(entry => {
		//isIntersectingプロパティを記述することで、処理を分けることが可能
		if(entry.isIntersecting) {
			entry.target.classList.add('displayed');//entry.targetで対象の要素を取得でき、要素が画面内に入ったらdisplayedクラスが追加される
        }else {
            entry.target.classList.remove('displayed');//要素が画面外に出たらdisplayedクラスを削除
        }
		});
	});

    //Intersection Observer APIの設定　Intersection Observer「交差（【基準の要素】と【監視される要素】の重なり具合）の監視役」
	//newはnew演算子（クラス（設計図）からインスタンス（実体）を作る行為）　新しいインスタンスを生成
	// コンストラクタを使って新しいインスタンスを生成
	const observer = new IntersectionObserver(callback, options);

	//監視される要素をobserveメソッドに指定します　observeメソッドに監視対象要素を引数として渡すことで監視されるようになります
	scrollboxs.forEach(target => {
		observer.observe(target);
	});
});


