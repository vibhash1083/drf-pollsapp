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

export function getQues() {
  return fetch(Urls.question_list(), {
    credentials: 'same-origin'
  }).then(response => response.json()).then(json => ({
    type: types.GET_QUES,
    ques: json
  }));
}


export function addQues(question_text, answer_text) {
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

export function deleteQues(id) {
    console.log('delete',id);
  return fetch(Urls.question_detail(id), {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken')
    },
    credentials: 'same-origin'
  }).then(json => ({
    type: types.DELETE_QUES,
    id: id
  }));
}

export function editQue(editedQue) {

  return fetch(Urls.question_detail(editedQue.id), {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken')
    },
    credentials: 'same-origin',
    body: JSON.stringify(editedQue)
  }).then(response => response.json()).then(json => ({
    type: types.EDIT_QUE,
    que: json
  }));
}

export function getScore() {
  return fetch(Urls.score_list(), {
    credentials: 'same-origin'
  }).then(response => response.json()).then(json => ({
    type: types.GET_SCORE,
    score: json
  }));
}


export function addScore(score) {
  console.log('addscore');
      const newScore = {
        score: score,
      };

      return fetch(Urls.score_list(), {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken')
        },
        credentials: 'same-origin',
        body: JSON.stringify(newScore)
      }).then(response => response.json()).then(json => ({
        type: types.ADD_SCORE,
        score: json
      }));
}

export function editScore(editedScore) {

  return fetch(Urls.score_detail(editedScore.id), {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken')
    },
    credentials: 'same-origin',
    body: JSON.stringify(editedScore)
  }).then(response => response.json()).then(json => ({
    type: types.EDIT_SCORE,
    score: json
  }));
}