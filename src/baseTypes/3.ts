let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some;
}
// or (str = some as string)
// or let str: string = some

export { some, str };
