"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { runAllTests } from "../utils/phoneValidationTests";

export default function PhoneValidationTestPage() {
  useEffect(() => {
    // Run tests when component mounts
    console.log("🧪 Phone Validation Test Suite");
    console.log("================================");

    const results = runAllTests();

    console.log("\n📋 Test Summary:");
    console.log(
      `Validation Tests: ${results.validation.passed}/${results.validation.total} passed`
    );
    console.log(`Performance: ${results.performance.toFixed(2)}ms`);
    console.log(`Success Rate: ${results.validation.successRate.toFixed(1)}%`);

    // Display results in the UI
    const resultsDiv = document.getElementById("test-results");
    if (resultsDiv) {
      resultsDiv.innerHTML = `
        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 class="font-semibold text-green-800">Test Results</h3>
          <p class="text-green-700">Validation: ${results.validation.passed}/${
        results.validation.total
      } tests passed</p>
          <p class="text-green-700">Performance: ${results.performance.toFixed(
            2
          )}ms</p>
          <p class="text-green-700">Success Rate: ${results.validation.successRate.toFixed(
            1
          )}%</p>
        </div>
      `;
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 text-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Phone Validation Test Suite
          </h1>

          <div id="test-results" className="mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-700">
                Check the browser console for detailed test results.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Valid Test Numbers</h2>
              <div className="space-y-2 text-sm">
                <div className="font-mono bg-white p-2 rounded">
                  +20 10 1234 5678
                </div>
                <div className="font-mono bg-white p-2 rounded">
                  +20 11 1234 5678
                </div>
                <div className="font-mono bg-white p-2 rounded">
                  +20 12 1234 5678
                </div>
                <div className="font-mono bg-white p-2 rounded">
                  +1 555 123 4567
                </div>
                <div className="font-mono bg-white p-2 rounded">
                  +44 20 7946 0958
                </div>
                <div className="font-mono bg-white p-2 rounded">
                  +33 1 42 86 83 26
                </div>
                <div className="font-mono bg-white p-2 rounded">
                  +49 30 12345678
                </div>
                <div className="font-mono bg-white p-2 rounded">
                  +971 50 123 4567
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Invalid Test Numbers
              </h2>
              <div className="space-y-2 text-sm">
                <div className="font-mono bg-white p-2 rounded text-red-600">
                  +20 10 123
                </div>
                <div className="font-mono bg-white p-2 rounded text-red-600">
                  +20 1
                </div>
                <div className="font-mono bg-white p-2 rounded text-red-600">
                  123
                </div>
                <div className="font-mono bg-white p-2 rounded text-red-600">
                  +20
                </div>
                <div className="font-mono bg-white p-2 rounded text-red-600">
                  +20 10 1234 5678 9
                </div>
                <div className="font-mono bg-white p-2 rounded text-red-600">
                  20 10 1234 5678
                </div>
                <div className="font-mono bg-white p-2 rounded text-red-600">
                  +20-10-1234-5678
                </div>
                <div className="font-mono bg-white p-2 rounded text-red-600">
                  +999 10 1234 5678
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">How to Test</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Open browser developer tools (F12)</li>
              <li>Go to the Console tab</li>
              <li>Refresh this page to see test results</li>
              <li>Check the test results above</li>
              <li>
                Navigate to{" "}
                <code className="bg-gray-200 px-1 rounded">/test-phone</code> to
                test the actual phone input component
              </li>
            </ol>
          </div>

          <div className="mt-6 text-center">
            <a
              href="/test-phone"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Test Phone Input Component
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



