import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import { AlertCircle, Check, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Payment Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>
                All transactions are secure and encrypted
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-name">Name on Card</Label>
                <Input id="card-name" placeholder="John Doe" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Enter your 16-digit number.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="month">Month</Label>
                  <Select>
                    <SelectTrigger id="month">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">01</SelectItem>
                      <SelectItem value="02">02</SelectItem>
                      <SelectItem value="03">03</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Select>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Billing Address</Label>
                <p className="text-sm text-muted-foreground">
                  The billing address associated with your payment method
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox id="same-address" defaultChecked />
                  <Label htmlFor="same-address" className="text-sm font-normal">
                    Same as shipping address
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Members Card */}
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>
                Invite your team to collaborate on this project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center py-8 space-y-4">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-center space-y-2">
                  <p className="font-medium">No Team Members</p>
                  <p className="text-sm text-muted-foreground">
                    Invite your team to collaborate on this project.
                  </p>
                </div>
                <Button>+ Invite Members</Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-sm">Syncing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span className="text-sm">Updating</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-500" />
                  <span className="text-sm">Loading</span>
                </div>
              </div>

              <div className="space-y-2">
                <Input placeholder="Send a message..." />
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Price Range</Label>
                  <p className="text-sm text-muted-foreground mb-4">
                    Set your budget range ($200 - 800).
                  </p>
                  <Slider defaultValue={[400]} max={800} min={200} step={10} />
                </div>
              </div>

              <div className="relative">
                <Input placeholder="Search..." className="pr-24" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  12 results
                </span>
              </div>

              <Input placeholder="https:// example.com" />
            </CardContent>
          </Card>

          {/* Two-Factor Authentication Card */}
          <Card>
            <CardHeader>
              <CardTitle>Two-factor authentication</CardTitle>
              <CardDescription>
                Verify via email or phone number.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Enable</Button>

              <Alert>
                <Check className="h-4 w-4" />
                <AlertDescription>
                  Your profile has been verified.
                </AlertDescription>
              </Alert>

              <Separator />

              <div className="space-y-2">
                <Label>Appearance Settings</Label>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Compute Environment</Label>
                  <p className="text-sm text-muted-foreground mb-3">
                    Select the compute environment for your cluster.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-start space-x-3 rounded-lg border p-4">
                      <div className="flex h-5 items-center">
                        <Checkbox id="kubernetes" defaultChecked />
                      </div>
                      <div className="flex-1 space-y-1">
                        <Label htmlFor="kubernetes" className="font-medium">
                          Kubernetes
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Run GPU workloads on a K8s configured cluster. This is
                          the default.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 rounded-lg border p-4">
                      <div className="flex h-5 items-center">
                        <Checkbox id="vm" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <Label htmlFor="vm" className="font-medium">
                          Virtual Machine
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Access a VM configured cluster to run workloads.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chat Interface Card */}
          <Card>
            <CardHeader>
              <CardTitle>Chat Interface</CardTitle>
              <CardDescription>
                Ask, search, or make anything...
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Auto
                </Button>
                <Button variant="outline" size="sm">
                  All Sources
                </Button>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Archive
                </Button>
                <Button variant="outline" size="sm">
                  Report
                </Button>
                <Button variant="outline" size="sm">
                  Snooze
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms-conditions" />
                <Label htmlFor="terms-conditions">
                  I agree to the terms and conditions
                </Label>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  1
                </Button>
                <Button variant="outline" size="icon">
                  2
                </Button>
                <Button variant="outline" size="icon">
                  3
                </Button>
                <div className="flex-1" />
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Copilot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="copilot">Copilot</SelectItem>
                    <SelectItem value="assistant">Assistant</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>How did you hear about us?</Label>
                <p className="text-sm text-muted-foreground">
                  Select the option that best describes how...
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="default" size="sm">
                    Social Media
                  </Button>
                  <Button variant="outline" size="sm">
                    Search Engine
                  </Button>
                  <Button variant="outline" size="sm">
                    Referral
                  </Button>
                  <Button variant="outline" size="sm">
                    Other
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Buttons & Badges Card */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons & Badges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>

              <Separator />

              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>

              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12">
                  <AvatarFallback>XL</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>

          {/* Alerts Card */}
          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>
                  This is a default alert message.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong.</AlertDescription>
              </Alert>

              <Alert className="border-green-500 text-green-600 dark:text-green-400">
                <Check className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Changes saved successfully.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Form Controls Card */}
          <Card>
            <CardHeader>
              <CardTitle>Form Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-input">Email</Label>
                <Input
                  id="email-input"
                  type="email"
                  placeholder="email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message-input">Message</Label>
                <Textarea
                  id="message-input"
                  placeholder="Type your message..."
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" />
                  <Label htmlFor="marketing">Marketing emails</Label>
                </div>
              </div>

              <RadioGroup defaultValue="option-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-1" id="opt-1" />
                  <Label htmlFor="opt-1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-2" id="opt-2" />
                  <Label htmlFor="opt-2">Option 2</Label>
                </div>
              </RadioGroup>

              <div className="space-y-2">
                <Label>Volume</Label>
                <Slider defaultValue={[50]} max={100} />
              </div>
            </CardContent>
          </Card>

          {/* Progress & Tabs Card */}
          <Card>
            <CardHeader>
              <CardTitle>Progress & Tabs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Progress value={33} />
                <Progress value={66} />
                <Progress value={100} />
              </div>

              <Separator />

              <Tabs defaultValue="tab1">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Content for tab 1
                  </p>
                  <Input placeholder="Tab 1 input" />
                </TabsContent>
                <TabsContent value="tab2" className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Content for tab 2
                  </p>
                </TabsContent>
                <TabsContent value="tab3" className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Content for tab 3
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Accordion Card */}
          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Table Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>
                      <Badge>Paid</Badge>
                    </TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Pending</Badge>
                    </TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell>
                      <Badge>Paid</Badge>
                    </TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Calendar Card */}
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar mode="single" className="rounded-md border" />
            </CardContent>
          </Card>

          {/* Dialog & Dropdown Card */}
          <Card>
            <CardHeader>
              <CardTitle>Dialogs & Menus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Open Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>
                      This is a dialog description.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Continue</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Open Menu
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
