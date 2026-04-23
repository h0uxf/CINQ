import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../api/user";

export default function Profile() {
  const { data, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: getMyProfile,
  });

  if (isLoading) return <div>Loading profile...</div>;
  if (!data) return <div>No user found</div>;

  return (
    <div className="p-6 space-y-6">
      {/* USER INFO */}
      <div className="border p-4 rounded">
        <h1 className="text-2xl font-bold">Profile</h1>
        <p><b>Name:</b> {data.firstName} {data.lastName}</p>
        <p><b>Email:</b> {data.email}</p>
        <p><b>Role:</b> {data.role}</p>
      </div>

      {/* BOOKINGS */}
      <div>
        <h2 className="text-xl font-semibold mb-3">My Bookings</h2>

        {data.bookings.length === 0 && (
          <p>No bookings yet.</p>
        )}

        <div className="space-y-3">
          {data.bookings.map((b: any) => (
            <div
              key={b.id}
              className="border p-3 rounded"
            >
              <p className="font-bold">
                {b.screening.movie.title}
              </p>

              <p className="text-sm text-gray-600">
                {new Date(b.screening.startTime).toLocaleString()}
              </p>

              <p className="text-sm">
                Hall: {b.screening.hall.name}
              </p>

              <p className="text-sm">
                Seats:{" "}
                {b.seats
                  .map((s: any) => `${s.seat.rowLabel}${s.seat.seatNumber}`)
                  .join(", ")}
              </p>

              <p className="text-xs text-gray-500">
                Status: {b.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}