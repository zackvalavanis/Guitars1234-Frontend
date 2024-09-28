export function GuitarsNew( { onCreate, currentUserId } ) { 
  const handleSubmit = (event) => { 
    event.preventDefault();
    const params = new FormData(event.target);
    params.append('user_id', currentUserId)
    onCreate(params, () => event.target.reset());
  }

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
        {/* <div>
          User ID: {currentUserId}
        </div> */}
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}