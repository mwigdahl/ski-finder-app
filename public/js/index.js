// CANT HIDE IT, Place search.js requires it like so.
placeSearch({
  key: "hfKnbDdg4J5HEbbe3NoAbdudtAa7DAxG",
  container: document.querySelector("#place-search-input")
});

// The API object contains methods for each kind of request we'll make
const API = {
  getCity: function(location) {
    const url = `api/cities/${location}`;
    const type = "GET";
    return $.ajax({ url, type });
  },

  // getTrails: function() {
  //   return $.ajax({
  //     url: "api/trails/",
  //     type: "GET"
  //   });
  // },

  // getPosts: function() {
  //   const url = "api/forums/";
  //   const type = "GET";
  //   return $.ajax({url, type});
  // },

  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

$("#submitBtn").on("click", () => {
  event.preventDefault();
  // sconsole.log("button click");
  const currentSearchVal = $("#place-search-input").val();
  console.log(currentSearchVal);
  if (currentSearchVal.length > 0) {
    API.getCity(currentSearchVal)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  // API.getTrails()
});


// Modal Activation
$('#signUpModal').on('shown.bs.modal', function () {
  $('#signUp').trigger('focus')
})


// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);

// $exampleList.on("click", ".delete", handleDeleteBtnClick);
