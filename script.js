var currentHour = parseInt(dayjs().format('HH'));
$(document).ready(function() {
  function updateTime() {
    var currentTimeElement = document.getElementById("current-time");
    var currentTime = dayjs().format("dddd, mmmm D, YYYY h:mm:ss A");
    currentTimeElement.innerHTML = currentTime;
}
  setInterval(updateTime, 1000);
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    console.log(time, text);
    localStorage.setItem(time, text);
});

$(".time-block").each(function ()) {
  var sectionHour = parseInt($(this).attr("id").split("-")[1]);
  console.log(currentHour)
};