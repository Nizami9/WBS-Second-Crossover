import React, { useState, useEffect } from "react";
import "./Starrating.css";

const Starrating = ({ stars, total }) => {
  const [rating, setRating] = useState(stars);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setRating(stars);
    setHover(null);
  }, [stars]);

  /* useEffect(() => {
    client.getSpace(spaceId)
    .then(space => space.getEnvironment(environment))
    .then(environment => environment.getEntry('1234567890'))
    .then(entry => {
        entry.fields.state = {
            'en-US': 'Arizona'
        }
        return entry.update()
    });
  }, [rating]); */

  return (
    <div className="star-rating">
      {[...Array(total)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              className="ratingradio"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <span
              className="star"
              onMouseOver={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
            >
              {ratingValue <= (hover || rating)
                ? String.fromCharCode(9733)
                : String.fromCharCode(9734)}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default Starrating;

/* `${&#9733}` : &#9734 */
