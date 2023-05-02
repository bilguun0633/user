import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64  bg-gray-800 h-screen">
      <nav className="mt-2 flex-1">
        <div className="px-1 space-y-1">
          <img className="" src="" alt="" />

          <Link
            href="/profile"
            className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
          >
            <h1>Profile</h1>
          </Link>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
          </div>

          <Link
            href="/product"
            className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
          >
            Product
          </Link>
          <Link
            href="/favorite"
            className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
          >
            Favorite product
          </Link>
          <Link
            href="/transition"
            className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
          >
            Transition
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
