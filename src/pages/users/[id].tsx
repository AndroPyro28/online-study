import { useRouter } from "next/router";
import { api } from "../../utils/api";

const UserPage = () => {
  const { query } = useRouter();
  const userQuery = api.user.getById.useQuery(query.id + '');
  console.log(userQuery)
  return (
    <div>
      <h1>{userQuery.data?.name} </h1>
      <h1>{userQuery.data?.email} </h1>
      <h1>{userQuery.data?.image} </h1>
    </div>
  );
};

export default UserPage;
