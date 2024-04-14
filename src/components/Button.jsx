export default function Button(props) {
  const {text, customClass} = props
  return (
    <button
      className={`py-[15px] px-[25px] bg-purple rounded-lg font-bold w-fit text-white self-center mb-[75px] ${customClass}`}>
      {text}
    </button>
  )
}
