import { Fragment } from "react";
import AdminBanner from "../Components/Dashboard/Dashboard/AdminBanner";
import TotalLead from "../Components/Dashboard/Dashboard/TotalLead";
import MasterLayout from "../MasterLayout/MasterLayout";

const index = () => {
  return (
    <Fragment>
      <MasterLayout>
        <AdminBanner />
        <TotalLead />
        {/* <ChartJs /> */}
      </MasterLayout>
    </Fragment>
  );
};

export default index;
