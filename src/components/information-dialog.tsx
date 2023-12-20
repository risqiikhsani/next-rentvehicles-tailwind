import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export default function InformationDialog({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="link">{title}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
                <p className="whitespace-pre-line">{description}</p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
