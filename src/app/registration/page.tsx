"use client";
import { useEffect, useState } from "react";
import RegistrationFormRefactored from "../components/RegistrationFormRefactored";
import { Courses } from "../types";
import { getCourses } from "../services/api";
import LoadingScreen from "../components/LoadingScreen";

export default function Registration() {
  const [courses, setCourses] = useState<Courses>({
    success: true,
    message: "",
    timestamp: "",
    statusCode: 0,
    data: {
      total: 0,
      courses: [],
    },
  });
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCourses()
      .then((coursesData) => {
        setCourses(coursesData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading courses:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <LoadingScreen
        onLoadingComplete={() => {
          setIsLoading(false);
        }}
      />
    );
  }
  return (
    <RegistrationFormRefactored
      courses={courses}
      selectedCourse={selectedCourse}
      setSelectedCourse={setSelectedCourse}
    />
  );
}
