package com.example.NBAPLAYERS;

import java.util.List;

public interface PlayerService {


    public void addPlayerToFavorite(Player player);
    public List<Player> getAllPlayers(String firstName, String lastName);
    public List<Player> getFavoritesPlayers();

}
