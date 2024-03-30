import { Footer } from "./footer";
import { Header } from "./header";

type props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className=" flex flex-col items-center justify-center flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
