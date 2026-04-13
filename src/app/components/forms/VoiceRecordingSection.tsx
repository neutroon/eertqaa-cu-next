"use client";

import { VoiceRecordingState } from "../../types";

interface VoiceRecordingSectionProps {
  // FIXED: was "VoiceState" which doesn't exist — correct type is VoiceRecordingState
  voiceState: VoiceRecordingState;
  formErrors: Record<string, string>;
  isUploadingVoice: boolean;
  startRecording: () => void;
  stopRecording: () => void;
  playRecording: () => void;
  deleteRecording: () => void;
  formatTime: (time: number) => string;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export default function VoiceRecordingSection({
  voiceState,
  isUploadingVoice,
  startRecording,
  stopRecording,
  playRecording,
  deleteRecording,
  formatTime,
  audioRef,
}: VoiceRecordingSectionProps) {

  return (
    <div className="animate-fade-in [animation-delay:600ms]">
      {/* Sub-header */}
      <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 arabic-heading whitespace-nowrap">
          مذكرة صوتية (اختياري)
        </span>
        <div className="flex-1 h-px bg-slate-100" />
      </div>

      <div className="bg-slate-50/50 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 border-2 border-slate-100 hover:border-cu-blue/20 transition-all duration-700 flex flex-col items-center">
        <p className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-widest mb-6 sm:mb-8 md:mb-10 text-center">
          يمكنك تسجيل استفسارك صوتياً للمراجعة الأكاديمية
        </p>

        {/* Mic icon */}
        <div className="mb-6 sm:mb-8 md:mb-10 relative">
          {voiceState.isRecording && (
            <div className="absolute inset-0 bg-cu-red/20 blur-2xl sm:blur-3xl rounded-full animate-pulse scale-150" />
          )}
          <div className={`w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-all duration-700 shadow-xl ${voiceState.isRecording
              ? "bg-cu-red text-white scale-110"
              : "bg-white text-slate-400 border border-slate-100"
            }`}>
            <svg className={`w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 ${voiceState.isRecording ? "animate-pulse" : ""}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {!voiceState.audioBlob ? (
          <div className="text-center space-y-3 sm:space-y-4 w-full">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-950 arabic-text-premium">
              {voiceState.isRecording ? "جاري التسجيل الآن..." : "اضغط للبدء بالتسجيل"}
            </h4>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 font-medium arabic-text-premium">
              {voiceState.isRecording
                ? formatTime(voiceState.recordingTime)
                : "سجل رسالتك لضمان دقة معالجة طلبك."}
            </p>
            <button
              type="button"
              onClick={voiceState.isRecording ? stopRecording : startRecording}
              disabled={isUploadingVoice}
              className={`mt-4 sm:mt-6 btn-boutique py-3 sm:py-5 md:py-6 px-8 sm:px-12 md:px-14 text-base sm:text-lg md:text-xl shadow-xl ${voiceState.isRecording
                  ? "btn-boutique-red"
                  : "bg-slate-950 text-white border-slate-950 hover:bg-slate-800"
                }`}
            >
              {voiceState.isRecording ? "إيقاف وحفظ" : "بدء التسجيل الصوتي"}
            </button>
          </div>
        ) : (
          <div className="space-y-5 sm:space-y-7 w-full max-w-xs sm:max-w-sm md:max-w-lg mx-auto">
            {/* Waveform player */}
            <div className="flex items-center justify-between gap-3 sm:gap-5 bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2rem] border-2 border-slate-100 shadow-lg">
              <div className="text-left font-mono font-bold text-cu-blue text-sm sm:text-base">
                {formatTime(voiceState.recordingTime)}
              </div>
              <div className="flex-1 flex items-center gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-2 sm:h-3 bg-slate-100 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={playRecording}
                className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-cu-blue text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md shrink-0"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={deleteRecording}
                className="text-slate-400 font-bold hover:text-cu-red transition-all flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                مسح التسجيل
              </button>
            </div>
          </div>
        )}

        <audio ref={audioRef} hidden />
      </div>
    </div>
  );
}