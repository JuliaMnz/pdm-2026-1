const BASE_URL = 'https://parseapi.back4app.com/classes/Tarefa';
const HEADERS = {
  'X-Parse-Application-Id': 'c46sxgvoa7ZCn2dZvIosHKATpAwzI1OVR68UwAEG',
  'X-Parse-JavaScript-Key': 'H0bS2UYTdEY7NoJGNcbcqDJQ2rhq8abZV9klsLnJ',
  'Content-Type': 'application/json',
};

export const api = {
  // Listar tarefas (GET)
  getTarefas: async () => {
    const response = await fetch(BASE_URL, { headers: HEADERS });
    const data = await response.json();
    return data.results;
  },

  // Atualizar status (PUT)
  updateTarefa: async (objectId, concluida) => {
    await fetch(`${BASE_URL}/${objectId}`, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ concluida }),
    });
  },

  // Deletar tarefa (DELETE)
  deleteTarefa: async (objectId) => {
    await fetch(`${BASE_URL}/${objectId}`, {
      method: 'DELETE',
      headers: HEADERS,
    });
  },
};