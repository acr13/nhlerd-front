export function apiGetTodaysGames() {
  return fetch('http://guarded-escarpment-1147.herokuapp.com/api/v1/games')
    .then(function(response) {
      console.log(response);
      return response.json();
    }).catch(function(error) {
      console.log('error getting members: ', error);
    });
}
