/*exported $dlgGoto*/
var $dlgGoto = (function(){
  var DOM=''
    +'<div class="notepad-dlg notepad-goto-dlg">'
    +'  <div class="dialogbox">'
    +'    <div class="titlebar">'
    +'      <p class="title">转到指定行</p>'
    +'      <span class="btn-close">×</span>'
    +'    </div>'
    +'    <div class="content">'
    +'      <label for="">行号(L):</label>'
    +'      <input type="text" class="line-num" autofocus/>'
    +'      <input type="button" value="转到" class="btn-goto"/>'
    +'      <input type="button" value="取消" class="btn-cancel"/>'
    +'    </div>'
    +'  </div>'
    +'</div>';
  
  var $dlg = $(DOM),
      $btnGoto = $dlg.find('.btn-goto'),
      $lineNum = $dlg.find('.line-num'),
      $btnCancel = $dlg.find('.btn-cancel'),
      $btnClose = $dlg.find('.btn-close');
  
  function validation(){
    if(!/[0-9]/.test($lineNum.val())){
      alert('请输入数字');
      return false;
    }
    if(cfg.curLine>cfg.totalLine){
      alert('超出最大行数');
      return false;
    }
    return true;
  }
  function gotoHandler(){
    if(!validation()) return;
    cfg.gotoHandler(cfg.curLine);
    $dlg.remove();
  }
  var cfg={
    curLine:1,
    totalLine:10,
    gotoHandler:gotoHandler
  };
  function destory(){
    $dlg.remove();
  }
  function show(conf){
    cfg = conf;
    $('body').append($dlg);
    $lineNum.val(cfg.curLine);
    $lineNum.select();
   
    $dlg.find('.dialogbox').draggable({handle:$dlg.find('.titlebar')});
    $btnGoto.click(gotoHandler);
    $btnClose.click(destory);
    $btnCancel.click(destory);
  }
  return {show:show};

}());
