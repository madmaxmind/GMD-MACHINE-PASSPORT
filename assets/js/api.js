// ==================== CONFIGURACIÓN ====================
const SCRIPT_URL = https://script.google.com/macros/s/AKfycbwQ52s-4fXs3-olbE1AT9HLDEugFKDDt9UriIJhmPp0NdwxUUhy9M6V4cOP_REvHorp/exec; 
// Obtén esta URL desplegando tu Apps Script como Web App (Execute as: Me, Who has access: Anyone)

// Función genérica para leer datos
async function getMachineData(machineId) {
  try {
    const res = await fetch(`${SCRIPT_URL}?action=getMachine&id=${machineId}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

// Función para listar todas las máquinas
async function getAllMachines() {
  const res = await fetch(`${SCRIPT_URL}?action=getAll`);
  return await res.json();
}

// Función para reportar falla
async function reportFailure(machineId, description) {
  const formData = new FormData();
  formData.append('action', 'reportFailure');
  formData.append('id', machineId);
  formData.append('description', description);
  formData.append('date', new Date().toISOString());

  const res = await fetch(SCRIPT_URL, { method: 'POST', body: formData });
  return await res.json();
}