
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Donate, Info } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ngo-secondary to-ngo-primary text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Make a Difference <br />
                <span className="text-ngo-accent">In Someone's Life</span>
              </h1>
              <p className="text-lg mb-8 max-w-lg">
                Join our mission to empower communities through sustainable development, education, and skill-building initiatives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-ngo-accent text-ngo-dark hover:bg-ngo-accent/90">
                  <Link to="/donate">Donate Now</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                alt="Empowering Communities" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="bg-ngo-primary/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Users size={32} className="text-ngo-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community Building</h3>
                <p className="text-gray-600">
                  Strengthening community bonds through collaborative projects and initiatives
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="bg-ngo-primary/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Info size={32} className="text-ngo-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Skills Development</h3>
                <p className="text-gray-600">
                  Providing training and resources to develop essential skills for sustainable livelihoods
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="bg-ngo-primary/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Calendar size={32} className="text-ngo-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Education Programs</h3>
                <p className="text-gray-600">
                  Supporting access to quality education and learning opportunities for all
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="bg-ngo-primary/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Donate size={32} className="text-ngo-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainable Projects</h3>
                <p className="text-gray-600">
                  Implementing environmentally sustainable projects that benefit communities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
              <p className="text-lg mb-6 text-gray-700">
                Since our foundation in 2010, we've been dedicated to making a real difference in the lives of people through sustainable development initiatives.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="bg-ngo-primary text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                    50+
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Projects Completed</h3>
                    <p className="text-gray-600">Across multiple regions and communities</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-ngo-primary text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                    5K+
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">People Empowered</h3>
                    <p className="text-gray-600">Through skills development and education</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-ngo-primary text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                    20+
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Communities Supported</h3>
                    <p className="text-gray-600">With sustainable development initiatives</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-ngo-primary text-white hover:bg-ngo-primary/90">
                <Link to="/about">Learn More About Our Work</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                alt="Our impact" 
                className="rounded-lg shadow-xl z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-ngo-accent rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
            <Button variant="outline" className="mt-4 md:mt-0">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                  alt="Community Workshop" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-ngo-accent/20 text-ngo-secondary px-3 py-1 rounded-full text-sm font-medium">
                    Jun 15, 2025
                  </div>
                  <div className="text-gray-500 text-sm">10:00 AM - 2:00 PM</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Community Agriculture Workshop</h3>
                <p className="text-gray-600 mb-4">Learn sustainable farming techniques with expert guidance.</p>
                <Button variant="link" className="p-0 h-auto text-ngo-primary">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            
            {/* Event 2 */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                  alt="Education Seminar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-ngo-accent/20 text-ngo-secondary px-3 py-1 rounded-full text-sm font-medium">
                    Jun 22, 2025
                  </div>
                  <div className="text-gray-500 text-sm">3:00 PM - 6:00 PM</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Education Empowerment Seminar</h3>
                <p className="text-gray-600 mb-4">Strategies for improving rural education access and quality.</p>
                <Button variant="link" className="p-0 h-auto text-ngo-primary">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            
            {/* Event 3 */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                  alt="Fundraising Gala" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-ngo-accent/20 text-ngo-secondary px-3 py-1 rounded-full text-sm font-medium">
                    Jul 5, 2025
                  </div>
                  <div className="text-gray-500 text-sm">6:30 PM - 10:00 PM</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Annual Fundraising Gala</h3>
                <p className="text-gray-600 mb-4">Join us for an evening of celebration and giving back to the community.</p>
                <Button variant="link" className="p-0 h-auto text-ngo-primary">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-ngo-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your support can transform lives and create lasting positive change in communities. Join us in our mission to build a better world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-ngo-primary hover:bg-gray-100">
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/about">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="text-5xl text-ngo-accent font-serif mb-4">"</div>
                <p className="text-gray-700 mb-6">
                  The skills development program completely changed my life. I now run my own small business and can support my family.
                </p>
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-gray-500 text-sm">Program Participant</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="text-5xl text-ngo-accent font-serif mb-4">"</div>
                <p className="text-gray-700 mb-6">
                  Volunteering with Kindred Hearts has been incredibly rewarding. The impact they make in communities is truly inspirational.
                </p>
                <div>
                  <p className="font-bold">Michael Rodriguez</p>
                  <p className="text-gray-500 text-sm">Volunteer</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="text-5xl text-ngo-accent font-serif mb-4">"</div>
                <p className="text-gray-700 mb-6">
                  As a donor, I appreciate the transparency and commitment this foundation shows in every project they undertake.
                </p>
                <div>
                  <p className="font-bold">Emily Chen</p>
                  <p className="text-gray-500 text-sm">Regular Donor</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex items-center justify-center bg-white rounded-lg shadow-sm p-6 h-24">
                <div className="text-gray-400 font-semibold">Partner Logo</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
