import { useParams } from "react-router-dom";

export default function RoutePressDetail() {
  let { id } = useParams;
  return <div>{id}입니다</div>;
}
