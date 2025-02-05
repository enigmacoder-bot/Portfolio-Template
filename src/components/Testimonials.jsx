import { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
    name: "John Doe",
    title: "CEO, Company X",
  },
  {
    quote:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    name: "Jane Smith",
    title: "CTO, Company Y",
  },
  {
    quote:
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    name: "Alice Johnson",
    title: "Founder, Startup Z",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);
  const keenSliderInstance = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: { origin: "auto", perView: 1.5, spacing: 32 },
          },
        },
      });
    }
    return () => keenSliderInstance.current?.destroy();
  }, []);

  return (
    <section className=" py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-center text-white sm:text-4xl">
          Don't just take our word for it...
        </h2> */}
        {/* <p className="mt-4 text-center text-gray-100">
          See what our clients have to say about us.
        </p> */}
        <div className="relative mt-8">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-gray-600 p-6 shadow-lg rounded-lg"
              >
                <p className="text-gray-100">{testimonial.quote}</p>
                <div className="mt-4">
                  <p className="font-bold text-gray-100">{testimonial.name}</p>
                  <i className="text-sm text-gray-100">{testimonial.title}</i>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              className="rounded-full border border-rose-600 p-3 text-rose-600 hover:bg-rose-600 hover:text-white"
              onClick={() => keenSliderInstance.current?.prev()}
            >
              &lt;
            </button>
            <button
              className="rounded-full border border-rose-600 p-3 text-rose-600 hover:bg-rose-600 hover:text-white"
              onClick={() => keenSliderInstance.current?.next()}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
