'use client';

import { Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="lora">
        The Best Footballers in The World
      </div>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/WTJSt4wP2ME?si=ebGcFkM08yARkeST"
          title="Football Emotions"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="d-flex justify-content-center" style={{ margin: '10px', marginBottom: "20px" }}>
        <Link href="/Top10" passHref >
          <Button className="frosted-glow-btn">Meet Them Now!</Button>
        </Link>
      </div>
    </div>
  );
}
