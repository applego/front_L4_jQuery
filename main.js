//すべての要素が準備がきた後で実行される
// window.onload = function(){
//   $("#box").text("Hello jQuery!");
// }

$(document).ready(function(){
  //DOMの読み込みが完了したらここが実行される
  //$("#box").text("Hello jQuery!");
});

//ready()の短縮した書き方
$(function(){
  //DOMの読み込みが完了したらここが実行される
  $("#box").text("Hello jQuery!");
  $("#box").append("<p>test</p>");
  
  $(".copy-button").click(function(){
    var value = $(".my-input").val();
    console.log(value);
    $(".my-output").val(value);
  });

  var value = $("a").attr("href");
  console.log(value);
  $("a").attr("href","new.html");
  
  //イベント
  $(".mylink").click(function(){
    alert("どろん!");
    //hrefのリンク先に飛ばないように
    return false;
  });
  
  $(".my-button").click(function(){
    // .my-buttonがクリックされたときにここが実行される
    $(this).parent().css({"background-color": "#ff6666"});
  });
  
  //hover
  $("#box").hover(function(){
    //マウスが乗った時の処理
    $(this).css({
      "background-color":"#ff9999",
    });
  },function(){
    //マウスが外れた時の処理
    $(this).css({
      "background-color":"#dddddd",
    });
  });
  //keydown
  $(".my-input").keydown(function(){
    $("#box").html($(this).val());
  });
  //フォームの送信前にエラーチェック
  $(".my-form").submit(function(){
    //フォームが送信された時に実行される
    var text1 = $(".text1").val();
    var text2 = $(".text2").val();
    if(text1 != text2){
      $(".error").html("テキストが一致しません");
      
      //フォームの送信を止める
      return false;
    }
  });
  
  //クリック
  $("input[value=dblclick]").click(function(){
    $("#box").html("click");
  });
  //ダブルクリック
  $("input[value=dblclick]").dblclick(function(){
    $("#box").html("dblclick");
  });
  
});

$("#box").html("<p>Hello</p>");

// $(".item").html("Hello");

