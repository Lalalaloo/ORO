import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
export default function Home() {
  return (
    <div>
      <h2>Homepage test</h2>
      <Button>Back</Button>
        <UserButton />
   
    </div>
  );
}
