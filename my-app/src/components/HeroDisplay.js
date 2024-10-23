import React from "react";

function HeroDisplay({ media }) {
  if (media) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
        id="hero-video"
        style={{ display: "block" }}
      >
        <source
          src="/videos/STST_AW24_CAMPAIGN_VIDEO_NO_TEXT.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
    );
  } else {
    return (
      <img
        src="/img/cover/Stanley_Stella_AW24_Timeless_Outerwear_Mix_01.jpg"
        alt="Hero"
        className="hero-image"
        id="hero-image"
      />
    );
  }
}

export default HeroDisplay;
