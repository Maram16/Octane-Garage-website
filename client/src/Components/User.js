import { useSelector } from "react-redux";

export const User = () => {
  const user = useSelector((state) => state.users.user);
  return (
    <>
      <img src={user.pic} className="userImage" />
      <h3>{user.name}</h3>
    </>
  );
};
