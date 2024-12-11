import styles from '@/styles/page.module.css';
import { SearchableClientList } from '@/components/common/SearchableClientList/SearchableClientList';
import { mockClientDetailsList } from './api/mockData';

export default async function Home() {
  return (
    <div className={styles.page}>
      <SearchableClientList clients={mockClientDetailsList} />
    </div>
  );
}
