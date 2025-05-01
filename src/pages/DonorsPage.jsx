
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DonorsPage = () => {
  // Sample donors data
  const corporateDonors = [
    { id: 1, name: "TechForward Solutions", tier: "platinum", logo: "/placeholder.svg" },
    { id: 2, name: "GreenLife Enterprises", tier: "platinum", logo: "/placeholder.svg" },
    { id: 3, name: "Summit Financial Group", tier: "gold", logo: "/placeholder.svg" },
    { id: 4, name: "EcoSmart Industries", tier: "gold", logo: "/placeholder.svg" },
    { id: 5, name: "Bluestone Consulting", tier: "gold", logo: "/placeholder.svg" },
    { id: 6, name: "Urban Development Corp", tier: "silver", logo: "/placeholder.svg" },
    { id: 7, name: "Harmony Health Systems", tier: "silver", logo: "/placeholder.svg" },
    { id: 8, name: "Pacific Northwest Partners", tier: "silver", logo: "/placeholder.svg" },
    { id: 9, name: "Riverside Manufacturing", tier: "bronze", logo: "/placeholder.svg" },
    { id: 10, name: "Sunrise Bakery Chain", tier: "bronze", logo: "/placeholder.svg" },
    { id: 11, name: "Metro Transport Company", tier: "bronze", logo: "/placeholder.svg" },
    { id: 12, name: "Evergreen Landscaping", tier: "bronze", logo: "/placeholder.svg" },
  ];
  
  const individualDonors = [
    { id: 1, name: "John & Jane Smith", tier: "major" },
    { id: 2, name: "Robert Johnson", tier: "major" },
    { id: 3, name: "Emily Chen", tier: "major" },
    { id: 4, name: "Michael & Lisa Williams", tier: "sustaining" },
    { id: 5, name: "Sarah Thompson", tier: "sustaining" },
    { id: 6, name: "David Rodriguez", tier: "sustaining" },
    { id: 7, name: "Aisha Patel", tier: "sustaining" },
    { id: 8, name: "James & Emma Wilson", tier: "supporting" },
    { id: 9, name: "Carlos Mendez", tier: "supporting" },
    { id: 10, name: "Grace Kim", tier: "supporting" },
    { id: 11, name: "Daniel Brown", tier: "supporting" },
    { id: 12, name: "Olivia Martinez", tier: "supporting" },
    { id: 13, name: "Anonymous", tier: "supporting" },
    { id: 14, name: "Anonymous", tier: "supporting" },
  ];
  
  const foundationDonors = [
    { id: 1, name: "The Horizon Foundation", tier: "principal" },
    { id: 2, name: "Global Community Trust", tier: "principal" },
    { id: 3, name: "Bright Future Foundation", tier: "major" },
    { id: 4, name: "Evergreen Family Fund", tier: "major" },
    { id: 5, name: "The Richardson Foundation", tier: "supporting" },
    { id: 6, name: "Thompson Family Trust", tier: "supporting" },
    { id: 7, name: "New Horizons Grant Makers", tier: "supporting" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-ngo-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Generous Donors</h1>
            <p className="text-xl">
              We are grateful for the support of individuals, foundations, and corporations who make our work possible.
            </p>
          </div>
        </div>
      </section>

      {/* Donor Recognition */}
      <section className="py-16">
        <div className="container-custom">
          <Tabs defaultValue="corporate" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger 
                value="corporate" 
                className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
              >
                Corporate
              </TabsTrigger>
              <TabsTrigger 
                value="individual" 
                className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
              >
                Individual
              </TabsTrigger>
              <TabsTrigger 
                value="foundation" 
                className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
              >
                Foundations
              </TabsTrigger>
            </TabsList>
            
            {/* Corporate Donors Tab */}
            <TabsContent value="corporate" className="mt-10">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-12">Corporate Donors</h2>
                
                {/* Platinum Tier */}
                <div className="mb-16">
                  <h3 className="text-xl font-semibold mb-6 text-center">Platinum Sponsors</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {corporateDonors
                      .filter(donor => donor.tier === "platinum")
                      .map(donor => (
                        <Card key={donor.id} className="border-none shadow-lg">
                          <CardContent className="p-6 flex items-center space-x-6">
                            <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                              <img src={donor.logo} alt={donor.name} className="max-h-16" />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold">{donor.name}</h4>
                              <p className="text-ngo-primary">Platinum Sponsor</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </div>
                
                {/* Gold Tier */}
                <div className="mb-16">
                  <h3 className="text-xl font-semibold mb-6 text-center">Gold Sponsors</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {corporateDonors
                      .filter(donor => donor.tier === "gold")
                      .map(donor => (
                        <Card key={donor.id} className="border-none shadow-md">
                          <CardContent className="p-4 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                              <img src={donor.logo} alt={donor.name} className="max-h-10" />
                            </div>
                            <h4 className="font-bold">{donor.name}</h4>
                            <p className="text-sm text-ngo-primary">Gold Sponsor</p>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </div>
                
                {/* Silver Tier */}
                <div className="mb-16">
                  <h3 className="text-xl font-semibold mb-6 text-center">Silver Sponsors</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {corporateDonors
                      .filter(donor => donor.tier === "silver")
                      .map(donor => (
                        <Card key={donor.id} className="border-none shadow-md">
                          <CardContent className="p-4 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                              <img src={donor.logo} alt={donor.name} className="max-h-10" />
                            </div>
                            <h4 className="font-bold">{donor.name}</h4>
                            <p className="text-sm text-ngo-primary">Silver Sponsor</p>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </div>
                
                {/* Bronze Tier */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-center">Bronze Sponsors</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {corporateDonors
                      .filter(donor => donor.tier === "bronze")
                      .map(donor => (
                        <Card key={donor.id} className="border-none shadow-sm">
                          <CardContent className="p-3 text-center">
                            <h4 className="font-medium">{donor.name}</h4>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Individual Donors Tab */}
            <TabsContent value="individual" className="mt-10">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-12">Individual Donors</h2>
                
                {/* Major Donors */}
                <div className="mb-16">
                  <h3 className="text-xl font-semibold mb-6 text-center">Major Donors</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {individualDonors
                      .filter(donor => donor.tier === "major")
                      .map(donor => (
                        <Card key={donor.id} className="border-none shadow-md">
                          <CardContent className="p-4 text-center">
                            <h4 className="font-bold">{donor.name}</h4>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </div>
                
                {/* Sustaining Donors */}
                <div className="mb-16">
                  <h3 className="text-xl font-semibold mb-6 text-center">Sustaining Donors</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {individualDonors
                      .filter(donor => donor.tier === "sustaining")
                      .map(donor => (
                        <Card key={donor.id} className="border-none shadow-sm">
                          <CardContent className="p-3 text-center">
                            <h4 className="font-medium">{donor.name}</h4>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </div>
                
                {/* Supporting Donors */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-center">Supporting Donors</h3>
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {individualDonors
                          .filter(donor => donor.tier === "supporting")
                          .map(donor => (
                            <div key={donor.id} className="text-center">
                              <p className="font-medium">{donor.name}</p>
                            </div>
                          ))
                        }
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Foundation Donors Tab */}
            <TabsContent value="foundation" className="mt-10">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-12">Foundation Support</h2>
                
                {/* Principal Foundations */}
                <div className="mb-16">
                  <h3 className="text-xl font-semibold mb-6 text-center">Principal Foundation Partners</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {foundationDonors
                      .filter(donor => donor.tier === "principal")
                      .map(donor => (
                        <Card key={donor.id} className="border-none shadow-lg">
                          <CardContent className="p-6 text-center">
                            <h4 className="text-xl font-bold">{donor.name}</h4>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </div>
                
                {/* Major Foundations */}
                <div className="mb-16">
                  <h3 className="text-xl font-semibold mb-6 text-center">Major Foundation Partners</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {foundationDonors
                      .filter(donor => donor.tier === "major")
                      .map(donor => (
                        <Card key={donor.id} className="border-none shadow-md">
                          <CardContent className="p-4 text-center">
                            <h4 className="font-bold">{donor.name}</h4>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </div>
                
                {/* Supporting Foundations */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-center">Supporting Foundation Partners</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {foundationDonors
                      .filter(donor => donor.tier === "supporting")
                      .map(donor => (
                        <Card key={donor.id} className="border-none shadow-sm">
                          <CardContent className="p-3 text-center">
                            <h4 className="font-medium">{donor.name}</h4>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-ngo-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Donor Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your support enables us to continue our work in communities. Join our generous donors in making a difference.
          </p>
          <Button size="lg" className="bg-white text-ngo-primary hover:bg-gray-100">
            Become a Donor Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DonorsPage;
