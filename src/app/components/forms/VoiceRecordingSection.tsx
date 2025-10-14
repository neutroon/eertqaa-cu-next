import React from "react";
import { VoiceRecordingState, FormErrors } from "../../types";

interface VoiceRecordingSectionProps {
  voiceState: VoiceRecordingState;
  formErrors: FormErrors;
  isUploadingVoice: boolean;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  playRecording: () => void;
  deleteRecording: () => void;
  formatTime: (seconds: number) => string;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export default function VoiceRecordingSection({
  voiceState,
  formErrors,
  isUploadingVoice,
  startRecording,
  stopRecording,
  playRecording,
  deleteRecording,
  formatTime,
  audioRef,
}: VoiceRecordingSectionProps) {
  return (
    <div className="bg-gray-100 rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
        <svg
          className="w-5 h-5 text-indigo-600 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
            clipRule="evenodd"
          />
        </svg>
        رسالة صوتية (اختياري)
      </h3>
      <div className="group">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          أرسل رسالة صوتية لتخبرنا عن توقعاتك أو استفساراتك
        </label>

        {(voiceState.recordingError || formErrors.voiceMessage) && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-red-600 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-red-800 text-sm">
                {voiceState.recordingError || formErrors.voiceMessage}
              </span>
            </div>
          </div>
        )}

        {/* Voice Upload Progress */}
        {isUploadingVoice && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 ml-2"></div>
              <span className="text-blue-800 text-sm">
                جاري رفع الرسالة الصوتية...
              </span>
            </div>
          </div>
        )}

        {!voiceState.audioBlob ? (
          <div className="space-y-4">
            {!voiceState.isRecording ? (
              <button
                type="button"
                onClick={startRecording}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                    clipRule="evenodd"
                  />
                </svg>
                ابدأ التسجيل
              </button>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-600 font-semibold">
                      جاري التسجيل...
                    </span>
                  </div>
                  <div className="text-lg font-mono font-bold text-gray-900">
                    {formatTime(voiceState.recordingTime)}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={stopRecording}
                    className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    إيقاف التسجيل
                  </button>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-yellow-800 text-sm text-center">
                    💡 نصيحة: تحدث بوضوح واذكر اسمك والبرامج المطلوبة
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-green-800 font-semibold">
                    تم التسجيل بنجاح!
                  </span>
                </div>
                <span className="text-green-700 font-mono text-sm">
                  {formatTime(voiceState.recordingTime)}
                </span>
              </div>

              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={playRecording}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  {voiceState.isPlaying ? (
                    <>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      إيقاف
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      تشغيل
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={deleteRecording}
                  className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  حذف
                </button>
              </div>
            </div>
          </div>
        )}

        <audio ref={audioRef} className="hidden" />

        <div className="mt-3 text-xs text-gray-500">
          💡 الرسالة الصوتية ستساعدنا في فهم احتياجاتك بشكل أفضل
        </div>
      </div>
    </div>
  );
}
