//Initialize FireBase  
var config = {
  apiKey: "AIzaSyApS57us7p5sn34pm6HzNQgNiIGJ9OsiNk",
  authDomain: "fir-hw-4bf17.firebaseapp.com",
  databaseURL: "https://fir-hw-4bf17.firebaseio.com",
  projectId: "fir-hw-4bf17",
  storageBucket: "fir-hw-4bf17.appspot.com",
  messagingSenderId: "659836949236"
};
firebase.initializeApp(config);

//Set Firebase  
var db = firebase.database();

//Button that creates Rows Dynamically
$("button").on("click", function () {
  event.preventDefault()

 // User Input Variables 
 var TrainName = $("#train-name").val().trim();
 var Destination = $("#destination").val().trim();
 var FirstTrainTime = $("#first-train-time").val().trim();
 var Frequency = $("#frequency").val().trim();
 var NextTrainTime = moment().startOf('day').fromNow(FirstTrainTime)




//Push user input into the Firebase
db.ref().push({
  TrainName: TrainName,
  Destination: Destination,
  FirstTrainTime: FirstTrainTime,
  Frequency: Frequency,
  NexTrainTime: ""
})

//Adds past entries onto page
  db.ref().on("child_added", function (childSnap) {
    var TrainName = childSnap.val().TrainName;
    var Destination = childSnap.val().Destination;
    var FirstTrainTime = childSnap.val().FirstTrainTime;
    var Frequency = childSnap.val().Frequency;
  

    
  //Makes it so there needs to be a valid
  convertTime()
  function convertTime() {
    if (TrainName === "") {
      alert("Please Enter Valid Train Name!")
    }
    if (Destination === "") {
      alert("Please Enter Valid Destination!")
    }
    if (FirstTrainTime === "") {
      alert("Please Enter Valid Train Time!")
    }
    if (Frequency === "") {
      alert("Please Enter Valid Frequency!")
    }
  }

  //Dynamically create Rows and Tables 
  var createTR1 = $("<tr>");
  var createTR2 = $("<tr>");
  var createTR3 = $("<tr>");
  var createTR4 = $("<tr>");
  var createTR5 = $("<tr>");


  $("#section-1").append(createTR1);
  $("#section-2").append(createTR2)
  $("#section-3").append(createTR3)
  $("#section-4").append(createTR4)
  $("#section-5").append(createTR5)
  

  createTR1.text(TrainName)
  createTR2.text(Destination)
  createTR3.text(FirstTrainTime)
  createTR4.text(Frequency)
  createTR5.text(NextTrainTime)
})
})


