const Introduction = () => {
    return (
      <section className="flex flex-col md:flex-row items-center bg-white px-6 py-6 md:px-16 h-screen w-[90vw] ">
        <div className="w-full md:w-2/3 text-left px-9">
          <h1 className="text-9xl font-bold mb-4 ">Introduction</h1>
          <p className="text-gray-700 leading-relaxed w-2/3 px-2 text-lg">
            FSLAKWS is a groundbreaking solution designed to address the limitations of traditional keyword spotting systems. By leveraging few-shot learning and a language-agnostic framework, FSLAKWS detects keywords across diverse languages with unmatched efficiency. Whether you’re building voice assistants or analyzing multilingual datasets, FSLAKWS is your key to scalable and inclusive speech recognition.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-80 bg-gray-200 rounded-lg" /> 
        </div>
      </section>
        // <div className="flex flex-col items-center bg-white border-4 border-red-400 h-screen w-[90vw] overflow-hidden">

        // </div>
    );
  };
  
  export default Introduction;
  