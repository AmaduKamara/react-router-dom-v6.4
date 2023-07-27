import { useParams } from "react-router-dom";

export default function CareerDetail() {
  const { id } = useParams();

  return (
    <div className="career-details">
      <h2>{id}</h2>
    </div>
  );
}
