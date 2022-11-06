import Customers_Part from "../../Components/Dashboard/Customers/Customers_Part";
import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Customer' />
        <Customers_Part />
      </MasterLayout>
    </>
  );
};

export default index;
