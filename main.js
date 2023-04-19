const createNoteDiv = document.getElementById("createNote");
const titleContainer = document.getElementById("title");
const descriptionContainer = document.getElementById("description");
const noteList = document.getElementById("noteList");
// let notes = [{ title: "Hello", description: "description demo" }];
let notes = [];
let title = "";
let desc = "";

function createNote() {
  createNoteDiv.style.display = "flex";
}

function closeCreateNote() {
  createNoteDiv.style.display = "none";
  titleContainer.value = "";
  descriptionContainer.value = "";
}

function saveNote() {
  title = titleContainer.value;
  desc = descriptionContainer.value;
  // console.log(title, desc);
  if (
    titleContainer.value.trim() === "" ||
    titleContainer.value.trim() === null
  ) {
    alert("Title missing");
  } else if (
    descriptionContainer.value.trim() === "" ||
    descriptionContainer.value.trim() === null
  ) {
    alert("Description missing");
  } else {
    notes.push({
      title: title,
      description: desc,
      date: new Date().toLocaleDateString(),
    });
    closeCreateNote();
  }

  //   console.log(notes);
  //   titleContainer.value = "";
  //   descriptionContainer.value = "";
  getNote();
}

//Notes are created by this code..
function getNote() {
  noteList.innerHTML = "";
  for (let i = 0; i < notes.length; ++i) {
    noteList.innerHTML += `
      <div class="note">
        <h5>${notes[i].date}</h5>
        <h3>${notes[i].title}</h3>
        <p>${notes[i].description}</p>
        <i class="fa-solid fa-trash" onclick="deleteNote('${i}')"></i>
      </div>
    `;
  }
}
// getNote();

function deleteNote(index) {
  //   console.log(index);
  notes.splice(index, 1);
  getNote();
}
