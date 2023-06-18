export function isOkorNotFound(condition: boolean): 200 | 404 {
  return condition ? 200 : 404;
}
