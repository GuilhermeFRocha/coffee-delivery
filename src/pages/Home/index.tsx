import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { typesCoffee } from "../../types/TypesCoffee";

import Coffee from "../../assets/Coffee.svg";
import IconPurchase from "../../assets/IconPurshase.svg";
import IconCoffee from "../../assets/IconCoffee.svg";
import IconTimer from "../../assets/IconTimer.svg";
import IconBlock from "../../assets/IconBlock.svg";
import VectorPlus from "../../assets/VectorPlus.svg";
import VectorMinus from "../../assets/VectorMinus.svg";
import IconButton from "../../assets/IconButton.svg";

export const Home = () => {
  interface BenefiteProps {
    text: string;
    src: any;
  }

  const benefitsCoffee: BenefiteProps[] = [
    {
      src: IconPurchase,
      text: "Compra simples e segura",
    },
    {
      src: IconBlock,
      text: "Embalagem mantém o café intacto",
    },
    {
      src: IconTimer,
      text: "Entrega rápida e rastreada",
    },
    {
      src: IconCoffee,
      text: "O café chega fresquinho até você",
    },
  ];

  return (
    <>
      <Header />

      <main>
        <div className="flex container mx-auto px-24 py-8 pb-24 justify-between items-center">
          <div>
            <h2 className="font-black text-xl font-Nunito pb-4">
              Encontre o café perfeito <br /> para qualquer hora do dia
            </h2>

            <p className="text-lg pb-16">
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
              qualquer hora
            </p>

            <div className="grid grid-cols-2 gap-y-5">
              {benefitsCoffee.map((item) => (
                <p className="flex items-center gap-3">
                  <img src={item.src} alt="icon" />
                  {item.text}
                </p>
              ))}
            </div>
          </div>

          <div>
            <img src={Coffee} alt="Café" />
          </div>
        </div>

        <div className="container mx-auto px-24 py-8 ">
          <h2 className="font-Nunito text-2xl font-black pb-14">
            Nossos cafés
          </h2>
          <div className="grid grid-cols-4">
            {typesCoffee.map((items) => (
              <div className="bg-grey-100 rounded-bl-3xl rounded-tl-md rounded-br-md rounded-tr-3xl max-w-xs text-center px-5 pb-5">
                <img
                  src={items.imgCoffee}
                  alt="imagem chicara de cafe"
                  className="m-auto pb-3 -mt-6"
                />
                <p className="bg-yellow-100 text-yellow-200 font-bold text-mn rounded-2xl max-w-max mx-auto px-2 py-1 mb-4 ">
                  {items.type}
                </p>
                <h3 className="font-Nunito font-extrabold text-lg pb-2">
                  {items.name}
                </h3>
                <span className="text-grey-200 text-xs">
                  {items.description}
                </span>
                <div className="flex pt-7 justify-between items-center">
                  <p className="text-xs text-grey-400">
                    R$
                    <span className="font-Nunito font-black text-grey-400 text-3xl">
                      {items.value}
                    </span>
                  </p>
                  <div className="flex bg-grey-300 px-3 py-2 gap-1 items-center rounded-md">
                    <span>
                      <img src={VectorMinus} alt="" />
                    </span>
                    <span>{items.count}</span>
                    <span>
                      <img src={VectorPlus} alt="" />
                    </span>
                  </div>
                  <button>
                    <img src={IconButton} alt="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};