import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount("custom");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-ngo-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Cause</h1>
            <p className="text-xl">
              Your donation helps us create lasting positive change in communities.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="md:col-span-2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <Tabs defaultValue="onetime" className="mb-8">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger 
                        value="onetime"
                        className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
                      >
                        One-Time Donation
                      </TabsTrigger>
                      <TabsTrigger 
                        value="monthly"
                        className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
                      >
                        Monthly Giving
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="onetime" className="mt-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Select Amount</h3>
                          <div className="grid grid-cols-3 gap-4">
                            {["25", "50", "100", "250", "500", "custom"].map((amount) => (
                              <Button
                                key={amount}
                                variant={donationAmount === amount ? "default" : "outline"}
                                className={`h-16 ${
                                  donationAmount === amount 
                                    ? "bg-ngo-primary text-white"
                                    : "border-ngo-primary text-ngo-primary"
                                }`}
                                onClick={() => handleAmountSelect(amount)}
                              >
                                {amount === "custom" ? "Custom" : `$${amount}`}
                              </Button>
                            ))}
                          </div>
                          
                          {donationAmount === "custom" && (
                            <div className="mt-4">
                              <Label htmlFor="custom-amount">Enter Custom Amount</Label>
                              <div className="relative mt-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                                <Input
                                  id="custom-amount"
                                  type="number"
                                  placeholder="Enter amount"
                                  className="pl-8"
                                  value={customAmount}
                                  onChange={handleCustomAmount}
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Your Information</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="first-name">First Name</Label>
                              <Input id="first-name" className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="last-name">Last Name</Label>
                              <Input id="last-name" className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="email">Email Address</Label>
                              <Input id="email" type="email" className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number (Optional)</Label>
                              <Input id="phone" className="mt-1" />
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="card-number">Card Number</Label>
                              <Input id="card-number" placeholder="1234 5678 9012 3456" className="mt-1" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="expiry">Expiry Date</Label>
                                <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                              </div>
                              <div>
                                <Label htmlFor="cvc">CVC</Label>
                                <Input id="cvc" placeholder="123" className="mt-1" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-top space-x-2">
                          <Checkbox id="anonymous" />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="anonymous"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Make this donation anonymous
                            </Label>
                            <p className="text-sm text-gray-500">
                              Your name will not be displayed in our donor list.
                            </p>
                          </div>
                        </div>
                        
                        <Button size="lg" className="w-full bg-ngo-primary">
                          Donate {donationAmount === "custom" ? `$${customAmount}` : donationAmount !== "" ? `$${donationAmount}` : ""}
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="monthly" className="mt-6">
                      <div className="space-y-6">
                        {/* Similar content as onetime but for monthly donors */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Select Monthly Amount</h3>
                          <div className="grid grid-cols-3 gap-4">
                            {["10", "25", "50", "100", "250", "custom"].map((amount) => (
                              <Button
                                key={amount}
                                variant={donationAmount === amount ? "default" : "outline"}
                                className={`h-16 ${
                                  donationAmount === amount 
                                    ? "bg-ngo-primary text-white"
                                    : "border-ngo-primary text-ngo-primary"
                                }`}
                                onClick={() => handleAmountSelect(amount)}
                              >
                                {amount === "custom" ? "Custom" : `$${amount}`}
                              </Button>
                            ))}
                          </div>
                          
                          {donationAmount === "custom" && (
                            <div className="mt-4">
                              <Label htmlFor="custom-amount-monthly">Enter Custom Amount</Label>
                              <div className="relative mt-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                                <Input
                                  id="custom-amount-monthly"
                                  type="number"
                                  placeholder="Enter amount"
                                  className="pl-8"
                                  value={customAmount}
                                  onChange={handleCustomAmount}
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Rest of the form fields similar to onetime donation */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Your Information</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="first-name-monthly">First Name</Label>
                              <Input id="first-name-monthly" className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="last-name-monthly">Last Name</Label>
                              <Input id="last-name-monthly" className="mt-1" />
                            </div>
                          </div>
                        </div>
                        
                        <Button size="lg" className="w-full bg-ngo-primary">
                          Donate {donationAmount === "custom" ? `$${customAmount}` : donationAmount !== "" ? `$${donationAmount}` : ""} Monthly
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div>
              <Card className="border-none shadow-lg mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Your Impact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-ngo-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="text-ngo-primary font-bold">$25</span>
                      </div>
                      <p className="text-gray-700">Provides educational materials for one student for a month</p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-ngo-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="text-ngo-primary font-bold">$50</span>
                      </div>
                      <p className="text-gray-700">Supports skills training for one community member</p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-ngo-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="text-ngo-primary font-bold">$100</span>
                      </div>
                      <p className="text-gray-700">Funds a community garden project for sustainable food production</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Need Help?</h3>
                  <p className="text-gray-700 mb-6">
                    If you have questions about donations or prefer to donate by check or bank transfer, please contact us.
                  </p>
                  <Button variant="outline" className="w-full">Contact Us</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Other Ways to Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-ngo-primary/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-ngo-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Contribute your time and skills to make a difference in our community programs.
                </p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-ngo-primary/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-ngo-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Corporate Partnership</h3>
                <p className="text-gray-600 mb-6">
                  Partner with us through sponsorships, matching gifts, or volunteering opportunities.
                </p>
                <Button variant="outline">Partner With Us</Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-ngo-primary/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-ngo-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Legacy Giving</h3>
                <p className="text-gray-600 mb-6">
                  Create a lasting impact by including our organization in your estate planning.
                </p>
                <Button variant="outline">Learn About Legacy Gifts</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
