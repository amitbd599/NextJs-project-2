import CategoryData from "../../Components/Dashboard/Category/CategoryData";
import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Category' />
        <CategoryData />
      </MasterLayout>
    </>
  );
};

export default index;
