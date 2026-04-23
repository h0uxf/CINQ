import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/client";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await api.post("/auth/register", form);

      // store token
      localStorage.setItem("token", res.data.token);

      navigate("/"); // go home after register
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-6 border rounded-lg w-96 space-y-3"
      >
        <h1 className="text-xl font-bold">Register</h1>

        <input
          name="firstName"
          placeholder="First Name"
          className="border p-2 w-full"
          value={form.firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          placeholder="Last Name"
          className="border p-2 w-full"
          value={form.lastName}
          onChange={handleChange}
        />

        <input
          name="username"
          placeholder="Username"
          className="border p-2 w-full"
          value={form.username}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          value={form.password}
          onChange={handleChange}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          disabled={loading}
          className="bg-green-600 text-white w-full py-2 rounded"
        >
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>
    </div>
  );
}