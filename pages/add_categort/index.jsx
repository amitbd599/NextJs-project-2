import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import MasterLayout from "../../MasterLayout/MasterLayout";


const index = () => {
  return (
    <div>
      <MasterLayout>
        <MenuBar name='Categories' />
        <ClientList />
      </MasterLayout>
    </div>
  );
};

export default index;
