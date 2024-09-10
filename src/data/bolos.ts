import FotoUm from "../assets/fotosBolo/IMG_4411.JPG";
import FotoDois from "../assets/fotosBolo/IMG_4538.JPG";
import FotoTres from "../assets/fotosBolo/IMG_4414.JPG";
import FotoQuatro from "../assets/fotosBolo/IMG_4537.JPG";

import { Image } from "../types/listBolo";

export const listBolo: Image[] = [
  {
    id: 1,
    src: FotoUm,
    title: "Delicia de Brigadeiro",
    description:
      "Bolo com a massa branca ou bolo com a massa de chocolate, com recheio de Chocolate 50% cacau.",
    valor: 10,
  },
  {
    id: 2,
    src: FotoTres,
    title: "Delicia de Ninho",
    description:
      "Bolo com a massa branca ou bolo com a massa de chocolate, com recheio de Ninho.",
    valor: 10,
  },
  {
    id: 3,
    src: FotoDois,
    title: "Delicia de ChocoNinho",
    description:
      "Bolo com a massa branca ou bolo com a massa de chocolate, com recheio de Chocolate 50% Cacau & Ninho.",
    valor: 10,
  },
  {
    id: 4,
    src: FotoQuatro,
    title: "Delicia de Ninho com Morango",
    description: "Bolo com a massa branca com recheio de Ninho com Morango.",
    valor: 12,
  },
];
