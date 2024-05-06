const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
/*
 * El selector para la clase 'name' esta mal(le falta el punto) y a blog se esta refiriendo a un ID y es una clase
  const $n = document.querySelector('name');
  const $b = document.querySelector('#blog');
 */
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

/*
* La funcion displayUser esta utilizando await pero no esta declarado `async` al principio
function displayUser(username)
*/

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);

  /*
  * La variable data esta siendo impresa en consola pero no la hemos declarado ni definida
  console.log(data);
   */
  const data = await response.json();
  console.log(data);

  /*
   * Esta mal porque esta escrito con comillas simples en lugar de backticks 
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
   */

  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  /*
   *  En la referencia de variable n.textContent falta $
  n.textContent = `Algo salió mal: ${err}`
   */
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);