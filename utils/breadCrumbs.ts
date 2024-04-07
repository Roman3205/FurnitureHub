export default function (path: string): string[] {
  const words = path.split("/");
  let result: string[] = [];
  words.forEach((word) => {
    return result.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  result.splice(0, 1);

  return result;
}
