const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  textAlign = "center",
  ctaText,
  ctaLink,
}) => {
  return (
    <section
      className="relative w-full min-h-[600px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Container */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${
          textAlign === "right" ? "text-right" : "text-center"
        }`}
      >
        <h1 className="text-2xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base lg:text-lg 2xl:text-3xl text-gray-200">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
              hover:bg-blue-700 transition-colors duration-300"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
