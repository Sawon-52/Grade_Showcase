import "./App.css";
import Hero from "./Component/Banner/Hero";
import Footer from "./Component/Footer/Footer";
import Navber from "./Component/Navber";
import Search from "./Component/Search/Search";
import Table from "./Component/Table/Table";

function App() {
  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      <section className="py-24 lg:pt-[120px] lg:pb-28 bg-gray-900">
        <div className="container">
          <Search></Search>
          <Table></Table>
          <div className="mt-14">
            <Footer></Footer>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
