$(document).ready(function(){
  // 画像用のinputを生成する関数
  const buildFileField = (index)=> {
    const html = `<div data-index="${index}" class="js-file_group">
                    <input class="js-file" type="file"
                    name="item[item_images_attributes][${index}][image]"
                    id="item_images_attributes_${index}_image"><br>
                    <div class="js-remove">削除</div>
                  </div>`;
    return html;
  }

  // file_fieldのnameに動的なindexをつける為の配列
  let fileIndex = [1,2,3,4,5,6,7,8,9,10];

  $('#image-box').on('change', '.js-file', function(e) {
    // fileIndexの先頭の数字を使ってinputを作る
    $('#image-box').append(buildFileField(fileIndex[0]));
    fileIndex.shift();
    // 末尾の数に1足した数を追加する
    fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
  });

  $('#image-box').on('click', '.js-remove', function() {
    $(this).parent().remove();
    // 画像入力欄が0個にならないようにしておく
    if ($('.js-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
  });
});

$(function(){
  $('.back-to-item').hover(function(){
    $(this).text('商品一覧へ戻る').css('background-color','red')
  },function(){
    $(this).text('編集が完了いたしました').css('background-color','rgb(60,202,206)')}
)});

$(function(){
  $('.back-to-root').hover(function(){
    $(this).text('トップページへ戻る').css('background-color','blue')
  },function(){
    $(this).text('商品を削除いたしました').css('background-color','rgb(60,202,206)')}
)});


