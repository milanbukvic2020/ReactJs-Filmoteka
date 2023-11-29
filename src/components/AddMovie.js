import React, { useRef } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      title: titleRef.current.valueOf,
      openingText: openingTextRef.current.valueOf,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title"> Naziv filma: </label>
        <input type="text" id="title" ref={titleRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor="opening-text"> Opis filma: </label>
        <textarea
          rows="10"
          type="text"
          id="opening-text"
          ref={openingTextRef}
        />
      </div>

      <div className={classes.control}>
        <label htmlFor="date"> Datum izlaska filma: </label>
        <input type="date" id="date" ref={releaseDateRef} />
      </div>
    </form>
  );
}

export default AddMovie;
