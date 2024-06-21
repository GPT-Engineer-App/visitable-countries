import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
  Eye,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Index = () => {
  const [countries, setCountries] = useState([
    { name: "France", population: "67 million", capital: "Paris", area: "551,695 km²", gdp: "$2.7 trillion", description: "France is known for its cuisine, fashion, and culture.", metrics: { literacyRate: "99%", lifeExpectancy: "82 years", unemploymentRate: "8%" }, trends: { gdpGrowth: "1.5%", populationGrowth: "0.2%" } },
    { name: "Italy", population: "60 million", capital: "Rome", area: "301,340 km²", gdp: "$2.1 trillion", description: "Italy is famous for its history, art, and cuisine.", metrics: { literacyRate: "99%", lifeExpectancy: "83 years", unemploymentRate: "9%" }, trends: { gdpGrowth: "1.2%", populationGrowth: "0.1%" } },
    { name: "Japan", population: "126 million", capital: "Tokyo", area: "377,975 km²", gdp: "$5.1 trillion", description: "Japan is known for its technology, culture, and cuisine.", metrics: { literacyRate: "99%", lifeExpectancy: "84 years", unemploymentRate: "2.5%" }, trends: { gdpGrowth: "0.7%", populationGrowth: "-0.2%" } },
    { name: "Australia", population: "25 million", capital: "Canberra", area: "7,692,024 km²", gdp: "$1.4 trillion", description: "Australia is known for its natural wonders and unique wildlife.", metrics: { literacyRate: "99%", lifeExpectancy: "83 years", unemploymentRate: "5%" }, trends: { gdpGrowth: "2.3%", populationGrowth: "1.3%" } },
    { name: "Canada", population: "38 million", capital: "Ottawa", area: "9,984,670 km²", gdp: "$1.8 trillion", description: "Canada is known for its natural beauty and multicultural cities.", metrics: { literacyRate: "99%", lifeExpectancy: "82 years", unemploymentRate: "6%" }, trends: { gdpGrowth: "1.8%", populationGrowth: "1.2%" } },
  ]);

  const [newCountry, setNewCountry] = useState({ name: "", population: "", capital: "", area: "", gdp: "", description: "", metrics: { literacyRate: "", lifeExpectancy: "", unemploymentRate: "" }, trends: { gdpGrowth: "", populationGrowth: "" } });
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleAddCountry = () => {
    setCountries([...countries, newCountry]);
    setNewCountry({ name: "", population: "", capital: "", area: "", gdp: "", description: "", metrics: { literacyRate: "", lifeExpectancy: "", unemploymentRate: "" }, trends: { gdpGrowth: "", populationGrowth: "" } });
  };

  const handleViewDetails = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="p-4">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="archived" className="hidden sm:flex">
              Archived
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Active
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Archived
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Country
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add a new country</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    placeholder="Country Name"
                    value={newCountry.name}
                    onChange={(e) => setNewCountry({ ...newCountry, name: e.target.value })}
                  />
                  <Input
                    placeholder="Population"
                    value={newCountry.population}
                    onChange={(e) => setNewCountry({ ...newCountry, population: e.target.value })}
                  />
                  <Input
                    placeholder="Capital City"
                    value={newCountry.capital}
                    onChange={(e) => setNewCountry({ ...newCountry, capital: e.target.value })}
                  />
                  <Input
                    placeholder="Area"
                    value={newCountry.area}
                    onChange={(e) => setNewCountry({ ...newCountry, area: e.target.value })}
                  />
                  <Input
                    placeholder="GDP"
                    value={newCountry.gdp}
                    onChange={(e) => setNewCountry({ ...newCountry, gdp: e.target.value })}
                  />
                  <Input
                    placeholder="Description"
                    value={newCountry.description}
                    onChange={(e) => setNewCountry({ ...newCountry, description: e.target.value })}
                  />
                  <Input
                    placeholder="Literacy Rate"
                    value={newCountry.metrics.literacyRate}
                    onChange={(e) => setNewCountry({ ...newCountry, metrics: { ...newCountry.metrics, literacyRate: e.target.value } })}
                  />
                  <Input
                    placeholder="Life Expectancy"
                    value={newCountry.metrics.lifeExpectancy}
                    onChange={(e) => setNewCountry({ ...newCountry, metrics: { ...newCountry.metrics, lifeExpectancy: e.target.value } })}
                  />
                  <Input
                    placeholder="Unemployment Rate"
                    value={newCountry.metrics.unemploymentRate}
                    onChange={(e) => setNewCountry({ ...newCountry, metrics: { ...newCountry.metrics, unemploymentRate: e.target.value } })}
                  />
                  <Input
                    placeholder="GDP Growth"
                    value={newCountry.trends.gdpGrowth}
                    onChange={(e) => setNewCountry({ ...newCountry, trends: { ...newCountry.trends, gdpGrowth: e.target.value } })}
                  />
                  <Input
                    placeholder="Population Growth"
                    value={newCountry.trends.populationGrowth}
                    onChange={(e) => setNewCountry({ ...newCountry, trends: { ...newCountry.trends, populationGrowth: e.target.value } })}
                  />
                  <Button onClick={handleAddCountry}>Add Country</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <TabsContent value="all">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Countries</CardTitle>
              <CardDescription>
                Manage your countries and view their details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Country</TableHead>
                    <TableHead>Population</TableHead>
                    <TableHead>Capital City</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {countries.map((country, index) => (
                    <TableRow key={index}>
                      <TableCell>{country.name}</TableCell>
                      <TableCell>{country.population}</TableCell>
                      <TableCell>{country.capital}</TableCell>
                      <TableCell>
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" size="sm" className="h-8 gap-1" onClick={() => handleViewDetails(country)}>
                              <Eye className="h-3.5 w-3.5" />
                              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                View Details
                              </span>
                            </Button>
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>{selectedCountry?.name}</SheetTitle>
                              <SheetDescription>
                                Population: {selectedCountry?.population}
                              </SheetDescription>
                            </SheetHeader>
                            <div className="p-4 space-y-4">
                              <Card className="financial-indicator">
                              <CardHeader>
                                <CardTitle>Area</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="text-4xl font-bold">
                                  {selectedCountry?.area}
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="financial-indicator">
                              <CardHeader>
                                <CardTitle>GDP</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="text-4xl font-bold">
                                  {selectedCountry?.gdp}
                                </div>
                              </CardContent>
                            </Card>
                              <Card>
                                <CardHeader>
                                  <CardTitle>Description</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  {selectedCountry?.description}
                                </CardContent>
                              </Card>
                              <Card>
                                <CardHeader>
                                  <CardTitle>Metrics</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <p>Literacy Rate: {selectedCountry?.metrics.literacyRate}</p>
                                  <p>Life Expectancy: {selectedCountry?.metrics.lifeExpectancy}</p>
                                  <p>Unemployment Rate: {selectedCountry?.metrics.unemploymentRate}</p>
                                </CardContent>
                              </Card>
                              <Card>
                                <CardHeader>
                                  <CardTitle>Trends</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <p>GDP Growth: {selectedCountry?.trends.gdpGrowth}</p>
                                  <p>Population Growth: {selectedCountry?.trends.populationGrowth}</p>
                                </CardContent>
                              </Card>
                              <Bar
                                data={{
                                  labels: ["Population"],
                                  datasets: [
                                    {
                                      label: selectedCountry?.name,
                                      data: [parseInt(selectedCountry?.population.replace(/[^0-9]/g, ''))],
                                      backgroundColor: "rgba(75, 192, 192, 0.2)",
                                      borderColor: "rgba(75, 192, 192, 1)",
                                      borderWidth: 1,
                                    },
                                  ],
                                }}
                                options={{
                                  scales: {
                                    y: {
                                      beginAtZero: true,
                                    },
                                  },
                                }}
                              />
                            </div>
                          </SheetContent>
                        </Sheet>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-5</strong> of <strong>5</strong> countries
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
};

export default Index;