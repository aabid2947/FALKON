const KeyFeatures = () => {
    const features = [
      {
        title: "Few-Shot Learning Capability",
        description: "Detects keywords accurately with minimal training data. Easily adapts to new keywords and languages.",
      },
      {
        title: "Language-Agnostic Design",
        description: "Operates seamlessly across multiple languages and dialects. Empowers global applications without the need for extensive re-training.",
      },
      {
        title: "Real-Time Processing",
        description: "Processes audio and detects keywords instantly, enabling live applications. Ideal for voice assistants and call-center analysis.",
      },
      {
        title: "Customizable Keyword Library",
        description: "Allows users to define and expand the keyword set as needed. Ensures flexibility for various domains and industries.",
      },
      {
        title: "Scalable and Lightweight",
        description: "Optimized for performance, even on resource-constrained devices. Easily integrates into mobile apps, IoT devices, and enterprise solutions.",
      },
      {
        title: "User-Friendly API",
        description: "Simple integration into existing systems with clear documentation. Supports a wide range of platforms and programming languages.",
      },
    ];
  
    return (
      <section className="bg-black  px-6 py-12 md:px-16">
      
        <h1 className="text-8xl font-bold text-gray-200 mb-8 text-center">Key Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="w-1/4 flex justify-center items-center">
              {/* Placeholder for Image */}
              <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center">
                Image
              </div>
            </div>
            <div className="w-3/4 ">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
          </div>
        
      </section>
    );
  };
  
  export default KeyFeatures;
  