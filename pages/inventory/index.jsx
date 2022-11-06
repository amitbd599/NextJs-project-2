import MenuBar from "../../Components/Dashboard/MenuBar";
import Inventory_Part from "../../Components/Inventory/Inventory_Part";
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
