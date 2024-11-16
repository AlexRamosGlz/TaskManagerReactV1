function Assignees(params) {
  const test = Array(6).fill("test");

  return (
    <ul className="assignees">
      {test.map((text, index) => {
        if (index >= 4) return null;

        const src = `https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/little-cute-kitten-serhii-kucher.jpg`;
        return index < 3 ? (
          <img className="assignee" src={src} alt={src} />
        ) : (
          <p className="assignee n">
            <span>+{test.length - index}</span>
          </p>
        );
      })}
    </ul>
  );
}

export default Assignees;
