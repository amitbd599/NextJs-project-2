import Customers_Part from "../../Components/Customers/Customers_Part";
import MenuBar from "../../Components/Dashboard/MenuBar";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Courier' />
        <Customers_Part />
      </MasterLayout>
    </>
  );
};

export default index;
