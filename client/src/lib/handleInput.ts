import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function handleInput(
  event: ChangeEvent<HTMLInputElement>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setter: Dispatch<SetStateAction<any>>
) {
  setter(event.target.value);
}
