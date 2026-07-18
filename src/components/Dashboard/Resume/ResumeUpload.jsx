import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileText, CheckCircle2, AlertCircle, Loader2, RefreshCw } from "lucide-react";
import { toast } from "react-hot-toast";

export default function ResumeUpload({ onAnalysisComplete }) {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle | uploading | processing | success
  const [analyzeProgress, setAnalyzeProgress] = useState(0);

  const onDrop = useCallback(async (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      return toast.error("Invalid file payload. Please pass a clean PDF document asset.");
    }

    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      await executeNetworkUpload(selectedFile);
    }
  }, [onAnalysisComplete]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    multiple: false,
  });

  // Dispatches multi-part binary data vectors to the live Express port
  const executeNetworkUpload = async (targetFile) => {
    setUploadStatus("uploading");
    setAnalyzeProgress(15);

    // Kicks off smooth micro-progress animation ticks
    const progressInterval = setInterval(() => {
      setAnalyzeProgress((prev) => {
        if (prev >= 85) {
          clearInterval(progressInterval);
          return 85; // Hold progress visually at 85% until network response registers
        }
        return prev + 12;
      });
    }, 100);

    try {
      // Pack file payload into a multipart form container
      const formData = new FormData();
      formData.append("resume", targetFile);
      formData.append("jobTitle", "Full-Stack Engineer"); // Custom match criteria mapping

      // Execute network fetch channel straight to Express gateway port
      const response = await fetch("http://localhost:5000/api/v1/resumes/upload", {
        method: "POST",
        body: formData,
      });

      clearInterval(progressInterval);
      setAnalyzeProgress(95);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Server processing pipeline caught an unhandled fault.");
      }

      setAnalyzeProgress(100);
      setUploadStatus("success");
      toast.success("Payload vectors deconstructed successfully!");

      // Dispatch real processed server report up to top layout hooks
      if (onAnalysisComplete) {
        onAnalysisComplete(data.report);
      }

    } catch (error) {
      clearInterval(progressInterval);
      setUploadStatus("idle");
      setFile(null);
      console.error("❌ Network Bridge Pipeline Drop:", error);
      toast.error(error.message || "Connection to backend engine timed out.");
    }
  };

  const resetUploadBay = () => {
    setFile(null);
    setUploadStatus("idle");
    setAnalyzeProgress(0);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {uploadStatus === "idle" && (
          <motion.div
            key="idle-dropzone"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            {...getRootProps()}
            className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 relative overflow-hidden group min-h-[320px] flex flex-col items-center justify-center ${
              isDragActive
                ? "border-brand-accent bg-brand-accent/5 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                : "border-white/10 bg-slate-900/20 hover:border-white/20 hover:bg-slate-900/40"
            }`}
          >
            <input {...getInputProps()} />
            
            <div className="p-4 bg-slate-950/60 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-inner text-slate-400 group-hover:text-brand-accent">
              <UploadCloud size={32} />
            </div>

            <h3 className="mt-6 text-base font-semibold text-white">
              {isDragActive ? "Drop profile matrix now" : "Upload your professional resume"}
            </h3>
            <p className="mt-2 text-xs text-slate-400 font-light max-w-sm leading-relaxed">
              Drag and drop your file here, or click to browse localized file systems. Supports <span className="text-slate-200 font-medium">PDF</span> documents.
            </p>
          </motion.div>
        )}

        {(uploadStatus === "uploading" || uploadStatus === "processing") && (
          <motion.div
            key="loading-panel"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            className="glass-panel rounded-2xl p-10 text-center min-h-[320px] flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px] opacity-40 animate-pulse" />
            
            <div className="relative z-10 space-y-6 w-full max-w-md">
              <div className="flex justify-center">
                <Loader2 size={36} className="text-brand-accent animate-spin" />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white">
                  {analyzeProgress < 85 ? "Streaming binary file vectors..." : "Parsing file layout properties..."}
                </h4>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {file ? file.name : "document_payload.pdf"}
                </p>
              </div>

              <div className="space-y-2">
                <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${analyzeProgress}%` }}
                    transition={{ ease: "easeInOut" }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>LIVE_HTTP_STREAM</span>
                  <span>{analyzeProgress}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {uploadStatus === "success" && (
          <motion.div
            key="success-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="glass-panel rounded-2xl p-8 border-l-4 border-l-emerald-500 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Analysis Complete</h4>
                <p className="text-xs text-slate-400 mt-0.5 truncate max-w-xs font-mono">{file?.name}</p>
              </div>
            </div>

            <button
              onClick={resetUploadBay}
              className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950/40 hover:bg-slate-900/60 transition-colors cursor-pointer"
            >
              <RefreshCw size={12} />
              <span>Analyze New File</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}