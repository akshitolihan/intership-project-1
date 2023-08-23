import ApiData from "../components/ApiData";
import Option from "../components/Option";
interface Props {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const Data: React.FC<Props> = ({ loading, setLoading }) => {
  return (
    <>
    <Option/>
      <ApiData loading={loading} setLoading={setLoading} />
    </>
  );
};

export default Data;
