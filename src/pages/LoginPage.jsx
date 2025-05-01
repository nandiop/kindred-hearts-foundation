
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12">
      <div className="container-custom max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-ngo-secondary">Kindred Hearts Foundation</h1>
          <p className="text-gray-600 mt-2">Member & Volunteer Portal</p>
        </div>
        
        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <Tabs defaultValue="login" className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger 
                  value="login" 
                  className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger 
                  value="register" 
                  className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
                >
                  Register
                </TabsTrigger>
              </TabsList>
              
              {/* Login Tab */}
              <TabsContent value="login" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-xs text-ngo-primary hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                    <Input id="password" type="password" className="mt-1" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">Remember me</Label>
                  </div>
                  <Button className="w-full bg-ngo-primary">Login</Button>
                </div>
              </TabsContent>
              
              {/* Register Tab */}
              <TabsContent value="register" className="mt-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
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
                    <Label htmlFor="email-register">Email</Label>
                    <Input id="email-register" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="password-register">Password</Label>
                    <Input id="password-register" type="password" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" className="mt-1" />
                  </div>
                  <div className="flex items-top space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the <a href="#" className="text-ngo-primary hover:underline">Terms of Service</a> and <a href="#" className="text-ngo-primary hover:underline">Privacy Policy</a>
                    </Label>
                  </div>
                  <Button className="w-full bg-ngo-primary">Register</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Need help? <a href="#" className="text-ngo-primary hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
