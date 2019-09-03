$(document).on("click","#local",function(){

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.NONE]     = 'No network connection';
}

checkConnection();

var onSuccess = function(position) {

L.mapquest.key = 'V75qxvRFj6ZCGWQ0RSR4lzhK7NR3Fs4H';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [position.coords.latitude, position.coords.longitude],
  layers: L.mapquest.tileLayer('map'),
  zoom: 15,
});
};

function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

navigator.geolocation.getCurrentPosition(onSuccess, onError);

});