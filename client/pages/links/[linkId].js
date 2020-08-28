import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function LinkPage({ todo: serverTodo }) {
  const [todo, setTodo] = useState(serverTodo);

  const router = useRouter();

  function handleClick() {
    router.push("/links");
  }

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${router.query.linkId}`
      );
      const data = await response.json();
      setTodo(data);
    }

    if (!serverTodo) {
      load();
    }
  }, []);

  if (!todo) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }
  return (
    <Layout title="Информация о ссылке">
      <h1>LinkPage</h1>
      <h2>{todo.userId}</h2>
      <p>{todo.title}</p>
      <button onClick={handleClick}>На страницу всех ссылок</button>
    </Layout>
  );
}

LinkPage.getInitialProps = async (context) => {
  if (!context.res) {
    return { todo: null };
  }

  const id = context.query.linkId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  const todo = await response.json();
  return { todo };
};
