import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-dvh justify-center gap-10 items-center">
      <h1 className="text-4xl font-medium max-w-[500px] text-center">The Page you are looking for does not exist</h1>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}
