import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetail() {
  const { id } = useParams();

  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Detail for: {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <p className="details">
        Lorem ipsum, dolor sit amet consectetur adipisicing elitLorem ipsum,
        dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet
        consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur
        adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing
        elit Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem
        ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor
        sit amet consectetur adipisicing elit
      </p>
    </div>
  );
}

// A loader function can be created to fetch a single item using the route parameter
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:4000/careers/${id}`);

  return response.json();
};
