import ClientList from "../../Components/Add_categort/ClientList";
import MenuBar from "../../Components/Dashboard/MenuBar";
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
