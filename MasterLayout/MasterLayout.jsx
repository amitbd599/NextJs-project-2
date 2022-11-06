import MenuBar from "../Components/Dashboard/MenuBar";
import SideBar from "../Components/Dashboard/SideBar";

const MasterLayout = ({ children }) => {
  return (
    <>
      <SideBar />
      <div>{children}</div>
    </>
  );
};

export default MasterLayout;
