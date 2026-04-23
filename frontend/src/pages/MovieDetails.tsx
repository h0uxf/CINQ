import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../api/movies";
import { getScreeningsByMovie } from "../api/screenings";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: movie } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id!),
  });

  const { data: screenings, isLoading } = useQuery({
    queryKey: ["screenings", id],
    queryFn: () => getScreeningsByMovie(id!),
  });

  if (!movie) return <div>Loading movie...</div>;

  return (
    <div className="p-6 space-y-6">
      {/* MOVIE INFO */}
      <div>
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-gray-600">{movie.description}</p>
      </div>

      {/* SHOWTIMES */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Showtimes</h2>

        {isLoading && <p>Loading showtimes...</p>}

        <div className="grid gap-3">
          {screenings?.map((s: any) => (
            <div
              key={s.id}
              className="border p-3 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-medium">
                  {new Date(s.startTime).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  Hall: {s.hall.name}
                </p>
              </div>

              <button
                onClick={() => navigate(`/screening/${s.id}`)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}