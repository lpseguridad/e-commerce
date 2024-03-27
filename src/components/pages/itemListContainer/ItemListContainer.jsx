export const ItemListContainer = ({ greeting }) => {
  return (
    <div
      style={{
        textAlign: "center",
        textTransform: "uppercase",
        marginTop: "30px",
      }}
    >
      <h3>{greeting}</h3>
    </div>
  );
};
