import Navbar from "./Navbar";

export default function Top() {
  return (
    <div className="text-lg">
      <div className="flex p-2">
        <p className="pr-2">logo</p>
        <p className=" text-2xl ">cosmetic shop</p>
      </div>
      <Navbar />
    </div>
  );
}
