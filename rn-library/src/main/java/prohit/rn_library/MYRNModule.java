package prohit.rn_library;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by Rahul Purohit on 6/22/2017.
 */

public class MYRNModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public MYRNModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MYRNModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String message, int duration) {

        if (getCurrentActivity() instanceof OnReactClick) {
            ((OnReactClick) getCurrentActivity()).onReactClick(message);
        }

    }


    @ReactMethod
    public void callMe(Callback callback) {
        callback.invoke("Hello1", "Hello2", "Hello3");
    }


    public interface OnReactClick {
        public void onReactClick(String tag);
    }
}

