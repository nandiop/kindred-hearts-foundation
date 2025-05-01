
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Sample gallery images with categories
  const galleryItems = [
    {
      id: 1,
      category: "events",
      title: "Community Workshop 2024",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      description: "Skills development workshop with community members"
    },
    {
      id: 2,
      category: "projects",
      title: "School Building Project",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      description: "Construction of new classrooms in rural area"
    },
    {
      id: 3,
      category: "people",
      title: "Volunteer Team",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      description: "Our amazing volunteers during the annual meet-up"
    },
    {
      id: 4,
      category: "events",
      title: "Annual Fundraising Gala",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      description: "Supporters gathered to raise funds for our initiatives"
    },
    {
      id: 5,
      category: "projects",
      title: "Agricultural Training",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      description: "Teaching sustainable farming techniques"
    },
    {
      id: 6,
      category: "people",
      title: "Community Leaders",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      description: "Meeting with local community representatives"
    },
    {
      id: 7,
      category: "events",
      title: "Youth Leadership Camp",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      description: "Developing leadership skills in young community members"
    },
    {
      id: 8,
      category: "projects",
      title: "Clean Water Initiative",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      description: "Installing water purification systems"
    },
    {
      id: 9,
      category: "people",
      title: "Program Participants",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      description: "Graduates from our skills development program"
    },
  ];

  // Filter gallery items based on active tab
  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-ngo-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl">
              A visual journey through our work, events, and the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container-custom">
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveTab("all")}
                className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="events" 
                onClick={() => setActiveTab("events")}
                className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
              >
                Events
              </TabsTrigger>
              <TabsTrigger 
                value="projects" 
                onClick={() => setActiveTab("projects")}
                className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger 
                value="people" 
                onClick={() => setActiveTab("people")}
                className="data-[state=active]:bg-ngo-primary data-[state=active]:text-white"
              >
                People
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group overflow-hidden rounded-lg shadow-lg cursor-pointer relative"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-200 mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
