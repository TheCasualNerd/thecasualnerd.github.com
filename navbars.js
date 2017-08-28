$(document).ready(function() {
  $("<select />").appendTo("nav");
  $("<option />", 
    {
      "selected": "selected", 
      "value": "", 
      "text": "Go to.."
    }).appendTo("nav select");
  $("nav a").each(function() {
      var values = $(this);
      $("<option />", {
        "value": values.attr("href"),
        "text": values.text();
      }).appendTo("nav select");
  });
  $("nav select").change(function() {
    window.location = $(this).find("option:selected").val();
  });
});
