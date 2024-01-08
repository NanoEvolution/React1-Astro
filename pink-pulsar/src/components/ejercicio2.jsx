export default function ComprovarNotes() {
    const nota = 5;
    return (
      <div>
        <h2>Comprovador de notes</h2>
        <p>{nota >= 5 ? "Aprovat" : "Suspès"}</p>
      </div>
    );
  }
  