export const setupKeyboard = (keys: Set<string>) => {
  const handleKeyDown = (event: KeyboardEvent) => keys.add(event.code);
  const handleKeyUp = (event: KeyboardEvent) => keys.delete(event.code);

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  };
};
