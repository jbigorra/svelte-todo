export function getItems() {
  return fetch("http://localhost:3000/items")
    .then((res) => res.json())
    .catch(console.error);
}
