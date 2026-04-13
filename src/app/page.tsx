import { getCourses } from "./services/api";
import ClientHomeWrapper from "./components/ClientHomeWrapper";

export const dynamic = "force-dynamic"; // Ensure fresh data on every request for landing page

export default async function Home() {
  const courses = await getCourses();

  return (
    <main>
      <ClientHomeWrapper initialCourses={courses} />
    </main>
  );
}
