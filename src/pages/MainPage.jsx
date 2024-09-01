import AboutUsSection from "../components/AboutUsSection";
import HomeSearchBar from "../components/HomeSearchBar";
import NewArrivalsSection from "../components/NewArrivalsSection";
import NewsSection from "../components/NewsSection";
import OurServicesSection from "../components/OurServicesSection";
import Row from "../ui/Row";

function MainPage() {
  return (
    <>
      <Row $background="#f0be1b">
        <HomeSearchBar />
      </Row>

      <AboutUsSection />
      <NewArrivalsSection />
      <OurServicesSection />
      <NewsSection />
    </>
  );
}

export default MainPage;
