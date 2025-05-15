const TypingArea = ({ text, userInput, onChange }) => {
    return (
      <div className="w-full max-w-2xl">
        <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">{text}</p>
        <textarea
          rows={4}
          className="w-full p-3 border rounded focus:outline-none dark:bg-gray-800 dark:text-white"
          value={userInput}
          onChange={onChange}
          placeholder="Start typing here..."
        />
      </div>
    );
  };
  
  export default TypingArea;
  