package com.example.NBAPLAYERS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000" , "http://localhost:3000/search" ,"http://localhost:3000/favorite" })

@RestController
public class PlayerController {

    private PlayerService service;

    @Autowired
    public PlayerController(PlayerService service) {
        this.service = service;
    }

    @GetMapping("/allPlayers")
    public List<Player> getPlayers(@RequestParam(value = "firstName" , defaultValue = "") String firstName , @RequestParam(value = "lastName" , defaultValue = "") String lastName){
        return this.service.getAllPlayers(firstName , lastName);
    }

    @GetMapping("/favorite")
    public List<Player> getFavorites(){
        return this.service.getFavoritesPlayers();
    }

    @PostMapping("/addPlayer")
    public void addToFavorite(@RequestBody Player player){
        this.service.addPlayerToFavorite(player);
    }
}
