const test = () =>{
    return(
        <section className="flex flex-col md:flex-row items-center bg-black px-6 py-6 md:px-16 h-screen ">
        <div className="w-full  text-left px-9">        
        <h1 className="text-8xl text-white font-bold mb-4">
          One System, <br /> Infinite Languages, <br /> Endless Possibilities
        </h1>
          <p className="text-white leading-relaxed w-2/3 px-2 text-lg">
            FSLAKWS is a groundbreaking solution designed to address the limitations of traditional keyword spotting systems. By leveraging few-shot learning and a language-agnostic framework, FSLAKWS detects keywords across diverse languages with unmatched efficiency. Whether you’re building voice assistants or analyzing multilingual datasets, FSLAKWS is your key to scalable and inclusive speech recognition.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col">
          <div className="w-ful h-96 bg-gray-200 rounded-lg" /> 
            <button className="bg-teal-600 text-white px-4 py-3  mt-11 rounded hover:bg-teal-500 w-64">
            Try FALKON – It's Free!
            </button>
        </div>
      </section>
    );
};

export default test;