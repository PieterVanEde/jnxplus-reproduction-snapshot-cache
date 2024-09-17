package com.example.libc;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class LibraryTest {
  @Test
  void someLibraryMethodReturnsTrue() {
    LibraryC classUnderTest = new LibraryC();
    assertTrue(classUnderTest.someLibraryMethod(), "someLibraryMethod should return 'true'");
  }
}
