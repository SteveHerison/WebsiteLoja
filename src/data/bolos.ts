import FotoUm from "../assets/fotosBolo/um.png";
import FotoDois from "../assets/fotosBolo/dois.png";
import FotoTres from "../assets/fotosBolo/tres.png";
import FotoQuatro from "../assets/fotosBolo/quatro.png";

import { Produto } from "../types/listBolo";

export const listBolo: Produto[] = [
  {
    id: 1,
    src: FotoUm,
    title: "Delicia de Brigadeiro",
    description:
      "Bolo com a massa branca ou bolo com a massa de chocolate, com recheio de Chocolate 50% cacau.",
    valor: 10,
    quantidade: 0,
  },
  {
    id: 2,
    src: FotoDois,
    title: "Delicia de Ninho",
    description:
      "Bolo com a massa branca ou bolo com a massa de chocolate, com recheio de Ninho.",
    valor: 10,
    quantidade: 0,
  },
  {
    id: 3,
    src: FotoQuatro,
    title: "Delicia de ChocoNinho",
    description:
      "Bolo com a massa branca ou bolo com a massa de chocolate, com recheio de Chocolate 50% Cacau & Ninho.",
    valor: 10,
    quantidade: 0,
  },
  {
    id: 4,
    src: FotoTres,
    title: "Delicia de Chantininho com Morango",
    description:
      "Bolo com a massa branca com recheio de Chantininho com Morango.",
    valor: 12,
    quantidade: 0,
  },
];
