import Courier_part from "../../Components/Courier/Courier_part";
import MenuBar from "../../Components/Dashboard/MenuBar";
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
