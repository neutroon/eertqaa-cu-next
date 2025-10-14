import { useState } from "react";
import { Review, ReviewFormData, Course } from "../types";

interface TestimonialsSectionProps {
  courses: Course[];
}

export default function TestimonialsSection({
  courses,
}: TestimonialsSectionProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewFormData, setReviewFormData] = useState<ReviewFormData>({
    courseId: 0,
    studentName: "",
    rating: 5,
    comment: "",
    jobTitle: "",
    company: "",
  });

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      courseId: 1,
      studentName: "نورهان مصطفى",
      rating: 5,
      comment:
        "بصراحة برنامج التغذية التخصصية فرق معايا جدًا! المحتوى منظم والمدربين فاهمين كويس أوي. كنت دايمًا بدور على كورس يجمع بين العلم والتطبيق العملي وفعلاً لقيت ده هنا. الشهادة من جامعة القاهرة كمان خلت الـ CV بتاعي أقوى بكتير.",
      date: "2024-03-10",
      verified: true,
      jobTitle: "أخصائية تغذية علاجية",
      company: "مستشفى القصر العيني",
    },
    {
      id: 2,
      courseId: 2,
      studentName: "محمود السعيد",
      rating: 5,
      comment:
        "أنا خريج علوم، وكنت عايز أطور نفسي في مجال التغذية المتقدمة. الكورس بصراحة فوق الممتاز، شرح بسيط ومعلومات حديثة جدًا. حسّيت إني بقيت فاهم الجسم والتغذية بطريقة علمية وعملية في نفس الوقت. أنصح أي حد مهتم يبدأ فورًا.",
      date: "2024-04-02",
      verified: true,
      jobTitle: "أخصائي تغذية",
      company: "مركز صحة الحياة",
    },
    {
      id: 3,
      courseId: 3,
      studentName: "منة الله خالد",
      rating: 4,
      comment:
        "أنا مش من خلفية طبية، بس كنت مهتمة أتعلم عن التغذية العامة. الكورس ده كان بداية ممتازة! فهمت الأساسيات بطريقة سهلة وبسيطة والمدربين كانوا متعاونين جدًا. حسّيت بثقة إني أقدر أساعد نفسي واللي حواليا يعيشوا حياة صحية أكتر.",
      date: "2024-04-15",
      verified: true,
      jobTitle: "مدربة نمط حياة صحي",
      company: "مركز توازن",
    },
  ]);

  const openReviewForm = (courseId: number) => {
    setReviewFormData({ ...reviewFormData, courseId });
    setShowReviewForm(true);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewFormData.studentName && reviewFormData.comment) {
      const newReview: Review = {
        id: reviews.length + 1,
        courseId: reviewFormData.courseId,
        studentName: reviewFormData.studentName,
        rating: reviewFormData.rating,
        comment: reviewFormData.comment,
        date: new Date().toISOString().split("T")[0],
        verified: true,
        jobTitle: reviewFormData.jobTitle || "طالب",
        company: reviewFormData.company || "غير محدد",
      };
      setReviews([...reviews, newReview]);
      setReviewFormData({
        courseId: 0,
        studentName: "",
        rating: 5,
        comment: "",
        jobTitle: "",
        company: "",
      });
      setShowReviewForm(false);
      alert("تم إرسال تقييمك بنجاح! شكراً لك على مشاركة تجربتك");
    }
  };

  return (
    <>
      {/* Testimonials Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
              آراء الطلاب
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 arabic-heading">
              ماذا يقول طلابنا؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text">
              انضم إلى آلاف الطلاب الذين حصلوا على شهادات معتمدة من جامعة
              القاهرة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review, index) => {
              const course = courses.find(
                (c) => c.id === review.courseId.toString()
              );
              const colors = [
                "from-indigo-50 to-blue-50",
                "from-green-50 to-emerald-50",
                "from-purple-50 to-pink-50",
              ];
              const bgColors = [
                "bg-indigo-600",
                "bg-green-600",
                "bg-purple-600",
              ];

              return (
                <div
                  key={review.id}
                  className={`bg-gradient-to-br ${colors[index]} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div
                        className={`w-14 h-14 ${bgColors[index]} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                      >
                        {review.studentName.slice(0, 1)}
                      </div>
                      <div className="mr-4">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-gray-900 text-lg">
                            {review.studentName
                              .split(" ")
                              .slice(0, 2)
                              .join(" ")}
                          </h4>
                          {review.verified && (
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 font-medium">
                          {review.jobTitle}
                        </p>
                        <p className="text-xs text-gray-500">
                          {review.company}
                        </p>
                        <p className="text-xs text-indigo-600 font-semibold mt-1">
                          {course?.title || "برنامج تدريبية"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="relative">
                    <div className="absolute top-0 right-0 text-6xl text-gray-200 font-serif leading-none">
                      &quot;
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4 arabic-quote relative z-10 pr-8">
                      {review.comment}
                    </p>
                  </div>

                  {/* Review Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>تقييم موثق</span>
                    </div>
                    <div className="text-sm font-semibold text-indigo-600">
                      {review.rating}/5
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add Review Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => openReviewForm(1)}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              شاركنا تجربتك
            </button>
          </div>
        </div>
      </section>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-background rounded-2xl p-8 w-full sm:w-[90vh] max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 arabic-heading">
                تقييم البرنامج
              </h3>
              <button
                onClick={() => setShowReviewForm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleReviewSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    value={reviewFormData.studentName}
                    onChange={(e) =>
                      setReviewFormData({
                        ...reviewFormData,
                        studentName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    المسمى الوظيفي
                  </label>
                  <input
                    type="text"
                    value={reviewFormData.jobTitle}
                    onChange={(e) =>
                      setReviewFormData({
                        ...reviewFormData,
                        jobTitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    placeholder="مثال: مطور برمجيات"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  الشركة أو المؤسسة
                </label>
                <input
                  type="text"
                  value={reviewFormData.company}
                  onChange={(e) =>
                    setReviewFormData({
                      ...reviewFormData,
                      company: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="مثال: شركة التقنية المتقدمة"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  التقييم *
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() =>
                        setReviewFormData({ ...reviewFormData, rating: star })
                      }
                      className={`w-10 h-10 transition-colors ${
                        star <= reviewFormData.rating
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-yellow-300"
                      }`}
                    >
                      <svg
                        className="w-full h-full"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {reviewFormData.rating === 5 && "ممتاز"}
                  {reviewFormData.rating === 4 && "جيد جداً"}
                  {reviewFormData.rating === 3 && "جيد"}
                  {reviewFormData.rating === 2 && "مقبول"}
                  {reviewFormData.rating === 1 && "ضعيف"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  تقييمك للبرنامج *
                </label>
                <textarea
                  value={reviewFormData.comment}
                  onChange={(e) =>
                    setReviewFormData({
                      ...reviewFormData,
                      comment: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none"
                  rows={5}
                  placeholder="شاركنا تجربتك مع البرنامج... ما الذي أعجبك؟ كيف ساعدتك في تطوير مهاراتك؟ ما هي النتائج التي حققتها؟"
                  required
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="flex-1 py-2 px-3 rounded-xl font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 px-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 transition-all duration-300"
                >
                  إرسال التقييم
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
