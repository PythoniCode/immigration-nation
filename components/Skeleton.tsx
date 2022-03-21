export default function Skeleton() {
  return (
    <div className="flex flex-col w-full h-full rounded gap-2 animate-pulse">
      <div className="h-6 w-full bg-neutral-200"></div>
      <div className="h-10 w-10 rounded-full bg-neutral-200"></div>
      <div className="h-32 w-full bg-neutral-200"></div>
    </div>
  );
}
