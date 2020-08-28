import Link from "next/link";
import Layout from "../../components/Layout";

export default function LinksPage({ todos }) {
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

LinksPage.getInitialProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos = await response.json();

  return {
    todos,
  };
};
