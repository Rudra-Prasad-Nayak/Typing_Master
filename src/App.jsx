import { useState, useEffect, useRef } from "react";
import TypingArea from "./components/TypingArea";
import ResultPopup from "./components/ResultPopup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import { RefreshCcw, MoreVertical, Sparkles } from "lucide-react";
import paragraphs from "./data/paragraphs";

const timeOptions = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30];

function App() {
  const [userInput, setUserInput] = useState("");
  const [duration, setDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentText, setCurrentText] = useState("");

  const intervalRef = useRef(null);

  const getRandomParagraph = () =>
    paragraphs[Math.floor(Math.random() * paragraphs.length)];

  // Show initial paragraph on load
  useEffect(() => {
    setCurrentText(getRandomParagraph());
  }, []);

  const startTimer = (minutes) => {
    setDuration(minutes);
    setTimeLeft(minutes * 60);
    setUserInput("");
    setShowResult(false);
    setIsRunning(true);
    setIsPaused(false);
  };

  const handleInputChange = (e) => {
    if (!isRunning || timeLeft <= 0) return;
    setUserInput(e.target.value);
    if (e.target.value === currentText) {
      setIsRunning(false);
      setShowResult(true);
    }
  };

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  useEffect(() => {
    if (isRunning && !isPaused && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) stopTimer(true);
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(intervalRef.current);
    }
  }, [isRunning, isPaused, timeLeft]);

  const calculateStats = () => {
    const totalTime = duration * 60;
    const wpm = Math.round(
      (userInput.trim().split(/\s+/).length / totalTime) * 60
    );
    const errors = currentText
      .split("")
      .filter((char, i) => char !== userInput[i]).length;
    const accuracy = Math.round(
      ((currentText.length - errors) / currentText.length) * 100
    );
    return { wpm, accuracy, errors, duration: totalTime - timeLeft };
  };

  const stopTimer = (reset = false) => {
    setIsRunning(false);
    if (reset) {
      setTimeLeft(0);
    }
  };

  const togglePause = () => {
    if (isPaused) {
      setIsPaused(false);
      setIsRunning(true);
    } else {
      setIsPaused(true);
      setIsRunning(false);
    }
  };

  const restart = () => {
    setUserInput("");
    setDuration(0);
    setTimeLeft(0);
    setIsRunning(false);
    setIsPaused(false);
    setShowResult(false);
    setCurrentText(getRandomParagraph());
  };

  const refreshParagraph = () => {
    if (!isRunning && !isPaused) {
      setCurrentText(getRandomParagraph());
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a052e]  transition-colors duration-300">
      <Navbar />

      <div className="flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          Welcome to Typing Master!
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Boost your typing speed, accuracy and precision with a variety of
          engaging and interactive exercises.
        </p>

        <h2 className="text-2xl mb-4 text-gray-900 dark:text-white">
          Choose Your Practice Duration
        </h2>

        {/* Time Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {timeOptions.map((min) => (
            <button
              key={min}
              onClick={() => startTimer(min)}
              className="px-3 py-1 rounded bg-[#13057d] text-white hover:bg-blue-800 transition"
            >
              {min} Mins
            </button>
          ))}
        </div>

        {/* Timer */}
        {duration > 0 && (
          <div className="text-3xl mb-4 text-gray-800 dark:text-gray-200 font-semibold">
            Time Left: {formatTime(timeLeft)}
          </div>
        )}

        {/* Paragraph with Regenerate Button */}
        <button
          onClick={refreshParagraph}
          className="flex items-center gap-2 px-4 py-2 bg-[#1b7906] hover:bg-green-900 transition text-white rounded disabled:cursor-not-allowed disabled:brightness-90 mb-2"
        >
          <Sparkles size={18} /> Regenerate Text
        </button>

        {/* Typing Area */}
        <TypingArea
          text={currentText}
          userInput={userInput}
          onChange={handleInputChange}
          disabled={!isRunning || timeLeft <= 0}
        />

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          {/* Reset Button */}
          <button
            onClick={restart}
            disabled={duration <= 0}
            className="flex items-center gap-2 px-4 py-2 bg-red-500  hover:bg-red-700 transition text-white rounded disabled:cursor-not-allowed disabled:brightness-90"
          >
            <RefreshCcw
              size={18}
              className="cursor-pointer hover:rotate-180 transition-transform"
            />{" "}
            Reset
          </button>

          {/* Pause/Resume Button */}
          <button
            onClick={togglePause}
            disabled={duration <= 0}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-500  hover:bg-yellow-600 transition text-white rounded disabled:cursor-not-allowed disabled:brightness-90"
          >
            {isPaused ? "▶️ Resume" : "⏸️ Pause"}
          </button>

          {/* More Options Button */}
          {/* <button
            onClick={() => alert("More options coming soon!")}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            <MoreVertical size={18} /> More
          </button> */}
        </div>

        {/* Result Popup */}
        {showResult && (
          <ResultPopup stats={calculateStats()} onRestart={restart} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
