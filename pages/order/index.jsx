import MenuBar from "../../Components/Dashboard/MenuBar";
import Order_Part from "../../Components/Order/Order_Part";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Orders' />
        <Order_Part />
      </MasterLayout>
    </>
  );
};

export default index;
