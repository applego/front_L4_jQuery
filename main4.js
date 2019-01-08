$(document).ready(function(){
  $("#parent").click(function(){
    console.log("親要素のイベントハンドラ");
  });
  $("#child").click(function(event){
    console.log("子要素のイベントハンドラ");
    //return false;
    //event.stopPropagation();
    event.preventDefault();
  });
});