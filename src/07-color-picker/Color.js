export default function Color ({ hex, name, changeColor }) {
  return (
    <button onClick={() => changeColor(hex)}
      className='color-square'
      style={{ backgroundColor: hex }}
    >
      <h2>{name}</h2>
    </button>
  )
}
