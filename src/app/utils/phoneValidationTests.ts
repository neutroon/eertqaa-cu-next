import { isValidPhoneNumber } from "react-phone-number-input";

// Test data
export const validPhoneNumbers = [
  // Egyptian numbers
  "+20 10 1234 5678",
  "+20 11 1234 5678",
  "+20 12 1234 5678",
  "+20 15 1234 5678",
  "+20 2 1234 5678",
  "+20 3 1234 5678",
  "+20 40 1234 5678",
  "+20 50 1234 5678",
  "+20 60 1234 5678",
  "+20 70 1234 5678",
  "+20 80 1234 5678",
  "+20 90 1234 5678",

  // International numbers
  "+1 555 123 4567", // US
  "+44 20 7946 0958", // UK
  "+33 1 42 86 83 26", // France
  "+49 30 12345678", // Germany
  "+971 50 123 4567", // UAE
  "+966 50 123 4567", // Saudi Arabia
  "+90 212 123 4567", // Turkey
  "+7 495 123 4567", // Russia
  "+86 138 0013 8000", // China
  "+81 3 1234 5678", // Japan

  // Edge cases that should be valid
  "+20 10 0000 0000",
  "+20 10 9999 9999",
  "+1 800 555 0199", // US toll-free
  "+44 800 123 4567", // UK toll-free
];

export const invalidPhoneNumbers = [
  // Too short
  "+20 10 123",
  "+20 1",
  "123",
  "+20",
  "+1 555",

  // Too long
  "+20 10 1234 5678 9",
  "+20 10 1234 5678 9012",
  "+20 10 1234 5678 9012 3456",

  // Wrong format
  "20 10 1234 5678", // Missing +
  "+20-10-1234-5678", // Wrong separators
  "+20.10.1234.5678", // Wrong separators
  "+20_10_1234_5678", // Wrong separators

  // Invalid country codes
  "+999 10 1234 5678",
  "+00 10 1234 5678",
  "+9999 10 1234 5678",

  // Contains invalid characters
  "+20 10 1234 5678a",
  "+20 10 1234 5678@",
  "+20 10 1234 5678#",
  "+20 10 1234 5678$",
  "+20 10 1234 5678%",
  "+20 10 1234 5678^",
  "+20 10 1234 5678&",
  "+20 10 1234 5678*",
  "+20 10 1234 5678(",
  "+20 10 1234 5678)",
  "+20 10 1234 5678[",
  "+20 10 1234 5678]",
  "+20 10 1234 5678{",
  "+20 10 1234 5678}",
  "+20 10 1234 5678|",
  "+20 10 1234 5678\\",
  "+20 10 1234 5678/",
  "+20 10 1234 5678?",
  "+20 10 1234 5678<",
  "+20 10 1234 5678>",
  "+20 10 1234 5678,",
  "+20 10 1234 5678.",
  "+20 10 1234 5678;",
  "+20 10 1234 5678:",
  "+20 10 1234 5678'",
  '+20 10 1234 5678"',
  "+20 10 1234 5678`",
  "+20 10 1234 5678~",
  "+20 10 1234 5678!",

  // Whitespace issues
  "+20 10 1234 5678 ", // Trailing space
  " +20 10 1234 5678", // Leading space
  "+20  10 1234 5678", // Double space
  "+20\t10 1234 5678", // Tab character
  "+20\n10 1234 5678", // Newline character

  // Empty or whitespace only
  "",
  " ",
  "  ",
  "\t",
  "\n",
  "\r",
  "\r\n",

  // Special cases
  "+20 10 1234 5678 9", // Extra digit
  "+20 10 1234 567", // Missing digit
  "+20 10 1234 5678 9 0", // Multiple extra digits
];

// Test functions
export function runPhoneValidationTests() {
  console.log("🧪 Running Phone Validation Tests...\n");

  let passedTests = 0;
  let totalTests = 0;

  // Test valid numbers
  console.log("✅ Testing Valid Numbers:");
  validPhoneNumbers.forEach((number, index) => {
    totalTests++;
    const isValid = isValidPhoneNumber(number);
    if (isValid) {
      passedTests++;
      console.log(`  ${index + 1}. ${number} - ✅ PASS`);
    } else {
      console.log(`  ${index + 1}. ${number} - ❌ FAIL (should be valid)`);
    }
  });

  console.log("\n❌ Testing Invalid Numbers:");
  invalidPhoneNumbers.forEach((number, index) => {
    totalTests++;
    const isValid = isValidPhoneNumber(number);
    if (!isValid) {
      passedTests++;
      console.log(`  ${index + 1}. ${number} - ✅ PASS`);
    } else {
      console.log(`  ${index + 1}. ${number} - ❌ FAIL (should be invalid)`);
    }
  });

  console.log(`\n📊 Test Results: ${passedTests}/${totalTests} tests passed`);
  console.log(
    `🎯 Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`
  );

  if (passedTests === totalTests) {
    console.log("🎉 All tests passed! Phone validation is working correctly.");
  } else {
    console.log(
      "⚠️  Some tests failed. Please check the phone validation logic."
    );
  }

  return {
    passed: passedTests,
    total: totalTests,
    successRate: (passedTests / totalTests) * 100,
  };
}

// Individual test functions
export function testValidNumbers() {
  console.log("Testing valid numbers...");
  return validPhoneNumbers.map((number) => ({
    number,
    isValid: isValidPhoneNumber(number),
    expected: true,
  }));
}

export function testInvalidNumbers() {
  console.log("Testing invalid numbers...");
  return invalidPhoneNumbers.map((number) => ({
    number,
    isValid: isValidPhoneNumber(number),
    expected: false,
  }));
}

// Performance test
export function performanceTest() {
  console.log("🚀 Running Performance Test...");

  const startTime = performance.now();

  // Test 1000 valid numbers
  for (let i = 0; i < 1000; i++) {
    validPhoneNumbers.forEach((number) => {
      isValidPhoneNumber(number);
    });
  }

  const endTime = performance.now();
  const duration = endTime - startTime;

  console.log(`⏱️  Performance: ${duration.toFixed(2)}ms for 1000 iterations`);
  console.log(`📈 Average: ${(duration / 1000).toFixed(2)}ms per iteration`);

  return duration;
}

// Export test runner
export function runAllTests() {
  console.log("🧪 Starting Comprehensive Phone Validation Test Suite\n");

  const validationResults = runPhoneValidationTests();
  const performanceResults = performanceTest();

  return {
    validation: validationResults,
    performance: performanceResults,
  };
}

// Browser console test runner
if (typeof window !== "undefined") {
  (window as any).runPhoneTests = runAllTests;
  console.log(
    "🔧 Phone validation tests loaded! Run 'runPhoneTests()' in console to test."
  );
}
