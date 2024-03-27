export const ItemListContainer = ({ greeting }) => {
  return (
    <div
      style={{
        textAlign: "center",
        textTransform: "uppercase",
        marginTop: "30px",
        color: "#000152",
      }}
    >
      <h3>{greeting}</h3>
    </div>
  );
};
