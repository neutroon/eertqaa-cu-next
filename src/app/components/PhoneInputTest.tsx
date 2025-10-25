"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import ar from "react-phone-number-input/locale/ar.json";
import "react-phone-number-input/style.css";

interface TestFormData {
  phone: string;
}

export default function PhoneInputTest() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<TestFormData>();

  const phoneValue = watch("phone");

  const onSubmit = (data: TestFormData) => {
    console.log("Form submitted with:", data);
    alert(`Phone number submitted: ${data.phone}`);
  };

  const testNumbers = [
    "+20 10 1234 5678", // Valid Egyptian
    "+20 10 123", // Invalid - too short
    "+1 555 123 4567", // Valid US
    "+20 10 1234 5678 9", // Invalid - too long
    "+44 20 7946 0958", // Valid UK
    "123", // Invalid - no country code
  ];

  const fillTestNumber = (number: string) => {
    reset({ phone: number });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Phone Input Test</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "رقم الهاتف مطلوب",
              validate: (value) => {
                if (!value) return "رقم الهاتف مطلوب";
                // Use isPossiblePhoneNumber for length validation (recommended approach)
                if (!isPossiblePhoneNumber(value)) {
                  return "رقم الهاتف غير صحيح";
                }
                return true;
              },
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                international
                defaultCountry="EG"
                value={value}
                onChange={(phoneValue) => {
                  onChange(phoneValue);
                }}
                labels={ar}
                className={`phone-input ${errors.phone ? "phone-error" : ""}`}
                placeholder="+20 123 456 7890"
              />
            )}
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Current Value:</h3>
          <p className="text-sm text-gray-600">
            {phoneValue || "No phone number entered"}
          </p>
          <p className="text-sm text-gray-600">
            Possible:{" "}
            {phoneValue
              ? isPossiblePhoneNumber(phoneValue)
                ? "Yes"
                : "No"
              : "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            Valid:{" "}
            {phoneValue
              ? isValidPhoneNumber(phoneValue)
                ? "Yes"
                : "No"
              : "N/A"}
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Test Numbers:</h3>
          <div className="grid grid-cols-2 gap-2">
            {testNumbers.map((number, index) => (
              <button
                key={index}
                type="button"
                onClick={() => fillTestNumber(number)}
                className="px-3 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded border text-left"
              >
                {number}
              </button>
            ))}
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Clear
          </button>
        </div>
      </form>

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <h3 className="font-semibold mb-2">Testing Instructions:</h3>
        <ol className="text-sm space-y-1 list-decimal list-inside">
          <li>Try entering different phone numbers manually</li>
          <li>Click on test number buttons to auto-fill</li>
          <li>Check if validation works correctly</li>
          <li>Try submitting with valid and invalid numbers</li>
          <li>Test country selection dropdown</li>
          <li>Test clearing the input</li>
        </ol>
      </div>
    </div>
  );
}
