import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

function Spinner({ loading }) {
  return (
    <ClipLoader
      color="#0077B6"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
}

export default Spinner;
