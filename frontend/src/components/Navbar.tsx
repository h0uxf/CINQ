import { Link, useNavigate } from "react-router-dom";
import { getToken, logout } from "../auth/token";
import { getUserFromToken } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();

  const user = getUserFromToken();
  const token = getToken();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-4 border-b">
      {/* LEFT */}
      <Link to="/" className="font-bold text-xl">
        CINQ
      </Link>

      {/* RIGHT */}
      <div className="flex gap-4 items-center">
        {token ? (
          <>
            <Link to="/profile" className="text-sm">
              {user?.email || "Profile"}
            </Link>

            <button
              onClick={handleLogout}
              className="text-sm text-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-sm">
              Login
            </Link>

            <Link to="/register" className="text-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}