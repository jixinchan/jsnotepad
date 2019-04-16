/*exported $dlgFont*/
var $dlgFont = (function(){
  var DOM=''
    +'<div class="notepad-dlg notepad-font-dlg">'
    +'  <div class="dialogbox">'
    +'    <div class="titlebar">'
    +'      <p class="title">字体</p>'
    +'      <span class="btn-close">×</span>'
    +'    </div>'
    +'    <div class="content">'
    +'      <div class="box">'
    +'      <div class="box1">'
    +'        <label>字体(F):</label>'
    +'        <input type="text" value="楷体" class="familyinp"/>'
    +'        <div class="family"></div>'
    +'      </div>'
    +'      <div class="box2">'
    +'        <label>字形(Y):</label>'
    +'        <input type="text" value="常规" class="styleinp"/>'
    +'        <div class="style"></div>'
    +'      </div>'
    +'      <div class="box3">'
    +'        <label>大小(S):</label>'
    +'        <input type="text" value="小四" class="sizeinp"/>'
    +'        <div class="size"></div>'
    +'      </div>'
    +'      </div>'
    +'      <fieldset>'
    +'        <legend>示例</legend>'
    +'        <h4>AaBbYyZz</h4>'                           
    +'      </fieldset>'
    +'      <div class="foot">'
    +'        <label>脚本(R):</label>'
    +'        <select>'
    +'          <option>西欧语言</option>'
    +'          <option>中文GB2312</option>'
    +'        </select>'                           
    +'      <input type="button" value="确定" class="btn-confirm"/>'
    +'      <input type="button" value="取消" class="btn-cancel"/>'                             
    +'    </div>'
    +'  </div>'
    +'</div>';
  
  var $dlg = $(DOM),
      $btnConfirm = $dlg.find('.btn-confirm'),
      $btnCancel = $dlg.find('.btn-cancel'),
      $btnClose = $dlg.find('.btn-close'),
      $familyBox=$dlg.find('.family'),
      $styleBox=$dlg.find('.style'),
      $sizeBox=$dlg.find('.size'),
      $familyInp=$dlg.find('.familyinp'),
      $styleInp=$dlg.find('.styleinp'),
      $sizeInp=$dlg.find('.sizeInp');

  function initBox(ele,list,f){
    var $List='<ul class="list">';
    if(f=='F'){
      for(var j=0;j<list.length;j++){
        $List+='<li style="font-family:'+list[j]+'">'+list[j]+'</li>';
      }
    }else if(f=='Y'){
      for(var i=0;i<list.length;i++){
        if(list[i]==='斜体'){
          $List+='<li style="font-style:italic">'+list[i]+'</li>';
        }
        if(list[i]==='粗体'){
          $List+='<li style="font-weight:bold">'+list[i]+'</li>';
        }
        if(list[i]==='粗偏斜体'){
          $List+='<li style="font-style:italic;font-weight:bold">'+list[i]+'</li>';
        }

      }
    }else{
      for(var m=0;m<list.length;m++){
        $List+='<li>'+list[m]+'</li>';
      }
    }
    $List+='</ul>';
    return $List;
  }
  
  function show(){
    var familys=['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'];
    var styles=['常规', '斜体', '粗体', '粗偏斜体'];
    var sizes=['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
    $('body').append($dlg);
    $familyBox.append(initBox($familyInp,familys,'F'));
    $styleBox.append(initBox($styleInp,styles,'Y'));
    $sizeBox.append(initBox($sizeInp,sizes),'S');

    $dlg.find('.dialogbox').draggable({handle:$dlg.find('.titlebar')});
    $btnCancel.click(function(){$dlg.remove();});
    $btnConfirm.click(function(){$dlg.remove();});
    $btnClose.click(function(){$dlg.remove();});
  }
  return {show:show};

}());
