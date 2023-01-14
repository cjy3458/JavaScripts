var coworkers = {
    programmer: "Jay",
    designer: "Young",
  };
  document.write("programmer : " + coworkers.programmer + "<br>");
  document.write("designer : " + coworkers.designer + "<br>");
  coworkers.bookeeper = "rere";
  document.write("bookeeper : " + coworkers.bookeeper + "<br>");
  coworkers["data science"] = "gmlad";
  document.write("data science : " + coworkers["data science"] + "<br>");
<!-- 빨간 줄 왜 뜨는지 모르겠음!(확인하기) -->
<h2>Iterate</h2> 
<script>
  for (var key in coworkers) {
    document.write(key + " : " + coworkers[key] + "<br>");
  }
</script>
<h2>Property & Method</h2>
<script>
  coworkers.showAll = function(){
    for (var key in this) {
        document.write(key + " : " + coworkers[key] + "<br>");
    }
  }
  coworkers.showAll();