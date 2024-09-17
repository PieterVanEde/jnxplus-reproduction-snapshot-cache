package com.example.appa;

import com.example.libb.LibraryB;

public class App {
    public String getGreeting() {
        return "Hello World from " + new LibraryB().getName() + "!";
    }

    public static void main(String[] args) {
        System.out.println(new App().getGreeting());
    }
}

