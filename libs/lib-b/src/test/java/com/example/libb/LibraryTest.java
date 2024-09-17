package com.example.libb;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class LibraryTest {
  @Test
  void someLibraryMethodReturnsTrue() {
    LibraryB classUnderTest = new LibraryB();
    assertTrue(classUnderTest.someLibraryMethod(), "someLibraryMethod should return 'true'");
  }
}
