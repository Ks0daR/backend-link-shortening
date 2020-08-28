import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function LinksPage({ todos: serverTodos }) {
  const [todos, setTodos] = useState(serverTodos);

  useEffect(() => {
    async function load() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data = await response.json();
      setTodos(data);
    }

    if (!serverTodos) {
      load();
    }
  }),
    [];

  if (!todos) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }
  return (
    <Layout title="Все ссылки">
      <h1>LinksPage</h1>
      <ul>
        {todos
          .filter((todo) => todo.userId === 1)
          .map((todo) => (
            <li key={todo.id}>
              <Link href="/links/[linkId]" as={`/links/${todo.id}`}>
                <a>{todo.id}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  );
}

LinksPage.getInitialProps = async (ctx) => {
  if (!ctx.res) {
    return { todos: null };
  }
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos = await response.json();

  return {
    todos,
  };
};
