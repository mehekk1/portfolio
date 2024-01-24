var firebaseConfig = {
        apiKey: "AIzaSyAs5n5b-26QpdnbnjfNCzOwJ-G4AE_MZQY",
        authDomain: "just-keyword-412216.firebaseapp.com",
        databaseURL: "https://just-keyword-412216-default-rtdb.firebaseio.com",
        projectId: "just-keyword-412216",
        storageBucket: "just-keyword-412216.appspot.com",
        messagingSenderId: "253895626665",
        appId: "1:253895626665:web:e6f1506148ea2c2e857eb8",
        measurementId: "G-LTT9H4Z3XY"}
    firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database()
    .ref('');
document.getElementById('contactForm')
.addEventListener('submit', submitForm)

function submitForm(e) {
e.preventDefault();
var fname = getInputVal('fname');
var phone = getInputVal('phone');
var email = getInputVal('email');
var message = getInputVal("message");
saveMessage(fname, phone, email, message);
document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
return document.getElementById(id).value;
}
function saveMessage(fname, phone, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname: fname,
      phone: phone,
      email: email,
      message: message,
    });
    }