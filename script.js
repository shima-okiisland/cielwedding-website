/*
 * このページの簡単な動きを制御するJavaScriptファイルです。
 */

// HTMLの読み込みが完了してから、中のコードを実行するようにします。
document.addEventListener('DOMContentLoaded', function() {

  // 1. HTMLの中から id="gallery-btn" の要素（ボタン）を探してきます。
  const galleryButton = document.getElementById('gallery-btn');

  // 2. ボタンが見つかった場合のみ、次の処理に進みます（エラー防止）
  if (galleryButton) {

    // 3. そのボタンが「クリック」されるのを監視します。
    galleryButton.addEventListener('click', function(event) {
      
      // ページが遷移するのを一旦防ぎます
      event.preventDefault(); 
      
      // 4. クリックされたら、メッセージを表示します。
      alert('ギャラリーページへようこそ！(実際のページでは、ここでページを移動させます)');
    });

  }

});
