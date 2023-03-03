import Item from "../Item/Item";

const ItemList = ({ item }) => {
  return (
    <div
      style={{
        backgroundColor: "#FABA8A",
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {item.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
