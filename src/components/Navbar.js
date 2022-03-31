import { useRouter } from "next/router";
export default function Navbar() {
  const activeItem = "home";
  const router = useRouter();
  function goLink(data) {
    router.push(data);
  }
  return (
    <div className="flex border">
      <div
        className="p-2"
        onClick={() => {
          goLink("/");
        }}
      >
        홈
      </div>
      <div
        className="p-2"
        onClick={() => {
          goLink("/about1");
        }}
      >
        about1
      </div>
      <div
        className="p-2"
        onClick={() => {
          goLink("/about2");
        }}
      >
        about1
      </div>
    </div>
  );
}
