var currentHour = parseInt(dayjs().format('HH'));

$(document).ready(function() {
  function updateTime() {
    var currentTimeElement = document.getElementById("current-time");
    var currentTime = dayjs().format("dddd, MMMM D, YYYY h:mm:ss A");
    currentTimeElement.innerHTML = currentTime;
  }

  setInterval(updateTime, 1000);

  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    console.log(time, text);
    localStorage.setItem(time, text);
  });

  $(".time-block").each(function() {
    var sectionHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(currentHour);
    if (sectionHour < currentHour) {
      $(this).addClass("past");
    } else if (sectionHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
});
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));