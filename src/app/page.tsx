import MortgageCalculator from "@/components/calculator";
import Footer from "@/components/footer";
import MortgageInfoGraphic from "@/components/mortageInfographic";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <MortgageInfoGraphic />
      <MortgageCalculator />
      <Footer />
    </div>
  );
}
