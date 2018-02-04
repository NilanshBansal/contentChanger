document.addEventListener('DOMContentLoaded', documentEvents  , false);

function myAction(input) { 
    console.log("input value is : " + input.value);
    // do processing with data
    // you need to right click the extension icon and choose "inspect popup"
    // to view the messages appearing on the console.

    var reg = new RegExp(input.value, "g");
    console.log(reg);
    alert("doing");
    $("body").children().each(function() {
      // $(this).html($(this).html().replace(/Donald Trump|Mr. Trump/gi,"Crime master Gogo"));
      $(this).html($(this).html().replace(reg,"Crime master Gogo"));
      
  });
    
}

function documentEvents() {    
  document.getElementById('ok_btn').addEventListener('click', 
    function() { myAction(document.getElementById('name_textbox'));
  });

  // you can add listeners for other objects ( like other buttons ) here 
} 


