export function getRate(itemId) {
  let rating = document.querySelector(".rating-wrapper");
  let ratingStar = rating.querySelectorAll("input");
  let ratingValue = rating.querySelector("#rating-value");
  let ratingMessage = rating.querySelector("#rating-message");

  db.collection("users")
    .get()
    .then(async (e) => {
      let isRated = false;
      let rateTotal = 0;
      let count = 0;
      e.forEach((doc) => {
        doc.data().storiesRated.forEach(async (element) => {
          if (element.id == itemId && element.rate) {
            rateTotal += parseInt(element.rate);
            count += 1;
          }
        });
      });
      let story = await db.collection("stories").doc(itemId);
      story.update({
        avgRating: parseFloat(rateTotal / count).toFixed(2),
      });

      e.forEach((doc) => {
        if (doc.data().id == auth.currentUser.uid) {
          doc.data().storiesRated.forEach((element) => {
            if (element.id == itemId) {
              isRated = true;
            }
          });
          if (isRated) {
            ratingValue.innerHTML = `${parseFloat(rateTotal / count).toFixed(2)}/5`;
            ratingMessage.innerHTML = `Rated`;
            ratingValue.style.backgroundColor = "white";
            ratingStar[Math.abs(parseInt(rateTotal / count) - 5)].checked = true;
            for (let i = 0; i < ratingStar.length; i++) {
              ratingStar[i].disabled = true;
            }
          } else {
            for (let i = 0; i < ratingStar.length; i++) {
              ratingStar[i].addEventListener("click", (e) => {
                console.log(e.target.value);
                ratingValue.innerHTML = e.target.value + "/5";
                ratingValue.style.backgroundColor = "white";
                doc.ref.update({
                  storiesRated: firebase.firestore.FieldValue.arrayUnion({
                    id: itemId,
                    rate: e.target.value,
                  }),
                });
              });
            }
          }
        }
      });
    });
}
// let that = this;
// db.collection("users")
//   .get()
//   .then(async (e) => {
//     let ratingStar = [...$ratingStar.childNodes].filter((element, index) => index % 2 === 0);
//     ratingStar.pop();
//     let isRated = false;
//     let rateTotal = 0;
//     let count = 0;
//     e.forEach((doc) => {
//       doc.data().storiesRated.forEach(async (element) => {
//         if (element.id == that.props.id && element.rate) {
//           rateTotal += parseInt(element.rate);
//           count += 1;
//         }
//       });
//     });
//     let story = await db.collection("stories").doc(that.props.id);
//     story.update({
//       avgRating: parseInt(rateTotal / count),
//     });

//     e.forEach((doc) => {
//       if (doc.data().id == auth.currentUser.uid) {
//         doc.data().storiesRated.forEach((element) => {
//           if (element.id == that.props.id) {
//             isRated = true;
//           }
//         });
//         if (isRated) {
//           $ratingValue.innerHTML = `${parseInt(rateTotal / count)}/5`;
//           $ratingMessage.innerHTML = `Rated`;
//           $ratingValue.style.backgroundColor = "white";
//           ratingStar[Math.abs(parseInt(rateTotal / count) - 5)].checked = true;
//           for (let i = 0; i < ratingStar.length; i++) {
//             ratingStar[i].disabled = true;
//           }
//         } else {
//           for (let i = 0; i < ratingStar.length; i++) {
//             ratingStar[i].addEventListener("click", (e) => {
//               console.log(e.target.value);
//               $ratingValue.innerHTML = e.target.value + "/5";
//               $ratingValue.style.backgroundColor = "white";
//               doc.ref.update({
//                 storiesRated: firebase.firestore.FieldValue.arrayUnion({
//                   id: that.props.id,
//                   rate: e.target.value,
//                 }),
//               });
//             });
//           }
//         }
//       }
//     });
//   });
