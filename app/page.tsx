import Banner from "./components/homepage/Banner";
import TrendingApp from "./components/homepage/TrendingApp";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <Banner />
      <TrendingApp />
    </div>
  );
}
