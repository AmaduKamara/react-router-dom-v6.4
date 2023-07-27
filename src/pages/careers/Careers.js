import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <h4> {career.title}</h4>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

// Careers Loader Function
export const careersLoader = async () => {
  const response = await fetch("http://localhost:4000/careers");

  if (!response.ok) {
    throw Error("Could not fetch the careers!");
  }

  return response.json();
};
