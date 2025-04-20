export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-amber-400 text-white mt-16 py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Proyecto Académico</h3>
            <p className="text-amber-100">
              Este proyecto es parte del curso de Programación de Computadoras (Segundo semestre) en el Politécnico Grancolombiano.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Créditos</h3>
            <p className="text-amber-100">
              <span className="block">Diseño UX: Santiago Varón</span>
              <span className="block">Project Manager: Christian</span>
              <span className="block">Lógica backend: Carlos Rozo, Nicolas Parra, Santiago Varón</span>
              <span className="block">Instructor: Jose Osorio</span>
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Información Legal</h3>
            <p className="text-amber-100">
              Esta calculadora es solo para fines educativos. Se recomienda asesoramiento financiero
            </p>
          </div>
        </div>

        <div className="border-t border-amber-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-100 text-sm">
            &copy; {currentYear} Politécnico Grancolombiano. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  )
}

