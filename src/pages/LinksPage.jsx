
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'lucide-react';

const LinksPage = () => {
  // Sample links data
  const resourceLinks = [
    {
      id: 1,
      title: "Government Resources",
      links: [
        { name: "Department of Agriculture", url: "#", description: "Information on agricultural programs and resources." },
        { name: "Small Business Administration", url: "#", description: "Resources for small business development and entrepreneurship." },
        { name: "Department of Education", url: "#", description: "Educational resources and program information." },
      ]
    },
    {
      id: 2,
      title: "Partner Organizations",
      links: [
        { name: "Global Community Alliance", url: "#", description: "International development and community support network." },
        { name: "Education First Initiative", url: "#", description: "Resources for educational advancement and literacy." },
        { name: "Green Earth Foundation", url: "#", description: "Environmental conservation and sustainability resources." },
        { name: "Health For All Network", url: "#", description: "Community health resources and information." }
      ]
    },
    {
      id: 3,
      title: "Research & Publications",
      links: [
        { name: "Community Development Journal", url: "#", description: "Academic research on community development approaches." },
        { name: "Sustainable Development Reports", url: "#", description: "Annual reports on global sustainable development progress." },
        { name: "Agricultural Innovation Database", url: "#", description: "Research on agricultural techniques and innovations." }
      ]
    },
    {
      id: 4,
      title: "Training & Education",
      links: [
        { name: "Online Learning Portal", url: "#", description: "Free courses on various skills and development topics." },
        { name: "Agricultural Training Resources", url: "#", description: "Materials for training in sustainable farming practices." },
        { name: "Leadership Development Program", url: "#", description: "Resources for community leadership training." },
        { name: "Financial Literacy Materials", url: "#", description: "Educational resources on financial management." }
      ]
    }
  ];
  
  const documentLinks = [
    {
      id: 1,
      title: "Forms & Applications",
      links: [
        { name: "Volunteer Application Form", url: "#", fileType: "PDF" },
        { name: "Program Participation Form", url: "#", fileType: "PDF" },
        { name: "Donation Receipt Template", url: "#", fileType: "DOCX" },
        { name: "Event Registration Form", url: "#", fileType: "PDF" }
      ]
    },
    {
      id: 2,
      title: "Reports & Publications",
      links: [
        { name: "Annual Report 2024", url: "#", fileType: "PDF" },
        { name: "Community Impact Study", url: "#", fileType: "PDF" },
        { name: "Program Evaluation Results", url: "#", fileType: "PDF" },
        { name: "Strategic Plan 2023-2026", url: "#", fileType: "PDF" }
      ]
    },
    {
      id: 3,
      title: "Guides & Handbooks",
      links: [
        { name: "Volunteer Handbook", url: "#", fileType: "PDF" },
        { name: "Community Garden Guide", url: "#", fileType: "PDF" },
        { name: "Event Planning Toolkit", url: "#", fileType: "ZIP" },
        { name: "Fundraising Best Practices", url: "#", fileType: "PDF" }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-ngo-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Important Links & Resources</h1>
            <p className="text-xl">
              Access valuable resources, documents, and partner organization information.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Resource Links</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {resourceLinks.map((category) => (
              <Card key={category.id} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.links.map((link, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                        <a 
                          href={link.url} 
                          className="flex items-start hover:text-ngo-primary transition-colors"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Link size={18} className="mt-1 mr-2 text-ngo-primary flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">{link.name}</h4>
                            <p className="text-sm text-gray-600">{link.description}</p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & Downloads */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Documents & Downloads</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {documentLinks.map((category) => (
              <Card key={category.id} className="border-none shadow-lg h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-3">
                    {category.links.map((link, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <a 
                          href={link.url} 
                          className="text-ngo-primary hover:underline"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                          {link.fileType}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-700 mb-8">
            Subscribe to our newsletter to receive regular updates on new resources, upcoming events, and important announcements.
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ngo-primary"
            />
            <button className="bg-ngo-primary text-white px-6 py-3 rounded-md hover:bg-ngo-primary/90 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Specific Resource?</h2>
          <p className="text-gray-700 mb-6">
            If you can't find what you're looking for, our team is happy to help you locate the right resources.
          </p>
          <button className="bg-ngo-secondary text-white px-6 py-3 rounded-md hover:bg-ngo-secondary/90 transition-colors">
            Contact Our Resource Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default LinksPage;
