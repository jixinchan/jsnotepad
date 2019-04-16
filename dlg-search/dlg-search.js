/*exported $dlgSearch*/
var $dlgSearch = (function(){
  var DOM=''
    +'<div class="notepad-dlg notepad-search-dlg">'
    +'  <div class="dialogbox">'
    +'    <div class="titlebar">'
    +'      <p class="title">查找</p>'
    +'      <span class="btn-close">×</span>'
    +'    </div>'
    +'    <div class="content">'
    +'      <label for="">查找内容(N):</label>'
    +'      <input type="text"/ class="txt">'
    +'      <input type="button" value="查找下一个" class="btn-next" disabled/>'
    +'      <input type="checkbox" class="checkbox"><span>区分大小写(C)</span>'
    +'      <fieldset>'
    +'      <legend>方向</legend>'
    +'      <input type="radio" name="direction"/>向上(U)'
    +'      <input type="radio" name="direction"/>向下(D)'
    +'      </fieldset>'
    +'      <input type="button" value="取消" class="btn-cancel"/>'
    +'    </div>'
    +'  </div>'
    +'</div>';
  
  var $dlg = $(DOM),
      $btnGoto = $dlg.find('.btn-goto'),
      $btnCancel = $dlg.find('.btn-cancel'),
      $btnClose = $dlg.find('.btn-close');

  function show(){
    $('body').append($dlg);
   
    $dlg.find('.dialogbox').draggable({handle:$dlg.find('.titlebar')});
    $btnGoto.click(function(){$dlg.remove();});
    $btnClose.click(function(){$dlg.remove();});
    $btnCancel.click(function(){$dlg.remove();});
  }
  return {show:show};

}());
