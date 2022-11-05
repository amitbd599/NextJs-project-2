import { Fragment } from "react";
import SideBar from "../Components/Dashboard/SideBar";
import MasterLayout from "../MasterLayout/MasterLayout";
import MenuBar from "../Components/Dashboard/MenuBar";
import AdminBanner from "../Components/Dashboard/AdminBanner";
import TotalLead from "../Components/Dashboard/TotalLead";
import ChartJs from "../Components/Dashboard/ChartJs";
const index = () => {
  return (
    <Fragment>
      <MasterLayout>
        <SideBar />
        <MenuBar />
        <AdminBanner />
        <TotalLead />
        <ChartJs />
      </MasterLayout>
    </Fragment>
  );
};

export default index;
