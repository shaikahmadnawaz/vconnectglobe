import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      position: "UI/UX Designer",
      testimonial:
        "I had an amazing experience with the mentorship program. My mentor was very knowledgeable and helpful, and provided me with valuable insights and guidance.",
    },
    {
      name: "John Smith",
      position: "UI/UX Designer",
      testimonial:
        "I had an amazing experience with the mentorship program. My mentor was very knowledgeable and helpful, and provided me with valuable insights and guidance.",
    },
    {
      name: "John Smith",
      position: "UI/UX Designer",
      testimonial:
        "I had an amazing experience with the mentorship program. My mentor was very knowledgeable and helpful, and provided me with valuable insights and guidance.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div id="testimonials" className="container mx-auto px-4">
        <h2 className="text-2xl text-center font-bold mb-8">
          What people are saying
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white hover:scale-105 duration-500 rounded-lg shadow-lg p-6"
            >
              <p className="text-lg font-medium mb-4">
                {testimonial.testimonial}
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://picsum.photos/200/300"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
