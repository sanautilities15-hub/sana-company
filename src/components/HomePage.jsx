"use client"

import React from "react"
import { useState, useRef } from "react"
import {
  Building2,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  ShoppingCart,
  Truck,
  Shield,
  Award,
  Package,
  FileText,
  BookOpen,
  Box,
} from "lucide-react"
import emailjs from "emailjs-com"
import "./styles.css"

const products = [
  {
    id: 1,
    title: "Magazines",
    description: "Wide selection of current and back-issue magazines for retail, offices, and waiting areas.",
    image: "/public/mauricio-santos-P0-DUEOPU-w-unsplash.jpg",
    category: "Publications",
  },
  {
    id: 2,
    title: "Office Paper",
    description: "Premium quality office paper in various sizes and weights for all your printing needs.",
    image: "/public/carter-hightower-4GD9RphwnZA-unsplash.jpg",
    category: "Office Supplies",
  },
  {
    id: 3,
    title: "Notebooks",
    description: "Professional notebooks, journals, and writing pads for students and professionals.",
    image: "/public/stylite-yu-aKjAbP8DrMw-unsplash.jpg",
    category: "Stationery",
  },
  {
    id: 4,
    title: "Cardboard Boxes",
    description: "Durable cardboard boxes in various sizes for shipping, storage, and moving needs.",
    image: "/public/chuttersnap-fyaTq-fIlro-unsplash.jpg",
    category: "Packaging",
  },
  {
    id: 5,
    title: "Corrugated Sheets",
    description: "High-quality corrugated sheets for packaging, crafts, and industrial applications.",
    image: "/public/trina-power-go8lpCXQHuI-unsplash.jpg",
    category: "Packaging",
  },
  {
    id: 6,
    title: "Paper Cups",
    description: "Disposable paper cups for events, offices, and food service establishments.",
    image: "/public/archer-fu-jubCL2DZA9g-unsplash.jpg",
    category: "Food Service",
  },
  {
    id: 7,
    title: "Paper Plates",
    description: "Eco-friendly paper plates perfect for parties, events, and outdoor dining.",
    image: "/public/servet-photograph-HSWzgDRN1q0-unsplash.jpg",
    category: "Food Service",
  },
  {
    id: 8,
    title: "Napkins/Tissues",
    description: "Soft, absorbent napkins and tissues for restaurants, offices, and personal use.",
    image: "/public/diana-polekhina-AzkX_56p-KQ-unsplash.jpg",
    category: "Food Service",
  },
  {
    id: 9,
    title: "Greeting Cards",
    description: "Beautiful greeting cards for all occasions - birthdays, holidays, and special events.",
    image: "/public/ranurte-VPTSnznXtyQ-unsplash.jpg",
    category: "Stationery",
  },
  {
    id: 10,
    title: "Envelopes",
    description: "Professional envelopes in various sizes for business correspondence and mailing.",
    image: "/public/ranurte-VPTSnznXtyQ-unsplash.jpg",
    category: "Office Supplies",
  },
  {
    id: 11,
    title: "Flyers/Brochures",
    description: "High-quality printing paper for marketing materials, flyers, and promotional content.",
    image: "/public/david-emrich-uH03NpIt-JQ-unsplash.jpg",
    category: "Marketing",
  },
  {
    id: 12,
    title: "Posters",
    description: "Large format poster paper for advertising, presentations, and decorative displays.",
    image: "/public/jazmin-quaynor-CXjp1ycr5Vw-unsplash.jpg",
    category: "Marketing",
  },
  {
    id: 13,
    title: "Calendars",
    description: "Wall and desk calendars for planning and organization in offices and homes.",
    image: "/public/calendar.jpg",
    category: "Office Supplies",
  },
  {
    id: 14,
    title: "Paper Bags",
    description: "Eco-friendly paper bags for retail, grocery, and gift packaging needs.",
    image: "/public/kelly-sikkema-1Pgq9ZpIatI-unsplash.jpg",
    category: "Packaging",
  },
  {
    id: 15,
    title: "Wrapping Paper",
    description: "Decorative wrapping paper for gifts, holidays, and special occasions.",
    image: "/public/mockupbee-ghsa1586bVU-unsplash.jpg",
    category: "Gift Supplies",
  },
  {
    id: 16,
    title: "Packaging Paper",
    description: "Industrial packaging paper for protecting and wrapping products during shipping.",
    image: "/public/mockupbee-ghsa1586bVU-unsplash.jpg",
    category: "Packaging",
  },
  {
    id: 17,
    title: "File Folders",
    description: "Organizational file folders for document storage and office filing systems.",
    image: "/public/viktor-talashuk-05HLFQu8bFw-unsplash.jpg",
    category: "Office Supplies",
  },
  {
    id: 18,
    title: "Paperback Books",
    description: "Wide selection of paperback books for retail, libraries, and educational institutions.",
    image: "/public/john-salvino-DbMf1RtOloY-unsplash.jpg",
    category: "Publications",
  },
]

const features = [
  {
    icon: <ShoppingCart className="feature-icon" />,
    title: "Wide Product Range",
    description:
      "Comprehensive selection of paper products and stationery items for all your business and personal needs.",
  },
  {
    icon: <Truck className="feature-icon" />,
    title: "Fast Delivery",
    description: "Quick and reliable delivery services with real-time tracking and flexible scheduling options.",
  },
  {
    icon: <Shield className="feature-icon" />,
    title: "Quality Guaranteed",
    description: "Premium quality products with satisfaction guarantee and easy returns policy.",
  },
  {
    icon: <Award className="feature-icon" />,
    title: "Trusted Supplier",
    description: "Over 20 years of experience serving businesses, schools, and government organizations.",
  },
]

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const productsRef = useRef(null)
  const footerRef = useRef(null)

  const handleProductClick = (productTitle) => {
    setSelectedProduct(productTitle)
    setIsModalOpen(true)
  }

  const handleNavClick = (section) => {
    if (section === "products" && productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" })
    } else if (section === "about" || section === "contact") {
      footerRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_a2nvklq",
        "template_cf697f5",   
        e.target,
        "8YC_T_Hcp6ES1Izji"
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text)
          setShowSuccessPopup(true)
          setIsModalOpen(false)
          setFormData({ name: "", email: "", phone: "", message: "" })
          setTimeout(() => setShowSuccessPopup(false), 3000)
        },
        (error) => {
          console.log("Failed to send message:", error.text)
          alert("Failed to send message.")
        }
      )
  }

  const groupedProducts = products.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push(product)
      return acc
    },
    {},
  )

  return (
    <div className="main-container">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <div className="logo-icon">
                <Building2 className="icon" />
              </div>
              <div>
                <h1 className="logo-title">Sana Utilities</h1>
                <p className="logo-subtitle">Trusted Utility Solutions</p>
              </div>
            </div>
            <nav className="nav">
              <a href="#products" className="nav-link" onClick={() => handleNavClick("products")}>Products</a>
              <a href="#about" className="nav-link" onClick={() => handleNavClick("about")}>About</a>
              <a href="#contact" className="nav-link" onClick={() => handleNavClick("contact")}>Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">Your Trusted Paper Products Retailer</span>
            <h2 className="hero-title">
              Quality Paper Products
              <span className="hero-title-highlight"> For Every Need</span>
            </h2>
            <p className="hero-description">
              Your one-stop shop for premium paper products, office supplies, and packaging materials. Serving
              businesses, schools, and organizations with reliable quality and fast delivery.
            </p>
            <div className="hero-buttons">
              <button href="#products" onClick={()=>handleNavClick("products")} className="btn-shop-now">
                Shop Now
                <ArrowRight className="btn-icon" />
              </button>
              <button href="#products" onClick={()=>handleNavClick("products")} className="btn-catalog">
                View Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-title">
            <h3 className="section-heading">Why Choose Sana Utilities</h3>
            <p className="section-description">
              Your reliable partner for all paper products and office supplies
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="products" ref={productsRef}>
        <div className="container">
          <div className="section-title">
            <h3 className="section-heading">Our Product Range</h3>
            <p className="section-description">
              Comprehensive selection of quality paper products for all your needs
            </p>
          </div>

          {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
            <div key={category} className="category-section">
              <div className="category-header">
                <div className="category-icon">
                  {category === "Office Supplies" && <FileText className="category-icon-img" />}
                  {category === "Publications" && <BookOpen className="category-icon-img" />}
                  {category === "Packaging" && <Box className="category-icon-img" />}
                  {category === "Stationery" && <Package className="category-icon-img" />}
                  {category === "Food Service" && <ShoppingCart className="category-icon-img" />}
                  {category === "Marketing" && <FileText className="category-icon-img" />}
                  {category === "Gift Supplies" && <Package className="category-icon-img" />}
                </div>
                <h4 className="category-title">{category}</h4>
              </div>

              <div className="products-grid">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="product-card"
                    onClick={() => handleProductClick(product.title)}
                  >
                    <div className="product-image-wrapper">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="product-image"
                      />
                    </div>
                    <div className="product-content">
                      <h5 className="product-title">{product.title}</h5>
                      <p className="product-description">{product.description}</p>
                      <div className="product-action">
                        Get Quote <ArrowRight className="action-icon" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container cta-content">
          <h3 className="cta-title">Ready to Stock Up on Quality Paper Products?</h3>
          <p className="cta-description">
            Join thousands of businesses who trust Sana Utilities for their paper product needs
          </p>
          <button onclick={() => handleProductClick("Contact Us")} className="btn-contact">
            Contact Us Today
            <ArrowRight className="btn-icon" />
          </button>
        </div>
      </section>

      <footer className="footer" ref={footerRef}>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <div className="logo-icon">
                  <Building2 className="icon" />
                </div>
                <div>
                  <h4 className="footer-logo-title">Sana Utilities</h4>
                  <p className="footer-logo-subtitle">Trusted Utility Solutions</p>
                </div>
              </div>
              <p className="footer-description">
                Leading retailer of quality paper products and office supplies for businesses and organizations.
              </p>
            </div>
            <div>
              <h5 className="footer-heading">Products</h5>
              <ul className="footer-list">
                <li>Office Supplies</li>
                <li>Packaging Materials</li>
                <li>Stationery Items</li>
                <li>Food Service Products</li>
              </ul>
            </div>
            <div>
              <h5 className="footer-heading">Company</h5>
              <ul className="footer-list">
                <li>About Us</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h5 className="footer-heading">Contact Info</h5>
              <div className="footer-contact">
                <p>No:2,Krishnappa Mudhaliyar Street</p>
                <p>Pursaiwalkam,Chennai-600 084</p>
                <p>Ph.no-8122240573</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Sana Utilities. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className={`modal ${isModalOpen ? 'modal-open' : 'modal-closed'}`} onClick={() => setIsModalOpen(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">
              <MessageSquare className="modal-icon" />
              Request Quote
            </h4>
            <p className="modal-description">
              Get a personalized quote for <strong>{selectedProduct}</strong> and bulk pricing information.
            </p>
          </div>
          <form onSubmit={sendEmail} className="modal-form">
            <input type="hidden" name="product" value={selectedProduct} />
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your requirements, quantities needed, delivery preferences..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="form-textarea"
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-submit">
                <CheckCircle className="btn-icon" />
                Send Enquiry
              </button>
              <button type="button" className="btn-cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      {showSuccessPopup && (
        <div className="success-popup">
          <div className="success-popup-content">
            <CheckCircle className="success-icon" />
            <h3 className="success-title">Enquiry Sent Successfully!</h3>
            <p className="success-message">
              Thank you for your enquiry about {selectedProduct}. We'll get back to you soon!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}