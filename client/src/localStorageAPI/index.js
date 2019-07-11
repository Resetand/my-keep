class API {
  constructor() {
    this.key = "ib8o41bZXoVFwan6B1ZX";
  }
  getNotes() {
    return JSON.parse(window.localStorage.getItem(this.key));
  }
  putNote(id, data) {
    const notes = this.getNotes() || {};
    notes[id] = data;
    window.localStorage.setItem(this.key, JSON.stringify(notes));
  }
  putNotes(data) {
    window.localStorage.setItem(this.key, JSON.stringify(data));
  }
  getNote(id) {
    const notes = this.getNotes() || {};
    return notes[id];
  }
  clear() {
    window.localStorage.clear();
  }
}

export default new API();
