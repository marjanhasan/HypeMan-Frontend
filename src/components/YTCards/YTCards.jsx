import { useEffect, useRef } from "react";

const videoIds = ["YF4E5ysbMBI", "YF4E5ysbMBI", "YF4E5ysbMBI", "YF4E5ysbMBI"];

const YTCards = () => {
  const playersRef = useRef([]);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playersRef.current = videoIds.map((id, i) => {
        return new window.YT.Player(`player-${i}`, {
          videoId: id,
          playerVars: {
            autoplay: 0,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            loop: 1,
            playlist: id,
            playsinline: 1,
            iv_load_policy: 3,
            fs: 0,
            cc_load_policy: 0,
          },
        });
      });

      // Observer for visibility
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = entry.target.getAttribute("data-index");
            const player = playersRef.current[index];
            if (player) {
              if (entry.isIntersecting) {
                player.playVideo();
              } else {
                player.pauseVideo();
              }
            }
          });
        },
        { threshold: 0.6 }
      );

      document
        .querySelectorAll(".yt-card")
        .forEach((el) => observer.observe(el));
    };
  }, []);

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-900">
          BUILT DIFFERENT - WORN WITH PRIDE
        </h1>
        <p className="text-base text-gray-500">
          We kept it real from day one. Here&apos;s the story behind the HYPE
          TOWN
        </p>
      </div>
      <div className="max-w-[90%] xl:max-w-[75%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {videoIds.map((id, i) => (
          <div
            key={id}
            className="relative overflow-hidden aspect-[9/16] h-[390px] w-[220px] rounded-xl bg-black"
            data-index={i}
          >
            <div
              id={`player-${i}`}
              className="absolute left-0 top-0 w-full h-full pointer-events-none"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YTCards;
