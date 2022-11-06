import CategoryData from "../../Components/Category/CategoryData";
import MenuBar from "../../Components/Dashboard/MenuBar";
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
