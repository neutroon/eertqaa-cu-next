"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/NavbarComponent";
import Hero from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import RegistrationForm from "./components/RegistrationFormRefactored";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import LazySection from "./components/LazySection";
import { useAdaptiveLoading } from "./hooks/usePerformance";
// import courses from "./constants/courses";
import { Courses } from "./types";
import { getCourses } from "./services/api";
import RegistrationFormRefactored from "./components/RegistrationFormRefactored";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { shouldReduceAnimations, shouldLazyLoad } = useAdaptiveLoading();
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
  const handleCourseSelect = (courseName: string) => {
    setSelectedCourse(courseName);
    // Scroll to registration form
    setTimeout(() => {
      const registerSection = document.getElementById("register");
      if (registerSection) {
        registerSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ${
        shouldReduceAnimations ? "reduce-animations" : ""
      }`}
    >
      <div className="sticky top-0">
        <Navbar />
        <Hero />
      </div>

      {shouldLazyLoad ? (
        <>
          <LazySection>
            <CoursesSection
              courses={courses}
              selectedCourse={selectedCourse}
              onCourseSelect={handleCourseSelect}
            />
          </LazySection>
          <LazySection>
            <FeaturesSection />
          </LazySection>
          <LazySection>
            <AboutSection />
          </LazySection>
          <LazySection>
            <RegistrationFormRefactored
              courses={courses}
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
            />
          </LazySection>
          <LazySection>
            <TestimonialsSection courses={courses.data.courses} />
          </LazySection>
        </>
      ) : (
        <>
          <CoursesSection
            courses={courses}
            selectedCourse={selectedCourse}
            onCourseSelect={handleCourseSelect}
          />
          <FeaturesSection />
          <AboutSection />
          <RegistrationFormRefactored
            courses={courses}
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
          />
          <TestimonialsSection courses={courses.data.courses} />
        </>
      )}
      <Footer />
    </div>
  );
}
