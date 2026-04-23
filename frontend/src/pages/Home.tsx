import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api/movies";
import { Link } from "react-router-dom";

export default function Home() {

  const { data, isLoading } = useQuery({
  queryKey: ["movies"],
  queryFn: getMovies,
});

if (isLoading) return <div>Loading...</div>;
if (!data) return <div>No movies found</div>;

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      {data.map((movie: any) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div className="border p-4 rounded-lg">
            <h2 className="font-bold">{movie.title}</h2>
            <p>{movie.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}