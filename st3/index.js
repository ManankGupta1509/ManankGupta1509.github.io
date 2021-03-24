
function validateMail(){
        var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var inputmail=document.forms["myForm"]["emailid"].value;
        if(inputmail.match(reg))
        {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
        }
        else
        {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
        }
}
function validateForm() {
    var fn = document.forms["myForm"]["fname"].value;
    var mn = document.forms["myForm"]["mobilenumber"].value;
    var emid = document.forms["myForm"]["emailid"].value;

    if (fn == "") {
      alert("Name can't be empty");
      return false;
    }
    else if (mn == "") {
        alert("Mobile Number can't be empty");
        return false;
      }
    else if (emid == "") {
        alert("Email-Id can't be empty");
       return false;
      }

      if(!validateMail())
      return false;

      return true;
  }




  var myRowList = document.getElementsByTagName("TR");
  var i;
  for (i = 0; i < myRowList.length; i++) {
    var td = document.createElement("TD");
    var delte=document.createElement("BUTTON");
  var txt = document.createTextNode("DELETE");
  delte.className = "close";
  delte.appendChild(txt);
  td.appendChild(delte);
  tr.appendChild(td4);
  }

  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

// Create a new list item when clicking on the "Add" button
function newData() {
  var tr = document.createElement("TR");
  var td1= document.createElement("TD");
  var td2= document.createElement("TD");
  var td3= document.createElement("TD");
  var fn = document.forms["myForm"]["fname"].value;
  var mn = document.forms["myForm"]["mobilenumber"].value;
  var emid = document.forms["myForm"]["emailid"].value;
  var name = document.createTextNode(fn);
  var mobno =document.createTextNode(mn);
  var mailid =document.createTextNode(emid);
  td1.appendChild(name);
  td2.appendChild(mobno);
  td3.appendChild(mailid);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);


  var td4 = document.createElement("TD");
  var delte=document.createElement("BUTTON");
  var txt = document.createTextNode("DELETE");
  delte.className = "close";
  delte.appendChild(txt);
  td4.appendChild(delte);
  tr.appendChild(td4);

 if(validateForm())
 {
  document.getElementById("table1").appendChild(tr);
 }
 else
 {
     return false;
 }

 var close = document.getElementsByClassName("close");
 var i;
 for (i = 0; i < close.length; i++) {
   close[i].onclick = function() {
     var div = this.parentElement;
     div.style.display = "none";
   }
 }

}
