var url = "https://webdevclubsite.firebaseIO.com";
var firebaseRef = new Firebase(url);

$(function() {
    firebaseRef.on("value", function(snap) {
  $("#meetingdetails").html(
  JSON.stringify(snap.val())
);
});
});

