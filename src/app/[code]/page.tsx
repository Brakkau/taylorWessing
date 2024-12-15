import { ClientAPI } from '@/app/api/api';
import { ClientDetailPage } from './Components/container/ClientDetailPage';
import styles from '@/styles/page.module.css';
import '@/styles/globals.css';
import './page.css';

export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const code = (await params).code;
  const clientData = await ClientAPI.getClientData(code);
  return (
    <div className={styles.page}>
      <ClientDetailPage clientData={clientData} />
    </div>
  );
}
