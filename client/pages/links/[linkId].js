import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function LinkPage() {
  const router = useRouter();
  return (
    <Layout title="Информация о ссылке">
      <h1>LinkPage {router.query.linkId}</h1>
    </Layout>
  );
}
