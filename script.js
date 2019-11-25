function displayRadioValue() {
   "use strict";
   var selected = document.getElementsByName('gender');
   var i = 0;
   for (i; i < selected.length; i++) {
      if (selected[i].checked)
          document.getElementById("result").innerHTML
                        = selected[i].value;
   }
}