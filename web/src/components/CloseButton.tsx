import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

// import { Container } from './styles';

export const CloseButton = () => {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100 in-focus"
      title="Fechar formulário"
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
};
