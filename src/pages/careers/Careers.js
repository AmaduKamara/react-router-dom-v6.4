import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to="/" key={career.id}>
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

  return response.json();
};
