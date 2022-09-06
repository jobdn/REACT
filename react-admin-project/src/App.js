import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin"
import jsonServerProvider from "ra-data-json-server";

import { UserList } from "./component/users/UserList";
import { PostList } from "./component/posts/PostList";
import { UserEdit } from "./component/users/UserEdit";
import { PostEdit } from "./component/posts/PostEdit";
import { PostCreate } from "./component/posts/PostCreate";


const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
}

export default App;
