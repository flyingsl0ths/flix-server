export type OK = 200;
export type NOT_FOUND = 400;

export function isOkorNotFound(condition: boolean): OK | NOT_FOUND {
  return condition ? (200 as OK) : (404 as NOT_FOUND);
}
