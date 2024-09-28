export function GuitarsShow({ guitar }) {
  return (
    <div>
      <h1>Guitar information</h1>
      <p>Name: {guitar.name}</p>
      <p>Price: {guitar.price}</p>
      <p>Url: {guitar.images_with_default[0].url}</p>
    </div>
  );
}