export default function Position() {
  return (
    <div className="relative">
      <div
        className="relative bg-primary-100 p-4 border-round font-bold text-gray-800"
        style={{minWidth: "300px", minHeight: "160px"}}
      >
        Relative
        <div
          className="absolute bottom-0 left-0 bg-primary p-4 font-bold border-round"
          style={{minWidth: "120px", minHeight: "70px"}}
        >
          Absolute
        </div>
      </div>
    </div>
  );
}
