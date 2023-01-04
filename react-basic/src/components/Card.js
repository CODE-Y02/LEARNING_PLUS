import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // make sure classes are applied
  return (
    <div className={classes}>
      {props.children /**used to wrap everything inside card as prop */}
    </div>
  );
}

export default Card;
