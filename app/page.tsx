export default async function JokePage() {
  const joke = await fetch('http://localhost:3000/api/joke', {
    cache: 'no-store'
  }).then(res => res.json());

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Random Joke</h2>
      <p className="text-white">{joke.setup}</p>
      <p className="font-medium mt-1">{joke.punchline}</p>
    </div>
  );
}
