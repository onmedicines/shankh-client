import { places } from "../utils/dummyData";
import toCapitalCase from "to-capital-case";

export default function BookFlight() {
  return (
    <div className="bg-red-400">
      <h1>{toCapitalCase("hello")}</h1>
    </div>
  );
}
