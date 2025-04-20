"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const [isResponsive, setIsResponsive] = useState(false);

  const showResponsiveMenu = () => {
    setIsResponsive((prev) => !prev);
  };

  const path = usePathname();

  return (
    <div
      className={`flex justify-between items-center bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 p-8 h-[90px] mb-10`}
    >
      <Image src={"/Credipoteca.png"} width={170} height={170} alt="logo" />
      <div className="items-center gap-8 hidden md:flex">
        <Link href={"/"} className={`${path === '/' ? 'bg-amber-300 rounded-md p-1' : ''}`}>CALCULADORA DE CRÉDITO</Link>
        <Link href={"/credito-hipotecario"} >
          EDUCARME SOBRE CRÉDITOS HIPOTECARIOS.
        </Link>
      </div>
      <Button className="hidden md:flex">Contactar</Button>
      <Button
        className="flex md:hidden cursor-pointer"
        variant={"ghost"}
        onClick={showResponsiveMenu}
      >
        <MenuIcon />
      </Button>
      {isResponsive && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-amber-50 to-orange-50 z-50 flex flex-col items-center justify-center gap-8">
          <Button
            variant={"outline"}
            onClick={() => setIsResponsive(false)}
            className="top-10"
          >
            <X />
            Cerrar menu
          </Button>
          <Link href={"/"} onClick={() => setIsResponsive(false)}>
            CALCULADORA DE CRÉDITO
          </Link>
          <Link
            href={"/credito-hipotecario"}
            onClick={() => setIsResponsive(false)}
          >
            EDUCARME SOBRE CRÉDITOS HIPOTECARIOS
          </Link>
          <Button>Contactar desarrolladores</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
