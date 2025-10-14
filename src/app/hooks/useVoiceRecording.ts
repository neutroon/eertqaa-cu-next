import { useState, useRef, useCallback } from "react";

export interface VoiceRecordingState {
  isRecording: boolean;
  audioBlob: Blob | null;
  audioUrl: string | null;
  recordingTime: number;
  isPlaying: boolean;
  recordingError: string | null;
}

export const useVoiceRecording = () => {
  const [voiceState, setVoiceState] = useState<VoiceRecordingState>({
    isRecording: false,
    audioBlob: null,
    audioUrl: null,
    recordingTime: 0,
    isPlaying: false,
    recordingError: null,
  });

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setVoiceState((prev) => ({
        ...prev,
        recordingTime: prev.recordingTime + 1,
      }));
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }, []);

  const startRecording = useCallback(async () => {
    try {
      setVoiceState((prev) => ({ ...prev, recordingError: null }));
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
        },
      });

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
      });

      const chunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm;codecs=opus" });
        setVoiceState((prev) => ({
          ...prev,
          audioBlob: blob,
          audioUrl: URL.createObjectURL(blob),
        }));

        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setVoiceState((prev) => ({
        ...prev,
        isRecording: true,
        recordingTime: 0,
      }));
      startTimer();
    } catch (error) {
      console.error("Error starting recording:", error);
      if (error instanceof Error) {
        let errorMessage = "حدث خطأ أثناء بدء التسجيل";
        if (error.name === "NotAllowedError") {
          errorMessage =
            "يرجى السماح بالوصول للميكروفون لتسجيل الرسالة الصوتية";
        } else if (error.name === "NotFoundError") {
          errorMessage = "لم يتم العثور على ميكروفون متاح";
        }
        setVoiceState((prev) => ({ ...prev, recordingError: errorMessage }));
      }
    }
  }, [startTimer]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && voiceState.isRecording) {
      mediaRecorderRef.current.stop();
      setVoiceState((prev) => ({ ...prev, isRecording: false }));
      stopTimer();
    }
  }, [voiceState.isRecording, stopTimer]);

  const playRecording = useCallback(() => {
    if (voiceState.audioUrl && audioRef.current) {
      if (voiceState.isPlaying) {
        audioRef.current.pause();
        setVoiceState((prev) => ({ ...prev, isPlaying: false }));
      } else {
        audioRef.current.src = voiceState.audioUrl;
        audioRef.current.play();
        setVoiceState((prev) => ({ ...prev, isPlaying: true }));

        audioRef.current.onended = () => {
          setVoiceState((prev) => ({ ...prev, isPlaying: false }));
        };
      }
    }
  }, [voiceState.audioUrl, voiceState.isPlaying]);

  const deleteRecording = useCallback(() => {
    if (voiceState.audioUrl) {
      URL.revokeObjectURL(voiceState.audioUrl);
    }
    setVoiceState({
      isRecording: false,
      audioBlob: null,
      audioUrl: null,
      recordingTime: 0,
      isPlaying: false,
      recordingError: null,
    });
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }
  }, [voiceState.audioUrl]);

  const cleanup = useCallback(() => {
    stopTimer();
    if (voiceState.audioUrl) {
      URL.revokeObjectURL(voiceState.audioUrl);
    }
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
    }
  }, [voiceState.audioUrl, stopTimer]);

  return {
    voiceState,
    audioRef,
    startRecording,
    stopRecording,
    playRecording,
    deleteRecording,
    formatTime,
    cleanup,
  };
};
