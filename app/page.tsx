import Card from "./Components/Card";
import { motion } from "framer-motion";

export default function Home() {
  const courses = [
    { name: "React Basics", progress: 70 },
    { name: "Next.js", progress: 55 },
    { name: "JavaScript", progress: 85 },
    { name: "TypeScript", progress: 40 },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="grid lg:grid-cols-4 gap-4">
        <aside className="bg-zinc-900 rounded-xl p-5">
          <h2 className="text-2xl font-bold mb-6">LearnHub</h2>

          <div className="space-y-4 text-zinc-300">
            <p>Dashboard</p>
            <p>Courses</p>
            <p>Progress</p>
            <p>Certificates</p>
            <p>Settings</p>
          </div>
        </aside>

        <section className="lg:col-span-3 space-y-4">
          <div className="bg-zinc-900 rounded-xl p-6">
            <h1 className="text-3xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="text-zinc-400 mt-2">
              Track your learning progress and continue your courses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-zinc-900 p-5 rounded-xl">
              <h3>Total Courses</h3>
              <p className="text-4xl font-bold mt-2">8</p>
            </div>

            <div className="bg-zinc-900 p-5 rounded-xl">
              <h3>Hours Learned</h3>
              <p className="text-4xl font-bold mt-2">120</p>
            </div>

            <div className="bg-zinc-900 p-5 rounded-xl">
              <h3>Certificates</h3>
              <p className="text-4xl font-bold mt-2">3</p>
            </div>
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              Current Courses
            </h2>

            {courses.map((course, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between">
                  <span>{course.name}</span>
                  <span>{course.progress}%</span>
                </div>

                <div className="w-full h-3 bg-zinc-700 rounded-full mt-2">
                  <div
                    className="h-3 bg-blue-500 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              Weekly Activity
            </h2>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 28 }).map((_, index) => (
                <div
                  key={index}
                  className="h-8 rounded bg-green-500/60"
                />
              ))}
          </div>
          </div>
        </section>
        </div>
    </main>
  );
}