import styles from '@/styles/page.module.css';
import { SearchableClientList } from '@/components/common/SearchableClientList/SearchableClientList';

export default async function Home() {
  const mockClientData = [
    {
      clientName: 'Client Number 1',
      clientDescription: 'Client Number 1: Descriptive Text',
      clientCode: 'Client1Code',
      inceptionDate: '23rd June 2010',
    },
    {
      clientName: 'Client Number 2',
      clientDescription: 'Client Number 2: Descriptive Text',
      clientCode: 'Client2Code',
      inceptionDate: '2nd Dec 2016',
    },
    {
      clientName: 'Client Number 3',
      clientDescription: 'Client Number 3: Descriptive Text',
      clientCode: 'Client3Code',
      inceptionDate: '1st June 2008',
    },
    {
      clientName: 'Client Number 4',
      clientDescription: 'Client Number 4: Descriptive Text',
      clientCode: 'Client4Code',
      inceptionDate: '23rd June 2010',
    },
    {
      clientName: 'Client Number 5',
      clientDescription: 'Client Number 5: Descriptive Text',
      clientCode: 'Client5Code',
      inceptionDate: '23rd June 2010',
    },
    {
      clientName: 'Client Number 6',
      clientDescription: 'Client Number 6: Descriptive Text',
      clientCode: 'Client6Code',
      inceptionDate: '23rd June 2010',
    },
    {
      clientName: 'Client Number 7',
      clientDescription: 'Client Number 7: Descriptive Text',
      clientCode: 'Client7Code',
      inceptionDate: '23rd June 2010',
    },
    {
      clientName: 'Client Number 8',
      clientDescription: 'Client Number 8: Descriptive Text',
      clientCode: 'Client8Code',
      inceptionDate: '23rd June 2010',
    },
    {
      clientName: 'Client Number 9',
      clientDescription: 'Client Number 9: Descriptive Text',
      clientCode: 'Client9Code',
      inceptionDate: '23rd June 2010',
    },
    {
      clientName: 'Client Number 10',
      clientDescription: 'Client Number 10: Descriptive Text',
      clientCode: 'Client10Code',
      inceptionDate: '23rd June 2010',
    },
    {
      clientName: 'Client Number 11',
      clientDescription: 'Client Number 11: Descriptive Text',
      clientCode: 'Client11Code',
      inceptionDate: '23rd June 2010',
    },
    {
      clientName: 'Client Number 12',
      clientDescription: 'Client Number 12: Descriptive Text',
      clientCode: 'Client12Code',
      inceptionDate: '23rd June 2010',
    },
  ];
  return (
    <div className={styles.page}>
      <SearchableClientList clients={mockClientData} />
    </div>
  );
}
