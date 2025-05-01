
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DonorsPage = () => {
  // Sample donors data
  const corporateDonors = [
    { id: 1, name: "TechForward Solutions", tier: "platinum", logo: "https://img.freepik.com/free-vector/purple-abstract-geometrical-logo-3d_1043-55.jpg?t=st=1746120653~exp=1746124253~hmac=d463c56b277f168891be2e8ff6ad1e2bbb722a4ff5b71906b8e6ce20df437588&w=740" },
    { id: 2, name: "GreenLife Enterprises", tier: "platinum", logo: "https://img.freepik.com/free-vector/ecologic-company-logo_1071-27.jpg?t=st=1746120690~exp=1746124290~hmac=05aa7a07359a9e3ddc19983b7ce857fe3ab75161bc00e2ea5fcaecc1b6696a49&w=740" },
    { id: 3, name: "Summit Financial Group", tier: "gold", logo: "https://img.freepik.com/premium-vector/vector-beautiful-real-state-business-logo-design_750339-5003.jpg?w=740" },
    { id: 4, name: "EcoSmart Industries", tier: "gold", logo: "https://img.freepik.com/free-vector/eco-green-leaf-logo-negative-space-style_126523-780.jpg?t=st=1746120772~exp=1746124372~hmac=bd797717da1992d434d67e18500a2a1067f4f760ea98532e640436a6ae16899e&w=900" },
    { id: 5, name: "Bluestone Consulting", tier: "gold", logo: "https://img.freepik.com/free-vector/logo-branding-identity-corporate-vector-design_460848-9756.jpg?t=st=1746120824~exp=1746124424~hmac=64d023c7cdab2fb15a3c7d43d57c2c7195a71fc3c5d167e7a1fc18c011e644e0&w=740" },
    { id: 6, name: "Urban Development Corp", tier: "silver", logo: "https://img.freepik.com/premium-vector/minimalist-type-creative-business-logo-template_1283348-59249.jpg?w=740" },
    { id: 7, name: "Harmony Health Systems", tier: "silver", logo: "https://img.freepik.com/free-vector/health-care-logo-icon_125964-471.jpg?t=st=1746120874~exp=1746124474~hmac=f74e59cce8acac380c4407cfb04392f09cfe0ddaf793dc0bd2e93cb047179486&w=740" },
    { id: 8, name: "Pacific Northwest Partners", tier: "silver", logo: "https://img.freepik.com/free-vector/hand-drawn-beach-logo-template_23-2149402232.jpg?t=st=1746120896~exp=1746124496~hmac=8f1f30e7d9c9ac70e813284554ca86f02e57562a9c74c44a7d4db1f1bc4fa195&w=740" },
    { id: 9, name: "Riverside Manufacturing", tier: "bronze", logo: "https://img.freepik.com/free-vector/industry-logo_23-2147512323.jpg?t=st=1746120940~exp=1746124540~hmac=f43a7940cd7ec4becc423b2802fc5b98a7cff2fd4b6b93f529361808e8b6c4d0&w=740" },
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
          <Button size="lg" className="bg-white text-ngo-primary hover:bg-gray-100 p-4">
            Become a Donor Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DonorsPage;
