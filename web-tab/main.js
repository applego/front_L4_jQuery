function showTab(t){
  var tabSelector = `tab-menu-${t}`;
  var contentSelector = `#tabs-${t}`;
  $(".tabs-menu div").removeClass("active");
  $(".tabs-menu div[id='"+tabSelector+"']").addClass("active");
  $(".tabs-content > div").hide();
  $(contentSelector).show();
}
//tab-menu-a  tabs-a

$(document).ready(function(){
  showTab("a");
  
  $(".tabs-menu div").click(function(){
    var t = $(this).attr("id").slice(-1);
    console.log(t);
    showTab(t);
  });
  
  return false;
})