package com.example.NBAPLAYERS;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;


@Service
public class PlayerServiceImp implements PlayerService {

    private String url = "https://www.balldontlie.io/api/v1/players?search=";

    private List<Player> favoritesList;

    @Autowired
    public PlayerServiceImp() {

        this.favoritesList = new ArrayList<>();
    }

    @Override
    public void addPlayerToFavorite(Player player) {
        boolean flag = false;
        for(Player tempPlayer : favoritesList){
            if(tempPlayer.getId() == player.getId()) {
                flag = true;
                break;
            }
        }
        if(!flag){
            favoritesList.add(player);
        }
    }

    @Override
    public List<Player> getAllPlayers(String firstName , String lastName) {
        List<Player> res = new ArrayList<>();
        try {
            JSONObject jsonObject = readJsonFromUrl(url + firstName  + "+" + lastName );
            JSONArray allPlayer = jsonObject.getJSONArray("data");
            for (int i = 0 ; i< allPlayer.length() && i<10 ; i++){
                String afirstName = allPlayer.getJSONObject(i).getString("first_name");
                String alastName = allPlayer.getJSONObject(i).getString("last_name");
                String ateamName = allPlayer.getJSONObject(i).getJSONObject("team").getString("name");
                long id = allPlayer.getJSONObject(i).getLong("id");
                res.add(new Player(id ,afirstName,alastName,ateamName));
            }

        } catch (IOException e) {
            e.printStackTrace();
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return res;
    }

    @Override
    public List<Player> getFavoritesPlayers() {

        return favoritesList;
       // return this.playerCrud.findAll();
    }


    private String readAll(Reader rd) throws IOException {
        StringBuilder sb = new StringBuilder();
        int cp;
        while ((cp = rd.read()) != -1) {
            sb.append((char) cp);
        }
        return sb.toString();
    }

    private  JSONObject readJsonFromUrl(String url) throws IOException, JSONException {
        InputStream is = new URL(url).openStream();
        try {
            BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
            String jsonText = readAll(rd);
            JSONObject json = new JSONObject(jsonText);
            return json;
        } finally {
            is.close();
        }
    }






}
