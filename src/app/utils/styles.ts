// Common CSS class combinations for consistent styling

export const formStyles = {
  input: {
    base: "w-full px-4 py-4 border-2 rounded-xl focus:ring-2 transition-all duration-300 bg-white",
    normal:
      "border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 hover:border-gray-300",
    error: "border-red-500 focus:ring-red-500 focus:border-red-500",
  },
  select: {
    base: "w-full px-4 py-4 border-2 rounded-xl focus:ring-2 transition-all duration-300 bg-white appearance-none",
    normal:
      "border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 hover:border-gray-300",
    error: "border-red-500 focus:ring-red-500 focus:border-red-500",
  },
  textarea: {
    base: "w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white hover:border-gray-300 resize-none",
  },
  button: {
    primary:
      "group py-5 px-12 rounded-2xl text-lg font-bold transition-all duration-300 shadow-2xl w-full md:w-auto bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 hover:shadow-indigo-500/25 transform hover:-translate-y-1",
    disabled:
      "group py-5 px-12 rounded-2xl text-lg font-bold transition-all duration-300 shadow-2xl w-full md:w-auto bg-gray-400 cursor-not-allowed",
    record:
      "w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
    stop: "flex-1 flex items-center justify-center px-4 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-300",
    play: "flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300",
    delete:
      "flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300",
  },
  section: {
    container: "bg-gray-100 rounded-2xl p-6",
    title: "text-lg font-semibold text-gray-900 mb-6 flex items-center",
    icon: "w-5 h-5 text-indigo-600 ml-2",
  },
  alert: {
    success: "mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl",
    error: "mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-2xl",
    warning: "mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg",
    info: "mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg",
  },
  icon: {
    success: "w-8 h-8 text-green-600 ml-3",
    error: "w-8 h-8 text-red-600 ml-3",
    warning: "w-5 h-5 text-yellow-600 ml-2",
    info: "w-5 h-5 text-blue-600 ml-2",
  },
} as const;

export const layoutStyles = {
  container: "relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
  section:
    "py-24 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 relative overflow-hidden",
  card: "bg-white text-background rounded-3xl shadow-2xl p-8 md:p-12",
  background: {
    overlay: "absolute inset-0 bg-black opacity-10",
    decoration1:
      "absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-20",
    decoration2:
      "absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-20",
  },
} as const;

export const textStyles = {
  heading: {
    primary: "text-4xl md:text-5xl font-bold text-white mb-6 arabic-heading",
    secondary: "text-2xl font-bold mb-6 arabic-heading text-white",
    section: "text-lg font-semibold text-gray-900 mb-6 flex items-center",
  },
  body: {
    primary: "text-xl text-indigo-100 max-w-2xl mx-auto arabic-text",
    secondary: "text-gray-300 arabic-text leading-relaxed text-lg",
    label: "block text-sm font-semibold text-gray-700 mb-3",
    error: "mt-2 text-sm text-red-600 flex items-center",
    helper: "text-sm text-gray-500 mt-4",
  },
  badge: {
    primary:
      "inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6",
  },
} as const;

// Utility function to combine classes
export const cn = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};
