import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function handleInput(
  event: ChangeEvent<HTMLInputElement>,
  setter: Dispatch<SetStateAction<string>>
) {
  setter(event.target.value);
}
