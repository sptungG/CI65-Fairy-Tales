// Read
function getItems() {
  db.collection("items")
    .get()
    .then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log("Total product: ", items.length);
    });
}
getItems();
// Render Items
function generateItem(item) {
  let doc = document.createElement("li");
  doc.classList.add("product");
  doc.setAttribute("data-id", `${item.id}`);
  doc.innerHTML =
    `<table id="myTable" class="table table-bordered text-center">
    <tr>
        <th>Name</th>
        <th>Actor</th>
        <th>Time</th>
        <th>Topic</th>
        <th>Describe</th>
        <th>Date</th>
    </tr>
    <tr>
        <td>${item.data().name}</td>
        <td>${item.data().actor}</td>
        <td>${item.data().minutes}</td>
        <td>${item.data().topic}</td>
        <td>${item.data().describe}</td>
        <td>${item.data().date}</td>
    </tr>

</table>`;

  let editButton = document.createElement("a");
  editButton.classList.add('btn', 'btn-primary')
  editButton.innerText = 'Edit';
  editButton.addEventListener("click", function () {
    console.log('hi');
  });

  let rateButton = document.createElement("a");
  rateButton.classList.add('btn', 'btn-warning')
  rateButton.innerText = 'Rate';
  rateButton.addEventListener("click", function () {
    console.log('hi');
  });

  let deleteButton = document.createElement("a");
  deleteButton.classList.add('btn', 'btn-danger')
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener("click", function () {
    deleteItem(item.id);
  });

  doc.append(editButton,rateButton,deleteButton);
  document.querySelector(".products").appendChild(doc);
}
