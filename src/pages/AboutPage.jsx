
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-ngo-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Kindred Hearts Foundation</h1>
            <p className="text-xl mb-8">
              Empowering communities through sustainable development, education, and skill-building initiatives since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Kindred Hearts Foundation was established in 2010 with a vision to create sustainable change in communities facing socioeconomic challenges. What began as a small initiative by a group of passionate individuals has grown into an organization making significant impacts across multiple regions.
              </p>
              <p className="text-gray-700 mb-4">
                Our founders recognized that lasting change comes through empowerment, not just aid. This belief has shaped our approach to community development, focusing on building skills, providing education, and supporting sustainable initiatives.
              </p>
              <p className="text-gray-700">
                Over the years, we've expanded our programs to address the evolving needs of communities while staying true to our core mission of empowering people to build better futures for themselves.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                alt="Our story" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-ngo-accent rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
            <p className="text-lg text-gray-700">
              Guided by our core values, we work tirelessly to create positive change and build resilient communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-ngo-primary shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To empower communities through sustainable development initiatives, quality education, and skills training, enabling individuals to build better futures for themselves and their communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-ngo-accent shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  A world where all communities have the resources, knowledge, and opportunities to thrive, where social and economic barriers are overcome through collective effort and sustainable solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-ngo-primary/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-ngo-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Empowerment</h3>
                <p className="text-gray-600">
                  We believe in giving people the tools, knowledge, and opportunities to improve their own lives.
                </p>
              </CardContent>
            </Card>

            {/* Value 2 */}
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-ngo-primary/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-ngo-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  Our initiatives aim for long-term impact, considering environmental, social, and economic factors.
                </p>
              </CardContent>
            </Card>

            {/* Value 3 */}
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-ngo-primary/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-ngo-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We operate with transparency, accountability, and honesty in all our actions and decisions.
                </p>
              </CardContent>
            </Card>

            {/* Value 4 */}
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-ngo-primary/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-ngo-primary">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We value partnerships and believe that working together multiplies our positive impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                  alt="Sarah Williams" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Sarah Williams</h3>
                <p className="text-ngo-primary font-medium mb-3">Executive Director</p>
                <p className="text-gray-600 mb-4">
                  With over 15 years in nonprofit leadership, Sarah brings extensive experience in community development.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-ngo-primary font-medium mb-3">Programs Director</p>
                <p className="text-gray-600 mb-4">
                  Michael specializes in designing effective educational and skills development programs.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                  alt="Amina Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Amina Patel</h3>
                <p className="text-ngo-primary font-medium mb-3">Community Engagement</p>
                <p className="text-gray-600 mb-4">
                  Amina leads our community outreach efforts, building strong partnerships with local leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-ngo-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're interested in volunteering, donating, or partnering with us, there are many ways to get involved and make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-ngo-primary hover:bg-gray-100">
              <Link to="/donate">Support Our Work</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
