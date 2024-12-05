export default function Placement() {
  return (
    <div className="flex flex-wrap gap-3 align-items-center justify-content-center">
      <div className="relative bg-primary-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
        <div className="absolute top-0 left-0 bg-primary font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">
          1
        </div>
      </div>
      <div className="relative bg-primary-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
        <div className="absolute top-0 right-0 bg-primary font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">
          2
        </div>
      </div>
      <div className="relative bg-primary-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
        <div className="absolute bottom-0 right-0 bg-primary font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">
          3
        </div>
      </div>
      <div className="relative bg-primary-200 w-9rem h-9rem mx-3 my-3 md:my-0 border-round">
        <div className="absolute bottom-0 left-0 bg-primary font-bold flex align-items-center justify-content-center w-4rem h-4rem border-round">
          4
        </div>
      </div>
    </div>
  );
}
