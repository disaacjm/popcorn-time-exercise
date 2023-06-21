import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page refresh

    const newMovieDetails = {
      title: title,
      year: year,
      rating: rating,
      imgUrl: imgUrl,
    };
    
    props.callBackToCreate(newMovieDetails);
    // Clear form
    setTitle("");
    setRating("");
    setYear("");
    setImgUrl("");
  };

  return (
    <section className="AddMovie">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="enter the title"
            required={true}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>

        <label>
          Rating:
          <input
            type="number"
            name="rating"
            required={true}
            min={1}
            max={10}
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />
        </label>

        <label>
          Year:
          <input
            type="number"
            name="year"
            required={true}
            min={1888}
            max={2023}
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </label>


        <button>Create</button>
      </form>
    </section>
  );
}

export default AddMovie;
