const firebaseConfig = {
    apiKey: "AIzaSyAciKjO_8gql2cOkyTt_ml1dUXeNh1dky0",
    authDomain: "controllesp32.firebaseapp.com",
    databaseURL: "https://controllesp32-default-rtdb.firebaseio.com",
    projectId: "controllesp32",
    storageBucket: "controllesp32.appspot.com",
    messagingSenderId: "792210941943",
    appId: "1:792210941943:web:a51887a75d1f29c22c30f2",
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();
var bt1On = document.getElementById("bt1On");
var bt1Off = document.getElementById("bt1Off");
var bt2On = document.getElementById("bt2On");
var bt2Off = document.getElementById("bt2Off");
var bt3On = document.getElementById("bt3On");
var bt3Off = document.getElementById("bt3Off");
//gui du lieu len firebase
bt1On.onclick = function () {
    document.getElementById("bt1On").style.backgroundColor = "#61ff0cfa";
    document.getElementById("bt1Off").style.backgroundColor = "red"
    document.getElementById("stt1").innerHTML = "ON"
    database.ref("/controll").update({
        "relay1": 1
    })
}
bt1Off.onclick = function(){
    document.getElementById("bt1On").style.backgroundColor = "red"
    document.getElementById("bt1Off").style.backgroundColor = "#61ff0cfa";
    document.getElementById("stt1").innerHTML = "OFF"
    database.ref("/controll").update({
        "relay1": 0
    })
}
bt2On.onclick = function () {
    document.getElementById("bt2On").style.backgroundColor = "#61ff0cfa";
    document.getElementById("bt2Off").style.backgroundColor = "red"
    document.getElementById("stt2").innerHTML = "ON"
    database.ref("/controll").update({
        "relay2": 1
    })
}
bt2Off.onclick = function(){
    document.getElementById("bt2On").style.backgroundColor = "red"
    document.getElementById("bt2Off").style.backgroundColor = "#61ff0cfa";
    document.getElementById("stt2").innerHTML = "OFF"
    database.ref("/controll").update({
        "relay2": 0
    })
}
bt3On.onclick = function () {
    document.getElementById("bt3On").style.backgroundColor = "#61ff0cfa";
    document.getElementById("bt3Off").style.backgroundColor = "red"
    document.getElementById("stt5").innerHTML = "ON"
    database.ref("/controll").update({
        "auto": 1
    })
}
bt3Off.onclick = function(){
    document.getElementById("bt3On").style.backgroundColor = "red"
    document.getElementById("bt3Off").style.backgroundColor = "#61ff0cfa";
    document.getElementById("stt5").innerHTML = "OFF"
    database.ref("/controll").update({
        "auto": 0
    })
}
function submitForm1(event) {
    event.preventDefault();
    var ele = document.getElementById("valueInput1");
    if(document.getElementById("stt5").innerHTML == "ON"){
    document.getElementById('results1').innerHTML = `Set tempurature: ${ele.value} &deg C`
    //write date to firebase
    database.ref("/controll").update({
        "maxOfTemp": Number(ele.value)
    })
    }
    if(document.getElementById("stt5").innerHTML == "OFF"){
        alert("turn on auto")
    }
}
function submitForm2(event) {
    event.preventDefault();
    var ele = document.getElementById("valueInput2");
    if(document.getElementById("stt5").innerHTML == "ON"){
    document.getElementById('results2').innerHTML = `Set humidity: ${ele.value} &%`
    //write date to firebase
    database.ref("/controll").update({
        "maxOfHum": Number(ele.value)
    })
    }
    if(document.getElementById("stt5").innerHTML == "OFF"){
        alert("turn on auto")
    }
}
//lay du lieu tren firebase
database.ref("/controll/relay1").on("value", function (snapshot) {
    var temp = snapshot.val();
    if (temp == 1) {
        document.getElementById("stt1").innerHTML = "ON";
        document.getElementById("bt1On").style.backgroundColor = "#61ff0cfa";
        document.getElementById("bt1Off").style.backgroundColor = "red"
    }
    else {
        document.getElementById("bt1On").style.backgroundColor = "red"
        document.getElementById("bt1Off").style.backgroundColor = "#61ff0cfa";
        document.getElementById("stt1").innerHTML = 'OFF';
    }
});
database.ref("/controll/relay2").on("value", function (snapshot) {
    var temp = snapshot.val();
    if (temp == 1) {
        document.getElementById("stt2").innerHTML = "ON";
        document.getElementById("bt2On").style.backgroundColor = "#61ff0cfa";
        document.getElementById("bt2Off").style.backgroundColor = "red"
    }
    else {
        document.getElementById("bt2On").style.backgroundColor = "red"
        document.getElementById("bt2Off").style.backgroundColor = "#61ff0cfa";
        document.getElementById("stt2").innerHTML = ' OFF';
    }
});
database.ref("/controll/auto").on("value", function (snapshot) {
    var temp = snapshot.val();
    if (temp == 1) {
        document.getElementById("stt5").innerHTML = "ON";
        document.getElementById("bt3On").style.backgroundColor = "#61ff0cfa";
        document.getElementById("bt3Off").style.backgroundColor = "red"
    }
    else {
        document.getElementById("bt2On").style.backgroundColor = "red"
        document.getElementById("bt2Off").style.backgroundColor = "#61ff0cfa";
        document.getElementById("stt2").innerHTML = ' OFF';
    }
});
database.ref("/controll/Temp").on("value", function (snapshot) {
    var temp = snapshot.val();
    document.getElementById("stt3").innerHTML = temp;
});
database.ref("/controll/Huma").on("value", function (snapshot) {
    var temp = snapshot.val();
    document.getElementById("stt4").innerHTML = temp;
});
database.ref("/controll/maxOfTemp").on("value", function (snapshot) {
    var temp = snapshot.val();
    document.getElementById('results1').innerHTML = `Set tempurature: ${temp} &deg C`
});
database.ref("/controll/maxOfHum").on("value", function (snapshot) {
    var temp = snapshot.val();
    document.getElementById('results2').innerHTML = `Set tempurature: ${temp} %`
});
