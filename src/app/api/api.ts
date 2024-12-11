const API_BASE_URL =
  'https://az-weu-webapp-34-techtest-f0g0fvdkgugabfb7.westeurope-01.azurewebsites.net/';

enum Sort {
  assending = 'ASSENDING',
  descending = 'DESCENDING',
}

export const API = {
  clientSearch: async (
    searchTerm: string,
    columnOrder = 'NAME',
    sort: Sort,
    index: number,
    offset: number
  ) => {
    const response = await fetch(
      `${API_BASE_URL}/clientdata/clientsearch/${searchTerm}/${columnOrder}/${sort}/${index}/${offset}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  },

  getClientData: async (clientId) => {
    const response = await fetch(
      `${API_BASE_URL}/clientdata/client/${clientId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  },

  matterSearch: async (
    clientId,
    columnOrder = 'DATE',
    sort: Sort,
    index: number,
    offset: number
  ) => {
    const response = await fetch(
      `${API_BASE_URL}/clientdata/mattersearch/${clientId}/${columnOrder}/${sort}/${index}/${offset}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  },

  getMatterData: async (matterId) => {
    const response = await fetch(
      `${API_BASE_URL}/clientdata/matter/${matterId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  },
};
