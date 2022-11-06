import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import Inventory_Part from "../../Components/Dashboard/Inventory/Inventory_Part";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Offers' />
        <Inventory_Part />
      </MasterLayout>
    </>
  );
};

export default index;
