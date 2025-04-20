import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Home,
  FileText,
  Calculator,
  PiggyBank,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function MortgageInfoGraphic() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/familia-hogar.png"
            alt="Familia buscando su hogar ideal"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 bg-amber-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-amber-800">
            El sueño de tu hogar propio
          </h3>
          <p className="text-gray-700 mb-4">
            Adquirir una vivienda es uno de los pasos más importantes en la vida
            de una persona. No solo representa una inversión financiera
            significativa, sino también la construcción de un hogar, estabilidad
            y bienestar a largo plazo. <span className="font-bold">Con nuestra calculadora de hipoteca (Credipoteca),
            podrás planificar este gran paso con confianza y claridad.</span> Esta
            herramienta te permite conocer de antemano cuánto pagarás
            mensualmente, los intereses asociados y el tiempo total del
            préstamo. Así, podrás tomar decisiones informadas, comparar opciones
            y prepararte adecuadamente para cumplir el sueño de tener vivienda
            propia, sin sorpresas ni contratiempos.
          </p>

          <p className="text-gray-700">
            Sigue los pasos a continuación para entender el proceso de obtención
            de una hipoteca y utiliza nuestra calculadora para simular
            diferentes escenarios que se ajusten a tu situación financiera.
          </p>
        </div>
      </div>
      <h2 className="text-center text-3xl m-6 font-bold bg-amber-200 p-1 rounded-xl w-auto">Onboarding para la adquisición de vivienda</h2> 
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <Card className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-50 border-amber-200 shadow-md hover:shadow-lg transition-all">
              <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                <div className="bg-amber-600 text-white p-3 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-amber-800">
                  {step.title}
                </h3>
                <p className="text-sm text-amber-700">{step.description}</p>
              </CardContent>
            </Card>
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center my-4">
                <ArrowRight className="text-amber-500" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    title: "Evalúa tu Presupuesto",
    description:
      "Determina cuánto puedes pagar mensualmente y cuánto tienes para la cuota inicial.",
    icon: <Calculator className="h-6 w-6" />,
  },
  {
    title: "Verifica tu Historial Crediticio",
    description:
      "Asegúrate de tener un buen historial crediticio para obtener mejores tasas.",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    title: "Ahorra para la Cuota Inicial",
    description:
      "Generalmente necesitarás entre 10% y 30% del valor del inmueble.",
    icon: <PiggyBank className="h-6 w-6" />,
  },
  {
    title: "Busca la Propiedad Ideal",
    description:
      "Encuentra una propiedad que se ajuste a tu presupuesto y necesidades.",
    icon: <Home className="h-6 w-6" />,
  },
  {
    title: "Solicita y Cierra el Préstamo",
    description: "Completa la documentación y firma los contratos finales.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
];
