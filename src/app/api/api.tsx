const API_KEY = 'dbae5205-f1ae-4823-bb43-41bc50a457d9';
const API_BASE_URL =
  'https://az-weu-webapp-34-techtest-f0g0fvdkgugabfb7.westeurope-01.azurewebsites.net';

export const ClientAPI = {
  paginatedResults: async (
    searchTerm: string,
    columnOrder: string,
    sort: string,
    index: number,
    offset: number
  ): Promise<any[]> => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/clientdata/clientsearch/${searchTerm}/${columnOrder}/${sort}/${index}/${offset}`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching paginated results:', error);
      throw error;
    }
  },

  getClientData: async (clientId: string): Promise<any> => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/clientdata/client/${clientId}`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching client data:', error);
      throw error;
    }
  },

  matterSearch: async (
    clientId: string,
    columnOrder: string,
    sort: string,
    index: number,
    offset: number
  ): Promise<any[]> => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/clientdata/mattersearch/${clientId}/${columnOrder}/${sort}/${index}/${offset}`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching matter search:', error);
      throw error;
    }
  },

  getMatterData: async (matterId: string): Promise<any> => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/clientdata/matter/${matterId}`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching matter data:', error);
      throw error;
    }
  },
};
