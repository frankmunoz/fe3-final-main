const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error de red:', error);
    throw error;
  }
};

export { fetchData };
