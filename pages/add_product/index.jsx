import Add_productComponent from "../../Components/Add_product/Add_productComponent";
import MenuBar from "../../Components/Dashboard/MenuBar";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Products' />
        <Add_productComponent />
      </MasterLayout>
    </>
  );
};

export default index;
