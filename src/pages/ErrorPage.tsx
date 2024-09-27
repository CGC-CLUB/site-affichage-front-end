import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-10">
      <h1 className="max-w-[500px] text-center text-4xl font-medium">
        The Page you are looking for does not exist
      </h1>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}
