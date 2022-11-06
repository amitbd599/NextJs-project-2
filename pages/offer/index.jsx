import MenuBar from "../../Components/Dashboard/MenuBar";
import Customers_offer from "../../Components/Offer/Customers_offer";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Offers' />
        <Customers_offer />
      </MasterLayout>
    </>
  );
};

export default index;
