import MobileSidebar from "./mobile-sidebar";

export const MobileHeader = () => (
  <div className="lg:hidden h-[50px] bg-green-300 px-6 flex items-center fixed top-0 w-full z-50">
    <MobileSidebar />
  </div>
);
