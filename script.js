 
var cardcontainer = $(`card-container`);
var submit = $(`.submit.btn`);

submit.on("click")

var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendNineToFive);

function appendNineToFive(event) {
  event.preventDefault();
  var name = $('.name').val();

  cardContainer.append(`
    <p class="card"> ${name}</p>
  `);
}
