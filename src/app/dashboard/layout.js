export default function Dashlayout({ children }) {
  return (
    <>
      <nav className="bg-white text-stone-500">
        <ul className="flex flex-row gap-8 justify-center items-center h-[25px] text-lg p-6 shadow-lg">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutus">About us </a>
          </li>
          <li>
            <a href="/dashboard/settings">Settings</a>
          </li>
        </ul>
        <h1 className="text-white p-8 bg-stone-500">
          Child Layout from dashborad
        </h1>
      </nav>
      {children}
    </>
  );
}
