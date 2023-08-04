
const firebaseConfig = {
  apiKey: "AIzaSyCk2lYRovBRk6KWQSs3gGCFweSmk6tgXMs",
  authDomain: "form-assignment-989ef.firebaseapp.com",
  databaseURL: "https://form-assignment-989ef.firebaseio.com",
  projectId: "form-assignment-989ef",
  storageBucket: "form-assignment-989ef.appspot.com",
  messagingSenderId: "45552230521",
  appId: "1:45552230521:web:05a762c81afb6e82eaf4a8",
  measurementId: "G-W37VS4645F"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var data = firebase.database().ref('userData');


const saveDetails = (name, phone, email, dob, profile) => {
    var newdetails = data.push();
    newdetails.set({
        name: name,
        phone: phone,
        email: email,
        dob: dob,
        profile: profile
    })
    .then(() => {
        console.log("Details saved successfully.");
    })
    .catch((error) => {
        console.error("Error saving details:", error);
    });
 }
 
 document.getElementById("details-form").addEventListener('submit', (e) => {
    e.preventDefault();
 
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var profile = document.getElementById("profile").value;
 
    console.log("Form data:", name, phone, email, dob, profile); // Log the form data
 
    saveDetails(name, phone, email, dob, profile);
 });
 
