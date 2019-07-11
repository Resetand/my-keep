/*
  params: 
  { 
    type: string,
    filter: any
  }
 */

export default (notes, { type, filter }) => {
  console.log(type);
  switch (type) {
    case "SEARCH":
      return Object.keys(notes).reduce((visNotes, id) => {
        if (
          notes[id].body.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
          notes[id].title.toLowerCase().indexOf(filter.toLowerCase()) > -1
        ) {
          visNotes[id] = notes[id];
        }
        return visNotes;
      }, {});
    case "LABEL":
      console.log(filter);

      if (filter.size === 0) return notes;

      return Object.keys(notes).reduce((visNotes, id) => {
        if (
          Array.from(filter).every(
            label => notes[id].labels.indexOf(label) > -1
          )
        ) {
          visNotes[id] = notes[id];
        }
        return visNotes;
      }, {});
    default:
      return notes;
  }
};
