export function GuitarsIndex ({guitars, onShow}) { 
  return (
    <div>
      <h1>All Guitars!</h1>
      {guitars.map((guitar) => ( 
        <div key={guitar.id}>
          <h2>{guitar.name}</h2>
          <h2>{guitar.price}</h2>
          <h2>{guitar.user_id}</h2>
          {guitar.images_with_default.map(image => (
            <img key={image.id} src={image.url} />
          ))}
          <button onClick={() => onShow(guitar)}>More Info</button>
        </div>
      ))}
    </div>
  )
}