import { Course } from "../types";

interface CourseCardProps {
  course: Course;
  index: number;
  selectedCourse: string;
  onCourseSelect: (courseName: string) => void;
}

export default function CourseCard({
  course,
  index,
  selectedCourse,
  onCourseSelect,
}: CourseCardProps) {
  const isSelected = selectedCourse === course.title;

  return (
    <div
      className={`group relative min-h-[340px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[460px] rounded-2xl sm:rounded-[1.5rem] overflow-hidden bg-slate-950 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border transition-all duration-700 cursor-pointer
        ${isSelected
          ? "border-cu-gold -translate-y-2 shadow-[0_40px_80px_-15px_rgba(46,49,146,0.25)]"
          : "border-slate-800 hover:-translate-y-3 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]"
        }`}
      onClick={() => onCourseSelect(course.title)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Background: subtle grid pattern for texture */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Scrims — FIXED: bg-gradient-to-t */}
      <div className="absolute inset-0 z-0 bg-linear-to-t from-slate-950/95 via-slate-950/40 to-slate-900/60" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 z-0 bg-linea-to-t from-slate-950 via-slate-950/60 to-transparent" />

      {/* Glow accent — blue on hover, gold when selected */}
      <div className={`absolute top-0 left-0 right-0 h-px transition-all duration-700
        ${isSelected
          ? "bg-linear-to-r from-transparent via-cu-gold to-transparent"
          : "bg-linear-to-r from-transparent via-cu-blue/40 to-transparent opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Heritage Certificate Frame */}
      <div className={`absolute inset-3 sm:inset-5 border rounded-xl sm:rounded-[1rem] pointer-events-none z-10 transition-all duration-700
        ${isSelected ? "border-cu-gold/40" : "border-white/5 group-hover:border-cu-gold/20"}`}
      >
        <div className={`absolute top-0 left-0 w-5 h-5 sm:w-7 sm:h-7 border-t-2 border-l-2 rounded-tl-lg transition-all duration-500
          ${isSelected ? "border-cu-gold" : "border-transparent group-hover:border-cu-gold/60"}`}
        />
        <div className={`absolute bottom-0 right-0 w-5 h-5 sm:w-7 sm:h-7 border-b-2 border-r-2 rounded-br-lg transition-all duration-500
          ${isSelected ? "border-cu-gold" : "border-transparent group-hover:border-cu-gold/60"}`}
        />
      </div>

      {/* Card Body */}
      <div className="absolute inset-0 z-20 p-5 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-between">

        {/* Top: Seats badge */}
        <div className="flex justify-end">
          {course.availableSeats <= 10 && course.availableSeats > 0 && (
            <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase bg-cu-red/90 text-white px-2 sm:px-3 py-1 rounded-full">
              آخر {course.availableSeats} مقاعد
            </span>
          )}
          {course.availableSeats === 0 && (
            <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase bg-slate-700 text-white/60 px-2 sm:px-3 py-1 rounded-full">
              مكتمل
            </span>
          )}
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col gap-3 sm:gap-4">

          {/* Category Badge */}
          <div className="flex items-center gap-2 sm:gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <div className="w-6 sm:w-10 h-px bg-cu-gold shrink-0" />
            <span className="text-cu-gold text-[10px] sm:text-xs font-black tracking-[0.25em] sm:tracking-[0.3em] uppercase truncate">
              {course.category?.name === "البرامج المعتمدة من الجامعة" ? "برامج التغذية" : course.category?.name || "برنامج رسمي"}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-white leading-[1.2] transition-colors duration-500
            ${isSelected ? "text-cu-gold" : "group-hover:text-cu-gold"}`}
          >
            {course.title}
          </h3>

          {/* Description — visible at low opacity always, full on hover */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-2 arabic-text-premium font-medium opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            {course.description}
          </p>

          {/* Meta row: duration + seats */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            {course.duration > 0 && (
              <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-white/50 font-bold">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.duration} ساعة
              </span>
            )}
            {course.availableSeats > 10 && (
              <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-white/50 font-bold">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {course.availableSeats} مقعد
              </span>
            )}
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cu-green rounded-full shadow-[0_0_8px_#00a651]" />
              <span className="text-[9px] sm:text-[10px] font-black text-white/40 tracking-widest uppercase">
                الاعتماد الجامعي
              </span>
            </div>

            {/* Arrow CTA */}
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-500 transform
              ${isSelected
                ? "border-cu-gold bg-cu-gold text-slate-950 rotate-45"
                : "border-white/20 text-white group-hover:border-cu-gold group-hover:bg-cu-gold group-hover:text-slate-950 group-hover:rotate-45"
              }`}
            >
              <svg className="-rotate-45 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}