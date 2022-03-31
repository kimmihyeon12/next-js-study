import Link from "next/link";

export default function ItemList({ list }) {
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-3 border">
      {list.map((item) => {
        return (
          <Link href={`/view/${item.id}`} key={item.id}>
            <a>
              <div>
                <img src={item.image_link} alt={item.image_link} />
                <span>
                  {item.category} {item.product_type}
                </span>
                <strong>{item.name}</strong>
                <strong>{item.price}</strong>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
