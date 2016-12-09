import * as types from '../constants/ActionTypes';

// from: https://docs.djangoproject.com/en/dev/ref/csrf/#ajax
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

export function getAdvs() {
  return fetch(Urls.advertiser_list(), {
    credentials: 'same-origin'
  }).then(response => response.json()).then(json => ({
    type: types.GET_ADS,
    advs: json
  }));
}

export function addAdv(text) {
  const newAdv = {
    name: text,

  };

  return fetch(Urls.advertiser_list(), {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken')
    },
    credentials: 'same-origin',
    body: JSON.stringify(newAdv)
  }).then(response => response.json()).then(json => ({
    type: types.ADD_AD,
    adv: json
  }));
}
export function deleteAdv(id) {
  return fetch(Urls.advert_detail(id), {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken')
    },
    credentials: 'same-origin'
  }).then(json => ({
    type: types.DELETE_AD,
    id: id
  }));
}

