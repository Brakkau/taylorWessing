export type Address = {
  addressLine1: string;
  addressLine2: string;
  city: string;
  county: string;
  postcode: string;
};

export type Person = {
  title: string;
  firstName: string;
  lastName: string;
  preferredName: string;
  email: string;
  phone: string;
};

export type Client = {
  clientId: string;
  name: string;
  code: string;
  description: string;
  inceptionDate: string;
  address: Address;
  people: Person[];
  matterCount: number;
};

export type ClientList = {
  clientId: string;
  code: string;
  inception: string;
  matterCount: number;
  name: string;
};

export type Matter = {
  clientId: string;
  matterId: string;
  matterName: string;
  matterCode: string;
  matterDate: string;
};

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
