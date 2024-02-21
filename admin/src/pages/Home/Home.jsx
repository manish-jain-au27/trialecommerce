import {
  Sidebar,
  Navbar,
  Widgets,
  RevenueChart,
  GraphChart,
  ProductTable,
} from "components";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-content">
        <Navbar />
        <div className="content-widgets">
          <Widgets type="users" />
          <Widgets type="orders" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
        <div className="content-charts">
          <RevenueChart />
          <GraphChart title="Last 6 Months (Revenue)" />
        </div>
        <div className="content-table">
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
