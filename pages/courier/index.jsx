import Courier_part from "../../Components/Dashboard/Courier/Courier_part";
import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Courier' />
        <Courier_part />
      </MasterLayout>
    </>
  );
};

export default index;
