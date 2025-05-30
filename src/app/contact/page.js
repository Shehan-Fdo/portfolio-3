"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - Replace this with your actual API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  // Contact information data - Easy to modify
  const contactInfo = [
    {
      icon: "/icons/mail.svg", // Make sure this path exists in your public folder
      title: "Email",
      details: "kavindufernando2006@gmail.com", // Change to your email
      link: "mailto:kavindufernando2006@gmail.com",
    },
    {
      icon: "/icons/phone.svg", // Make sure this path exists in your public folder
      title: "Phone",
      details: "+94 71 526 1667", // Change to your phone number
      link: "tel:+94715261667",
    },
    {
      icon: "/icons/location.svg", // Make sure this path exists in your public folder
      title: "Location",
      details: "Colombo, Sri Lanka", // Change to your location
      link: null,
    },
  ];

  // Social media links - Easy to modify
  const socialLinks = [
    {
      name: "GitHub",
      icon: "/icons/github.svg", // Make sure this path exists in your public folder
      url: "https://github.com/Shehan-Fdo/", // Change to your GitHub URL
      color: "hover:text-purple-400",
    },
    {
      name: "WhatsApp",
      icon: "/icons/whatsapp.svg", // Make sure this path exists in your public folder
      url: "https://wa.me/94715261667", // Change to your WhatsApp number
      color: "hover:text-green-400",
    },
    {
      name: "Facebook",
      icon: "/icons/facebook.svg", // Make sure this path exists in your public folder
      url: "https://web.facebook.com/shehan.kavindu.998281/", // Change to your Facebook URL
      color: "hover:text-blue-400",
    },
  ];

  // Services offered - Easy to modify
  const services = ["Web Development", "Mobile Apps", "UI/UX Design", "Consulting"];

  return (
    <div className="min-h-screen bg-[#222] text-white pt-6 sm:pt-0">
      {/* Main container with responsive padding */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section - Responsive text sizes */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Get In <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a friendly chat about web development.
            </p>
          </div>

          {/* Main Grid Layout - Single column on mobile, two columns on desktop */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form Section */}
            <div className="bg-[#222] border border-[#333] rounded-2xl p-6 sm:p-8 order-2 lg:order-1 max-h-[63vh]">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name and Email Row - Stack on mobile, side by side on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 bg-[#333] border border-[#444] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-200 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 bg-[#333] border border-[#444] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-200 text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 bg-[#333] border border-[#444] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-200 text-sm sm:text-base"
                    placeholder="Project Discussion"
                  />
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4} // Reduced rows for mobile
                    className="w-full px-3 sm:px-4 py-3 bg-[#333] border border-[#444] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-200 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-3 sm:p-4 rounded-xl text-center text-sm sm:text-base">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              {/* Contact Info Card */}
              <div className="bg-[#222] border border-[#333] rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#333] rounded-xl hover:bg-[#444] transition-colors duration-200">
                      <div className="flex-shrink-0">
                        <Image
                          src={info.icon}
                          alt={`${info.title} Icon`}
                          width={20} // Slightly smaller for mobile
                          height={20}
                          className="opacity-80 sm:w-6 sm:h-6" // Responsive size
                        />
                      </div>
                      <div className="min-w-0 flex-1"> {/* Prevent text overflow */}
                        <h3 className="font-semibold text-white text-sm sm:text-base">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm break-all" // break-all for long emails/numbers
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-400 text-xs sm:text-sm">{info.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-[#222] border border-[#333] rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Connect With Me</h2>
                
                {/* Social Links - Responsive spacing */}
                <div className="flex gap-4 sm:gap-6 justify-center sm:justify-start">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#333] rounded-xl hover:bg-[#444] transition-all duration-200 hover:scale-110"
                    >
                      <Image
                        src={social.icon}
                        alt={`${social.name} Icon`}
                        width={20} // Smaller for mobile
                        height={20}
                        className="group-hover:scale-110 transition-transform duration-200 sm:w-7 sm:h-7" // Responsive size
                      />
                    </a>
                  ))}
                </div>
                
                {/* Quick Response Info */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#333] rounded-xl">
                  <p className="text-gray-400 text-xs sm:text-sm">
                    <span className="text-orange-500 font-semibold">Quick Response:</span> I typically respond to emails within 24 hours. 
                    For urgent matters, feel free to reach out via WhatsApp.
                  </p>
                </div>
              </div>

              {/* Services Card */}
              <div className="bg-[#222] border border-[#333] rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Let's Work Together</h2>
                <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Whether you need a web application, mobile app, or just want to discuss an idea, 
                  I'd love to hear from you!
                </p>
                {/* Service Tags - Responsive wrapping */}
                <div className="flex flex-wrap gap-2">
                  {services.map((service, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-orange-500/20 text-orange-400 text-xs sm:text-sm rounded-full border border-orange-500/30"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}