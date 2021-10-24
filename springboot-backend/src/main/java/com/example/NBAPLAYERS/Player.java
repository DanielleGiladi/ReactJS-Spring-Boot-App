package com.example.NBAPLAYERS;

import javax.persistence.*;


public class Player {


    private long id;
    private String firstName;
    private String lastName;
    private String teamName;

    public Player() {
    }

    public Player(long id , String firstName, String lastName, String teamName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.teamName = teamName;
        this.id = id;
    }


    public long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setId(long id) {
        this.id = id;
    }


}
