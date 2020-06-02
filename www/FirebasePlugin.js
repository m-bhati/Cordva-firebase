var exec = require('cordova/exec');

function FirebasePlugin() { 
	console.log("FirebasePlugin.js: is created");
}

// SUBSCRIBE TO TOPIC //
FirebasePlugin.prototype.subscribeToTopic = function( topic, success, error ){
	exec(success, error, "FirebasePlugin", 'subscribeToTopic', [topic]);
}
// UNSUBSCRIBE FROM TOPIC //
FirebasePlugin.prototype.unsubscribeFromTopic = function( topic, success, error ){
	exec(success, error, "FirebasePlugin", 'unsubscribeFromTopic', [topic]);
}
// NOTIFICATION CALLBACK //
FirebasePlugin.prototype.onNotification = function( callback, success, error ){
	FirebasePlugin.prototype.onNotificationReceived = callback;
	exec(success, error, "FirebasePlugin", 'registerNotification',[]);
}
// TOKEN REFRESH CALLBACK //
FirebasePlugin.prototype.onTokenRefresh = function( callback ){
	FirebasePlugin.prototype.onTokenRefreshReceived = callback;
}
// GET TOKEN //
FirebasePlugin.prototype.getToken = function( success, error ){
	exec(success, error, "FirebasePlugin", 'getToken', []);
}

// DEFAULT NOTIFICATION CALLBACK //
FirebasePlugin.prototype.onNotificationReceived = function(payload){
	console.log("Received push notification")
	console.log(payload)
}
// DEFAULT TOKEN REFRESH CALLBACK //
FirebasePlugin.prototype.onTokenRefreshReceived = function(token){
	console.log("Received token refresh")
	console.log(token)
}

FirebasePlugin.prototype.logEvent = function (name, params, success, error) {
  exec(success, error, "FirebasePlugin", "logEvent", [name, params]);
};

FirebasePlugin.prototype.setUserId = function (id, success, error) {
  exec(success, error, "FirebasePlugin", "setUserId", [id]);
};

FirebasePlugin.prototype.setUserProperty = function (name, value, success, error) {
  exec(success, error, "FirebasePlugin", "setUserProperty", [name, value]);
};

FirebasePlugin.prototype.setAnalyticsCollectionEnabled = function (enabled, success, error) {
  exec(success, error, "FirebasePlugin", "setAnalyticsCollectionEnabled", [enabled]);
};

// FIRE READY //
exec(function(result){ console.log("FirebasePlugin Ready OK") }, function(result){ console.log("FirebasePlugin Ready ERROR") }, "FirebasePlugin",'ready',[]);





var firebasePlugin = new FirebasePlugin();
module.exports = firebasePlugin;
