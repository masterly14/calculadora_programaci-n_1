"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HelpCircle } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function MortgageCalculator() {
  const [downPaymentType, setDownPaymentType] = useState<"amount" | "percentage">("amount")
  const [loanTermType, setLoanTermType] = useState<"years" | "months">("years")
  const [showResults, setShowResults] = useState(false)

  // Form state would be implemented here in a real application

  const handleCalculate = () => {
    setShowResults(true)
    // Calculation logic would be implemented here
  }

  const handleReset = () => {
    setShowResults(false)
    // Reset form logic would be implemented here
  }

  return (
    <Card className="w-full bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-md">
      <CardContent className="p-6">
        <p className="text-center text-2xl m-10 font-bold">Rellena los siguientes datos para hacer el calculo del crédito hipotecario. </p>
        <Tabs defaultValue="user-data" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 bg-amber-200">
            <TabsTrigger value="user-data">Usuario</TabsTrigger>
            <TabsTrigger value="credit-data">Crédito</TabsTrigger>
            <TabsTrigger value="advanced-simulation">Simulación Avanzada</TabsTrigger>
          </TabsList>

          {/* User Data Tab */}
          <TabsContent value="user-data" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="property-value">
                  Valor del inmueble (COP)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-4 w-4 p-0 ml-1">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Más información</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">El valor total de la propiedad que deseas adquirir.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Input id="property-value" type="number" placeholder="Ej: 300,000,000" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="down-payment">
                    Cuota inicial
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" className="h-4 w-4 p-0 ml-1">
                            <HelpCircle className="h-4 w-4" />
                            <span className="sr-only">Más información</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">El monto inicial que pagarás por la propiedad.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="down-payment-switch" className="text-sm">
                      COP
                    </Label>
                    <Switch
                      id="down-payment-switch"
                      checked={downPaymentType === "percentage"}
                      onCheckedChange={(checked) => setDownPaymentType(checked ? "percentage" : "amount")}
                    />
                    <Label htmlFor="down-payment-switch" className="text-sm">
                      %
                    </Label>
                  </div>
                </div>
                <Input
                  id="down-payment"
                  type="number"
                  placeholder={downPaymentType === "amount" ? "Ej: 60,000,000" : "Ej: 20"}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="loan-term">
                    Plazo del crédito
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" className="h-4 w-4 p-0 ml-1">
                            <HelpCircle className="h-4 w-4" />
                            <span className="sr-only">Más información</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">El tiempo durante el cual pagarás el préstamo.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="loan-term-switch" className="text-sm">
                      Años
                    </Label>
                    <Switch
                      id="loan-term-switch"
                      checked={loanTermType === "months"}
                      onCheckedChange={(checked) => setLoanTermType(checked ? "months" : "years")}
                    />
                    <Label htmlFor="loan-term-switch" className="text-sm">
                      Meses
                    </Label>
                  </div>
                </div>
                <div className="pt-2">
                  <Slider
                    defaultValue={[15]}
                    max={loanTermType === "years" ? 30 : 360}
                    step={loanTermType === "years" ? 1 : 12}
                  />
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>1 {loanTermType === "years" ? "año" : "mes"}</span>
                    <span>{loanTermType === "years" ? "15 años" : "180 meses"}</span>
                    <span>{loanTermType === "years" ? "30 años" : "360 meses"}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Edad del solicitante</Label>
                <Input id="age" type="number" placeholder="Ej: 35" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthly-income">
                  Ingresos mensuales netos
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-4 w-4 p-0 ml-1">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Más información</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Tus ingresos mensuales después de impuestos y deducciones.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Input id="monthly-income" type="number" placeholder="Ej: 5,000,000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contract-type">Tipo de contrato laboral</Label>
                <Select>
                  <SelectTrigger id="contract-type">
                    <SelectValue placeholder="Selecciona el tipo de contrato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indefinido">Indefinido</SelectItem>
                    <SelectItem value="fijo">Término fijo</SelectItem>
                    <SelectItem value="independiente">Independiente</SelectItem>
                    <SelectItem value="prestacion">Prestación de servicios</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          {/* Credit Data Tab */}
          <TabsContent value="credit-data" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="credit-type">
                  Tipo de crédito
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-4 w-4 p-0 ml-1">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Más información</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">UVR: Indexado a la inflación. Pesos: Tasa fija en pesos colombianos.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Select>
                  <SelectTrigger id="credit-type">
                    <SelectValue placeholder="Selecciona el tipo de crédito" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pesos">Pesos</SelectItem>
                    <SelectItem value="uvr">UVR</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest-rate">
                  Tasa de interés efectiva anual (%)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-4 w-4 p-0 ml-1">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Más información</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">La tasa de interés anual que cobrará el banco por tu préstamo.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Input id="interest-rate" type="number" step="0.01" placeholder="Ej: 10.5" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amortization-type">
                  Tipo de amortización
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-4 w-4 p-0 ml-1">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Más información</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Francés: Cuotas fijas. Alemán: Cuotas decrecientes.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Select>
                  <SelectTrigger id="amortization-type">
                    <SelectValue placeholder="Selecciona el tipo de amortización" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frances">Francés (cuotas fijas)</SelectItem>
                    <SelectItem value="aleman">Alemán (cuotas decrecientes)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="insurance-cost">
                  Valor aproximado de seguros mensuales
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-4 w-4 p-0 ml-1">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Más información</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Incluye seguros de vida, incendio, terremoto, etc.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Input id="insurance-cost" type="number" placeholder="Ej: 150,000" />
              </div>
            </div>
          </TabsContent>

          {/* Advanced Simulation Tab */}
          <TabsContent value="advanced-simulation" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="inflation-projection">
                  Proyección anual de inflación (%)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-4 w-4 p-0 ml-1">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Más información</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Relevante para créditos en UVR.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Input id="inflation-projection" type="number" step="0.01" placeholder="Ej: 3.5" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="initial-expenses">
                  Gastos iniciales aproximados
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-4 w-4 p-0 ml-1">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Más información</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Incluye estudio de crédito, notaría, registro, etc.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Input id="initial-expenses" type="number" placeholder="Ej: 5,000,000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subsidies">Subsidios aplicables</Label>
                <Select>
                  <SelectTrigger id="subsidies">
                    <SelectValue placeholder="Selecciona los subsidios aplicables" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Ninguno</SelectItem>
                    <SelectItem value="mi-casa-ya">Mi Casa Ya</SelectItem>
                    <SelectItem value="caja-compensacion">Caja de Compensación</SelectItem>
                    <SelectItem value="otros">Otros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="debt-limit">
                  Tope legal de endeudamiento (%)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-4 w-4 p-0 ml-1">
                          <HelpCircle className="h-4 w-4" />
                          <span className="sr-only">Más información</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Porcentaje máximo de tus ingresos que puedes destinar a la cuota mensual.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Input id="debt-limit" type="number" placeholder="Ej: 30" />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handleReset}>
            Reiniciar
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700" onClick={handleCalculate}>
            Calcular
          </Button>
        </div>

        {showResults && (
          <div className="mt-8 p-6 border border-amber-200 rounded-lg bg-amber-50 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Resultados de la Simulación</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Valor del préstamo:</p>
                <p className="text-lg font-medium">$240,000,000 COP</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Cuota mensual estimada:</p>
                <p className="text-lg font-medium">$2,413,567 COP</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Plazo total:</p>
                <p className="text-lg font-medium">15 años (180 meses)</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Tasa de interés efectiva anual:</p>
                <p className="text-lg font-medium">10.5%</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Costo total del crédito:</p>
                <p className="text-lg font-medium">$434,442,060 COP</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Relación cuota/ingreso:</p>
                <p className="text-lg font-medium">48.27% (Excede el límite recomendado)</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

