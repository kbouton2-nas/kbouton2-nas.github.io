'use client'

import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";

const images: string[] = [ "9V1A0001.jpg", "9V1A0003.jpg", "9V1A0004.jpg", "9V1A0005.jpg", "9V1A0006.jpg", "9V1A0008.jpg", "9V1A0009.jpg", "9V1A0012.jpg", "9V1A0013.jpg", "9V1A0020.jpg", "9V1A0032.jpg", "9V1A0033.jpg", "9V1A0033a.jpg", "9V1A0033aa.jpg", "9V1A0034.jpg", "9V1A0038.jpg", "9V1A0041.jpg", "9V1A0041a.jpg", "9V1A0041aa.jpg", "9V1A0045.jpg", "9V1A0050.jpg", "9V1A0052.jpg", "9V1A0054.jpg", "9V1A0058.jpg", "9V1A0060.jpg", "9V1A0062a.jpg", "9V1A0065.jpg", "9V1A0070.jpg", "9V1A0070a.jpg", "9V1A0073.jpg", "9V1A0076.jpg", "9V1A0077.jpg", "9V1A0078.jpg", "9V1A0079.jpg", "9V1A0080.jpg", "9V1A0081.jpg", "9V1A0082.jpg", "9V1A0083.jpg", "9V1A0088.jpg", "9V1A0090a.jpg", "9V1A0090aa.jpg", "9V1A0091a.jpg", "9V1A0092.jpg", "9V1A0092a.jpg", "9V1A0093.jpg", "9V1A0093aa.jpg", "9V1A0094.jpg", "9V1A0094a.jpg", "9V1A0095.jpg", "9V1A0095a.jpg", "9V1A0097.jpg", "9V1A0097a.jpg", "9V1A9931.jpg", "9V1A9932.jpg", "9V1A9933.jpg", "9V1A9933a.jpg", "9V1A9934.jpg", "9V1A9935.jpg", "9V1A9937.jpg", "9V1A9939.jpg", "9V1A9939a.jpg", "9V1A9941.jpg", "9V1A9944.jpg", "9V1A9947.jpg", "9V1A9950.jpg", "9V1A9953.jpg", "9V1A9956.jpg", "9V1A9958.jpg", "9V1A9962.jpg", "9V1A9962a.jpg", "9V1A9965.jpg", "9V1A9970.jpg", "9V1A9974.jpg", "9V1A9975.jpg", "9V1A9977.jpg", "9V1A9979.jpg", "9V1A9992.jpg", "9V1A9995.jpg", "9V1A9996.jpg", "9V1A9998.jpg", "9V1A9999.jpg", "a9V1A0044.jpg", "a9V1A9974.jpg", "i-9fpKkzr-XL.jpg", "i-Gd2RCMj-X3.jpg", "i-mNjx489-XL.jpg" ];
const quotes: string[] = [
  "Don't do that.",
  "Get out of my room.",
  "whattup",
  "I'm going to bed.",
  "Always do.",
  "Cya",
  "Stop.",
  "Are you good?",
  "Elden ring.",
  "'lift",
  "4 meat getti",
  "No.",
  "Alright.",
  "It's gas.",
  "I'm going to work.",
  "I'm going to magic.",
  "LeBron is the goat",
  "67",
  "chillax"
];
const jumpscare: string = "I'm going to Omaha for a couple days";

const getQuote = (): string => {
  const check: boolean = Math.floor(Math.random() * 1001) === 67;
  return check ? jumpscare : quotes[Math.floor(Math.random() * quotes.length)];
}

for (let i = images.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [images[i], images[j]] = [images[j], images[i]];
}

export default function Home() {
  const [quote, setQuote] = useState(getQuote());
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setQuote(getQuote());
        setFade(true);
      }, 1500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      fade
      interval={15000}
      pause={false}
    >
      {images.map((src, index) => (
        <Carousel.Item
          key={index}
          style={{
            height: "100vh",
            backgroundImage: `url(/Nolan_Sr_pix/${src})`,
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "auto",
          }}
        >
          <img
            className="d-block w-100"
            src={`/Nolan_Sr_pix/${src}`}
            alt={`Slide ${index + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain"
            }}
          />
          <Carousel.Caption>
            <h3
              style={{
                opacity: fade ? 1 : 0,
                transition: "opacity 0.5s ease-in-out"
              }}
            >
              {quote}
            </h3>
            <p>- Nolan</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
