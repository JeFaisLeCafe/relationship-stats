const get = (uri, successCallback, failureCallback) => {
  return fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa("admin" + ":" + "Clarins36!")
    }
  })
    .then(response => {
      return response.json().then(json => {
        return successCallback(json);
      });
    })
    .catch(err => {
      if (failureCallback) failureCallback(err);
      console.log(err);
    });
};

const post = (uri, data, successCallback, failureCallback) => {
  return fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa("admin" + ":" + "Clarins36!")
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.status >= 400) {
        return failureCallback(response);
      } else {
        return response
          .json()
          .then(json => {
            return successCallback(json);
          })
          .catch(() => {
            return successCallback();
          });
      }
    })
    .catch(err => {
      if (failureCallback) return failureCallback(err);
      console.log(err);
    });
};

const asyncGet = uri => {
  return new Promise((resolve, reject) => {
    get(
      uri,
      function(json) {
        resolve(json);
      },
      function(err) {
        reject(err);
      }
    );
  });
};

export default { get, asyncGet, post };
