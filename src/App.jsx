
import './App.css'

function App() {
  const handleuser = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user)

    fetch('http://localhost:5000/users', {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('data added successfully')
          form.reset()
        }
      })
  }

  return (
    <>

      <h1>simple crud client</h1>
      <form onSubmit={handleuser}>

        <input type="text" name='name' />
        <br />
        <input type="email" name='email' />
        <br />
        <input type="submit" value="add user" />
      </form>

    </>
  )
}

export default App
