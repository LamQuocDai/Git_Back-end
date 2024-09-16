import style from './Button.module.css'

function Button() {
  

  return (
    <button className={style.button}>Click me</button>
  );
}

function Button2() {
  return (
    <button className={`${style.button} ${style.button_hover}`}>Hover me</button>
  );
}

function Button3() {
  const style = {
    backgroundColor: "hsl(207, 67 %, 51 %)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  }
  return (


    <button style={style}>Click me part 3</button>
  );
}

export { Button, Button2, Button3 };