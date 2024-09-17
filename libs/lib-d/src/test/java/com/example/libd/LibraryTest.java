package com.example.libd;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class LibraryTest {
  @Test
  void someLibraryMethodReturnsTrue() {
    LibraryD classUnderTest = new LibraryD();
    assertTrue(classUnderTest.someLibraryMethod(), "someLibraryMethod should return 'true'");
  }
}
