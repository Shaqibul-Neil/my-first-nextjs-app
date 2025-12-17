import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r-2 space-y-10">
        <h2>Navigation</h2>
        <div className="flex flex-col gap-5">
          <Link
            href={"/dashboard/add-story"}
            className="py-2 px-4 w-full bg-gray-800"
          >
            Add Story
          </Link>
          <Link
            href={"/dashboard/my-profile"}
            className="py-2 px-4 w-full bg-gray-800"
          >
            My Profile
          </Link>
          <Link
            href={"/dashboard/settings"}
            className="py-2 px-4 w-full bg-gray-800"
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
