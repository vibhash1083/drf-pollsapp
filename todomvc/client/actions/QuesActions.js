import * as types from '../constants/ActionTypes';

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}


export function addQues(question_text, answer_text) {
      console.log('adding ques');
      const newQues = {
        question: question_text,
        answer: answer_text
      };

      return fetch(Urls.question_list(), {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken')
        },
        credentials: 'same-origin',
        body: JSON.stringify(newQues)
      }).then(response => response.json()).then(json => ({
        type: types.ADD_QUES,
        que: json
      }));
}


