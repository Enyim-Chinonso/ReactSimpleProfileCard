import React from 'react';

function TextArea({ textArea, setTextarea }) {
  return ( 
    <label>
      Your message: <br />
      <textArea value={textArea} onChange={(e) => setTextarea(e.target.value)} />
    </label>
  );
}




const Textarea = () => {
  const [textarea, setTextarea] = useState(
    "These contents belong to the textArea. Therefore, it must be rendered inside the textarea"
  ); 

  const handleChange = (event) => {
    setTextarea(event.target.value)
  } 

  return (
    <form>
      <textarea value={Textarea} onChange={handleChange} />
    </form>
  ) 
} 
export default TextArea;