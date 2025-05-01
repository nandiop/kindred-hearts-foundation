
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from 'lucide-react';

const EventsPage = () => {
  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Agriculture Workshop",
      date: "June 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Community Center, 123 Main St",
      description: "Learn sustainable farming techniques with expert guidance and hands-on practice. Suitable for beginners and experienced gardeners alike.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    },
    {
      id: 2,
      title: "Education Empowerment Seminar",
      date: "June 22, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Public Library, 456 Knowledge Ave",
      description: "Discussion on strategies for improving rural education access and quality. Featuring speakers from education nonprofits and local schools.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    },
    {
      id: 3,
      title: "Annual Fundraising Gala",
      date: "July 5, 2025",
      time: "6:30 PM - 10:00 PM",
      location: "Grand Hotel, 789 Elegance Blvd",
      description: "Join us for an evening of celebration and giving back to the community. Dinner, entertainment, and silent auction included.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    },
    {
      id: 4,
      title: "Youth Leadership Workshop",
      date: "July 12, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Youth Center, 321 Future St",
      description: "A full-day workshop designed to develop leadership skills in young community members aged 14-21.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    },
    {
      id: 5,
      title: "Community Health Fair",
      date: "July 19, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Central Park, Downtown Area",
      description: "Free health screenings, wellness information, and healthy cooking demonstrations for community members of all ages.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-ngo-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
            <p className="text-xl">
              Join us at our upcoming events and be part of our mission to create positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-10">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 h-full min-h-[200px] md:min-h-0">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <h3 className="text-2xl font-bold mb-2 md:mb-0">{event.title}</h3>
                      <div className="bg-ngo-accent/20 text-ngo-secondary px-4 py-1 rounded-full text-sm font-medium inline-flex items-center self-start">
                        <Calendar size={16} className="mr-2" />
                        {event.date}
                      </div>
                    </div>
                    
                    <div className="mb-4 text-gray-700">
                      <p className="mb-2"><strong>Time:</strong> {event.time}</p>
                      <p><strong>Location:</strong> {event.location}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {event.description}
                    </p>
                    
                    <div className="flex space-x-4">
                      <Button>Register Now</Button>
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-ngo-primary/10 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Host an Event With Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            If you're interested in partnering with us for an event or would like us to participate in your community initiative, we'd love to hear from you.
          </p>
          <Button size="lg">Contact Our Events Team</Button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
