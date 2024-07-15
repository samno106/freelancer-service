"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "./dialog";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  size?: string;
  overlay?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  size,
  overlay,
  children,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogOverlay className={overlay} />
      <DialogContent className={size}>
        <DialogHeader>
          <DialogTitle className="text-sm font-medium">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
