package com.alamichallenge;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import android.provider.Settings.Secure;
import android.content.Context;

public class DeviceUniqueID extends ReactContextBaseJavaModule {
    public Context ctx;

    DeviceUniqueID(ReactApplicationContext context) {
        super(context);
        this.ctx = context.getApplicationContext();
    }

    @Override
    public String getName() {
        return "DeviceUniqueID";
    }

    /** @see https://stackoverflow.com/a/2785493/8112320 */
    @ReactMethod
    public void get(Callback callback) {
        String uniqueID = Secure.getString(this.ctx.getContentResolver(), Secure.ANDROID_ID);
        callback.invoke(uniqueID);
    }
}