"use client";

import { useState } from "react";
import Navbar from "./NavbarComponent";
import Hero from "./HeroSection";
import CoursesSection from "./CoursesSection";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import RegistrationFormRefactored from "./RegistrationFormRefactored";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";
import LazySection from "./LazySection";
import { useAdaptiveLoading } from "../hooks/usePerformance";
import { Courses } from "../types";

interface ClientHomeWrapperProps {
  initialCourses: Courses;
}

export default function ClientHomeWrapper({ initialCourses }: ClientHomeWrapperProps) {
  const [selectedCourse, setSelectedCourse] = useState("");
  const { shouldReduceAnimations, shouldLazyLoad } = useAdaptiveLoading();

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

  return (
    <div
      className={`min-h-screen bg-white ${shouldReduceAnimations ? "reduce-animations" : ""}`}
    >
      <Navbar />
      <Hero />

      {shouldLazyLoad ? (
        <>
          <LazySection>
            <CoursesSection
              courses={initialCourses}
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
              courses={initialCourses}
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
            />
          </LazySection>
          {/* <LazySection>
            <TestimonialsSection courses={initialCourses.data.courses} />
          </LazySection> */}
        </>
      ) : (
        <>
          <CoursesSection
            courses={initialCourses}
            selectedCourse={selectedCourse}
            onCourseSelect={handleCourseSelect}
          />
          <FeaturesSection />
          <AboutSection />
          <RegistrationFormRefactored
            courses={initialCourses}
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
          />
          {/* <TestimonialsSection courses={initialCourses.data.courses} /> */}
        </>
      )}
      <Footer />
    </div>
  );
}
