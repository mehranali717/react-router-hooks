import { Link, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {
  const submit = useSubmit()
  function startDeleteHandler() {
   const proceed = window.confirm("Are You Sure!");
   if(proceed){
    submit(null, {method:'DELETE'})
   }
  }

  return (
    <article className={classes.event}>
      {event.image ?<img src={event.image} alt={event.title} />:""}
      {event.title ? <h1>{event.title}</h1>:""}
      {event.date ? <time>{event.date}</time>:""}
      {event.description ? <p>{event.description}</p>:""}
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
