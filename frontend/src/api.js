const API_BASE = import.meta.env.VITE_API_BASE || '';

export async function fetchNotes() {
  const res = await fetch(`${API_BASE}/api/notes`);
  return res.json();
}

export async function createNote(note) {
  const res = await fetch(`${API_BASE}/api/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return res.json();
}

export async function deleteNote(id) {
  const res = await fetch(`${API_BASE}/api/notes/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

export async function updateNote(id, note) {
  const res = await fetch(`${API_BASE}/api/notes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return res.json();
}