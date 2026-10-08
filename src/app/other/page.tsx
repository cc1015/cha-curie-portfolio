import { redirect } from "next/navigation";
import { sections } from "./sections";

export default function Other() {
  redirect(sections[0].href);
}
