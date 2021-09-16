// Create Product
const form = document.querySelector("#add-product-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = {
    name: form.name.value,
    actor: form.actor.value,
    date: form.date.value,
    describe: form.describe.value,
    topic: form.topic.value,
    time: form.time.value,
  };
  db.collection("items").add(product);
});

// Realtime Listener
  db.collection("items")
    .orderBy("name")
    .onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type == "added") {
          generateItem(change.doc);
          console.log("Added: ", change.doc.data());
        } else if (change.type == "removed") {
          let productsList = document.querySelector(".products");
          let li = productsList.querySelector(`[data-id="${change.doc.id}"]`);
          productsList.removeChild(li);
          console.log("Removed: ", change.doc.data());
        }
      });
    });