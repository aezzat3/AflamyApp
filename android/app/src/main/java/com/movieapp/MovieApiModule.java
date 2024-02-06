package com.movieapp;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import java.io.IOException;

public class MovieApiModule extends ReactContextBaseJavaModule {

    private final OkHttpClient client = new OkHttpClient();

    public MovieApiModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MovieApi";
    }

    @ReactMethod
    public void fetchMoviesList(String filter, int page, final Promise promise) {
        String url = "https://api.themoviedb.org/3/movie/" + filter + "?api_key=f96ebd89c24a7d02a571f92793888b5a&page=" + page;

        Request request = new Request.Builder()
            .url(url)
            .build();

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                promise.reject("FETCH_ERROR", e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (!response.isSuccessful()) {
                    promise.reject("FETCH_ERROR", "Failed to fetch movies");
                    return;
                }
                String responseData = response.body().string();
                promise.resolve(responseData);
            }
        });
    }

    @ReactMethod
    public void fetchGenres(final Promise promise) {
        String url = "https://api.themoviedb.org/3/genre/movie/list?api_key=f96ebd89c24a7d02a571f92793888b5a";

        Request request = new Request.Builder()
            .url(url)
            .build();

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                promise.reject("FETCH_ERROR", e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (!response.isSuccessful()) {
                    promise.reject("FETCH_ERROR", "Failed to fetch genres");
                    return;
                }
                String responseData = response.body().string();
                promise.resolve(responseData);
            }
        });
    }

    @ReactMethod
    public void fetchCredits(int movieId, final Promise promise) {
        String url = "https://api.themoviedb.org/3/movie/" + movieId + "/credits?api_key=f96ebd89c24a7d02a571f92793888b5a";

        Request request = new Request.Builder()
            .url(url)
            .build();

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                promise.reject("FETCH_ERROR", e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (!response.isSuccessful()) {
                    promise.reject("FETCH_ERROR", "Failed to fetch credits");
                    return;
                }
                String responseData = response.body().string();
                promise.resolve(responseData);
            }
        });
    }
}
