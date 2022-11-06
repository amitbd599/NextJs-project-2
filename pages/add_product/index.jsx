import Add_productComponent from "../../Components/Dashboard/Add_product/Add_productComponent";
import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
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
