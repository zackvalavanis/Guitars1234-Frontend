export function GuitarsNew({ onCreate, guitars = [] }) { // Set default value to an empty array
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    // Append user_id from the first guitar in the guitars array
    if (guitars.length > 0) {
      params.append('user_id', guitars[0].user_id);
    }

    // Call onCreate with the params
    onCreate(params, () => event.target.reset());
  };
  console.log(guitars);
  return (
    <div>
      <h1>New Guitar</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name='name' type='text' />
        </div>
        <div>
          Price: <input name='price' type='text' />
        </div>
        <div>
          Image: <input name='Url[]' type='text' />
        </div>
        <div>
          User ID: {guitars.length > 0 ? guitars[0].user_id : 'Not available'}
        </div>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}
