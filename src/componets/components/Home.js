import { useAuth } from "../context/AuthContext";

export function Home() {
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="navbar">
        <p>welcome {user.displayName || user.email}</p>
        <button 
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
          onClick={handleLogout}
        > logout
        </button>
      </div>
  );
}
