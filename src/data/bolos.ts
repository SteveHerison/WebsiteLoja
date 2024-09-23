import FotoUm from "../assets/fotosBolo/um.png";
import FotoDois from "../assets/fotosBolo/dois.png";
import FotoTres from "../assets/fotosBolo/tres.png";
import FotoQuatro from "../assets/fotosBolo/quatro.png";
import Fotoquinta from "../assets/fotosBolo/cinco.png";
import Fotosexta from "../assets/fotosBolo/seis.png";

import { Produto } from "../types/listBolo";

export const listBolo: Produto[] = [
  {
    id: 1,
    src: FotoUm,
    title: "Delicia de Brigadeiro",
    subtitle: "Brigadeiro",
    description:
      "Bolo com a massa branca ou bolo com a massa de chocolate, com recheio de Chocolate 50% cacau.",
    valor: 10,
    quantidade: 0,
  },
  {
    id: 2,
    src: FotoDois,
    title: "Delicia de Ninho",
    subtitle: "Ninho",
    description:
      "Bolo com a massa branca ou bolo com a massa de chocolate, com recheio de Ninho.",
    valor: 10,
    quantidade: 0,
  },
  {
    id: 3,
    src: FotoQuatro,
    title: "Delicia de ChocoNinho",
    subtitle: "ChocoNinho",
    description:
      "Bolo com a massa branca ou bolo com a massa de chocolate, com recheio de Chocolate 50% Cacau & Ninho.",
    valor: 10,
    quantidade: 0,
  },
  {
    id: 4,
    src: FotoTres,
    title: "Delicia de Chantininho com Morango",
    subtitle: "Chanti & Morango",
    description:
      "Bolo com a massa branca com recheio de Chantininho com Morango.",
    valor: 12,
    quantidade: 0,
  },
  {
    id: 5,
    src: Fotoquinta,
    title: "Delicia de Brigadeiro",
    subtitle: "Brigadeiro",
    description: "Bolo com a massa colorida com recheio de Brigadeiro.",
    valor: 8,
    quantidade: 0,
  },
  {
    id: 6,
    src: Fotosexta,
    title: "Delicia de Chantininho",
    subtitle: "Chantininho",
    description: "Bolo com a massa colorido com recheio de Chantininho.",
    valor: 12,
    quantidade: 0,
  },
];
