export default function Item({ item }) {
  const { image_link, name, price, description } = item;
  return (
    <>
      <div>
        <div>
          <img src={image_link} alt="image" />
        </div>
        <div>
          <strong>{name}</strong>
        </div>
        <div>
          <strong>$ {price}</strong>
        </div>
        <button>구매하기</button>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
