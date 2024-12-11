export interface Client {
  id: number;
  title: string;
  body: string;
}

export interface ItemProps {
  client: Client;
  onDelete: (id: number) => void;
}

export interface SearchBarProps {
  onSearch: (value: string) => void;
  initialValue: string;
}

export interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}
export type UseListReturn = {
  clients: Client[];
  filteredClients: Client[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  clientsRef: React.RefObject<(HTMLElement | null)[]>;
  handleDelete: (id: number) => Promise<void>;
  handleSearch: (searchTerm: string) => void;
  fetchClients: () => Promise<void>;
};
