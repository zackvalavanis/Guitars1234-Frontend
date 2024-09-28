export function GuitarsShow({ guitar, onUpdate }) {
  const handleSubmit = (event) => { 
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(guitar.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Guitar information</h1>
      <p>Name: {guitar.name}</p>
      <p>Price: {guitar.price}</p>
      <p>Url: {guitar.images_with_default[0].url}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={guitar.name} name='name' type='text' />
        </div>
        <div>
          Price: <input defaultValue={guitar.price} name='price' type='text' />
        </div>
        <button type='submit'>Update</button>
      </form>
    </div>
  );
}