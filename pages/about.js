import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="your-image-url"
            alt="About Us"
            className="rounded-lg mb-4"
          />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-lg mb-4">
            Balanced Bite where taste meets nutrition, affordable culinary
            delights.
          </p>
          <p className="text-lg mb-4">
            We are a catering company driven by a passion for food and a
            commitment to providing delicious, satisfying meals. We strive to
            strike the perfect balance between taste and nutritio, offering
            culinary creations that leave a lasting impression on our customers.
            With a focus on quality ingredients and culinary expertise, we
            curate menus that cater to diverse preferences and dietary
            requirements. Our dedication to sustainability and responsible
            practices ensures that we not only deliver exceptional flavors but
            also contribute to a greener future.
          </p>
          <p className="text-lg">
            We believe in the power of balance. Our team of talented chefs
            combines creativity and expertise to craft menus that strike the
            perfect harmony between taste and nutrition. We source high-quality
            ingredients from trusted local suppliers, ensuring that each bite is
            packed with fresh flavors and wholesome goodness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
