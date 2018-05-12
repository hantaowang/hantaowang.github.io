var jobs = ["engineer", "researcher", "student", "developer", "teacher"];
var articles = ["an", "a", "a", "a", "a"];
var index = 0;

function changeJob() {
  prev = index;
  if (index == jobs.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  if (articles[prev] != articles[index]) {
    htmlStr = articles[index] + " <span id='job' class='bold'>" + jobs[index] +".</span>";
    target = "#jobtitle";
  } else {
    htmlStr = "<span class='bold'>" + jobs[index] +".</span>"
    target = "#job"
  }

  $(target).fadeOut('slow',function(){
    $(this).html(htmlStr)
  }).fadeIn("slow");

  setTimeout(changeJob, 3000);
}

$(document).ready(function() {
  setTimeout(changeJob, 2000);
});
