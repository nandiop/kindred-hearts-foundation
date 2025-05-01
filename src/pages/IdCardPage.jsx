
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const IdCardPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-ngo-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ID Card Services</h1>
            <p className="text-xl">
              Download, request, or verify your Kindred Hearts Foundation membership ID card.
            </p>
          </div>
        </div>
      </section>

      {/* ID Card Services */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="download" className="mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger 
                  value="download" 
                  className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
                >
                  Download ID
                </TabsTrigger>
                <TabsTrigger 
                  value="request" 
                  className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
                >
                  Request New ID
                </TabsTrigger>
                <TabsTrigger 
                  value="verify" 
                  className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
                >
                  Verify ID
                </TabsTrigger>
              </TabsList>
              
              {/* Download ID Tab */}
              <TabsContent value="download" className="mt-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-4">Download Your ID Card</h2>
                        <p className="text-gray-600">
                          If you already have an ID card issued, enter your details below to download it.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="member-id">Member ID</Label>
                          <Input id="member-id" placeholder="Enter your member ID" className="mt-1" />
                        </div>
                        
                        <div>
                          <Label htmlFor="dob">Date of Birth</Label>
                          <Input id="dob" type="date" className="mt-1" />
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="Enter your registered email" className="mt-1" />
                        </div>
                      </div>
                      
                      <Button className="w-full bg-ngo-primary">Download ID Card</Button>
                      
                      <div className="pt-4 text-center text-sm text-gray-500">
                        <p>Having trouble downloading your ID card? <a href="#" className="text-ngo-primary hover:underline">Contact support</a></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Request New ID Tab */}
              <TabsContent value="request" className="mt-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-4">Request a New ID Card</h2>
                        <p className="text-gray-600">
                          Lost your ID card or need a replacement? Fill out the form below to request a new one.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" className="mt-1" />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="email-request">Email Address</Label>
                          <Input id="email-request" type="email" className="mt-1" />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" className="mt-1" />
                        </div>
                        
                        <div>
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" className="mt-1" />
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input id="city" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="state">State</Label>
                            <Input id="state" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="zip">Zip Code</Label>
                            <Input id="zip" className="mt-1" />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="reason">Reason for Request</Label>
                          <select id="reason" className="w-full mt-1 p-2 border border-gray-300 rounded">
                            <option value="">Select a reason</option>
                            <option value="lost">Lost ID Card</option>
                            <option value="damaged">Damaged ID Card</option>
                            <option value="change">Information Change</option>
                            <option value="new">New Member</option>
                          </select>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-ngo-primary">Submit Request</Button>
                      
                      <div className="pt-4 text-center text-sm text-gray-500">
                        <p>Please allow 3-5 business days for processing your request.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Verify ID Tab */}
              <TabsContent value="verify" className="mt-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-4">Verify ID Card</h2>
                        <p className="text-gray-600">
                          Verify the authenticity of a Kindred Hearts Foundation ID card by entering the ID number.
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="verify-id">ID Card Number</Label>
                        <Input id="verify-id" placeholder="Enter the ID card number to verify" className="mt-1" />
                      </div>
                      
                      <Button className="w-full bg-ngo-primary">Verify ID Card</Button>
                      
                      <div className="pt-4 text-center text-sm text-gray-500">
                        <p>For security purposes, verification will only confirm if the ID is valid or not.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Who needs a Kindred Hearts ID card?</h3>
                <p className="text-gray-700">
                  All members, volunteers, and staff of the Kindred Hearts Foundation should have an ID card for identification at events and activities.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">How long does it take to get a new ID card?</h3>
                <p className="text-gray-700">
                  Once your request is processed, it typically takes 3-5 business days for a new ID card to be issued and sent to you.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Is there a fee for replacing a lost ID card?</h3>
                <p className="text-gray-700">
                  There is no fee for your first replacement. Subsequent replacements may incur a small administrative fee of $5.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">How often do ID cards need to be renewed?</h3>
                <p className="text-gray-700">
                  ID cards are valid for two years from the date of issue. You'll receive a notification when it's time to renew your ID.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Can I use a digital version of my ID card?</h3>
                <p className="text-gray-700">
                  Yes, a digital version of your ID card is acceptable for most purposes. You can download it from the "Download ID" section above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need Further Assistance?</h2>
            <p className="text-gray-700 mb-6">
              Our support team is here to help with any questions about ID cards or membership services.
            </p>
            <Button>Contact Support</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IdCardPage;
