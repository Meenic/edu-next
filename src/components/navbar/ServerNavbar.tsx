import { auth } from "@/auth";
import Navbar from "./Navbar";

export default async function ServerNavbar() {
  const session = await auth();
  return <Navbar session={session} />;
}
