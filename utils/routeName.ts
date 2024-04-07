export default function (path: string, params: string): string {
  let name = path.split("-");
  let param = Object.keys(params);
  param.forEach((parm) => {
    let el = name.indexOf(parm);
    name.splice(el, 1);
  });
  name.splice(0, name.length - 1);
  const result = name.join("");
  return result.charAt(0)?.toUpperCase() + result.slice(1);
}
