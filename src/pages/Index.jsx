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
    { name: "France", population: "67 million", capital: "Paris" },
    { name: "Italy", population: "60 million", capital: "Rome" },
    { name: "Japan", population: "126 million", capital: "Tokyo" },
    { name: "Australia", population: "25 million", capital: "Canberra" },
    { name: "Canada", population: "38 million", capital: "Ottawa" },
  ]);

  const [newCountry, setNewCountry] = useState({ name: "", population: "", capital: "" });
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleAddCountry = () => {
    setCountries([...countries, newCountry]);
    setNewCountry({ name: "", population: "", capital: "" });
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
                            <div className="p-4">
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