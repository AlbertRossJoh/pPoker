import Card from "./card";

export default function CardDisplay(props: any) {
  let cardNums = [0];
  let prev = 0;
  let curr = 1;
  for (let i = 0; i < 10; i++) {
    let tmp = prev + curr;
    cardNums.push(tmp);
    prev = curr;
    curr = tmp;
  }
  return (
    <div className="h-52 flex flex-col justify-end overflow-y-auto">
      <div className="flex justify-center gap-4">
        {cardNums.map((num, idx) => (
          <Card key={idx} number={num} />
        ))}
      </div>
    </div>
  );
}
