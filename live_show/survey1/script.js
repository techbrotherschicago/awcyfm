var i = 0;
  function blur()
  { 
      document.getElementById("smear").style.filter = "blur("+(i*0.001).toString()+"rem)";
      i++;
  }
setInterval('blur()', 200); 
