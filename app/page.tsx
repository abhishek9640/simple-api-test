'use client';

import { useEffect, useState } from 'react';

export default function JokePage() {
  const [joke, setJoke] = useState<{ setup: string; punchline: string } | null>(null);

  useEffect(() => {
    fetch('/api/joke')
      .then(res => res.json())
      .then(data => setJoke(data));
  }, []);

  if (!joke) return <p>Loading...</p>;

return (
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">Random Joke</h2>
    <p className="text-white">{joke.setup}</p>
    <p className="font-medium mt-1">{joke.punchline}</p>
  </div>
 );
}
