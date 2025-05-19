const Header = () => (
  <header className="flex justify-between items-center bg-[#305680] text-white p-4 border-b">
    <h1 className="text-2xl font-semibold">My Dashboard</h1>
    <div className="flex items-center gap-4">
      <span>John Doe (Tenant administrator)</span>
      <button className="border px-3 py-1 rounded hover:bg-gray-100">Save</button>
    </div>
  </header>
);

export default Header;