/*
* Wrapper around fetch to handle responses and statuses
* */
export default (params) => {
  let url, headers = {}, restParams;

  if (typeof params === 'string') {
    url = params;
  } else {
    let { headers: paramsHeaders, url: paramsUrl, ...rest } = params;

    headers = paramsHeaders || headers;
    url = paramsUrl;
    restParams = restParams;

    if (restParams.queryParams) {
      url = _constructURL(url, restParams.queryParams);
      delete restParams.queryParams;
    }
  }


  _setContentType(headers, restParams);

  headers['Accept'] = 'application/json, text/plain, */*';

  const requestParams = {
    headers,
    credentials: 'same-origin',
    ...restParams
  };

  return fetch(url, requestParams)
    .then(_checkStatus)
    .then(_parseJSON)
    .then(response => {
      return response;
    })
    .catch(err => {
      if (typeof err === 'object') {
        throw err;
      }

      let message = '';
      if (err.status === 401) {
        message = 'Unauthorized';
      }

      throw {
        code: err.status,
        errors: [message],
        ...err.responseJSON,
      };
    });
};

/*
* This fn. takes args by reference, and directly modifies
* */
function _setContentType(headers, rest = {}) {
  if (rest.multipart) {
    delete headers['Content-Type']; // FormData type request doesn't need Content-Type key to be sent in fetch request
    delete rest.multipart; // removing helper key
  } else if (!headers['Content-Type']) {
    headers['Content-Type'] = 'application/json;charset=UTF-8'; // Set default content type
  }
}

/*
* Check response status
* */
function _checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

/*
* Parse response
* */
function _parseJSON(response) {
  return response.json();
}

/*
* Constructing url with query string for fetch request
* */
function _constructURL (url, queryParams) {
  const queryString = Object.keys(queryParams)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key]))
    .join('&');

  return url + '?' + queryString;
}
