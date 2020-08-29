import Layout from "../../components/Layout";
import { InputForm } from "../../components/InputForm/InputForm";
import styles from "../../styles/pages/createLink.module.css";

export default function CreateLink() {
  return (
    <Layout title="Создать ссылку">
      <h2 className={styles.title}>Создание сокращенной ссылки</h2>
      <InputForm />
    </Layout>
  );
}
