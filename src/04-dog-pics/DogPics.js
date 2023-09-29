import { useState } from "react"

export default function DogPics () {
  // API: https://dog.ceo/dog-api/
  const [dogPic, setDogPic] = useState('https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg')

  const getDogPic = () => {
    fetch ('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDogPic(data.message))
  }

  return (
    <div className='dog-pics'>
      <h2>Sad today? No worries. We have dog pictures to cheer you up!</h2>
      <p>Press the button below to see a new dog</p>
      <img src={dogPic} alt='really cute dog'/>
      <button onClick={getDogPic}>🐶</button>
    </div>
  )
}
