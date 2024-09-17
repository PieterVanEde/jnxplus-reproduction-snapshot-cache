package com.example.libb;


import com.example.libd.LibraryD;

public class LibraryB {

  public String getName() {
    return new LibraryD().getName();
  }

  public boolean someLibraryMethod() {
    return true;
  }
}
