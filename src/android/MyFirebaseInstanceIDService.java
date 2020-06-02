package by.mbhati.cordova.firebase;

import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
// import com.google.firebase.iid.FirebaseInstanceIdService;
import com.google.firebase.messaging.FirebaseMessagingService;
/**
 * Created by Felipe Echanique on 08/06/2016.
 */
public class MyFirebaseInstanceIDService extends FirebaseMessagingService {

    private static final String TAG = "FirebasePlugin";

    @Override
    public void onNewToken(String token){
        // Get updated InstanceID token.
        String refreshedToken = FirebaseInstanceId.getInstance().getToken();
        Log.d(TAG, "Refreshed token: " + refreshedToken);
		FirebasePlugin.sendTokenRefresh( refreshedToken );

        // TODO: Implement this method to send any registration to your app's servers.
        //sendRegistrationToServer(refreshedToken);
    }
}
