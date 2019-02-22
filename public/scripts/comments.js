var $commentsList;
var commentArray = [];

$(document).ready(function(){

  $commentsList = $('#commentTarget');
  $.ajax({
    method: 'GET',
    url: '/api/comments',
    success: handlesSuccess,
    error: handlesError
  });

  $('#commentForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/comments',
      data: $(this).serialize(),
      success: newCommentSuccess,
      error: newCommentError
    });
  });


  $commentsList.on('click', '.deleteBtn', function() {
    
    $.ajax({
      method: 'DELETE',
      url: 'api/comments/'+$(this).attr('data-id'),
      success: deleteBookSuccess,
      error: deleteBookError
    });
  });


});

function getCommentHtml(comment) {
  return (`
        <div class = "commentP"
          <p>
            <b>${comment.text}</b> &nbsp
            by ${comment.author}
          </p>
          <button type="button" name="button" class="deleteBtn" data-id=${comment._id}>Delete</button>

          </div>`);
    
}



// line 82 
//             <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${comment._id}>Delete</button>



function getAllCommentsHtml(comments) {
  console.log(comments.map(getCommentHtml).join(""))
  return comments.map(getCommentHtml).join("");
}

// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
  // empty existing posts from view
  $commentsList.empty();

  // pass `allBooks` into the template function
  var commentsHtml = getAllCommentsHtml(commentArray);
  

  // append html to the view
  $commentsList.append(commentsHtml);
  
};

function handlesSuccess(json) {
    alert("handlesSuccess");
    console.log(json);
    commentArray = json;
  render();
}

function handlesError(e) {
  $('#commentTarget').html('Server is not working');
}

function newCommentSuccess(json) {
  $('#commentForm input').val('');
  commentArray.push(json);
  render();
}

function newCommentError() {
  console.log('newbook error!');
}

function deleteBookSuccess(json) {
  alert("delete success")
  var comment = json;
  console.log(json);
  var commentId = comment._id;
  console.log('delete book', commentId);
  // find the book with the correct ID and remove it from our allBooks array
  for(var index = 0; index < commentArray.length; index++) {
    if(commentArray[index]._id === commentId) {
      commentArray.splice(index, 1);
      break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
    }
  }
  render();
}

function deleteBookError() {
  console.log('deletebook error!');
}