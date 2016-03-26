export function apiGetPlayerStats() {
  return fetch('http://guarded-escarpment-1147.herokuapp.com/api/v1/stats')
    .then(function(response) {
      return response.json();
    }).catch(function(error) {
      console.log('error getting members: ', error);
    });
}
