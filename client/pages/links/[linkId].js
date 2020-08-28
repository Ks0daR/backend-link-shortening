import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function LinkPage({ todo }) {
  console.log(todo);
  return (
    <Layout title="Информация о ссылке">
      <h1>LinkPage</h1>
      <h2>{todo.userId}</h2>
      <p>{todo.title}</p>
    </Layout>
  );
}

LinkPage.getInitialProps = async (context) => {
  const id = context.query.linkId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  const todo = await response.json();
  return { todo };
};
